---
title: "Encoder Fine-tuning with Stochastic Sampling Outperforms Open-weight GPT in Astronomy Knowledge Extraction"
authors: 'S Rawat, L Flek, <strong>A Karimi</strong>'
collection: publications
category: conferences
permalink: /publication/2025-12-01-encoder-finetuning-astronomy
excerpt: 'We build a multi-task SciBERT system for classifying telescope references, semantic attributes, and instrument mentions in astronomy papers, using stochastic segment sampling and majority voting, which significantly outperforms an open-weight GPT baseline.'
date: 2025-12-01
venue: 'WASP Workshop @ IJCNLP-AACL 2025'
paperurl: 'https://aclanthology.org/2025.wasp-main.22.pdf'
citation: 'Shivam Rawat, Lucie Flek, and Akbar Karimi. 2025. Encoder Fine-tuning with Stochastic Sampling Outperforms Open-weight GPT in Astronomy Knowledge Extraction. In <i>Proceedings of the Third Workshop for Artificial Intelligence for Scientific Publications</i>, pages 195–200, Mumbai, India and virtual. Association for Computational Linguistics.'
---
Scientific literature in astronomy is rapidly expanding, making it increasingly important to automate the extraction of key entities and contextual information from research papers. In this paper, we present an encoder-based system for extracting knowledge from astronomy articles. Our objective is to develop models capable of classifying telescope references, detecting auxiliary semantic attributes, and recognizing instrument mentions from textual content. To this end, we implement a multi-task transformer-based system built upon the SciBERT model and fine-tuned for astronomy corpora classification. To carry out the fine-tuning, we stochastically sample segments from the training data and use majority voting over the test segments at inference time. Our system, despite its simplicity and low-cost implementation, significantly outperforms the open-weight GPT baseline.
