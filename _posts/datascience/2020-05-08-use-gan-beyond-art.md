---
title: Can We Use GANs Beyond Generating Art?
layout: note
image: /assets/img/posts/use-gan-beyond-art-01.webp
image-thumb: /assets/img/posts/use-gan-beyond-art-01-mini.webp
image-caption: "Image by Comfreak from Pixabay"
description: GANs are relatively new, with many research directions still remaining open.
category: datascience
tags:
- computer vision
---

Generative Adversarial Networks (GANs) has progressed substantially, where it can synthesize near-perfect human faces [[1](https://arxiv.org/abs/1912.04958)], restores color and quality of old videos [[2](http://iizuka.cs.tsukuba.ac.jp/projects/remastering/en/index.html)], and generate realistic Deepfake videos [[3](https://aliaksandrsiarohin.github.io/first-order-model-website/)].

GANs focus primarily on sample generation. The basic idea of GANs consists of a generator and a discriminator. The generator produces samples that are intended to come from the training data, while discriminator judges samples generated to determine whether they are real or fake. An illustration: a counterfeiter trying to learn to make money that is distinguishable from genuine money while the police learn to catch counterfeit money.

As GANs have most successes and mainly applied in image synthesis, can we use GAN beyond generating art?

### Image-to-Image Translation

Similar to machine translation that translates from a source language into target languages by learning sentence/phrase pair mappings, image-to-image translation learns the mapping between an input image and an output image pairs.

{% include figure.html
  file="/assets/img/posts/use-gan-beyond-art-02.webp"
  caption="Automatically 'translate' an image from one into the other [[paper](https://arxiv.org/pdf/1703.10593.pdf)]"
%}

In a study done by Berkeley [[4](https://arxiv.org/pdf/1703.10593.pdf)], their algorithm learns to translate an image from one into another. Such as from zebras to horses, and from summer to winter. In their work, they presented a method to learn from the absence of paired examples using adversarial loss.

### Text Generation

The nature of text makes it difficult for GAN to generate sequences of discrete tokens. Because the discrete outputs (from the generative model) make it difficult to pass the gradient update from the discriminative model to the generative model.

Nevertheless, Yu et al. [[5](https://arxiv.org/pdf/1609.05473.pdf)] proposed SeqGAN to generate Chinese poems. Using [BLEU score](https://en.wikipedia.org/wiki/BLEU), a metric for evaluating the quality of text, SeqGAN generated texts comparably to human poem composition. Furthermore, they mix real and generated Chinese poems and invited experts on Chinese poems to judge whether humans or machines create each poem. The judges were not able to differentiate between genuine and machine-generated poems.

### Generate Network Graph

The ability to generate synthetic but realistic graphs have been important for anomaly detection, which is to tell abnormal networks from normal ones. Graph generation techniques have been applied in physics, mathematics, sociology, biology, and computer science.

Bojchevski et al. [[6](https://arxiv.org/pdf/1803.00816.pdf)] proposed NetGAN that generates graphs that exhibit well-known network patterns trained using the Wasserstein GAN objective. Like typical GAN, NetGAN’s generator learns to generate random walks that are plausible in the real graph, while the discriminator distinguishes the graph from original graphs.

### Audio Synthesis

Synthesizing audio has been applied in creative sound design for music and film. These sound clips are stored in large databases of sounds effects, but sometimes an ideal sound effect might not exist in the library. What if we could generate sound effects of footsteps on a gravel path or sand by fine-tuning a few input parameters?

UC San Diego introduced WaveGAN [[7](https://arxiv.org/pdf/1802.04208.pdf)] that learns to synthesize audio to produce sounds effects. It has learned to generate kick and snare drum sound effects, and it can generate a variety of distinct bird vocalizations too. For piano sound generation, it captures a variety of key signatures and rhythmic patterns. Sound samples from their experiments can be found on their [website](https://chrisdonahue.com/wavegan_examples/).

Yu et al. [[5](https://arxiv.org/pdf/1609.05473.pdf)] also used SeqGAN to generate music by training on a collection of folk tunes in midi file format. In their work, they transformed the midi files into sequences of numbers from 1 to 88, to represent 88 pitches correspond to the keys on the piano. Their method outperformed existing algorithms but they did not provide analysis with human judgment.

----------

> GANs are a relatively new method, with many research directions still remaining open. — [Ian Goodfellow](https://arxiv.org/abs/1701.00160)

----------

[1] Karras, T., Laine, S., Aittala, M., Hellsten, J., Lehtinen, J. and Aila, T., 2019. Analyzing and improving the image quality of stylegan. _arXiv preprint arXiv:1912.04958_. [[https://arxiv.org/abs/1912.04958](https://arxiv.org/abs/1912.04958)]

[2] Iizuka, S. and Simo-Serra, E., 2019. DeepRemaster: temporal source-reference attention networks for comprehensive video enhancement. _ACM Transactions on Graphics (TOG)_, _38_(6), pp.1–13. [[http://iizuka.cs.tsukuba.ac.jp/projects/remastering/en/index.html](http://iizuka.cs.tsukuba.ac.jp/projects/remastering/en/index.html)]

[3] Siarohin, A., Lathuilière, S., Tulyakov, S., Ricci, E. and Sebe, N., 2019. First Order Motion Model for Image Animation. In _Advances in Neural Information Processing Systems_ (pp. 7135–7145).[[https://aliaksandrsiarohin.github.io/first-order-model-website/](https://aliaksandrsiarohin.github.io/first-order-model-website/)]

[4] Zhu, J.Y., Park, T., Isola, P. and Efros, A.A., 2017. Unpaired image-to-image translation using cycle-consistent adversarial networks. In _Proceedings of the IEEE international conference on computer vision_ (pp. 2223–2232). [[https://arxiv.org/pdf/1703.10593.pdf](https://arxiv.org/pdf/1703.10593.pdf)]

[5] Yu, L., Zhang, W., Wang, J. and Yu, Y., 2017, February. Seqgan: Sequence generative adversarial nets with policy gradient. In _Thirty-First AAAI Conference on Artificial Intelligence_. [[https://arxiv.org/pdf/1609.05473.pdf](https://arxiv.org/pdf/1609.05473.pdf)]

[6] Bojchevski, A., Shchur, O., Zügner, D. and Günnemann, S., 2018. Netgan: Generating graphs via random walks. _arXiv preprint arXiv:1803.00816_. [[https://arxiv.org/pdf/1803.00816.pdf](https://arxiv.org/pdf/1803.00816.pdf)]

[7] Donahue, C., McAuley, J. and Puckette, M., 2018. Adversarial audio synthesis. _arXiv preprint arXiv:1802.04208._ [[https://arxiv.org/pdf/1802.04208.pdf](https://arxiv.org/pdf/1802.04208.pdf)]
