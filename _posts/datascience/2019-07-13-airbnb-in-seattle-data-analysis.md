---
title: Airbnb in Seattle — Data Analysis
layout: note
image: https://i.ibb.co/j8JjCnb/0-4-K2o-Lj-Zq-Vp-YPTc2-B.jpg
description: Understand Airbnb rental landscape in Seattle
category: datascience
tags:
- data analysis
- airbnb

---

[![cover](https://i.ibb.co/j8JjCnb/0-4-K2o-Lj-Zq-Vp-YPTc2-B.jpg)](https://towardsdatascience.com/airbnb-in-seattle-data-analysis-8222207579d7)

For all prospective Airbnb hosts in Seattle, I will answer these questions in this article:
- when to rent to maximise revenue?
- when is the off-peak season for maintenance?
- common group size of Seattle travellers, is it 2 or family or 4 or larger?
- bedroom configurations to maximise booking rates?
- how to achieve a good rating?
- do hosts with higher rating have higher revenue?
- amenities to include?

# Get and prepare data

In this article, I will perform exploratory data analysis on the Airbnb dataset gotten from [Inside Airbnb](http://insideairbnb.com/).

## Fetch Listings data

Our data will be loaded in [pandas](https://pandas.pydata.org/), comma-separated values (CSV) files can be easily loaded into DataFrame with the `read_csv` function.
Let us look at what the first 10 rows looks like with `pd_listings.head(10)`:

<script src="https://gist.github.com/jinglescode/d48ad46aa26d533a8cec1ca2d83a0721.js"></script>

And examine the summary of the numerical data with `pd_listings.describe()`:

<script src="https://gist.github.com/jinglescode/7fc14b420064b918e29f36abe2451604.js"></script>

Observations:
- there are 3813 listings in this dataset
- values in the price column contain the dollar symbol ($)
- there are missing values in columns bathrooms, bedrooms, and beds
there are missing values in reviews rating columns (review_scores_rating, review_scores_accuracy, review_scores_cleanliness, review_scores_checkin, review_scores_communication, review_scores_location, - review_scores_value)

## Data preparation

The column price, which is the price of the listing, it contains the dollar sign ($). We still can’t use it for analysis as it is not a numerical value, so we remove the dollar symbol and convert the values as numeric values:
```
pd_listings['price'] = pd_listings['price'].str.replace("[$, ]", "").astype("float")
```

Then replace those empty values with zero:
```
pd_listings.at[pd_listings['bathrooms'].isnull(), 'bathrooms'] = 0
pd_listings.at[pd_listings['bedrooms'].isnull(), 'bedrooms'] = 0
pd_listings.at[pd_listings['beds'].isnull(), 'beds'] = 0
pd_listings.at[pd_listings['review_scores_rating'].isnull(), 'review_scores_rating'] = 0
pd_listings.at[pd_listings['review_scores_accuracy'].isnull(), 'review_scores_accuracy'] = 0
pd_listings.at[pd_listings['review_scores_cleanliness'].isnull(), 'review_scores_cleanliness'] = 0
pd_listings.at[pd_listings['review_scores_checkin'].isnull(), 'review_scores_checkin'] = 0
pd_listings.at[pd_listings['review_scores_communication'].isnull(), 'review_scores_communication'] = 0
pd_listings.at[pd_listings['review_scores_location'].isnull(), 'review_scores_location'] = 0
pd_listings.at[pd_listings['review_scores_value'].isnull(), 'review_scores_value'] = 0
```

Lastly, to rename id to listing_id:
```
pd_listings.rename(columns={'id':'listing_id'}, inplace=True)
```

## Fetch Reviews data
Let us load another CSV file which contains the reviews for each listing. The DataFrame contains the following columns:
- id — identification number for review
- listing_id — identification number for listing which we can join with the above DataFrame
- date — date of the review

## Calculate estimated revenue for each listing

I suppose that each review is a successful booking and guests stayed some number of nights. Unfortunately, we do not know the exact number of nights each guest stayed, but we could use the listing’s minimum_nights, to assume each guest stayed at least that minimum number of nights. For each review, price * minimum_nights to get each booking’s revenue:

```
pd_bookings = pd.merge(pd_reviews, pd_listings, on='listing_id')
pd_bookings['estimated_revenue'] = pd_bookings['price'] * pd_bookings['minimum_nights']
```

Sum up the revenue of every booking for each listing as estimated revenue per listing:
```
pd_listings_revenue = pd_bookings[['listing_id','estimated_revenue']].groupby(['listing_id']).sum()
```

And merged the estimated revenue into the existing DataFrame (listing):
```
pd_listings = pd.merge(pd_listings, pd_listings_revenue, on='listing_id', how='left')
pd_listings.at[pd_listings['estimated_revenue'].isnull(), 'estimated_revenue'] = 0
```

And we have our DataFrame ready for some analysis. Each row represents one listing, its attributes, and its estimated revenue:

<script src="https://gist.github.com/jinglescode/9c120a78cfd1ed80d7ada861e5607d2b.js"></script>

# Begin analysis

## Revenue by neighbourhoods

This table shows the average revenue of listings in each neighbourhood:

<script src="https://gist.github.com/jinglescode/98a85b497a08a63bacb9ed989b843125.js"></script>

![airbnb](/assets/img/posts/analyze-airbnb-01.png)

Airbnb properties in Downtown, Capitol Hill and Beacon Hill can fetch the highest revenue. It’s shopping and CBD district.

![airbnb](/assets/img/posts/analyze-airbnb-02.jpeg)

> Downtown, Capitol Hill and Beacon Hill can fetch the highest revenue

## Popular period of the year to rent?

It would be useful to know the most popular time of the year to rent in Seattle, so Airbnb hosts are able to decide when to rent and when is the time for maintenance.

![airbnb](/assets/img/posts/analyze-airbnb-03.png)

July, August and September are the best periods to maximise revenue. Months before May are the best time for maintenance work. From October to December is a good time to take a break and enjoy the holidays if they want to.

> July, August and September are the best periods to maximise revenue.

## Highest revenue listings

These are the top 5 listings with the highest estimated revenue:

<script src="https://gist.github.com/jinglescode/dcfa6c7f01bcbf45fac0305d61933079.js"></script>

Wow! Looks like our top earners are hosts have minimum nights of 1000. But it might be data anomaly because 1000 nights are kind of extreme, so let’s look at the proportion of listings with different minimum_nights.

<script src="https://gist.github.com/jinglescode/2e9fa231f650c1be745f68f5f683afad.js"></script>

Most hosts have minimum nights of up to a month, the host with 1000 nights, gotta filter it away.

These are the top hosts (up to 7 minimum nights) with the highest estimated revenue.

<script src="https://gist.github.com/jinglescode/d3afc39b465210cf31149ab0c4a29ace.js"></script>

These are the top hosts (up to 4 minimum nights) with the highest estimated revenue.

<script src="https://gist.github.com/jinglescode/4a545f9eaecaccd35b55691d04daffca.js"></script>

From these 2 tables, longer minimum nights results in higher revenue. Let's look at the correlation between minimum nights and estimated revenue.

<script src="https://gist.github.com/jinglescode/1ef5d1c9a5c776c54283ea11bb75c245.js"></script>

And the correlation between minimum nights and estimated revenue after removing the listing with 1000 minimum nights.

<script src="https://gist.github.com/jinglescode/8ddfd84ebbe6b3af46a059a1ef12e61f.js"></script>

Host with 1000 minimum nights has caused a bais towards higher minimum nights resulted in higher revenue, with a correlation of 87% between minimum nights and revenue. But after removing that host, minimum nights and estimated revenue are not highly correlated, a correlation of 20% between minimum nights and revenue.

> Minimum nights and estimated revenue are not highly correlated

![airbnb](/assets/img/posts/analyze-airbnb-04.png)

## Supply and demand — bedroom configurations

As an Airbnb host, it will be good to know if my property is oversaturated in the market. Find out the ratio between the number of listings (supply) to the number of bookings (demand) of different bedroom configurations:

<script src="https://gist.github.com/jinglescode/72b1cd697a50a058605b8831ee61af9c.js"></script>

> Listings with less than 2 bedrooms are well sought after.

But wait! Properties with no bedrooms, what are kind of properties are these?

<script src="https://gist.github.com/jinglescode/d6f29f9c7570a8b6390ed5c4fa796942.js"></script>

And the number of beds in these properties?

<script src="https://gist.github.com/jinglescode/d8f9aa599246d3f533665644ea5bd32a.js"></script>

All of these properties which no bedrooms are renting the entire apartment, and they do provide at least one bed. Phew~

## Supply and demand — guest group configuration

As an Airbnb host, I would also like to know the common group size of Seattle visitors. So as to find out if my property configuration is oversaturated in the market.

<script src="https://gist.github.com/jinglescode/80570c6b838a12792fedf276aa7cb628.js"></script>

A place which accommodates 14 ranked first (highest supply/demand ratio), but the number of bookings is low (only 83 bookings) as compared to places for 2 or 3 people.

> Renting a place for 2 or 3 people will give the host pretty good regular rentals.

![airbnb](/assets/img/posts/analyze-airbnb-05.png)

## Supply and demand — bedroom configurations for 2 to 3

So let us focus on renting properties for 2 to 3 people since more than half travel in a group of this size. Do these guests prefer 1 bedroom or 2 separate bedrooms?

Airbnb bedroom configurations for 2 people:

<script src="https://gist.github.com/jinglescode/fb40fca171be8838278f4820c23b8ac2.js"></script>

Airbnb bedroom configurations for 3people:

<script src="https://gist.github.com/jinglescode/1c818619e2a22c050ff5f174e8be0e99.js"></script>

> The majority prefers 1 bedroom.

The majority prefers 1 bedroom, less than 1% prefers 2 bedrooms. So for groups of 2s or 3s, they prefer 1 bedroom. But this could be due to the current supply of 2 bedroom properties are low.

![airbnb](/assets/img/posts/analyze-airbnb-06.png)

## What factors matters?

Having good ratings is important for Airbnb hosts. Let us compare how different factors affect overall ratings:

![airbnb](/assets/img/posts/analyze-airbnb-07.png)

> Good communication affects the overall rating and check-in rating

Communication has the highest correlation with the overall rating. Host in Seattle (maybe elsewhere too) needs to be responsive and friendly because good communication tends to get a high overall rating. Good communication also directly impacts the check-in rating.

Does having a good overall rating means the listing will bring in good wealth?

![airbnb](/assets/img/posts/analyze-airbnb-08.png)

Having a good overall rating has a very small positive correlation with estimated revenue. And having a good rating has almost no impact on the price set by the host.

But still, having a good overall rating is highly recommended.

## Amenities

These are the number of Airbnbs in Seattle that provides these amenities:

<script src="https://gist.github.com/jinglescode/52d2ecd302d9cd7a59c7185eac24c549.js"></script>

> Internet, heating and kitchen are necessities in Seattle.

Smoke detector? I just learnt that the Washington State Building Code has required smoke detectors in all dwellings since 1973.

# Summary

So, here is the summary of this article:

![airbnb](/assets/img/posts/analyze-airbnb-09.png)

# Notebook

Check out the [codes](https://gist.github.com/jinglescode/08d21b680bd11008c73083f9645d6b1d#file-seattle-airbnb-open-data-ipynb) used in this article!

<script src="https://gist.github.com/jinglescode/08d21b680bd11008c73083f9645d6b1d.js"></script>
