---
title: Data Scientist - The Dirtiest Job of the 21st Century
layout: note
image: /assets/img/posts/data-scientist-dirtiest-job-century-01.webp
image-thumb: /assets/img/posts/data-scientist-dirtiest-job-century-01-mini.webp
image-caption: "Photo by [Medienstürmer](https://unsplash.com/@medienstuermer) on [Unsplash](https://unsplash.com/)"
description: Data scientist, sexiest job of the 21st century. While they do make discoveries while swimming in data, but the data needs cleaning and labelling first.
category: datascience
tags:
- experiences
---

According to the  [Harvard Business Review](https://hbr.org/2012/10/data-scientist-the-sexiest-job-of-the-21st-century/), data scientist is the sexiest job of the 21st century. In the world of big data, they adopt AI/deep learning methods and discover invaluable business insights.

For me, having that “_data scientist_” job title for the past five years, I still haven’t fully figured out which part of me is sexy. Except maybe my newly permed hair that makes me look like a Korean Oppa (_usually used to refer to Korean drama male lead_).

Indeed, the emergence of cloud and movement of businesses to the internet has let to an explosion of data. This has driven the demand and shortage of data scientists in some sectors.

But what does a data scientists job entail on a day-to-day basis?

We can find our answer to this question from job postings on LinkedIn. Let me sum up the popular ones for you.

-   understand business and customers, validate assumptions
-   build predictive models and machine learning pipelines, perform A/B testing
-   conceptualise analyses to business stakeholders
-   develop algorithms to empower business decisions
-   experiment and research new technologies and methods to improve technical capabilities

_These sounds sexy, don’t they?_

Unless your job consists of working on Kaggle datasets, these job descriptions are just a small part of being a data scientist.

The following survey results by CrowdFlower sum up a typical day for a data scientist.

{% include figure.html
  file="/assets/img/posts/data-scientist-dirtiest-job-century-02.webp"
  caption="What data scientists spend the most time doing. [taken from  [CrowdFlower](https://visit.figure-eight.com/rs/416-ZBE-142/images/CrowdFlower_DataScienceReport_2016.pdf)]"
  size="m"
%}

As you can see from the chart above, the majority of a data scientist’s time is on collecting datasets, cleaning and organising data.

----------

# High performance data vacuum of the 21st century

Data lakes are centralised repositories to store all the company’s data. It enables organisations to use the data to build machine learning models and dashboards. Unfortunately, some assume that data lakes are data dumping grounds — a super big hard drive.

Many organisations started implementing data lakes without a clear idea of what to do with the data collected. “_Let’s just collect everything_”, they said. While the point of a data lake is to have all the company’s data in one place, it is still  **vital to design it with specific projects needs**. By not planning, it is almost like creating a new “_Untitled Folder_” and then copying and pasting the entirety of the company’s data in there.

{% include figure.html
  file="/assets/img/posts/data-scientist-dirtiest-job-century-03.webp"
%}

Poor planning resulted in little to no well-defined metadata, making it difficult for anyone to search for data. Data scientists often find themselves contacting different departments for data. They may need to seek information about the data from various data owners. Merely storing data without cataloguing is a big mistake. The  **key to having a useful data lake is by ensuring that the metadata is well-defined**.

Due to data governance or busyness of data owners who are often stakeholders from different departments, it can take weeks to obtain data. After the waiting game, data scientists might end up finding that the data is not relevant, or it has serious data quality issues.

When data scientists finally get their hands on the data, they need to spend time exploring and getting familiar with it. They have to reorganise the messy chunk of data into new tables to align with their project needs.

{% include figure.html
  file="/assets/img/posts/data-scientist-dirtiest-job-century-04.webp"
  caption="Photo by [Oleksii Hlembotskyi](https://unsplash.com/@lshphoto) on [Unsplash](https://unsplash.com/)"
%}

----------

# High demand data janitor of the 21st century

Everyone who deals with data should have heard of the term “_dirty data”_. Dirty data takes away the integrity of the dataset. Some characteristics of dirty data are  **incomplete**,  **inaccurate**,  **inconsistent**  and  **duplicated**  data.

**Incomplete data**  is when some essential features are empty. For example, if your task is to  [predict house prices](https://www.kaggle.com/c/house-prices-advanced-regression-techniques). Let us assume that the “_area of the house_” is critical to make a good prediction, but yet it is missing. That might be challenging for you, or your model might not perform well.

**Inaccurate and inconsistent data**  is when the values are technically correct, but wrong based on the context is it in. For example, when the employee changes their address, and it wasn’t updated. Or when the data has many copies, and the data scientist got the outdated version.

{% include figure.html
  file="/assets/img/posts/data-scientist-dirtiest-job-century-05.webp"
  caption="Photo by [Jamie Street](https://unsplash.com/@jamie452) on [Unsplash](https://unsplash.com/)"
%}

**Duplicate data**  is a common problem. Let me share with you a story that has happened to me while working in an e-commerce company. By design, when a visitor clicked on the “_collect voucher_” button, the website sends a response to the server. That allowed us to measure the number of users who have collected vouchers.

The site was running well and good, until one day something has changed and I didn’t know about it. The frontend developer added another response for when someone has collected vouchers successfully. The rationale was because some vouchers may be out of stock. They wanted to track those who have clicked on the button and those who have collected the vouchers.

Therefore, two responses were sent to the same log table. From my reporting tool, the number of vouchers collected seemed to have doubled overnight! As I’ve deployed a model the day before, I thought that my new model was that impressive. I remember giving a mental standing ovation to my little models, but later I realised it was just double counting.

{% include figure.html
  file="/assets/img/posts/data-scientist-dirtiest-job-century-06.webp"
  caption="Photo by [Matthew Henry](https://unsplash.com/@matthewhenry) on [Unsplash](https://unsplash.com/)"
%}

Being a data scientist for five years, some data I have received are manual entries by corporate staff. These data are in Excel spreadsheets; many are inaccurate, incomplete, and inconsistent.

Whether if the data comes from manual human input or machine logs,  **data wrangling is a large part of what happens in the real world**. Data scientists have to deal with it.

For supervised learning to work, we also need reliable, labelled data. You can’t build a predictive model unless the data are correctly labelled. But nobody likes labelling data.

Many describe this as the  [80/20 rule](https://www.ibm.com/cloud/blog/ibm-data-catalog-data-scientists-productivity). Data scientists spend only 20 percent of their time on building models and 80 percent on gathering, analysing, cleaning, and reorganising data. Dirty data is the most time-consuming aspect of the typical data scientist’s work.

It’s necessary to point out that  **data cleaning is incredibly essential**; messy data won’t produce good results. As you might have heard the phrase, “_garbage in, garbage out_”.

Data scientists do make discoveries while swimming in data, but before data scientists can start training any models, they must first become data janitors. The data needs cleaning, the data needs labelling.

{% include figure.html
  file="/assets/img/posts/data-scientist-dirtiest-job-century-07.webp"
  caption="Photo by [Oliver Hale](https://unsplash.com/@4themorningshoot) on [Unsplash](https://unsplash.com/)"
%}

----------

# I am a data scientist…

I don’t find my job sexy.  
I am 40% a vacuum, another 40% a janitor.  
And the last 20%… A fortune-teller.
