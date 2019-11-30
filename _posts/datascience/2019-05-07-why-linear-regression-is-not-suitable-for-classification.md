---
title: Why Linear Regression is not suitable for Classification
layout: note
image: https://i.ibb.co/cvnssKZ/Why-Linear-Regression-is-not-suitable-for-Classification.png
description: Linear Regression vs Logistic Regression for Classification Tasks
category: datascience
tags:
- machine learning
- classification
- data science
- regression

---

[![cover](https://i.ibb.co/cvnssKZ/Why-Linear-Regression-is-not-suitable-for-Classification.png)](https://towardsdatascience.com/why-linear-regression-is-not-suitable-for-binary-classification-c64457be8e28)


This article explains why logistic regression performs better than linear regression for classification problems, and 2 reasons why linear regression is not suitable:
- the predicted value is continuous, not probabilistic
- sensitive to imbalance data when using linear regression for classification

---

[Supervised learning](https://en.wikipedia.org/wiki/Supervised_learning) is an essential part of machine learning. That is a task of learning from the examples in a training dataset, by mapping input variables to the outcome labels, which then can be used for predicting the outcome of a new observation. Examples of supervised learning classification tasks are:

1. Given a list of passengers who survived and did not survive the sinking of the Titanic, predict if someone might survive the disaster (from [Kaggle](https://www.kaggle.com/c/titanic/overview))
2. Given a set of images of cats and dogs, identify if the next image contains a dog or a cat (from [Kaggle](https://www.kaggle.com/c/dogs-vs-cats-redux-kernels-edition/overview))
3. Given a set of movie reviews with sentiment label, identify a new review’s sentiment (from [Kaggle](https://www.kaggle.com/c/movie-review-sentiment-analysis-kernels-only/overview))
4. Given images of hand-drawn digit from 0 to 9, identify a number on a hand-drawn digit image (from [Kaggle](https://www.kaggle.com/c/digit-recognizer/overview))

# Can classification problems be solved using Linear Regression?
Let’s say we create a perfectly balanced dataset (as all things should be), where it contains a list of customers and a label to determine if the customer had purchased. In the dataset, there are 20 customers. 10 customers age between 10 to 19 who purchased, and 10 customers age between 20 to 29 who did not purchase. “Purchased” is a binary label denote by 0 and 1, where 0 denote “customer did not make a purchase” and 1 denote “customer made a purchase”.

[![cover](/assets/img/posts/why-lr-01.png)

This article was originally published on [Medium:Towards Data Science](https://towardsdatascience.com/why-linear-regression-is-not-suitable-for-binary-classification-c64457be8e28)


