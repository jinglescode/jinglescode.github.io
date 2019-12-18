---
title: Readings on Electroencephalography
layout: note
description: Notes on my readings in research papers containing Electroencephalography (EEG)
---

[Deep learning-based electroencephalography analysis: a systematic review](https://iopscience.iop.org/article/10.1088/1741-2552/ab260c/meta)

stats/numbers
- research on EEG applications are relatively small, compared to other deep learning applications
- about 41% uses CNN, about 14% uses RNN, 15$ uses auto-encoders
- 54% uses public dataset, 42% reported results from private recording, 4% use both
- 19% have code available, 7% have code and uses public available data
- half of research used dataset contained fewer than 13 subjects
- vary number of electrodes in studies
- sampling rate also varied, 50% uses 250 Hz or less, highest 5000 Hz
- very few papers (3) explored impact of data augmentation
- DNN with 7 layers performed better than shallow (2-4) and deeper (>10)
- 47% did not report on optimiser, 30% uses Adam, usage of Adam is increasing

research on EEG
- classification sleep staging, seizure detection, brain computer interfaces
- improvement on feature extraction or visualising train models
- data augmentation, generation images

challenges of EEG
- low signal to noise ratio, need to filter noise to extract true brain activity
- non-stationary signal, generalize poorly even on same individual
- high inter-subject variability, physiological differences between individuals, 38% vs. 75% accuracy on unseen and seen subjects
- manually annotating windows of few seconds of signals requires a lot of time

DNN can help in these areas:
- learn and extract features from raw or minimally preprocessed data
- reduce domain specific processing and feature extraction
- features might be more expressive than those engineered by humans
- might be able to do transfer learning, on different analysis tasks

but EEG has issues with DNN:
- DNN needs large dataset, current lack of data
- EEG's low signal to noise ratio make it very difficult for DNN to learn (compared to CV and NLP)
- no standards performance metrics for reporting methodology
- lack of baseline performance

preprocessing
- downsampling
- band-pass filtering
- windowing

findings
- shallower architectures preferred when limited amount of data available
- data augmentation is useful when limited data
- overlapping is useful, but no consensus on best overlapping percentage
- no clear preference to use fourier filter extracted features or using raw EEG, but using raw EEG is upward trend, as CNN is effective for processing time series
- many different tasks, many different dataset were used, often private or limited, lack of reproducibility, low accountability

recommendation for future EEG studies to include
- describe architecture of model
- describe data used, number of subjects, number of samples, data augmentations
- compare performance against public dataset
- state and improve from existing state of the art baselines
- share internal recordings
- share experiment code, include hyperparameters, models file for re-run 



[EEG based eye state classification using deep belief network and stacked autoencoder](https://pdfs.semanticscholar.org/252d/90a65387b37ab5aba3a158c7bb400b6d4bac.pdf)

- implement Deep Belief Network and Stacked AutoEncoder to predict eye state using EEG
- internal and external interference can affect EEG signals, external such as power equipments and environment, internal such as eye movements, muscle and respiratory
- use Deep Belief Network for classification
- use Stacked AutoEncoder to reconstruct input to extract features
- used Discrete Wavelet Transform to extract features from EEG signals