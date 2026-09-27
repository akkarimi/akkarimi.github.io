---
title: "Recursively Refined R-CNN: Instance Segmentation with Self-RoI Rebalancing"
authors: 'L Rossi, <strong>A Karimi</strong>, A Prati'
collection: publications
category: conferences
permalink: /publication/2021-09-28-recursively-refined-rcnn
excerpt: 'We propose R³-CNN, which replaces cascade architectures with a loop mechanism and recursive IoU-based re-sampling, surpassing the HTC model on COCO while significantly reducing the number of parameters.'
date: 2021-09-28
venue: 'CAIP 2021'
paperurl: 'https://arxiv.org/pdf/2104.01329'
citation: 'Leonardo Rossi, Akbar Karimi, and Andrea Prati. 2021. Recursively Refined R-CNN: Instance Segmentation with Self-RoI Rebalancing. In <i>Computer Analysis of Images and Patterns (CAIP 2021)</i>.'
---
Within the field of instance segmentation, most of the state-of-the-art deep learning networks rely nowadays on cascade architectures, where multiple object detectors are trained sequentially, re-sampling the ground truth at each step. This offers a solution to the problem of exponentially vanishing positive samples. However, it also translates into an increase in network complexity in terms of the number of parameters. To address this issue, we propose Recursively Refined R-CNN (R^3-CNN) which avoids duplicates by introducing a loop mechanism instead. At the same time, it achieves a quality boost using a recursive re-sampling technique, where a specific IoU quality is utilized in each recursion to eventually equally cover the positive spectrum. Our experiments highlight the specific encoding of the loop mechanism in the weights, requiring its usage at inference time. The R^3-CNN architecture is able to surpass the recently proposed HTC model, while reducing the number of parameters significantly. Experiments on COCO minival 2017 dataset show performance boost independently from the utilized baseline model.
