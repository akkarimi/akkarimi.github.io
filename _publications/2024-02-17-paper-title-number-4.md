---
title: "Label-Consistent Data Generation for Aspect-Based Sentiment Analysis Using LLM Agents"
authors: 'MHA Monfared, L Flek, <strong>A Karimi</strong>'
collection: publications
category: conferences
permalink: /publication/2026-03-24-label-consistent-absa
excerpt: 'We propose an agentic data augmentation method for Aspect-Based Sentiment Analysis (ABSA) that uses iterative generation and verification to produce high-quality synthetic training examples.'
date: 2026-03-24
venue: 'WASSA Workshop @ EACL 2026'
paperurl: 'https://aclanthology.org/2026.wassa-1.17.pdf'
citation: 'Mohammad Hossein Akbari Monfared, Lucie Flek, and Akbar Karimi. 2026. Label-Consistent Data Generation for Aspect-Based Sentiment Analysis Using LLM Agents. In <i>The Proceedings for the 15th Workshop on Computational Approaches to Subjectivity, Sentiment Social Media Analysis (WASSA 2026)</i>, pages 222–234, Rabat, Morocco. Association for Computational Linguistics.'
---
We propose an agentic data augmentation method for Aspect-Based Sentiment Analysis (ABSA) that uses iterative generation and verification to produce high-quality synthetic training examples. To isolate the effect of agentic structure, we also develop a closely matched prompting-based baseline using the same model and instructions. Both methods are evaluated across three ABSA subtasks—Aspect Term Extraction (ATE), Aspect Sentiment Classification (ATSC), and Aspect Sentiment Pair Extraction (ASPE)—four SemEval datasets, and two encoder–decoder models: T5-Base and Tk-Instruct. Our results show that the agentic augmentation outperforms raw prompting in label preservation of the augmented data, especially when the tasks require aspect term generation. In addition, when combined with real data, agentic augmentation provides higher gains, consistently outperforming prompting-based generation. These benefits are most pronounced for T5-Base, while the more heavily pretrained Tk-Instruct exhibits smaller improvements. As a result, augmented data helps T5-Base achieve comparable performance with its counterpart.