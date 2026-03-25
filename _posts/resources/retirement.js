//Retirement Class used in the finance-calculator

class RetirementCalculator {
  constructor(opts = {}) {
    // Rates & assumptions: ACCEPTED AS PERCENTAGES (e.g., 7.2 means 7.2%)
    this.taxIncome = opts.taxIncome ?? 27;
    this.taxCapitalGains = opts.taxCapitalGains ?? 0;
    this.charityRate = opts.charityRate ?? 11;
    this.returnWhileSaving = opts.returnWhileSaving ?? 7.2;
    this.returnInRetirement = opts.returnInRetirement ?? 4.0;
    this.inflation = opts.inflation ?? 2.3;
    this.postRetirementExpenseIncrease = opts.postRetirementExpenseIncrease ?? 0.0;

    // Ages
    this.currentAge = opts.currentAge ?? 35;
    this.retirementAge = opts.retirementAge ?? 65;
    this.expectedLifespan = opts.expectedLifespan ?? 95;

    // Financial state
    this.currentSavings = opts.currentSavings ?? 0;

    // Income inputs
    this.income = {
      annualSalary: opts.annualSalary ?? null,
      monthlyTakeHome: opts.monthlyTakeHome ?? null,
      hourlyWage: opts.hourlyWage ?? null,
      weeklyHours: opts.weeklyHours ?? 40
    };

    // Expenses inputs
    this.expenses = {
      monthlySavings: opts.monthlySavings ?? null,
      monthlyExpenses: opts.monthlyExpenses ?? null,
      percentSavingsOfTakeHome: opts.percentSavingsOfTakeHome ?? null // if provided as percent (e.g., 10 for 10%), class will treat as fraction if >1
    };

    // Behavioral options
    this.fixedHorizonYears = opts.fixedHorizonYears ?? (this.expectedLifespan - this.retirementAge);
    this.retirementHorizon = this.fixedHorizonYears;
    this.withdrawalMethod = opts.withdrawalMethod ?? 'both';
  }

  // Convert percent inputs to decimals for internal use
  pct(v) { return (v == null) ? null : v / 100; }
  get taxIncomeDec() { return this.pct(this.taxIncome); }
  get taxCapitalGainsDec() { return this.pct(this.taxCapitalGains); }
  get charityRateDec() { return this.pct(this.charityRate); }
  get returnWhileSavingDec() { return this.pct(this.returnWhileSaving); }
  get returnInRetirementDec() { return this.pct(this.returnInRetirement); }
  get inflationDec() { return this.pct(this.inflation); }
  get postRetirementExpenseIncreaseDec() { return this.pct(this.postRetirementExpenseIncrease); }

  // Derived time values
  get yearsToRetirement() { return Math.max(0, this.retirementAge - this.currentAge); }
  get yearsInRetirement() { return Math.max(0, this.expectedLifespan - this.retirementAge); }

  // --- Helpers ---
  _annualizeIncome() {
    let grossAnnual = 0;
    if (this.income.annualSalary != null) {
      grossAnnual = this.income.annualSalary;
    } else if (this.income.monthlyTakeHome != null) {
      const factor = Math.max(1 - (this.taxIncomeDec ?? 0) - (this.charityRateDec ?? 0), 0.000001);
      grossAnnual = (this.income.monthlyTakeHome * 12) / factor;
    } else if (this.income.hourlyWage != null) {
      grossAnnual = this.income.hourlyWage * (this.income.weeklyHours ?? 40) * 52;
    } else {
      grossAnnual = 0;
    }
    const netAnnual = grossAnnual * Math.max(1 - (this.taxIncomeDec ?? 0) - (this.charityRateDec ?? 0), 0);
    return { grossAnnual, netAnnual };
  }

  _monthlyFromExpensesSpec() {
    const inc = this._annualizeIncome();
    const takeHomeMonthly = inc.netAnnual / 12;
    let monthlySavings = 0, monthlyExpenses = 0;
    if (this.expenses.monthlySavings != null) {
      monthlySavings = this.expenses.monthlySavings;
      monthlyExpenses = Math.max(0, takeHomeMonthly - monthlySavings);
    } else if (this.expenses.monthlyExpenses != null) {
      monthlyExpenses = this.expenses.monthlyExpenses;
      monthlySavings = Math.max(0, takeHomeMonthly - monthlyExpenses);
    } else if (this.expenses.percentSavingsOfTakeHome != null) {
      // if user provided percent (e.g., 10), normalize to fraction
      const pct = this.expenses.percentSavingsOfTakeHome > 1 ? this.pct(this.expenses.percentSavingsOfTakeHome) : this.expenses.percentSavingsOfTakeHome;
      monthlySavings = takeHomeMonthly * pct;
      monthlyExpenses = Math.max(0, takeHomeMonthly - monthlySavings);
    } else {
      monthlySavings = 0;
      monthlyExpenses = takeHomeMonthly;
    }
    return { monthlySavings, monthlyExpenses, takeHomeMonthly };
  }

  _realReturnNominal(rNominal) {
    const r = rNominal; // rNominal should be decimal when passed in
    const inf = this.inflationDec ?? 0;
    return (1 + r) / (1 + inf) - 1;
  }

  _fv(pv, r, n) { return pv * Math.pow(1 + r, n); }

  _fvMonthly(contribMonthly, rAnnual, years) {
    if (contribMonthly <= 0) return 0;
    const rMonthly = rAnnual / 12;
    const months = Math.round(years * 12);
    return contribMonthly * ((Math.pow(1 + rMonthly, months) - 1) / rMonthly);
  }

  _perpetuityRequired(nominalAnnualExpenseAtRetirement, realRetReturn) {
    if (realRetReturn <= 0) return Infinity;
    return nominalAnnualExpenseAtRetirement / realRetReturn;
  }

  _fixedHorizonWithdrawalFromPrincipal(principalAtRetirement, rNominal, nYears) {
    if (nYears <= 0) return 0;
    if (rNominal === 0) return principalAtRetirement / nYears;
    const factor = rNominal / (1 - Math.pow(1 + rNominal, -nYears));
    return principalAtRetirement * factor;
  }

  _fixedHorizonRequiredPrincipal(nominalAnnualWithdrawal, rNominal, nYears) {
    if (nYears <= 0) return Infinity;
    if (rNominal === 0) return nominalAnnualWithdrawal * nYears;
    const denom = rNominal / (1 - Math.pow(1 + rNominal, -nYears));
    return nominalAnnualWithdrawal / denom;
  }

  // --- Core methods (use decimal getters when calling helpers) ---
  update(inputs = {}) { Object.assign(this, inputs); }

  summary() {
    const inc = this._annualizeIncome();
    const exp = this._monthlyFromExpensesSpec();
    return {
      assumptions: {
        taxIncomePct: this.taxIncome,
        taxCapitalGainsPct: this.taxCapitalGains,
        charityRatePct: this.charityRate,
        returnWhileSavingPct: this.returnWhileSaving,
        returnInRetirementPct: this.returnInRetirement,
        inflationPct: this.inflation,
        postRetirementExpenseIncreasePct: this.postRetirementExpenseIncrease,
        withdrawalMethod: this.withdrawalMethod
      },
      inputs: {
        currentAge: this.currentAge,
        retirementAge: this.retirementAge,
        expectedLifespan: this.expectedLifespan,
        yearsToRetirement: this.yearsToRetirement,
        yearsInRetirement: this.yearsInRetirement,
        currentSavings: this.currentSavings,
        grossAnnualIncome: inc.grossAnnual,
        netAnnualIncome: inc.netAnnual,
        monthlyTakeHome: inc.netAnnual / 12,
        monthlySavings: exp.monthlySavings,
        monthlyExpenses: exp.monthlyExpenses
      }
    };
  }

  requiredNestEgg(annualRetirementExpensesPresent, options = {}) {
    const years = this.yearsToRetirement;
    const postRetPct = this.postRetirementExpenseIncreaseDec ?? 0;
    const expenseAtRetirementNominal = annualRetirementExpensesPresent * Math.pow(1 + this.inflationDec, years) * (1 + postRetPct);

    const realRetReturn = this._realReturnNominal(this.returnInRetirementDec);
    const requiredPerpetuity = this._perpetuityRequired(expenseAtRetirementNominal, realRetReturn);

    const nYears = this.yearsInRetirement;
    const requiredFixedHorizon = this._fixedHorizonRequiredPrincipal(expenseAtRetirementNominal, this.returnInRetirementDec, nYears);

    return {
      expenseAtRetirementNominal,
      perpetuity: {
        realRetReturn,
        requiredNestEggAtRetirement: requiredPerpetuity
      },
      fixedHorizon: {
        horizonYears: nYears,
        nominalReturn: this.returnInRetirementDec,
        requiredNestEggAtRetirement: requiredFixedHorizon
      }
    };
  }

  yearsToReachNestEgg(targetAnnualRetirementExpensesPresent) {
    const maxYears = 100;
    for (let n = 0; n <= maxYears; n++) {
      const expenseAtRet = targetAnnualRetirementExpensesPresent * Math.pow(1 + this.inflationDec, n) * (1 + (this.postRetirementExpenseIncreaseDec ?? 0));
      const realRetReturn = this._realReturnNominal(this.returnInRetirementDec);
      const requiredPerp = (realRetReturn <= 0) ? Infinity : expenseAtRet / realRetReturn;
      const fvSavings = this._fv(this.currentSavings, this.returnWhileSavingDec, n);
      const fvContrib = this._fvMonthly(this._monthlyFromExpensesSpec().monthlySavings, this.returnWhileSavingDec, n);
      if (fvSavings + fvContrib >= requiredPerp) return n;
    }
    return null;
  }

  projectToRetirement() {
    const years = Math.max(0, Math.round(this.yearsToRetirement));
    const timeline = [];
    let balance = this.currentSavings;
    const monthly = this._monthlyFromExpensesSpec();
    for (let y = 0; y <= years; y++) {
      const entry = { year: y, savingsStart: balance };
      if (y === years) {
        entry.contributionAnnual = 0;
        entry.return = 0;
        entry.savingsEnd = balance;
      } else {
        entry.contributionAnnual = monthly.monthlySavings * 12;
        const growth = balance * this.returnWhileSavingDec;
        balance = balance + growth + entry.contributionAnnual;
        entry.return = growth;
        entry.savingsEnd = balance;
      }
      timeline.push(entry);
    }
    return timeline;
  }

  projectInRetirement(options = {}) {
    const horizon = options.horizon ?? this.yearsInRetirement;
    const fvStarting = this._fv(this.currentSavings, this.returnWhileSavingDec, this.yearsToRetirement)
      + this._fvMonthly(this._monthlyFromExpensesSpec().monthlySavings, this.returnWhileSavingDec, this.yearsToRetirement);

    const monthly = this._monthlyFromExpensesSpec();
    const annualPresentExpenses = monthly.monthlyExpenses * 12;
    const annualNominalAtRet = annualPresentExpenses * Math.pow(1 + this.inflationDec, this.yearsToRetirement) * (1 + (this.postRetirementExpenseIncreaseDec ?? 0));

    const realRetReturn = this._realReturnNominal(this.returnInRetirementDec);
    const perpetuityNominalWithdrawal = realRetReturn > 0 ? fvStarting * realRetReturn : 0;
    const fixedHorizonNominalWithdrawal = this._fixedHorizonWithdrawalFromPrincipal(fvStarting, this.returnInRetirementDec, horizon);

    const timelineFixed = [];
    let balanceFH = fvStarting;
    let withdrawalNominalFH = fixedHorizonNominalWithdrawal;
    for (let y = 0; y <= horizon; y++) {
      const entry = { year: y, balanceStart: balanceFH, withdrawalNominal: withdrawalNominalFH };
      entry.balanceAfterWithdrawal = balanceFH - entry.withdrawalNominal;
      entry.return = entry.balanceAfterWithdrawal * this.returnInRetirementDec;
      entry.balanceEnd = entry.balanceAfterWithdrawal + entry.return;
      timelineFixed.push(entry);
      balanceFH = entry.balanceEnd;
      if (balanceFH <= 0) break;
    }

    const timelinePerp = [];
    let balanceP = fvStarting;
    let withdrawalNominalP = perpetuityNominalWithdrawal;
    for (let y = 0; y <= horizon; y++) {
      const entry = { year: y, balanceStart: balanceP, withdrawalNominal: withdrawalNominalP };
      entry.balanceAfterWithdrawal = balanceP - entry.withdrawalNominal;
      entry.return = entry.balanceAfterWithdrawal * this.returnInRetirementDec;
      entry.balanceEnd = entry.balanceAfterWithdrawal + entry.return;
      timelinePerp.push(entry);
      balanceP = entry.balanceEnd;
      if (balanceP <= 0) break;
    }

    return {
      startingPrincipalAtRetirement: fvStarting,
      annualNominalExpenseAtRetirementFromCurrentExpenses: annualNominalAtRet,
      perpetuity: {
        nominalWithdrawalAtRetirement: perpetuityNominalWithdrawal,
        realRetReturn,
        timeline: timelinePerp
      },
      fixedHorizon: {
        horizonYears: horizon,
        nominalWithdrawalAtRetirement: fixedHorizonNominalWithdrawal,
        timeline: timelineFixed
      }
    };
  }

  maxSustainableRetirementExpensesGivenSavings() {
    const fvAtRet = this._fv(this.currentSavings, this.returnWhileSavingDec, this.yearsToRetirement)
      + this._fvMonthly(this._monthlyFromExpensesSpec().monthlySavings, this.returnWhileSavingDec, this.yearsToRetirement);
    const realRetReturn = this._realReturnNominal(this.returnInRetirementDec);
    if (realRetReturn <= 0) return { sustainablePresentAnnualExpense: 0, note: 'non-positive real return' };
    const maxExpenseAtRetirementNominal = fvAtRet * realRetReturn;
    const presentValueOfExpense = maxExpenseAtRetirementNominal / Math.pow(1 + this.inflationDec, this.yearsToRetirement);
    const presentExpenseBeforeBump = presentValueOfExpense / (1 + (this.postRetirementExpenseIncreaseDec ?? 0));
    const fixedHorizonNominalWithdrawal = this._fixedHorizonWithdrawalFromPrincipal(fvAtRet, this.returnInRetirementDec, this.yearsInRetirement);
    const presentFixed = fixedHorizonNominalWithdrawal / Math.pow(1 + this.inflationDec, this.yearsToRetirement) / (1 + (this.postRetirementExpenseIncreaseDec ?? 0));
    return {
      fvAtRet,
      realRetReturn,
      perpetuity: { maxExpenseAtRetirementNominal, sustainablePresentAnnualExpense: presentExpenseBeforeBump },
      fixedHorizon: { nominalWithdrawalAtRetirement: fixedHorizonNominalWithdrawal, sustainablePresentAnnualExpense: presentFixed }
    };
  }

  monthlyPlanGivenYearsAndIncome() {
    const inc = this._annualizeIncome();
    const monthlyTakeHome = inc.netAnnual / 12;
    const monthlySpec = this._monthlyFromExpensesSpec();
    const fvAtRet = this._fv(this.currentSavings, this.returnWhileSavingDec, this.yearsToRetirement)
      + this._fvMonthly(monthlySpec.monthlySavings, this.returnWhileSavingDec, this.yearsToRetirement);

    const realRetReturn = this._realReturnNominal(this.returnInRetirementDec);
    const maxExpenseAtRetNominalPerp = fvAtRet * realRetReturn;
    const presentMaxExpensePerp = maxExpenseAtRetNominalPerp / Math.pow(1 + this.inflationDec, this.yearsToRetirement) / (1 + (this.postRetirementExpenseIncreaseDec ?? 0));
    const maxMonthlyExpensesNowPerp = presentMaxExpensePerp / 12;

    const fixedNominalWithdrawal = this._fixedHorizonWithdrawalFromPrincipal(fvAtRet, this.returnInRetirementDec, this.yearsInRetirement);
    const presentFixed = fixedNominalWithdrawal / Math.pow(1 + this.inflationDec, this.yearsToRetirement) / (1 + (this.postRetirementExpenseIncreaseDec ?? 0));
    const maxMonthlyExpensesNowFixed = presentFixed / 12;

    return {
      monthlyTakeHome,
      monthlySavings: monthlySpec.monthlySavings,
      projectedNestEggAtRetirement: fvAtRet,
      perpetuity: { maxMonthlyExpensesNow: maxMonthlyExpensesNowPerp },
      fixedHorizon: { maxMonthlyExpensesNow: maxMonthlyExpensesNowFixed }
    };
  }

  exportCSV(timeline, fields = null) {
    if (!Array.isArray(timeline) || timeline.length === 0) return '';
    const keys = fields ?? Object.keys(timeline[0]);
    const rows = [keys.join(',')];
    for (const r of timeline) {
      rows.push(keys.map(k => {
        const v = r[k];
        if (v === null || v === undefined) return '';
        if (typeof v === 'number') return v.toFixed?.(2) ?? String(v);
        return String(v).replace(/,/g, '');
      }).join(','));
    }
    return rows.join('\n');
  }
}
