---
title: Readings on Magnetic Resonance Imaging
layout: note
description: Notes on my readings in research papers containing MRI
---

<table>
<thead><th>Paper</th><th>Key Ideas</th></thead>
<tbody>

<tr>
  <td>[2019]
  <a href="https://arxiv.org/abs/1905.10835">
    A multi-path 2.5 dimensional convolutional neural network system for segmenting stroke lesions in brain MRI images
  </a></td>
  <td>
    <ul>
        <li>MRI segmentation with 9x 2D slices (3 different types of normalizations on all 3 planes)</li>
        <li>output of 9x 2D goes into 9 U-Net, and concat into 3D convolution followed by a series of 3D fully connected to softmax segmentation mask</li>
    </ul>
  </td>
</tr>



</tbody>
</table>
