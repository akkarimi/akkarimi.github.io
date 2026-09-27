---
title: "Uniparma at SemEval-2021 Task 5: Toxic Spans Detection Using CharacterBERT and Bag-of-Words Model"
authors: '<strong>A Karimi</strong>, L Rossi, A Prati'
collection: publications
category: conferences
permalink: /publication/2021-08-05-uniparma-semeval-toxic-spans
excerpt: 'We detect toxic spans by combining CharacterBERT, which handles misspelled toxic words through character-level embeddings, with a bag-of-words method that ensures frequently used toxic words are labeled.'
date: 2021-08-05
venue: 'SemEval 2021'
paperurl: 'https://aclanthology.org/2021.semeval-1.25.pdf'
citation: 'Akbar Karimi, Leonardo Rossi, and Andrea Prati. 2021. UniParma at SemEval-2021 Task 5: Toxic Spans Detection Using CharacterBERT and Bag-of-Words Model. In <i>Proceedings of the 15th International Workshop on Semantic Evaluation (SemEval-2021)</i>, pages 220–224, Online. Association for Computational Linguistics.'
---
With the ever-increasing availability of digital information, toxic content is also on the rise. Therefore, the detection of this type of language is of paramount importance. We tackle this problem utilizing a combination of a state-of-the-art pre-trained language model (CharacterBERT) and a traditional bag-of-words technique. Since the content is full of toxic words that have not been written according to their dictionary spelling, attendance to individual characters is crucial. Therefore, we use CharacterBERT to extract features based on the word characters. It consists of a CharacterCNN module that learns character embeddings from the context. These are, then, fed into the well-known BERT architecture. The bag-of-words method, on the other hand, further improves upon that by making sure that some frequently used toxic words get labeled accordingly. With a ~4 percent difference from the first team, our system ranked 36th in the competition. The code is available for further research and reproduction of the results.
