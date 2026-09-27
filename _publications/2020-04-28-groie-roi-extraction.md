---
title: "A Novel Region of Interest Extraction Layer for Instance Segmentation"
authors: 'L Rossi, <strong>A Karimi</strong>, A Prati'
collection: publications
category: conferences
permalink: /publication/2020-04-28-groie-roi-extraction
excerpt: 'We propose GRoIE, a Generic RoI Extractor that uses all FPN layers with non-local blocks and attention, integrating seamlessly into two-stage architectures and improving detection by up to 1.1% AP and instance segmentation by 1.7% AP.'
date: 2020-04-28
venue: 'ICPR 2020'
paperurl: 'https://arxiv.org/pdf/2004.13665'
citation: 'Leonardo Rossi, Akbar Karimi, and Andrea Prati. 2021. A Novel Region of Interest Extraction Layer for Instance Segmentation. In <i>2020 25th International Conference on Pattern Recognition (ICPR)</i>. IEEE.'
---
Given the wide diffusion of deep neural network architectures for computer vision tasks, several new applications are nowadays more and more feasible. Among them, a particular attention has been recently given to instance segmentation, by exploiting the results achievable by two-stage networks (such as Mask R-CNN or Faster R-CNN), derived from R-CNN. In these complex architectures, a crucial role is played by the Region of Interest (RoI) extraction layer, devoted to extracting a coherent subset of features from a single Feature Pyramid Network (FPN) layer attached on top of a backbone. This paper is motivated by the need to overcome the limitations of existing RoI extractors which select only one (the best) layer from FPN. Our intuition is that all the layers of FPN retain useful information. Therefore, the proposed layer (called Generic RoI Extractor - GRoIE) introduces non-local building blocks and attention mechanisms to boost the performance. A comprehensive ablation study at component level is conducted to find the best set of algorithms and parameters for the GRoIE layer. Moreover, GRoIE can be integrated seamlessly with every two-stage architecture for both object detection and instance segmentation tasks. Therefore, the improvements brought about by the use of GRoIE in different state-of-the-art architectures are also evaluated. The proposed layer leads up to gain a 1.1% AP improvement on bounding box detection and 1.7% AP improvement on instance segmentation.
