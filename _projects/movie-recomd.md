---
title: 'Hybrid Movie Recommendation System'
subtitle: 'A switching model leveraging content-based methods, matrix factorization and deep learning'
date: 2020-12-20 00:00:00
description: This page is a demo that shows everything you can do inside portfolio and blog posts.
featured_image: '/images/movie-home-img.jpg'
---

<!-- ![](/images/demo/demo-landscape.jpg) -->

## Overview

The overall goal of this project is to build a system which recommends users the movies they potentially would like. The system should not only recommend high predicted rating movies but also relevant to the specific user. In this way, we can maintain a relatively active user population and keep promoting newly released movies to the right target audience.

To do so, we combine a content-based model, matrix factorization model and a deep learning model to a hybrid switching model where users are funneled into different recommendation algorithms depending on their previous rating profiles. The system would give top N recommendations.

With the given data, we selected three thresholds for channel switching (could be automatically recomputed in production). The design is as follows:

<img src='/images/recomd-model-design.png' width="700"/>

## Performance

| Model         | Valid data point | Valid unique users | rmse   | precision@k=5 | recall@k=5 |
|---------------|------------------|--------------------|--------|---------------|------------|
| Hybrid        | 44645            | 5201               | 0.9432 | 0.6769        | 0.2355     |
| Deep Learning | 3260             | 326                | 1.1408 | 0.0344        | 0.1304     |
| Model Based   | 41562            | 4905               | 0.9405 | 0.7266        | 0.7016     |
| Content Based | 103440           | 10344              | 1.1561 | 0.1360        | 0.4053     |

## Final Recommendation/ Improvements
After giving recommendation based on Baseline Model (most popular movies), MF, Deep Learning, Content-Based model, and compare the performance of those single methods with the performance of the model we creatively built - hybrid model (based on switching users), we can find that the hybrid model not only can provide more accurate result, but also more computational effective. We can consider to put this hybrid model into production in the future.

So far, we met our objective of recommending users the most relevant movies by implementing a hybrid model, which is the effective solution for building a production-quality recommender system. 
* Handles user cold-start problem
* Gives a level of sensitivity to the strengths and weaknesses of all combined recommenders

There are several ways to improve the performance:
1. Switching criteria

  a.  Bring the complexity of tuning funnel threshold. 

According to the EDA, there are 25% users rated fewer than 6 movies, 50% users rated fewer than 10 movies.Due to a limited computation power, we preliminarily decide the funnel threshold based on distribution of number of ratings per user. 

2. Constituent recommenders 

  a. Deep learning models could be improved by adopting more comprehensive modalities as embedding layers(e.g. tags, movies information, user reviews) Use wide and deep networks to learning more complex embeddings. Add time sensitivity to the model by using sequential techniques like LSTM.

## Code

* [Github](https://github.com/acui34/4571Final)

