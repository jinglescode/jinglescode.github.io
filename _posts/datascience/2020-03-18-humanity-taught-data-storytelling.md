---
title: What 200,000 Years of Humanity have Taught Us about Data Storytelling
layout: note
image: /assets/img/posts/humanity-taught-data-storytelling-01.webp
description: A data scientist is also an efficient communicator who brings data to life.
category: datascience
tags:
- data analysis
- visualisation
- experiences
---

![](/assets/img/posts/humanity-taught-data-storytelling-01.webp)

Engage your audience with your data story and help them comprehend your insights. Image by [Sasin Tipchai](https://pixabay.com/users/sasint-3639875)

In ancient times, 200,000 years ago, people sit around the [campfire to learn from each other’s experiences through stories](https://www.sciencemag.org/news/2014/09/ancient-campfires-led-rise-storytelling). Our ancestors taught each other [how to control fire, hunt animals](https://www.pnas.org/content/111/39/14027), what to eat and what not to eat. These narratives advance human knowledge by learning from others’ successes and failures.

[Ancient Egyptian arts](https://en.wikipedia.org/wiki/Art_of_ancient_Egypt) contain stories that pass on to generations about what has happened in the past. How did they build their empire, what are the tools they use, and what they considered important. Even today, we can learn from the drawings about the history of humanity.

![](/assets/img/posts/humanity-taught-data-storytelling-02.webp#float_left)
![](/assets/img/posts/humanity-taught-data-storytelling-03.webp#float_left)

Ancient Egyptian arts [source from [Wikipedia](https://en.wikipedia.org/wiki/Art_of_ancient_Egypt)]

Today, the most engaging TED Talks and highest-grossing movies are [anchored in storytelling](https://ideas.ted.com/storytelling-is-a-powerful-communication-tool-heres-how-to-use-it-from-ted/). Stories that resonate with us, stories that bring ideas to life, stories that connect audiences.

Storytelling is as old as time, and it has a place in every culture and society. It is an effective way to learn the essential things from each other.

In this age of big data, this is how we are to learn from each other — telling [data stories](https://hbr.org/2015/10/the-best-data-storytellers-arent-always-the-numbers-people). There are **three crucial fundamentals of data storytelling, data, visualisation and narrative**.

![](/assets/img/posts/humanity-taught-data-storytelling-04.webp)

3 fundamentals of data storytelling: data, visualisation and narrative

----------

# #1. Collect and clean your data

Before you can tell any data stories, you need data. If you are working in an organisation, a class assignment, or a Kaggle dataset; you have the data. You have to figure out what is the story you want to tell.

If you don’t have data yet, you have to define your hypothesis before collecting data. Your hypothesis should be measurable and clear. This will guide you to find or collect suitable dataset for analysis. Try searching for an open-source dataset that might answer your key question. However, if your question is niche, you have to build your data collection system.

Before you can extract any insights from your data, you have to ensure that the data is correct. This process is defined as [**data cleaning**](https://towardsdatascience.com/data-scientist-the-dirtiest-job-of-the-21st-century-7f0c8215e845?source=friends_link&sk=4a19193cb50580e59c9c481fd840bbec). Typically you want to clean data that are incomplete, inaccurate, inconsistent and duplicated; to have accurate results.

## Identify bad data

Imagine if someone spotted an error during your presentation, that will make your work less credible. For example, if you have a dataset that contains human age, it wouldn’t make sense if someone is 5,000 years old. You might have to remove them first.

## Identify missing values

Missing values can be represented as empty values or values that are out of range, like “-1” or “-99" for human age. Your job is to identify and handle these missing values. You may have to get rid of columns or rows that have too many missing values.

## Look for outliers

These are data points that contain values that are outside the normal range. Unlike _bad data_, outliers’ values are valid. For example, in the [Seattle Airbnb dataset](https://towardsdatascience.com/airbnb-in-seattle-data-analysis-8222207579d7?source=friends_link&sk=110a7b09650f4ba55b0bf75d81ad5863), there is 1 host who set the minimum rental nights to 1,000. It may offer interesting stories and insights, but they may also skew your results. You have to identify and decide how to deal with these kinds of data.

# #2. Examine data with visualisation

This part is commonly known as exploratory data analysis, in short, EDA. Here you will ask yourself questions as you go about exploring the data you have. You will analyse features, find patterns and relationships between features.

## Look for trends

If the data you have consist of time variables, likely you will be interested in finding out if variables are increasing or decreasing over time. The easiest way to visualise trends is by plotting a line chart.

Sometimes, a feature can have a cyclical pattern. For example, the number of air travel passengers will increase during the holiday period, and the amount of rainfall in a year varies by season.

![](/assets/img/posts/humanity-taught-data-storytelling-05.webp#float_left)
![](/assets/img/posts/humanity-taught-data-storytelling-06.webp#float_left)

Line charts can show you trends over time

## Distribution of values

For numerical features, you may want to find the range of the variables. This enables you to know the smallest, largest, mean and median of the feature. It also informs us if the data is left or right-skewed. A common approach to display distribution is using a histogram.

![](/assets/img/posts/humanity-taught-data-storytelling-07.webp#float_left)
![](/assets/img/posts/humanity-taught-data-storytelling-08.webp#float_left)

Bar charts are useful for visualising distributions

A histogram can also identify anomaly data and default values. For example, you can extract those houses with humongous floor area and variables with -1 default values.

![](/assets/img/posts/humanity-taught-data-storytelling-09.webp#float_left)
![](/assets/img/posts/humanity-taught-data-storytelling-10.webp#float_left)

Left: a number of houses with humongous floor area at the right-most bar. Right: a number of people with -1 age.

## Correlation between features

Looking for a mutual relationship between two or more features is a valuable insight. It is usually interesting, and it could help your audience learn something they might not know. For example, [in this study](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5003100/), the researchers found a positive correlation between eye diseases and sunshine duration. And that is interesting.

A useful chart to show correlation is a scatterplot. You can also add a fitted line to check if it is positively or negatively correlated.

![](/assets/img/posts/humanity-taught-data-storytelling-11.webp#float_left)

The simplest form to check the correlation between 2 variables, use scatterplot

Knowing how features correlate can help you build a better prediction model. If two features are highly correlated, you have to scrutinize it as it could be a result of duplicated data. And if a feature is highly correlated to your target label, that feature may be significant.

> “A picture is worth a thousand words.” That is the common mantra but when it comes to data visualisation that thousand words may not be enough to bring insights across.

Which brings me to the next point, you need a story to convey those insights you’ve found.

# #3. Communicate insights with a narrative

Useful datasets and beautiful visualisations don’t make a good data story. A **data story is only compelling if it provides values to the audience**. It allows them to learn something new or gives a fresh perspective to make better decisions. Or at the very least, your audience can understand what you are working.

Your narrative should guide the audience through your insights, and help them follow your flow of ideas. Using data to support your story using narrative and visualisations is particularly powerful because it **increases comprehension and retention, and it is engaging**.

## Comprehension

Using visualisation in your stories can make your audience see the data coming to life. Our brains are wired to be better at recognising patterns and colours rather than raw numbers. Helping your audience to see the data will help them interpret it.

## Retention

By combining narrative and visualisations, it helps your audience remembers your content. Doing so, you are effectively providing both the analytical and emotional experience to your audience. Cementing the information you have delivered.

## Engaging

Your audience needs reasons why they should be listening to you. Using a narrative can help them associate the data shared and why it matters to them. If you can design your story for your audience to align with their interests and goals; they will be engaged in your story.

----------

# The clues to a great story

[Andrew Stanton](https://en.wikipedia.org/wiki/Andrew_Stanton) is a film director who worked on Toy Story, Finding Nemo and Monsters, Inc. He shares his discoveries of great storytelling in [this TED Talk](https://www.youtube.com/watch?v=KxDwieKpawg). He explains how great stories can engage the audience and how we can connect to each other’s experiences.

<iframe width="560" height="315" src="https://www.youtube.com/embed/KxDwieKpawg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
