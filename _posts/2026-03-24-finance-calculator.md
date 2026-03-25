---
title: Finance Calculator
layout: post 
categories: projects
date: 2026-03-25
---

My notes and progress on the finance calculator project.

### Purpose

I often day dream of living frugally, saving as much as possible, and retiring early. Being the engineer that I am, these day dreams often include numbers. The thought process usually goes something like, "If I earned this much in a year, then I would take home X amount each month. If I only spend Y, then I can save Z and I'd only need XX amount in a nest egg to retire." As you might imagine, there are a lot of variables that go into the calculations. So far this has turned into a lot of me jumping between various online calculators trying different scenarios. This project is meant to put all those separate calculators into one web app so I can day dream faster.

This will also be an opportunity to branch into using JavaScript in this otherwise very basic website. Yes, the calculator will be nice once it's done, but I'm also looking forward to using it as a learning opportunity.

I did make an initial prototype using AI. You can find it [here](/_posts/2026-03-25-old-finance-calculator.md). It doesn't have all the features I'd like and I'm not certain the math is accurate, but it gets the vision across.

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
8. Current savings
9. Years to Retirement
10. income: annual salary, monthly take home, or hourly wage and weekly hours
11. monthly expenses: $ savings, $ expenses, or % savings.

#### Do the math

??? I'll be honest, I don't really know what I'm doing in this part.

#### Output results

Give a summary of the data entered and the assumptions made.

Given income and expenses,
How many years until retirement?

Given savings and years,
What are the maximum retirement expenses I can sustain?

Given years to retirement and income,
What kind of monthly expenses can I have now and sustain into retirement?
How much do I need to save?

### 2026-03-25

I have succumb to temptation and used AI to create a class that handles the math. Why a class? Because I come from a casual Python background, and python uses classes. But one of the stated goals of this project is to learn JavaScript, so I started reading the documentation and find a guide on [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide). And what do I find? That one of the main differences between JavaScript and Java is that JavaScript is object oriented rather than class oriented. I have never worked with Java, and I don't know what the difference between a class and an object even is!

I am reminded of a company moto I saw online: "We do things not because they are easy, but because we thought they would be easy". The hidden gem there is the importance of pressing forward anyway. I'm going to set aside the AI generated class for now and start going through the JavaScript guide to learn the language properly. The AI code may still be useful as a guide for future functions, so it's not a total loss.
