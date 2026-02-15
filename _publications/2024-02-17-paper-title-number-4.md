---
title: "Label-Consistent Data Generation for Aspect-Based Sentiment Analysis Using LLM Agents"
collection: publications
category: conferences
permalink: 'To appear at WASSA @ EACL 2026'
excerpt: 'We propose an agentic data augmentation method for Aspect-Based Sentiment Analysis (ABSA) that uses iterative generation and verification to produce high-quality synthetic training examples.'
date: 2026-03-24
venue: '(soon to appear) WASSA @ EACL 2026'
paperurl: 'https://akkarimi.github.io'
# citation: 'Coming soon ...'
---
We propose an agentic data augmentation method for Aspect-Based Sentiment Analysis (ABSA) that uses iterative generation and verification to produce high-quality synthetic training examples. To isolate the effect of agentic structure, we also develop a closely matched prompting-based baseline using the same model and instructions. Both methods are evaluated across three ABSA subtasks—Aspect Term Extraction (ATE), Aspect Sentiment Classification (ATSC), and Aspect Sentiment Pair Extraction (ASPE)—four SemEval datasets, and two encoder–decoder models: T5-Base and Tk-Instruct. Our results show that the agentic augmentation outperforms raw prompting in label preservation of the augmented data, especially when the tasks require aspect term generation. In addition, when combined with real data, agentic augmentation provides higher gains, consistently outperforming prompting-based generation. These benefits are most pronounced for T5-Base, while the more heavily pretrained Tk-Instruct exhibits smaller improvements. As a result, augmented data helps T5-Base achieve comparable performance with its counterpart.