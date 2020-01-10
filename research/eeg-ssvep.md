---
title: Readings on SSVEP Detection
layout: note
description: Notes on my readings in research papers containing steady-state visual evoked potentials Detection with EEG
---

[2018][Steady state visual evoked potential (SSVEP) based brain-computer interface (BCI) performance under different perturbations](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0191673)

- test robustness of SSVEP signals, 4 class classification, 4 different perturbations when subject is
  - just focusing
  - speaking (counting out loud 1-10)
  - thinking (of numbers 1-10)
  - listening (to verbal 1-10)
- classifiers tested
  - Decision tree
  - Naïve Bayes
  - K-Nearest Neighbor
- results
  - speaking and thinking decreased classification accuracy
  - no significant difference between listening and control group
  - 1s stimuli: ~70%. 2s stimuli: ~95%
  - they have analysis from results to neuroscience, about attention and how each part of the brain could be activated by the tasks

[2018][A Study of SSVEP Responses in Case of Overt and Covert Visual Attention with Different View Angles](https://www.researchgate.net/publication/330477941_A_Study_of_SSVEP_Responses_in_Case_of_Overt_and_Covert_Visual_Attention_with_Different_View_Angles)

- investigate on how visual attention affects SSVEP responses in both fovea and peripheral vision. focuses on studying the influence of view angles, visual attentions, frequencies in modulating SSVEP responses and characteristics in peripheral vision
- to evaluate how SSVEP response change across field of view range
  - view angles
  - vision attention states
  - stimulus frequency
- four stimulus frequencies (8.57, 10, 12, 15 Hz)
  - these flickering rates can be directly derived by dividing screen refresh rate (60Hz)
  - 8-15Hz range are reliable and high amplitude SSVEP responses

[2017][Compact convolutional neural networks for classification of asynchronous steady-state visual evoked potentials](https://iopscience.iop.org/article/10.1088/1741-2552/aae5d8/meta)

- [code available](https://github.com/vlawhern/arl-eegmodels)
- Compact-CNN to learn 12 classes
  - 12 keys of num pad
  - hz range from 9.25 to 14.75, with 0.5 gap
- compare performance with CCA and combined-CCA
- EEGNet architecture, model name `EEGNet_SSVEP`
  - performing temporal convolutions, with the convolutional kernel weights being identified from the data
  - performs a temporal convolution to mimic a bandpass frequency filter
  - depthwise spatial convolutions that act as spatial filters to reduce the dimensionality of the data
  - use separable convolutions
    - reducing the number of parameters to fit
    - explicitly decoupling the relationship within and across outputs
  - batch norm
  - pooling
  - dropout
  - ELU



[2017][A convolutional neural network for steady state visual evoked potential classification under ambulatory environment](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0172578)

- CNN based classifier, uses frequency features as input, for SSVEP detection in ambulatory conditions
- 5 different points of visual stimulus, for 5 classes, at 9Hz, 11Hz, 13Hz, 15Hz, 17Hz frequency
- bandpass filter 4-40Hz, 60Hz notch filter remove AC power noise
- input:
  - 2000 time samples x 8 channels (2 seconds sliding window)
  - FFT
  - 120 samples from each channel, 5-35Hz
  - normalised range 0-1
  - input to CNN: 120 x 8
- CNN architecture:
  - 3 layers convolu
  - added 3 hidden units in CNN-2 to visualise learnt representations
- evaluation method
  - compare CNN with CCA, MSI, CCA+kNN
  - 10 fold cross validation
- results
  - CNN significant better than CCA
  - CNN need more data to perform better than CCA-KNN, use shift size (in ms) to adjust number of data samples
  - Ambulatory SSVEP, despite having more data than static, learning from ambulatory is more difficult

[2016][Attention mechanisms during predictable and unpredictable threat - A steady-state visual evoked potential approach](https://www.sciencedirect.com/science/article/pii/S1053811916302750)

- electric stimuli applied, subjects to provide
  - scale pain level from 0-10
  - scale arousal
  - affective valence
- data were first bandpass-filtered with a 12th order Butterworth filter having a width of 0.5-Hz (48 dB/octave), around the target frequencies of 15 and 20 Hz.

[2015][The steady-state visual evoked potential in vision research: a review](https://tvst.arvojournals.org/article.aspx?articleid=2291652)

- SSVEP stimulus frequency (i.e., presentation rate) tends to be above 8–10 Hz
- SSVEP response is periodic, it is confined to a specific set of frequencies, and it is thus natural to analyze it in the frequency domain instead of the time domain
- Spectrum resolution is important in determining the signal-to-noise ratio
- choice of the stimulus frequency maximal response at about 10 Hz for luminance flicker

2007
Spatiotemporal analysis of the cortical sources of the steady‐state visual evoked potential
https://onlinelibrary.wiley.com/doi/abs/10.1002/hbm.20276
