---
title: Feature Engineering Dates
layout: note
image: https://www.udemycouponpro.com/wp-content/uploads/2018/08/Data-Science-in-Python-Pandas-Scikit-learnNumpy-Matplotlib-udemy-coupon-pro-ucp.jpg
description: to be completed
category: info
tags:
  - tag
  - tag
---

# Introduction

Ways to encode datetime for your model:
- The number of days since a reference date
- Isolating the month, year, and day of the week as separate predictors
- The numeric day of the year (ignoring the calendar year)
- Week of the year
- Is weekend? Is holiday?

There is no "correct" way to feature engineer your date variable, one may be optimal for some models and poor for others. Understanding your domain will help decide the best date feature format.

Firstly, I would start by looking for trend. If the data appears to have certain seasonality, such that certain event occur at regular interval (it could be weekly, monthly, quarterly, every February and November) within a year, then the numeric day of the year would work best. Example of data that are seasonal could be weather, flights, product sales due to Christmas, Mother's day and Valentines day.

For category recommendations on e-commerce, if user clicked on an Electronic category product 60 days ago, and another Beauty product 7 days ago. And if recommending other Beauty products over Electronic makes sense, then number of days since a reference date would be a better fit for category recommendations.
