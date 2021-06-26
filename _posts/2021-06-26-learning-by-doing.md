---
title: 'Learning by Doing'
layout: note
image: /assets/img/posts/learning-by-doing.jpg
image-thumb: /assets/img/posts/learning-by-doing-mini.jpg
image-caption: "Image by Gyae Min from Pixabay"
description: I hear and I forget. I see and I remember. I do and I understand.
tags:
- experiences
- personal growth
---

Courses can is a great way to learn but working on projects build up your skills. You'll be forced to think critically about the problem and produce a solution on your own. Getting hands-on builds knowledge and skills that can't be taught, as watching someone else doing it is much easier than learning how to do it yourself.

I like how Paul Graham described it in [his article](http://paulgraham.com/own.html):

> It's a bit sad to think of all the high school kids turning their backs on building treehouses and sitting in class dutifully learning about Darwin or Newton to pass some exam, when the work that made Darwin and Newton famous was actually closer in spirit to building treehouses than studying for exams.

Personal projects allow you to explore and apply what you have learned on a deeper level. Working on a project from start to finish will expose you to a wide range of problems. You'll know how to ask the right questions, specifically, how to search the right questions to find the solutions. We want to get more hands-on experience to hone our skills.

# Effective data scientist

Learning by doing sets you up to be an effective data scientist by being end-to-end — knowing how to work on projects from the start (identifying the problem) to finish (solving it and delivering value). They can identify and solve problems with data and provide value to the company; this improves your capacity to make a meaningful impact. 

Here is a list of skills (neither mandatory nor exhaustive) on becoming an effective end-to-end data scientist:
- scope — define the problems, determining the success metric
- communication — facilitate across teams, get buy-in, share results
- data engineering — acquire, clean, and prepare the data, build a data pipeline
- data analysis — understanding the data, measure the performance
- building the product — whether it is applying machine learning to perform predictions or data analysis to extract answers
- dev-ops — code structure, unit tests, automation tools, deployment

For instance, let's build a [project](https://github.com/jinglescode/time-series-forecasting-tensorflowjs), which pulls historical stock data and uses a machine learning model to predict the next day's price (scope). We found that we could acquire financial market data from Alpha Vantage, so we build a script to pull stock data (data engineering). With the raw data, we prepare the data before training the model, normalizing the raw data, and splitting the data into training and validation datasets (data analysis + data engineering). Then, we develop and train a simple LSTM model to learn to predict next-day prices using the last 50 days' data (building the product). To determine if our model is doing a good job, we evaluate the model's performance by measuring it with mean square error (data analysis). We build a web interface and deploy it to showcase the work so anyone could try it (dev-ops). Lastly, writing about the building and thoughts process, so others could learn from it to build their own (communication). [Learn more](https://github.com/jinglescode/time-series-forecasting-pytorch) about this project.

# Build your portfolio

Having personal projects also enable you to build a portfolio and showcase it to potential employers. Online portfolios demonstrate both technical and soft skills to hiring managers. 

**Technical skills** - how you structure your files and codes, how you acquire and prepare data, how you analyze and understand your data via visuals, how you train and evaluate your machine learning models. This shows that you can get things done.

**Soft skills** - writing your thought process and explaining the analysis and results shows your ability to communicate, which is essential for an effective data scientist. 

**Traits** - Working on personal projects show self-learning beyond completing courses and collecting certificates. Having portfolios also demonstrate traits such as curiosity and passion. As you are spending your free time learning, it exhibits you are driven and more passionate than the rest who might be interviewing for the same job. You show that you're doing it voluntarily (pulling), rather than merely because someone told you to (being pushed).

The portfolio will help your resume to stand out among the sea of resumes and get a first-round interview. And the skills and traits that you acquired from these projects will lead you to perform in the role.

# How has it worked for me?

In 2017, I had an interview at Alibaba Group for a data scientist role. Like most interviews, my hiring manager started off asking me a few machine learning questions. The atmosphere was stern, questions after questions. 

Then, we moved on to describe what have I done before. I shared a natural language processing application that I have made, where users can upload an Excel file containing answers to survey questions. The application will extract the sentiment for each response, and dynamically group them by topics. I showed my hiring manager how the application looks and how it works from a user perspective. 

After sharing how easy it was to use and how it has benefited the users, his attitude and the interview vibe has changed. It was no longer felt like an interview but more of sharing with a colleague what I have done and how I did it. It is so much easier to describe what has been done before than to recap what each data science and machine learning concepts is. The conversation became more lively and friendly; it was a pleasant interview experience. And yes, I got the job.

# In closing...

One of the hardest things when deciding to work on a personal project is finding time to start. Because most of us have a full-time job (or studies), and whatever leftover free time there could be used to watch Netflix. But the learning and growth you get from working on a personal project is gold.

Don't focus on building a portfolio; focus on the process of acquiring the skills by doing. A portfolio is an outcome of our learnings, the skills that we develop, and the traits we possess. While trying to build our portfolios, we should find intrinsically rewarding projects. They should be fun, personally meaningful, and stretch our abilities; this makes them more sustainable. Over time, one project after another, you will have a portfolio.

Need some inspiration? Want to see machine learning projects in action? Here is a [carefully curated list of awesome ML projects with demo](https://github.com/jinglescode/awesome-machine-learning-projects)!

> I hear and I forget. I see and I remember. I do and I understand. – Confucius
