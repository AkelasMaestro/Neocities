---
title: Finance Calculator
layout: post 
categories: projects
date: 2026-03-23
---

My notes and progress on the finance calculator project.

### Purpose

I often day dream of living frugally, saving as much as possible, and retiring early. Being the engineer that I am, these day dreams often include numbers. The thought process usually goes something like, "If I earned this much in a year, then I would take home X amount each month. If I only spend Y, then I can save Z and I'd only need XX amount in a nest egg to retire." As you might imagine, there are a lot of variables that go into the calculations. So far this has turned into a lot of me jumping between various online calculators trying different scenarios. This project is meant to put all those separate calculators into one web app so I can day dream faster.

This will also be an opportunity to branch into using JavaScript in this otherwise very basic website. Yes, the calculator will be nice once it's done, but I'm also looking forward to using it as a learning opportunity.

I tried using AI to make the calculator, but it ended up making more of a mess than I cared for. It proved it can work though. I may be able to use snippets of the AI generated code and put it into helper functions.

### Overall Design

- Inputs will be in displayed in one or two columns, depending on screen width.
- Default values will be set to whatever I use the most to speed up data entry.
- Assuming running the math doesn't take too long, I want to automatically calculate the results every time a change is made so I don't have to push a button repeatedly.
- I want to be able to put in potentially contradictory values and for the results to give me a series of if-then situations.
- Income can be inputted in three ways: annual salary, hourly age and weekly hours, or the monthly take home pay. A drop down will choose which and change the inputs accordingly.
- Month expenses, the balance between savings and lifestyle, will also be inputted in three ways: a dollar amount for savings, a dollar amount for expenses, or a percentage of take home pay that should be saved.

#### Collect Inputs

1. Income tax rate (27%)
2. Capital Gains tax rate (0%)
3. Charity rate (11%) A man without charity is nothing.
4. Rate of return while saving (7.2%)
5. Rate of return once retired (4%)
6. Rate of inflation (2.3%)
7. How much monthly expenses go up after retirement (ex: health insurance)
8. Years to Retirement
9. income: annual salary, monthly take home, or hourly wage and weekly hours
10. monthly expenses: $ savings, $ expenses, or % savings.

#### Do the math

Convert percentages to decimals

```
incomeTax = incomeTaxPerc * 100
gainsTax = gainsTaxPerc * 100
charity = charityPerc * 100
```

Calculate monthly take home pay if given annual salary or hourly wage.

```
calc_take_home(value, hours = 40, option = 1)
  // options: annual salary (1), hourly wage (2), take home pay (3)
  if option == 2:
    value = value * hours * 52
  
  if option == 1:
    monthly = value / 12 / incomeTax
    take_home = monthly / charity

  elif option == 2:
    annual = value * hours * 52
    monthly = annual / 12 / incomeTax
    take_home = monthly / charity
    
  else: // option 3
    take_home = value
```

1. calculate

#### Output results
