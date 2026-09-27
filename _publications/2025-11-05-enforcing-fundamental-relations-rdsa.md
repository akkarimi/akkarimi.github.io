---
title: "Enforcing Fundamental Relations via Adversarial Attacks on Input Parameter Correlations"
authors: 'L Flek, PA Jung, <strong>A Karimi</strong>, T Saala, A Schmidt, M Schott, P Soldin, C Wiebusch'
collection: publications
category: manuscripts
permalink: /publication/2025-11-05-enforcing-fundamental-relations-rdsa
excerpt: 'We present the Random Distribution Shuffle Attack (RDSA), which targets correlations between observables rather than individual features, and show that adversarial training with it improves classification on particle physics and five other tasks.'
date: 2025-11-05
venue: 'Computing and Software for Big Science'
paperurl: 'https://link.springer.com/content/pdf/10.1007/s41781-025-00148-1.pdf'
citation: 'Lucie Flek, Philipp Alexander Jung, Akbar Karimi, Timo Saala, Alexander Schmidt, Matthias Schott, Philipp Soldin, and Christopher Wiebusch. 2025. Enforcing Fundamental Relations via Adversarial Attacks on Input Parameter Correlations. <i>Computing and Software for Big Science</i>, 9(1), 19.'
---
Correlations between input parameters play a crucial role in many scientific classification tasks, since these are often related to fundamental laws of nature. For example, in high energy physics, one common deep learning use-case is the classification of signal and background processes in particle collisions. In many such cases, the fundamental principles of the correlations between observables are often better understood than the actual distributions of the observables themselves. In this work, we present a new adversarial attack algorithm called Random Distribution Shuffle Attack (RDSA), emphasizing the correlations between observables in the network rather than individual feature characteristics. Correct application of the proposed novel attack can result in a significant improvement in classification performance—particularly in the context of data augmentation—when using the generated adversaries within adversarial training. Given that correlations between input features are also crucial in many other disciplines, we demonstrate the RDSA effectiveness on six classification tasks, including two particle collision challenges (using CERN Open Data), hand-written digit recognition (MNIST784), human activity recognition (HAR), weather forecasting (Rain in Australia), and ICU patient mortality (MIMIC-IV), demonstrating a general use case beyond fundamental physics for this new type of adversarial attack algorithm.
