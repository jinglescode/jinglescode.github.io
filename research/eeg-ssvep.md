
2018
Steady state visual evoked potential (SSVEP) based brain-computer interface (BCI) performance under different perturbations
https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0191673


2018
A Study of SSVEP Responses in Case of Overt and Covert Visual Attention with Different View Angles
https://www.researchgate.net/publication/330477941_A_Study_of_SSVEP_Responses_in_Case_of_Overt_and_Covert_Visual_Attention_with_Different_View_Angles


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





2016
Attention mechanisms during predictable and unpredictable threat - A steady-state visual evoked potential approach
https://www.sciencedirect.com/science/article/pii/S1053811916302750


2015
The steady-state visual evoked potential in vision research: a review
https://tvst.arvojournals.org/article.aspx?articleid=2291652

- SSVEP stimulus frequency (i.e., presentation rate) tends to be above 8–10 Hz
- SSVEP response is periodic, it is confined to a specific set of frequencies, and it is thus natural to analyze it in the frequency domain instead of the time domain
- Spectrum resolution is important in determining the signal-to-noise ratio
- choice of the stimulus frequency maximal response at about 10 Hz for luminance flicker

2007
Spatiotemporal analysis of the cortical sources of the steady‐state visual evoked potential
https://onlinelibrary.wiley.com/doi/abs/10.1002/hbm.20276


1996
Selective attention to stimulus location modulates the steady-state visual evoked potential
https://www.pnas.org/content/93/10/4770.short
