---
title: 'Coordinating Multiple RL Agents on Overcooked'
layout: note
image: /assets/img/posts/coordinating-multiple-rl-agents-overcooked-01.jpg
image-thumb: /assets/img/posts/coordinating-multiple-rl-agents-overcooked-01-mini.jpg
image-caption: "Screenshot of gameplay of Overcooked 2. [Image is taken from [Wikimedia Commons](https://en.wikipedia.org/wiki/File:Overcooked_2_screenshot.jpg), a freely licensed media file repository.]"
description: Bayesian Delegation enables agents to infer the hidden intentions of others
tags:
- research
- reinforcement learning
---

Collaboration is challenging. It requires cooperation by coordinate our plans and our actions. Whether working in a project group or playing a cooperative game, finding ways to work together efficiently can be a challenge.

People make independent decisions, and their intentions are unobserved. Our actions can reveal our intentions, but predicting these intentions can be difficult because of uncertainty and ambiguity, as multiple intentions can produce the same action.

The ability to understand intentions from actions is called _theory-of-mind_. Humans rely on this ability to cooperate in coordinated ways. Similarly, figuring out how to coordinate a collaborative endeavor is a fundamental challenge for any reinforcement learning (RL) agent in a multi-agent world.

In this research work done by MIT, they study the ability of multiple RL agents cooking a meal together. The RL environment used in this research is inspired by the video game, _Overcooked_.

# What is Overcooked?

For those of you who have not heard of the game, Overcooked is a cooperative cooking game, where you and your fellow chefs must prepare, cook and serve a variety of orders before your customers get angry.

{% include youtube.html
  link="https://www.youtube.com/embed/gEjbXb_eZcs"
%}

To fulfill an order, it requires a series of sub-tasks. For example, making a salad will need the chef to pick up a tomato and lettuce, chop them up, and serve them on a plate. The goal of the game is to serve the food as quickly as possible.

In this study, the MIT team will not train their RL agents on the actual game; instead, it is a 2D grid-world kitchen environment. The kitchens are built with counters and knife stations. Objects such as ingredients (_tomato and lettuce_) and plates are placed on the counters.

The RL agents, the chefs, can move up, down, left or right, or stay still. Agents pick up objects by moving into them and put down by moving into a counter while holding them. They can chop food by carrying the food to a knife station and place food on plates by walking to the plates. The agents can only carry one object at a time, and they cannot move through each other, into the same space, or through counters.

This figure shows the Overcooked environment and the sub-tasks to deliver a salad. [[source](https://arxiv.org/pdf/2003.11778.pdf)]

{% include figure.html
  file="/assets/img/posts/coordinating-multiple-rl-agents-overcooked-02.png"
  caption="The Overcooked environment and the sub-tasks to deliver a salad. [[source](https://arxiv.org/pdf/2003.11778.pdf)]"
%}

The objective of each episode is to prepare the salad recipe in as few time steps as possible. The environment terminates after either the agents bring the finished dish to the serving counter or when 100-time steps have elapsed.

# Objectives

There are three objectives or challenges that these RL agents need to perform:

1. **Divide and conquer:** RL agents should work in parallel when sub-tasks can be efficiently carried out individually. We want to see if these two RL agents can collaborate by first dividing the sub-tasks up, where one chops the tomato and the other chops the lettuce. This doubles the efficiency of the pair by completing sub-tasks in parallel.
2. **Cooperation:** RL agents should work together on the same sub-task when most efficient or necessary because some sub-tasks may require multiple chefs to work together. For example, if only one can use the knife and only the other can reach the tomatoes, they must cooperate in chopping the tomato.
3. **Spatio-temporal movement:** In all cases, agents must coordinate their actions in space and time to avoid interfering with others and be mutually responsive.

# **A new method to infer other’s intention**

The team developed a method, _Bayesian Delegation_, a new algorithm for decentralized multi-agent coordination. It leverages Bayesian inference with inverse planning to rapidly infer the sub-tasks others are working on. Bayesian Delegation models the latent intentions of others to dynamically decide whether to divide-and-conquer sub-tasks or to cooperate on the same sub-task.

This probabilistic approach allows agents to predict the intentions of other agents under uncertainty and ambiguity. Inferring the sub-tasks others are working on enables each agent to select the right sub-task when multiple sub-tasks are possible. As such, the agents can efficiently delegate their actions to the most high-value collaborative tasks for collective success.

They evaluated their method, and the performance shows that:

1. Bayesian Delegation outperforms existing approaches, completing all environments less time than alternative methods, and maintaining performance even when scaled up to larger teams.
2. Bayesian Delegation is an ad-hoc collaborator. It performs better than baselines when paired with alternative agents.
3. Bayesian Delegation aligned with many of the fine-grained variations in human judgments. Although the model was never trained on human data or other agents’ behavior, it was the best ad-hoc collaborator and human inferences predictor.

Here shows the performance results for each recipe composition for two agents. [[source](https://arxiv.org/pdf/2003.11778.pdf)]

{% include figure.html
  file="/assets/img/posts/coordinating-multiple-rl-agents-overcooked-03.png"
  caption="Performance results for each recipe composition for two agents. [[source](https://arxiv.org/pdf/2003.11778.pdf)]"
%}

# Conclusion

Bayesian Delegation enables efficient ad-hoc coordination by rapidly inferring the sub-tasks of others. It is interesting to see how multiple RL agents can dynamically align their beliefs about who is doing what and determine when they should help another agent on the same sub-task and when they should work divide and conquer for increased efficiency.

It also enables them to complete sub-tasks that neither agent could achieve on its own. These RL agents reflect many natural aspects of human theory-of-mind and cooperation. Like people, Bayesian Delegation makes predictions about sub-task allocations from only sparse data and does so in ways consistent with human judgments.