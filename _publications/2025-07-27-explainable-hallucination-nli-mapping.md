---
title: "Explainable Hallucination through Natural Language Inference Mapping"
authors: 'WF Chen, Z Zhao, <strong>A Karimi</strong>, L Flek'
collection: publications
category: conferences
permalink: /publication/2025-07-27-explainable-hallucination-nli-mapping
excerpt: 'We introduce HaluMap, a training-free, model-agnostic framework that detects hallucinations by mapping NLI entailment and contradiction relations between inputs and outputs, outperforming other training-free NLI-based methods by five points with interpretable explanations.'
date: 2025-07-27
venue: 'Findings of ACL'
paperurl: 'https://aclanthology.org/2025.findings-acl.96.pdf'
citation: 'Wei-Fan Chen, Zhixue Zhao, Akbar Karimi, and Lucie Flek. 2025. Explainable Hallucination through Natural Language Inference Mapping. In <i>Findings of the Association for Computational Linguistics: ACL 2025</i>, pages 1888–1896, Vienna, Austria. Association for Computational Linguistics.'
---
Large language models (LLMs) often generate hallucinated content, making it crucial to identify and quantify inconsistencies in their outputs. We introduce HaluMap, a post-hoc framework that detects hallucinations by mapping entailment and contradiction relations between source inputs and generated outputs using a natural language inference (NLI) model. To improve reliability, we propose a calibration step leveraging intra-text relations to refine predictions. HaluMap outperforms state-of-the-art NLI-based methods by five percentage points compared to other training-free approaches, while providing clear, interpretable explanations. As a training-free and model-agnostic approach, HaluMap offers a practical solution for verifying LLM outputs across diverse NLP tasks. The resources of this paper are available at https://github.com/caisa-lab/acl25-halumap.
