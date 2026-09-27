---
title: "More Agents Improve Math Problem Solving but Adversarial Robustness Gap Persists"
authors: 'K Alavi, Z Yeltay, L Flek, <strong>A Karimi</strong>'
collection: publications
category: conferences
permalink: /publication/2026-07-01-more-agents-math-robustness
excerpt: 'We evaluate multi-agent sampling-and-voting on adversarially perturbed math questions, finding that more agents improve accuracy but the robustness gap persists.'
date: 2026-07-01
venue: 'Findings of ACL 2026'
paperurl: 'https://aclanthology.org/2026.findings-acl.2158.pdf'
citation: 'Khashayar Alavi, Zhastay Yeltay, Lucie Flek, and Akbar Karimi. 2026. More Agents Improve Math Problem Solving but Adversarial Robustness Gap Persists. In <i>Findings of the Association for Computational Linguistics: ACL 2026</i>, pages 43457–43475, San Diego, California, United States. Association for Computational Linguistics.'
---
When LLM agents work together, they seem to be more powerful than a single LLM in mathematical question answering. However, are they also more robust to adversarial inputs? We investigate this question using adversarially perturbed math questions. These perturbations include punctuation noise with three intensities (10%, 30%, 50%), plus real-world and human-like typos (WikiTypo, R2ATA). Using a unified sampling-and-voting framework (Agent Forest), we evaluate six open-source models (Qwen3-4B/14B, Llama3.1-8B, Mistral-7B, Gemma3-4B/12B) across four benchmarks (GSM8K, MATH, MMLU-Math, MultiArith), with various numbers of agents n = {1, 2, 5, 10, 15, 20, 25}. Our findings show that 1) Noise type matters: punctuation noise harm scales with its severity, and the human typos remain the dominant bottleneck, yielding the largest gaps to Clean accuracy and the highest attack success rate (ASR) even with a large number of agents; 2) Collaboration reliably improves accuracy as the number of agents, n, increases, with the largest gains from n=1 to n=5 and diminishing returns beyond n≈10. However, the adversarial robustness gap persists regardless of the agent count.
