---
title: Applied Predictive Modeling
layout: note
image: https://www.udemycouponpro.com/wp-content/uploads/2018/08/Data-Science-in-Python-Pandas-Scikit-learnNumpy-Matplotlib-udemy-coupon-pro-ucp.jpg
description: to be completed
category: info
tags:
  - tag
  - tag
---

# Introduction

Predictive modeling is the process of developing a mathematical tool that uses historical data to generate an accurate prediction for future/unseen cases. So what is accuracy? For example, we don’t really care why an e-mail filter thinks a message is spam. Rather, we only care that the filter accurately trashes spam and allows messages we care about to pass through to our mailbox. As another example, if I am selling a house, my primary interest is not how a web site (such as zillow.com) estimated its value. Instead, I am keenly interested that zillow.com has correctly priced the home. An undervaluation will yield lower bids and a lower sale price; alternatively, an overvaluation may drive away potential buyers.

There are a number of common reasons why predictive models fail, and the common culprits include
- (1) inadequate pre-processing of the data,
- (2) inadequate model validation,
- (3) unjustified extrapolation (e.g., application of the model to data that reside in a space which the model has never seen),
- (4) over-fitting the model to the existing data

## inadequate pre-processing of the data
Most predictive models are fundamentally influenced by a modeler with expert knowledge and context of the problem. This expert knowledge should first be applied in obtaining relevant data for the desired research objectives. While vast databases of information can be used as substrate for constructing predictions, irrelevant information can drive down predictive performance of many models. Subject-specific knowledge can help separate potentially meaningful information from irrelevant information, eliminating detrimental noise and strengthening the underlying signal.

### Transformations to Resolve Skewness
A right-skewed distribution has a large number of points on the left side of the distribution (smaller values) than on the right side (larger values). As the distribution becomes more right skewed, the skewness statistic becomes larger. Similarly, as the distribution becomes more left skewed, the value becomes negative.

Replacing the data with the log, square, square root, or inverse may help to remove the skew.

### Transformations to Resolve Outliers
Outliers are data points that are exceptionally far from the mainstream of the data.  When one or more samples are suspected
to be outliers, the first step is to make sure that the values are scientifically valid and that no data recording errors have occurred. Great care should be taken not to hastily remove or change values, especially if the sample size is small.

There are several predictive models that are resistant to outliers. Tree based classification models create splits of the training data so the outlier does not usually have an exceptional influence on the model. Support vector machines for
classification generally disregard a portion of the training set samples which may be outliers.

### Data Reduction
Principal component analysis (PCA) find linear combinations of the predictors, known as principal components (PCs), which capture the most possible variance. PCA preprocessing creates new predictors with desirable characteristics for these kinds of models. Hence, without proper guidance, PCA can generate components that summarize characteristics of the data that are irrelevant to the underlying data.







purpose of data preprocessing
- Transformations of the data to reduce the impact of data skewness or outliers
can lead to significant improvements in performance
-  removing predictors based on their lack of information content can
also be effective
