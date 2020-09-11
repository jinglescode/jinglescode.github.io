---
title: Deep Learning in Brain-Computer Interface
layout: note
image: /assets/img/posts/bci-dl-intro-01.jpg
image-thumb: /assets/img/posts/bci-dl-intro-01-mini.jpg
image-caption: "Current status & challenges to advance the field forward"
description: Current status & challenges to advance the field forward
tags:
- medical
- brain computer interface
- neuroscience
---

# What is Brain-Computer Interface?

A Brain-Computer Interface (BCI) is a system that extracts and translates the brain activity patterns of a subject (humans or animals) into messages or commands for an interactive application. The brain activity patterns are signals obtained with Electroencephalography (EEG).

The concept of controlling devices solely with our minds is nothing new. Science fiction and Hollywood movies have been known to depict this. Several studies and experiments have been conducted, such as [monkeys controlling robotic arms](https://medium.com/r/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwxIgdOlT2cY) to feed itself, [controlling a wheelchair](https://medium.com/r/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJyJj32MsAUo) and [controlling cursors to type](https://medium.com/r/?url=https%3A%2F%2Fmed.stanford.edu%2Fnews%2Fall-news%2F2017%2F02%2Fbrain-computer-interface-allows-fast-accurate-typing-by-people-with-paralysis.html) about eight words per minute.

Other than controlling devices, different applications and studies of BCIs are:
- sleep patterns
- epilepsy
- attention deficit hyperactivity disorder (ADHD)
- disorders of consciousness
- depth of anaesthesia
- fatigue and mental workload
- mood
- emotions

# Challenges of BCI applications

For BCI systems to work, it is dependant on the ability to decipher brain activity. But a single EEG data can contain artefact, interference from power lines, measurement and environmental noise. It also contains interference from subject's ongoing thoughts. These artefact/noise mask the actual target signal.

Our brain can produce different signals during an experiment due to fatigue, mood and even subtle body movements such as blinking of eyes. As a result, a classifier trained on a particular user might generalise poorly to data recorded at a different time on the same individual.

EEG signals are highly user-specific, as such, most BCI systems are calibrated for each user. In [research by Georgia Institute of Technology](https://medium.com/r/?url=https%3A%2F%2Farxiv.org%2Fpdf%2F1803.09702.pdf), they obtained 38% accuracy on unseen subjects (not part of the training dataset) and 75% on seen subjects.

[Hajinoroozi et al.](https://medium.com/r/?url=https%3A%2F%2Fwww.sciencedirect.com%2Fscience%2Farticle%2Fabs%2Fpii%2FS0923596516300832) tested both within-subject and cross-subject predictions, and the results showed that cross-subject models always performed worse than within-subject models.

In data collection, the ground truth is usually determined on what the subject has to perform. Therefore it can be tricky as it is impossible to know what the subject is thinking or where the subject is precisely focusing on.

BCI is particularly challenging because the theory is shared with multiple disciplines:
- neuroscience
- signal processing
- machine learning
- computational intelligence
- cognitive science
- physics

These challenges show why rolling out BCI systems to the mass market is a monumental challenge.

# Why Deep Learning for BCI applications

In recent years, deep learning has shown significant performance in various tasks; it has proven to outperform "traditional" machine learning approaches that use handcrafted features.

Decoding the brain electrical activity with high variability and non-stationary noise into a meaningful signal is difficult. These difficulties lead to the use of machine learning algorithms to solve BCI applications.

Deep learning has the ability to extract features and learn from hierarchical representations from high dimension data and has lead to many real-world applications in the area of computer vision and natural language processing. Given its effectiveness in other fields, deep learning seems promising to learn from raw EEG data to extract better features to improve performance and robustness.

An EEG data set is high dimensional, deep learning models with a high number of parameters might be able to learn the raw EGG signals directly.

# Common deep learning architectures

In order to tackle the challenges in BCI application, researchers work on to improve extraction of essential features from EEG signals and to build models that can generalise better.

## Restricted Boltzmann machine

A restricted Boltzmann machine (RBM) learns the probability distribution of the input data based on a gradient ascent of the log-likelihood of the training data. Deep Belief Network (DBN) composed of three RBMs, where RBM can be stacked and trained in a deep learning manner.

## Recurrent neural network

Given that EEG data has a temporal structure, frequencies over time, the recurrent neural network (RNN) is suitable. RNN model sequential data via recursive, which is unfolding the RNN in time to form a feed-forward neural network to apply backpropagation.

Long short term memory (LSTM) is an RNN architecture that is composed of memory blocks which use gating units with a self-connected memory cell. LSTM solves the vanishing gradient problem that traditional RNNs suffer.

## Convolutional neural network

Recent findings show the effectiveness of the convolutional neural network (CNN) for processing time series because they are able to learn the most relevant features from raw data. CNN can extend to higher dimensions to learn features required for the task. A convolutional layer is usually comprised of convolution, non-linear activation, and pooling.

CNN has outperformed previous BCI competition winners on multiple tasks. However, an ensemble of SVMs obtained slightly better performance than the CNN approach. Several studies explored the idea of combining DBN with CNN and RNN with CNN. Combining DBN with CNN produce promising results.

[Schirrmeister et al.](https://medium.com/r/?url=https%3A%2F%2Fonlinelibrary.wiley.com%2Fdoi%2Fpdf%2F10.1002%2Fhbm.23730) explored the effect of shallow and deep CNN models. They show that shallower (5 layers) fully convolutional models perform better than deep models.

[Zhang et al.](https://medium.com/r/?url=https%3A%2F%2Fwww.frontiersin.org%2Farticles%2F10.3389%2Ffnins.2017.00310%2Ffull) evaluated that depth ranging from 2 to 10 outperform deeper models in terms of accuracy, precision, F-measure and G-mean.

Due to the small number of training samples available for BCI, many research works suggest those shallower architectures with much fewer parameters are proved to be more useful.

# Regularisation

As mentioned in the challenges of BCI applications, EEG signals are highly variable. EEG signals can differ significantly between subjects and even within the same subject, as the EEG contains interferences from ongoing brain activity and measurement noise.

These types of noise suggest the use of regularisation in order to keep the weights of the network small to reduce overfitting. The common regularisation methods for neural networks are L1 and L2, which add a penalty to the weights according to their magnitude and sign. Dropout technique is very commonly used as well.

These regularisation techniques generally improve the performance slightly and most research used at least one regularisation techniques.

# Current state-of-the-art

The current performance of deep learning models is unclear whether it can outperform traditional processing techniques. This is because unlike natural image where there is the ImageNet dataset as a benchmark dataset, EEG does not have a benchmark dataset.

In BCI, many different tasks and different datasets were used in research, the results reported are highly bais to individual research for that particular dataset. Reporting performance metrics and methodology are varied between each study, lacking a standardised reporting methodology.

Reproducibility is crucial to moving a field forward; this has been seen in the computer vision community where technological advances very quickly. With the availability of open-source dataset and the sharing of codes, the computer vision community achieve state-of-the-art performance suitable for real-world applications.

Unfortunately for BCI studies, many researchers use private dataset, and they do not release their codes publicly. Acquiring data is more expensive and annotated data requires subject matter experts contributions.

# Problems with deep learning in BCI applications

As training a deep learning model generally requires a large training dataset. Unlike the computer vision research community, where a vast amount of data is available; limited BCI data available pose a challenge to advance the field forward. High-quality data is also challenging to acquire, augmenting datasets or use of generative adversarial networks might be adopted.

Deep learning models are great in memorising dataset, but given that EEG has low signals to noise ratio, models might memorise noise data. As a result, the performance is greatly affected even with various regularisation techniques.

[Zhang et al.](https://medium.com/r/?url=https%3A%2F%2Farxiv.org%2Fpdf%2F1904.01002.pdf) highlighted that deep learning models are vulnerable to adversarial attacks. The consequence could range from merely user confusion and frustration, to significantly reducing the user's quality of life, and even to hurting the user into danger on purpose.

Generally, deep learning models are regarded as black boxes where it does not provide insight into neurophysiological phenomena underlying a decision. This makes clinicians and end-users uncomfortable, especially when understanding how and why the model produces an output might be critical to make informed clinical choices. A study by [Sturm et al.](https://medium.com/r/?url=https%3A%2F%2Fwww.sciencedirect.com%2Fscience%2Farticle%2Fpii%2FS0165027016302333) uses Layer-wise Relevance Propagation to transform decisions into heatmaps indicating each data point's relevance for the outcome of the decision.

Deep learning models can take a long time to train; thus, it would take a long time to calibrate on new users and before each usage. We cannot expect new users to spend hours recording their brain patterns on different tasks, and cannot allow BCI users to wait every time they want to use the system.

# Conclusion

Researchers need to develop more robust and consistent algorithms that can be easily trained and deployed. Algorithms must be able to work with small training samples, handle noisy signals, generalise well on users over different time as well as mood and generalise well over different users.

Many studies are evaluated offline on a small number of subjects, but for actual BCI applications to work machine learning need to work in real-time.

Deep learning advancement is lagging due to the lack of data and code sharing; progress can be much faster when researchers openly share dataset and codes.

There are many problems that need to be addressed before BCI applications can be rolled out to the mass market.
