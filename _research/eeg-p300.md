---
title: Readings on P300 Detection
layout: pages
description: Notes on my readings in research papers containing P300 Detection with EEG
---

<table>
<thead><th>Paper</th><th>Key Ideas</th></thead>
<tbody>

<tr>
  <td>[2015]
  <a href="https://www.frontiersin.org/articles/10.3389/fncom.2015.00146">
    Convolutional neural network for multi-category rapid serial visual presentation BCI
  </a>
  </td>
  <td>
    <ul>
      <li>amplitude and latency of P300 have large variance between subjects and within subject</li>
      <li>categorise 5 classes (planes, faces, cars, eggs, watches), 360x360px images presented at 10 Hz</li>
      <li>remove 3 subjects (out of 5) due to blinking, technical, and uncomfortable</li>
      <li>architecture:</li>
      <ul>
        <li>input: 64 channels, 64 time samples</li>
        <li>1st convolutional layer, spatial convolution, using filters of size 64×1, learning features which represent a spatial distribution across the scalp</li>
        <li>max-pool to reduce dimension, size 3, stride 2</li>
        <li>then temporal convolutional layer, find temporal patterns in the signal that represent the change in amplitude of the spatial maps learned in the first layer</li>
        <li>2 fully connected, 2048 and 4096</li>
      </ul>
      <li>spatio temporal regularisation</li>
      <ul>
        <li>first convolu learn spatial, that change slowly in time by adding penalty to the cost function</li>
        <li>encourage small differences between consecutive temporal values</li>
      </ul>
    </ul>
  </td>
</tr>

<tr>
  <td>[2011]
  <a href="https://ieeexplore.ieee.org/abstract/document/5492691/">
    Convolutional Neural Networks for P300 Detection with Application to Brain-Computer Interfaces
  </a>
  </td>
  <td>
    <ul>
      <li>challenges: user might not response (focus on the flashing light) at the right moment</li>
      <li>P300 wave is an event related potential (ERP), corresponds to positive deflection in voltage at 300ms latency</li>
      <li>classification 2 class, corresponds to P300 wave or not
      <li>normalised</li>
      <ul>
        <li>size divide by 2, signal sampled at 120 Hz</li>
        <li>bandpass filtering at 1-20 Hz</li>
        <li>related work did this: remove eye movement by independent component analysis</li>
      </ul>
      <li>5 layers</li>
      <ul>
        <li>convolu by space</li>
        <li>convolu by time</li>
        <li>fully connected</li>
      </ul>
      <li>instead of using 64 electrodes (channels), they use 8</li>
      <li>single classifier</li>
      <li>multiclassifier</li>
      <li>use first layer's weight to check feature importance, if close to 0 means</li> discriminant power is low</li>
    </ul>
  </td>
</tr>


</tbody>
</table>
