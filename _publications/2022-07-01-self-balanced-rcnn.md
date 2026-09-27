---
title: "Self-Balanced R-CNN for Instance Segmentation"
authors: 'L Rossi, <strong>A Karimi</strong>, A Prati'
collection: publications
category: manuscripts
permalink: /publication/2022-07-01-self-balanced-rcnn
excerpt: 'We propose SBR-CNN, an evolution of HTC with loop mechanisms for box and mask refinement and an improved GRoIE, addressing IoU and feature-level imbalances and reaching 45.3% / 41.5% AP on COCO with a ResNet-50 backbone.'
date: 2022-07-01
venue: 'JVCIR'
paperurl: 'https://arxiv.org/pdf/2404.16633'
citation: 'Leonardo Rossi, Akbar Karimi, and Andrea Prati. 2022. Self-Balanced R-CNN for Instance Segmentation. <i>Journal of Visual Communication and Image Representation</i>.'
---
Current state-of-the-art two-stage models on instance segmentation task suffer from several types of imbalances. In this paper, we address the Intersection over the Union (IoU) distribution imbalance of positive input Regions of Interest (RoIs) during the training of the second stage. Our Self-Balanced R-CNN (SBR-CNN), an evolved version of the Hybrid Task Cascade (HTC) model, brings brand new loop mechanisms of bounding box and mask refinements. With an improved Generic RoI Extraction (GRoIE), we also address the feature-level imbalance at the Feature Pyramid Network (FPN) level, originated by a non-uniform integration between low- and high-level features from the backbone layers. In addition, the redesign of the architecture heads toward a fully convolutional approach with FCC further reduces the number of parameters and obtains more clues to the connection between the task to solve and the layers used. Moreover, our SBR-CNN model shows the same or even better improvements if adopted in conjunction with other state-of-the-art models. In fact, with a lightweight ResNet-50 as backbone, evaluated on COCO minival 2017 dataset, our model reaches 45.3% and 41.5% AP for object detection and instance segmentation, with 12 epochs and without extra tricks.
