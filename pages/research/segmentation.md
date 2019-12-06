---
title: Readings on Segmentation
layout: note
description: Notes on my readings in research papers containing segmentation
---

<table>
<thead><td>Year</td><td>Paper</td><td>Key Ideas</td></thead>
<tbody>

<tr>
  <td>2019</td>
  <td><a href="https://arxiv.org/abs/1811.07073">
    Weakly Supervised Semantic Image Segmentation with Self-correcting Networks
  </a></td>
  <td>
    <ol>
        <li>image, bounding box labels and small set of segmentation labels -> segmentation mask</li>
        <li>
            there are 3 models:
            <ul>
            <li>primary (DeepLabv3+): image->segmentation</li>
            <li>ancillary (DeepLabv3+): image+box->segmentation</li>
            <li>self-correct: refine segmentation for both models, concat both results and feed into 3x3 conv</li>
            </ul>
        </li>
    </ol>
  </td>
</tr>

<tr>
  <td>2019</td>
  <td><a href="http://openaccess.thecvf.com/content_CVPR_2019/html/Cholakkal_Object_Counting_and_Instance_Segmentation_With_Image-Level_Supervision_CVPR_2019_paper.html">
    Object Counting and Instance Segmentation with Image-level Supervision
  </a></td>
  <td>
    <ol>
        <li>image and # of object classes -> segmentation (instance) mask and count # of object classes</li>
        <li>image-level lower-count (ILC) density map estimation approach for object counting</li>
        <li>perform better than PRM, PRM unable to separate adjacent objects from the same class</li>
        <li>loss function to for predicting the global count and spatial distribution of objects</li>
        <li>ResNet feature extraction follower by image classification branch and density branch</li>
    </ol>
  </td>
</tr>

<tr>
  <td>2018</td>
  <td><a href="http://openaccess.thecvf.com/content_cvpr_2018/html/Zhou_Weakly_Supervised_Instance_CVPR_2018_paper.html">
    Weakly Supervised Instance Segmentation using Class Peak Response
  </a></td>
  <td>
    <ol>
      <li>image class labels only -> segmentation mask</li>
      <li>enable classification networks to exploiting class peak responses for instance mask extraction</li>
      <li>Peak Response Maps (PRMs), stimulate peaks to emerge from a class response map</li>
      <li>effectively mapped to highly informative regions of each object instance and boundaries</li>
    </ol>
  </td>
</tr>

</tbody>
</table>