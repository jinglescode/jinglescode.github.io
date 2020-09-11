---
title: Babies are awesome… Humans are the OG neural net.
layout: note
image: /assets/img/posts/babies-awesome-humans-og-neural-net-01.jpg
image-thumb: /assets/img/posts/babies-awesome-humans-og-neural-net-01-mini.jpg
image-caption: "Image by [Jan Helebrant](https://pixabay.com/users/Juhele-3094317/) from Pixabay"
description: Even though AI and neuroscience are similar in many ways, they are not identical.
tags:
- neuroscience
---

> “Babies are awesome… Humans are the OG neural net.” — Elon Musk, during a recent [Joe Rogan interview](https://www.youtube.com/watch?v=RcYjXbSJBN8) as they were discussing about his newborn, X Æ A-12.

Indeed, there are many similarities between how our [brains are wired and how a neural network works](https://jinglescode.github.io/datascience/2020/03/03/fascinating-relationship-between-ai-neuroscience/). The essentials of an AI neural network are similar to the human brain, simulating what the brain does during the learning processing. Even though AI and neuroscience are similar in many ways, they are not identical.

Just like, we don’t build submarines to swim like a fish; instead, we borrowed the principles of hydrodynamics and applied them to build submarines. Before the Wright brothers, people designed wings to flap like birds. But the Wright brothers solved the problem of flights, by stop trying to build perfect birds’ wings. Rather they studied wings’ patterns and the dynamics of the air that flows over and under the wings that generate lift.

In the same way, we could look at the human brain for inspiration and borrow valuable concepts. AI researchers dedicated their time trying to mimic the internal processes of a human brain, by understanding biological brains, could play a vital role in building intelligent machines.

# Episodic Memory

The key to building an intelligent system relies on [memory systems](https://psycnet.apa.org/doiLanding?doi=10.1037%2F0003-066X.40.4.385) to remember past experiences. In the brain, that is the [hippocampus](https://en.wikipedia.org/wiki/Hippocampus), which plays a vital role in the consolidation of information, learning, and memory.

In [reinforcement learning](https://www.nature.com/articles/nature16961), this allows the value of actions to be learned incrementally through repeated experience and stored in memory, known as episodic memory. One key ingredient in [Deep Q-network](https://arxiv.org/abs/1312.5602) (DQN) is “experience replay,” whereby the network stores actions’ values learned through experiences, and then “replays” it. DQN stores experiences such as action and reward outcomes associated with every Atari game screens or StarCraft scenario. It selects actions based on the similarity between the current situation and the previous experiences stored in memory, taking the actions that yield the highest reward.

Experience replay allows reinforcement learning to learn from successes or failures that occurred in the past, whereby actions sequence leading to rewards or punishments are internally re-enacted. Experiences stored in replay buffer in DQN are implemented like a primitive hippocampus, allowing consolidation, learning, and memory to take place.

# Working Memory

Humans don’t start their thinking from scratch every second; instead, our thoughts have persistence. As you read this sentence, your understanding of a sentence is based on a sequence of words. You use existing knowledge and generate new information.

Human intelligence is defined by our remarkable ability to maintain and manipulate information within an active store, known as [working memory](https://www.sciencedirect.com/science/article/pii/S0079612308626886). Unlike episodic memory that is about remembering the past, working memory enables [cognition](https://en.wikipedia.org/wiki/Cognition), a mental process of acquiring knowledge and understanding through thought, experience, and the senses.

Our ability to maintain and process information over time has led AI researchers to develop [recurrent neural network architectures](https://github.com/kjw0612/awesome-rnn). These networks have loops in them, allowing the information to persist. It has been applied in a variety of applications, such as [natural language processing](http://cs224d.stanford.edu/index.html) and [speech recognition](http://www.cs.toronto.edu/~fritz/absps/RNN13.pdf). It has also been used to create captions describing an image, by picking a part of the image to look at for every word it outputs. These networks work tremendously well on a large variety of problems, particularly the [long-short-term memory networks](https://www.mitpressjournals.org/doi/abs/10.1162/neco.1997.9.8.1735), which achieved state of the art performances across a variety of domains.

# Attention

Unlike most CNN models that work directly on the entire image to determine if a cat exists, our [visual attention shifts strategically](https://link.springer.com/chapter/10.1007/978-94-009-3833-5_5) to objects. Instead of processing the whole image, we center our processing resources, [isolating to the information that is relevant](https://www.jneurosci.org/content/13/11/4700.short) at any given moment.

Such attention mechanisms have been a source of inspiration for AI architectures, intending to ignore irrelevant objects in an image, and focus on what is relevant. This has also allowed AI practitioners to scale computational cost with the size of the input image. Attention mechanisms have led to produce impressive performances at difficult [multi-object recognition tasks](http://papers.nips.cc/paper/5542-recurrent-models-of-visual-attention) in the presence of clutter. It has also enabled image-to-caption generation.

While attention was initially thought of as an orienting mechanism for perception, it has led to state of the art performances in [machine translation](https://www.tensorflow.org/tutorials/text/nmt_with_attention) and applied in [Google Translate](https://research.google/pubs/pub45610/). Its success is owed to its ability to generalize well to long sentences by selectively focusing on sub-parts of the sentence during translation.

# Transfer Learning

Humans have an [inherent ability to transfer knowledge](https://psycnet.apa.org/record/2002-01514-006) gained from one context and applied in new situations. The knowledge we acquired while learning about one task, we can generalize that experience the same way to solve related tasks. We don’t learn everything from the ground up when we attempt to learn something new. Instead, we leverage the knowledge from what we have learned in the past.

For example, we recognized cars as an object that have wheels and doors, and they are of a particular shape and size. We can use this knowledge gained when trying to recognize trucks without re-learning how a wheel looks like. Similarly, we can efficiently learn Italian after learning French as we generalize common grammatical characteristics and word similarities.

Despite being second nature for humans, [transfer learning](https://ieeexplore.ieee.org/abstract/document/5288526/) is a research problem in machine learning. AI researchers focus on utilizing the stored knowledge gained from one application and applying it to a different but related problem. The key motivation for transfer learning in the context of deep learning is the lack of annotated data for diverse domains. As machine learning approaches rely on the availability of an adequate amount of annotated training data, it is often costly to obtain sufficient labeled training data.

In computer vision, one of the successful uses of using transfer learning is in the [ImageNet Challenge](http://image-net.org/), where participants were provided a subset of ImageNet training data containing the 1000 categories and 1.2 million images.

For natural language processing, word embeddings such as [Word2vec](https://papers.nips.cc/paper/5021-distributed-representations-of-words-and-phrases-and-their-compositionality.pdf), where the semantic meaning of a word is trained from source data like Wikipedia and applied it to sentiment analysis and document classification.

In [speech recognition](https://arxiv.org/abs/1706.00290), models developed for English has been successfully used to improve speech recognition capabilities for other languages.

{% include youtube.html
  link="https://www.youtube.com/embed/RcYjXbSJBN8"
%}
