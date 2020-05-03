---
title: How Radiologists used Computer Vision to Diagnose COVID-19
layout: note
image: /assets/img/posts/radiologists-computer-vision-diagnose-covid-01.webp
image-thumb: /assets/img/posts/radiologists-computer-vision-diagnose-covid-01-mini.webp
image-caption: "Image by [mohamed Hassan](https://pixabay.com/users/mohamed_hassan-5229782) from [Pixabay](https://pixabay.com/)"
description: By shortening assessments time by 65%, artificial intelligence plays a critical role to fight against the spread of COVID-19
category: datascience
tags:
- computer vision
- medical
---

Coronavirus pandemic has spread all over the world. The Reverse Transcription-Polymerase Chain Reaction (RT-PCR) test is commonly used to screen patients, allowing those infected to receive treatment quickly.

Despite being commonly used, the test kit gives a 30% false-negative results. This means that for every 10 people who are infected by COVID-19, 3 people are given the all-clear sign. [Experts advised](https://www.livescience.com/covid19-coronavirus-tests-false-negatives.html) that a negative test often does not mean the person does not have the disease. This calls for attention to the risk posed by unreliable testing, as false test results lead to a [false sense of security](https://www.sciencedaily.com/releases/2020/04/200409144805.htm).

> Even if you test negative for COVID-19, assume you have it, experts say — [Live Science](https://www.livescience.com/covid19-coronavirus-tests-false-negatives.html)

As we have collectively tested millions of people, some test results [take more than a week](https://www.technologyreview.com/2020/04/05/998460/covid-19-test-results-faster-commercial-labs-delays-coronavirus/). Testing of coronavirus remains among the most pressing problems with America’s response to the pandemic. Patients suspected of COVID-19 are in urgent need of diagnosis and proper treatment — this calls for **quick and accurate coronavirus diagnostics**. As such, scientists across the globe are on the search for a more reliable assessment.

As COVID-19 is a respiratory disease, it can cause a range of breathing problems. This caused a lung infection in which the alveoli are inflamed and [doctors can see signs of respiratory inflammation on computed tomography. (CT) scan](https://www.webmd.com/lung/what-does-covid-do-to-your-lungs).

CT imageries provide high-quality 3D images of our lungs, useful for detecting the presence of COVID-19. With most scans only take just a few minutes, healthcare workers and researchers can acquire a large volume of these high-quality imageries.

A 3D CT imagery contains 200–400 slices of images; this can take a long time for a specialist to diagnose. As COVID-19 has similar characteristics of other types of pneumonia, it would take a very experienced doctor at least 10 minutes to diagnose one patient. Thus an **AI-assisted diagnosis using computer vision is highly desired**.

Alibaba Group built an [artificial intelligence system](https://www.alizila.com/how-damo-academys-ai-system-detects-coronavirus-cases/) capable of virus-diagnosis and analysis from CT scan imagery. This AI system can diagnose a CT imagery in less than 30 seconds and with a 96% accuracy.

# Image segmentation — U-Net

Image segmentation is an essential step in AI-based COVID-19 image processing and analysis. It facilitates radiologists in accurately identification of lung infection and prompting quantitative analysis and diagnosis. Image segmentation highlights regions of interest, such as infected regions in the CT imagery for further assessment and quantification. The reading time of radiologists is shortened by 65% with the help of AI assessments.

The [U-Net](https://jinglescode.github.io/datascience/2019/11/07/biomedical-image-segmentation-u-net/) is a commonly used technique for medical image segmentation. This [paper](https://arxiv.org/pdf/1505.04597.pdf) by Ronneberger et al. is published in [2015 MICCAI](https://www.miccai2019.org/) and has over 13,000 citations in Apr 2020. It has a U-shape architecture with an expansive path and a contracting path, which **yield more precise segmentation suitable for medical imagery**.

{% include figure.html
  file="/assets/img/posts/unet-02.webp"
  caption="UNet architecture"
  size="m"
%}

## UNet++

Building on U-Net, Zhou et al. proposed the [UNet++](https://jinglescode.github.io/datascience/2019/12/02/biomedical-image-segmentation-u-net-nested/), which aims to improve segmentation accuracy by including Dense block and convolution layers between the encoder and decoder. It is a little more complicated than U-Net; however, it introduces 3 benefits.

- Redesigned skip pathways made optimisation easier with the semantically similar feature maps
- Dense skip connections improve segmentation accuracy and improve gradient flow
- Deep supervision allows for model complexity tuning to balance between speed and performance optimisation

{% include figure.html
  file="/assets/img/posts/unet-nested-03.webp"
  caption="UNet++ architecture"
  size="m"
%}

## Attention U-Net

The attention mechanisms can learn to single out certain parts of the features in the network. Oktay et al. proposed an [Attention U-Net](https://jinglescode.github.io/datascience/2019/12/08/biomedical-image-segmentation-u-net-attention/) which aims to automatically learn to focus on target structures of varying shapes and sizes; thus the name of the paper “[Learning where to look for the Pancreas](https://arxiv.org/abs/1804.03999)”. Its ability to capture fine structures in medical images, thereby suitable for COVID-19 applications.

Because the infected regions could be small, with a variety of shapes and textures, locating these regions is a challenging task. The **attention gates incorporated into U-Net improve model sensitivity and accuracy** to foreground pixels without requiring significant computation overhead. Attention gates can progressively suppress features responses in irrelevant background regions.

{% include figure.html
  file="/assets/img/posts/unet-attention-05.webp"
  caption="UNet Attention architecture"
  size="m"
%}

# Image segmentation in COVID-19 applications

Many papers consider image segmentation as a necessary step in analysing medical images. Here is a list of papers collected by [Feng et al.](https://arxiv.org/abs/2004.02731), which applied image segmentation in COVID-19 studies.

<script src="https://gist.github.com/jinglescode/6fff9327ec515b1e8228b2c43d256be9.js"></script>
