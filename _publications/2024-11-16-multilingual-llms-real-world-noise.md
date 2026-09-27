---
title: "Exploring Robustness of Multilingual LLMs on Real-World Noisy Data"
authors: 'A Aliakbarzadeh, L Flek, <strong>A Karimi</strong>'
collection: publications
category: conferences
permalink: /publication/2024-11-16-multilingual-llms-real-world-noise
excerpt: 'We study how real-world spelling mistakes from Wikipedia edit history affect 9 multilingual language models across NLI, NER, and intent classification in 6 languages, finding a 2.3 to 4.3 point performance gap, with mT5 models the most robust.'
date: 2024-11-16
venue: 'Eighth Widening NLP Workshop (WiNLP 2024) Phase II'
paperurl: 'https://arxiv.org/pdf/2501.08322'
citation: 'Amirhossein Aliakbarzadeh, Lucie Flek, and Akbar Karimi. 2024. Exploring Robustness of Multilingual LLMs on Real-World Noisy Data. In <i>Eighth Widening NLP Workshop (WiNLP 2024) Phase II</i>.'
---
Large Language Models (LLMs) are trained on Web data that might contain spelling errors made by humans. But do they become robust to similar real-world noise? In this paper, we investigate the effect of real-world spelling mistakes on the performance of 9 language models, with parameters ranging from 0.2B to 13B, in 3 different NLP tasks, namely Natural Language Inference (NLI), Name Entity Recognition (NER), and Intent Classification (IC). We perform our experiments on 6 different languages and build a dictionary of real-world noise for them using the Wikipedia edit history. We show that the performance gap of the studied models on the clean and noisy test data averaged across all the datasets and languages ranges from 2.3 to 4.3 absolute percentage points. In addition, mT5 models, in general, show more robustness compared to BLOOM, Falcon, and BERT-like models. In particular, mT5 (13B), was the most robust on average overall, across the 3 tasks, and in 4 of the 6 languages.
