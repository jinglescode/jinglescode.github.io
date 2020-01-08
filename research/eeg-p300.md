---
title: Readings on P300 Detection
layout: note
description: Notes on my readings in research papers containing P300 Detection with EEG
---


<table>
<thead><th>Paper</th><th>Key Ideas</th></thead>
<tbody>

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
