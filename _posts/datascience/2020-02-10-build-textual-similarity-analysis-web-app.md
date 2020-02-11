---
title: How to Build Textual Similarity Analysis Web App
layout: note
image: /assets/img/posts/ai-youtube-01.webp
description: A journey from word embeddings to universal sentence encoder to web-app demo
category: datascience
tags:
- resources
---

![cover](/assets/img/posts/ai-youtube-02.webp#skinny_image)

Have you wondered how search engines understand your queries and match the relevant results? How chatbot extract your intent from your questions and provide the most appropriate response?

In this story, I will detail each component needed to build a textual similarity analysis web-app and include further readings for those who want to dig deeper.

Feel free to try the [textual similarity analysis web-app](https://jinglescode.github.io/demos/nlp-sentence-encoder) with your sentences, and comment below on which cases it does well, and when it doesn't.

---

[Universal sentence encoder](https://arxiv.org/pdf/1803.11175.pdf) is a language model that encodes text into fixed-length embeddings. It aims to *convert sentences into semantically-meaningful fixed-length vectors*.

![Universal Sentence Encoder encodes text into high dimensional vectors, taken from TensorFlow Hub](https://cdn-images-1.medium.com/max/1600/1*8Qy3hv5iLnKnWVhpjjl2jQ.png)

With the vectors produced by the universal sentence encoder, we can use it for various natural language processing tasks, such as [classification](https://en.wikipedia.org/wiki/Sentiment_analysis) and [textual similarity analysis](https://en.wikipedia.org/wiki/Semantic_similarity).

## In the past

Before universal sentence encoder, when we need sentence embeddings, a common approach is by averaging individual word embeddings in a sentence. Whether if it is a ten words sentence or it is a thousand words document; averaging each embedding will produce a fixed-length vector.

Unfortunately, by averaging the vectors, we lose the context of the sentence and sequence of words in the sentence in the process.

## And now

[Yinfei Yang et al.](https://arxiv.org/pdf/1804.07754.pdf) introduce a way to learn sentence representations for semantic textual similarity using conversational data.

For example, "How old are you?" and "What is your age?", both questions are semantically similar; a chatbot can reply the same answer "I am 20 years old".

![Sentences are semantically similar if they can be answered by the same responses. taken from paper](https://cdn-images-1.medium.com/max/1600/1*khuFQ0R7LOrxeSNKSzbpIQ.png)

In contrast, while "How are you?" and "How old are you?" contain identical words, both sentences have different meanings.

!["How are you?" and "How old are you?" have 33% similarity even though having identical words](https://cdn-images-1.medium.com/max/1600/1*s6BBJEE4fWv3ajeyJ9Trzw.png)

[Logeswaran et al.](https://arxiv.org/pdf/1803.02893.pdf) introduced a framework to learn sentence representations from unlabelled data.

In this paper, the decoder used in prior methods is replaced with a classifier that chooses the target sentence from a set of candidate sentences; it improves the performance of question and answer system.

![Replaces the decoder from prior methods with a classifier which chooses the target sentence from a set of candidate sentences, taken from paper](https://cdn-images-1.medium.com/max/1600/1*JX-jV49NFDw9WhsIJ3Iz0w.png)

---

## Codes

I will be using is the universal sentence encoder package from TensorFlow.js. We can install universal sentence encoder using npm.

```
$ npm install @tensorflow-models/universal-sentence-encoder
```

This is an example to show how we can extract embeddings from each sentence using universal sentence encoder.

```
import * as use from '@tensorflow-models/universal-sentence-encoder';
use.load().then(model => {
  const sentences = [
    'Hello.',
    'How are you?'
  ];
  model.embed(sentences).then(embeddings => {
    embeddings.print(true /* verbose */);
  });
});
```

## Demo

Feel free to try the [textual similarity analysis web-app](https://jinglescode.github.io/demos/nlp-sentence-encoder) with your sentences, and comment below on which cases it does well, and when it doesn't.
