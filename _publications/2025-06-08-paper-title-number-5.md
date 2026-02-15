---
title: "AEDA: An Easier Data Augmentation Technique for Text Classification"
collection: publications
category: conferences
permalink: /publication/2024-02-17-paper-title-number-4
excerpt: 'This paper proposes AEDA (An Easier Data Augmentation) technique to help improve the performance on text classification tasks.'
date: 2021-08-30
venue: 'Findings of EMNLP'
paperurl: 'https://aclanthology.org/2021.findings-emnlp.234.pdf'
# citation: 'Your Name, You. (2024). &quot;Paper Title Number 3.&quot; <i>GitHub Journal of Bugs</i>. 1(3).'
---

This paper proposes AEDA (An Easier Data Augmentation) technique to help improve the performance on text classification tasks. AEDA includes only random insertion of punctuation marks into the original text. This is an easier technique to implement for data augmentation than EDA method (Wei and Zou, 2019) with which we compare our results. In addition, it keeps the order of the words while changing their positions in the sentence leading to a better generalized performance. Furthermore, the deletion operation in EDA can cause loss of information which, in turn, misleads the network, whereas AEDA preserves all the input information. Following the baseline, we perform experiments on five different datasets for text classification. We show that using the AEDA-augmented data for training, the models show superior performance compared to using the EDA-augmented data in all five datasets. The source code will be made available for further study and reproduction of the results.
