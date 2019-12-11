---
title: Readings on Segmentation
layout: note
description: Notes on my readings in research papers containing segmentation and mask generation
---

<table>
<thead><th>Paper</th><th>Key Ideas</th></thead>
<tbody>

<tr>
  <td>[2019]
  <a href="http://openaccess.thecvf.com/content_CVPR_2019/html/Wagner_Interpretable_and_Fine-Grained_Visual_Explanations_for_Convolutional_Neural_Networks_CVPR_2019_paper.html">
    Interpretable and Fine-Grained Visual Explanations for Convolutional Neural Networks
  </a></td>
  <td>
    <ul>
        <li>produce mask to focus on interpretability</li>
        <li>smallest region of image must be retained to preserve (or deleted to change) model output</li>
        <li>fine grain visual explanation, no smoothing and regularisations</li>
    </ul>
  </td>
</tr>

<tr>
  <td>[2019]
  <a href="http://openaccess.thecvf.com/content_CVPR_2019/html/Zhu_Learning_Instance_Activation_Maps_for_Weakly_Supervised_Instance_Segmentation_CVPR_2019_paper.html">
    Learning Instance Activation Maps for Weakly Supervised Instance Segmentation
  </a></td>
  <td>
    <ul>
        <li>image and class labels only -> segmentation mask</li>
        <li>use PRM to collect pseudo ground-truth masks, to learn to predict class-agnostic activation map for each instance on the image</li>
        <li>instance extent filling module + Instance Activation Map, to extract spatial layout</li>
        <li>convolutional CRF post-processing extract fine detailed boundaries</li>
    </ul>
  </td>
</tr>

<tr>
  <td>[2019]
  <a href="https://arxiv.org/abs/1811.07073">
    Weakly Supervised Semantic Image Segmentation with Self-correcting Networks
  </a></td>
  <td>
    <ul>
        <li>image, bounding box labels and small set of segmentation labels -> segmentation mask</li>
        <li>
            there are 3 models:
            <ul>
            <li>primary (DeepLabv3+): image->segmentation</li>
            <li>ancillary (DeepLabv3+): image+box->segmentation</li>
            <li>self-correct: refine segmentation for both models, concat both results and feed into 3x3 conv</li>
            </ul>
        </li>
    </ul>
  </td>
</tr>

<tr>
  <td>[2019]
  <a href="http://openaccess.thecvf.com/content_CVPR_2019/html/Cholakkal_Object_Counting_and_Instance_Segmentation_With_Image-Level_Supervision_CVPR_2019_paper.html">
    Object Counting and Instance Segmentation with Image-level Supervision
  </a></td>
  <td>
    <ul>
        <li>image and # of object classes -> segmentation (instance) mask and count # of object classes</li>
        <li>image-level lower-count (ILC) density map estimation approach for object counting</li>
        <li>perform better than PRM, PRM unable to separate adjacent objects from the same class</li>
        <li>loss function to for predicting the global count and spatial distribution of objects</li>
        <li>ResNet feature extraction follower by image classification branch and density branch</li>
    </ul>
  </td>
</tr>

<tr>
  <td>[2018]
  <a href="https://ieeexplore.ieee.org/abstract/document/8316808/">
    A weakly-supervised framework for interpretable diabetic retinopathy detection on retinal images
  </a>
  </td>
  <td>
    <ul>
        <li>multi-lesion detection with weakly supervised learning with just class label (presence or absence of disease)</li>
        <li>Bag of Visual Words (a multiple instance learning framework) to extract weak image features</li>
    </ul>
  </td>
</tr>

<tr>
  <td>[2018]
  <a href="http://openaccess.thecvf.com/content_cvpr_2018/html/Baumgartner_Visual_Feature_Attribution_CVPR_2018_paper.html">
    Visual Feature Attribution using Wasserstein GANs
  </a>
  [<a href="https://github.com/baumgach/vagan-code">code</a>]
  </td>
  <td>
    <ul>
        <li>Wasserstein generative adversarial networks, a generative model in which the additive map is learned as a function of the images, predict subject-specific disease effect maps</li>
        <li>if there are multiple locations in the images that are the caused of that classification, some locations may not influence the classification output, thus not highlighted</li>
        <li>Wasserstein GAN to generate feature maps</li>
        <li>U-Net to learn map generator's features</li>
    </ul>
  </td>
</tr>

<tr>
  <td>[2018]
  <a href="http://openaccess.thecvf.com/content_cvpr_2018/html/Hu_Learning_to_Segment_CVPR_2018_paper.html">
    Learning to Segment Every Thing
  </a></td>
  <td>
    <ul>
        <li>partially supervised segmentation model to segment new categories (providing bounding box), and a small set of existing categories (providing bounding box+segmentations)</li>
        <li>segmentation transfer learning with Mask R-CNN, to train segmentation for new categories</li>
        <li>first train with existing category, bounding box to mask, then predict a category’s mask parameters from its bounding box parameters using a generic, category-agnostic weight transfer function</li>
    </ul>
  </td>
</tr>

<tr>
  <td>[2018]
  <a href="https://link.springer.com/article/10.1007/s10278-018-0059-x">
    An Unsupervised Approach for Extraction of Blood Vessels from Fundus Images
  </a></td>
  <td>
    <ul>
        <li>unsupervised iterative method is proposed for extraction of blood vessels</li>
        <li>select green channel to reveal maximum contrast</li>
        <li>perform gamma correction for brightness</li>
        <li>some variant of adaptive histogram equalization to remove noise and reveal hidden features</li>
        <li>local adaptive minmax threshold to separate foreground and background</li>
        <li>pixel with at least 6 neighbors marked as vessel</li>
        <li>unable to handle connectivity, lead to inaccurate segmentation</li>
    </ul>
  </td>
</tr>

<tr>
  <td>[2018]
  <a href="http://openaccess.thecvf.com/content_cvpr_2018/html/Zhou_Weakly_Supervised_Instance_CVPR_2018_paper.html">
    Weakly Supervised Instance Segmentation using Class Peak Response
  </a></td>
  <td>
    <ul>
        <li>image and class labels only -> segmentation mask</li>
        <li>enable classification networks to exploiting class peak responses for instance mask extraction</li>
        <li>Peak Response Maps (PRMs), stimulate peaks to emerge from a class response map</li>
        <li>effectively mapped to highly informative regions of each object instance and boundaries</li>
    </ul>
  </td>
</tr>

<tr>
  <td>[2017]
  <a href="https://arxiv.org/abs/1706.05587">
    Rethinking Atrous Convolution for Semantic Image Segmentation
  </a></td>
  <td>
    <ul>
        <li>removed CRF post-processing</li>
        <li>atrous convolution changed from parallel to cascade, to include 1*1 and 3 3*3. then concatenated and 1*1</li>
        <li>include batch normalisation</li>
        <li>include data augmentation, random scaling and flipping</li>
        <li>keep groundtruth intact (previously downsmaple) and instead upsample final logits</li>
    </ul>
  </td>
</tr>

<tr>
  <td>[2017]
  <a href="https://ieeexplore.ieee.org/abstract/document/7913730/">
    DeepLab: Semantic Image Segmentation with Deep Convolutional Nets, Atrous Convolution, and Fully Connected CRFs
  </a></td>
  <td>
    <ul>
        <li>image+segment mask -> improve segment</li>
        <li>build on DeepLabv1, add ASPP (atrous spatial pyramid pooling), to extract objects at multiple scales</li>
    </ul>
  </td>
</tr>

<tr>
  <td>[2014]
  <a href="https://arxiv.org/abs/1412.7062">
    Semantic Image Segmentation with Deep Convolutional Nets and Fully Connected CRFs
  </a></td>
  <td>
    <ul>
        <li>image+segment mask -> improve segment</li>
        <li>employ atrous convolution to solve signal resolution downsampling (max-pool and striding), to extract dense features and enlarge the field-of-view</li>
        <li>employ conditional random field to solve spatial insensitivity, to capture object boundaries</li>
    </ul>
  </td>
</tr>

</tbody>
</table>





