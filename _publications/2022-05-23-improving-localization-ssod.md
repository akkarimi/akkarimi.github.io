---
title: "Improving Localization for Semi-Supervised Object Detection"
authors: 'L Rossi, <strong>A Karimi</strong>, A Prati'
collection: publications
category: conferences
permalink: /publication/2022-05-23-improving-localization-ssod
excerpt: 'We add a bounding box localization classification task to the Mean Teacher framework to better filter pseudo-labels, and show that box regression on unlabeled data helps as much as classification, improving SSOD on COCO by 1.14% AP.'
date: 2022-05-23
venue: 'ICIAP 2022'
paperurl: 'https://arxiv.org/pdf/2206.10186'
citation: 'Leonardo Rossi, Akbar Karimi, and Andrea Prati. 2022. Improving Localization for Semi-Supervised Object Detection. In <i>Image Analysis and Processing – ICIAP 2022</i>, pages 516–527, Lecce, Italy. Springer.'
---
Nowadays, Semi-Supervised Object Detection (SSOD) is a hot topic, since, while it is rather easy to collect images for creating a new dataset, labeling them is still an expensive and time-consuming task. One of the successful methods to take advantage of raw images on a Semi-Supervised Learning (SSL) setting is the Mean Teacher technique, where the operations of pseudo-labeling by the Teacher and the Knowledge Transfer from the Student to the Teacher take place simultaneously. However, the pseudo-labeling by thresholding is not the best solution since the confidence value is not strictly related to the prediction uncertainty, not permitting to safely filter predictions. In this paper, we introduce an additional classification task for bounding box localization to improve the filtering of the predicted bounding boxes and obtain higher quality on Student training. Furthermore, we empirically prove that bounding box regression on the unsupervised part can equally contribute to the training as much as category classification. Our experiments show that our IL-net (Improving Localization net) increases SSOD performance by 1.14% AP on COCO dataset in limited-annotation regime.
