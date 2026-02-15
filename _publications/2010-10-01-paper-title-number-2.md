---
title: "ArithmAttack: Evaluating Robustness of LLMs to Noisy Context in Math Problem Solving"
collection: publications
category: conferences
permalink: /publication/2010-10-01-paper-title-number-2
excerpt: 'We propose ArithmAttack to examine how robust the LLMs are when they encounter noisy prompts that contain extra noise in the form of punctuation marks.'
date: 2025-08-01
venue: 'LLMSEC Workshop @ ACL'
# slidesurl: 'https://academicpages.github.io/files/slides2.pdf'
paperurl: 'https://aclanthology.org/2025.llmsec-1.5.pdf'
# citation: 'Your Name, You. (2010). &quot;Paper Title Number 2.&quot; <i>Journal 1</i>. 1(2).'
---

While Large Language Models (LLMs) have shown impressive capabilities in math problem-solving tasks, their robustness to noisy inputs is not well-studied. We propose ArithmAttack to examine how robust the LLMs are when they encounter noisy prompts that contain extra noise in the form of punctuation marks. While being easy to implement, ArithmAttack does not cause any information loss since words are not added or deleted from the context. We evaluate the robustness of eight LLMs, including LLama3, Mistral, Mathstral, and DeepSeek on noisy GSM8K and MultiArith datasets. Our experiments suggest that all the studied models show vulnerability to such noise, with more noise leading to poorer performances.