---
title: 'CAMELYON16 Challenge'
subtitle: 'Detection and Visualization of Lymph Node Metastase with CNN and Transfer Learning'
date: 2020-12-30 00:00:00
description: This page is a demo that shows everything you can do inside portfolio and blog posts.
featured_image: '/images/CAMELYON16.png'
---

## Background

In this challenge, we focused on the detection of micro- and macro-metastases in lymph node digitized images. This subject is highly relevant; lymph node metastases occur in most cancer types (e.g. breast, prostate, colon). Metastatic involvement of lymph nodes is one of the most important prognostic variables in breast cancer. 

Traditionally, the diagnostic procedure requires the pathologist to manually read each tissue sample, which could be tedious and time-consuming and prone to misinterpretation. Hence, automated detection could have a great potential to help the pathologist and reduce their workload. The emphasis of this project is on assist pathologists by giving an automatic second opinion. Not to replace.

We established a model that outputs a heatmap showing regions of a biopsy image likely to contain cancer. Data is obtained from the <a href="https://camelyon16.grand-challenge.org/">CAMELYON16 Challenge</a>.

## Overview

* Recreated and built upon the patch based multi-scale approach from <a href="https://arxiv.org/abs/1703.02442"><i>"Detecting Cancer Metastases on Gigapixel Pathology Images"</i></a> (Liu et al., 2017)
* Leveraged a convolutional neural network (CNN) architecture with fine tuning on image net (Inception V3 and VGG), patch window size, and magnification level selection.
* To avoid imbalanced data, at each step sample randomly for a positive or negative patch with equal probability.
* Achieved ~80% AUC and 89% sensitivity. 

<img src='/images/camelyon16-visualizations.png' width="700"/>

## Model Stucture

<img src='/images/camelyon16-model.png' width="500"/>

## Presentation Video

<a href="https://youtu.be/LQ7UBgv7qBA" class="button button--large">Link</a> 

## Additional
<button type="button" class="button" onclick="window.location.href='../download/camelyon16-project-report.pdf'">Presentation Slides</button>