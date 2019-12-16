---
title: Readings on Reinforcement Learning
layout: note
description: Notes on my readings in research papers containing reinforcement learning
---

[Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf)

What's the reason for performing this research?
- like humans and animals, able to use high-dimensional sensory inputs, and generalize past experience, apply on new situations

Objectives of the study?
- DQN, capable of learning to excel at a diverse array of challenging tasks
- receiving only the pixels, achieve a level comparable to that of a professional human games tester across a set of 49 games, using the same algorithm, network architecture and hyperparameters
- agent to select actions in a fashion that maximizes cumulative future reward
- deep convolutional neural network to approximate the optimal action-value function

Main findings
- experience replay - randomize over data, removing correlations in observation sequence and smooth changes in the data distribution
- iterative update that adjust action values (Q), towards target values that are only periodically updated, reducing correlations with the target
- instead use an architecture in which there is a separate output unit for each possible action, and only the state representation is an input to the neural network. The outputs correspond to the predicted Q-values of the individual actions for the input state. The main advantage of this type of architecture is the ability to compute Q-values for all possible actions in a given state with only a single forward pass through the network
- As the scale of scores varies greatly from game to game, we clipped all positive rewards at 1 and all negative rewards at -1, leaving 0 rewards unchanged. Clipping the rewards in this manner limits the scale of the error derivatives and makes it easier to use the same learning rate across multiple games. 


[Luketina, Jelena, et al. "A Survey of Reinforcement Learning Informed by Natural Language." arXiv preprint arXiv:1906.03926 (2019).](https://arxiv.org/pdf/1906.03926.pdf)

What's the reason for performing this research?
- learning the correspondence between language and environment features remains a significant research challenge

Objectives of the study?
- instead of just using simple grammar, limited vocabulary, highly structured, more research into learning from unstructured or descriptive language corpora that reflect the semantics and diversity of the real world
- two big idea:
    - language-conditional RL: in which interaction with language is necessitated by the problem formulation itself
        - instructions given to perform simple task or to navigate to a specific entity
        - simple vocabulary instructions can associate text to task, but more flexible approach is to use a single policy
    - language-assisted RL: in which language is used to facilitate learning
        - unstructured and descriptive textual information is abundant in wiki etc, but requires retrieving useful information for a given context and grounding that information with respect to observations

[Mnih, Volodymyr, et al. "Asynchronous methods for deep reinforcement learning." International conference on machine learning. 2016.](http://www.jmlr.org/proceedings/papers/v48/mniha16.pdf)

What's the reason for performing this research?
- deep RL based on experience replay achieved success but uses more memory and computation
- storing agent experience replay memory, aggregating over memory in this way reduces non-stationarity and decorrelates updates, but at the same time limits the methods to off-policy reinforcement learning algorithms

Objectives of the study?
- train faster and less resources than DQN
- instead of experience replay, asynchronously execute multiple agents in parallel, on multiple instances of the environment
    - parallel agents will be experiencing a variety of different states
    - instead of GPUs, this is able to run on a single machine with a standard multi-core CPU
    - achieves better results, in far less time than previous GPU-based algorithms, using far less resource than massively distributed approaches
- aim to find RL algorithms that can train deep neural network policies reliably and without large resource requirements
- multiple actors-learners with different exploration policies running in parallel to explore different parts of the environment
- do not use a replay memory and rely on parallel actors employing different exploration policies to perform the stabilizing role undertaken by experience replay in the DQN training algorithm