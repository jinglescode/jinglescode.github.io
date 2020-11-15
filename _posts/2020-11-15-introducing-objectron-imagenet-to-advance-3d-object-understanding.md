---
title: 'Introducing Objectron: "ImageNet" to Advance 3D Object Understanding'
layout: note
image: /assets/img/posts/introducing-objectron-imagenet-to-advance-3d-object-understanding-01.jpg
image-thumb: /assets/img/posts/introducing-objectron-imagenet-to-advance-3d-object-understanding-01-mini.jpg
image-caption: "Image by Jean-Paul Jandrain from Pixabay"
description: Google AI released dataset consisting of 15K annotated videos and 4M annotated images
tags:
- research
- computer vision
---

Most computer vision research has focused on 2D images, and it has reached an exceptional accuracy with the advancements in object prediction. 

While 2D object prediction provides bounding boxes, which allows us to know where the object is located in the image, extending this technique for 3D prediction will enable us to capture the object’s size, position, and orientation. Advancing in 3D object prediction has great potential for various applications in robotics, self-driving vehicles, image retrieval, and augmented reality.

Even though 2D object detection methods are mature and have been widely used in the industry, extending these methods for 3D object detection methods from 2D imagery is challenging. This is due to the lack of large real-world datasets compared to 2D images.

Like how [ImageNet](http://image-net.org/) has enabled computer vision researchers to advance 2D image tasks, Google has released the [Objectron dataset](https://github.com/google-research-datasets/Objectron/) for 3D object detection. This dataset aims to empower the research community to advance 3D object understanding.

# About the Objectron dataset (how to download/use the datasets provided)

Objectron dataset is a collection of short, object-centric video clips, currently contains 15,000 annotated videos. It is focused on object-centric multi-views by observing the same object from different angles.

Each video clip is accompanied by AR session metadata, including high-res images, object pose, camera pose, point-cloud, and surface planes.

The dataset contains manually annotated 3D bounding boxes for each object, which describe the object’s position, orientation, and dimensions.

Example videos and annotations in the Objectron dataset. [[source](https://ai.googleblog.com/2020/11/announcing-objectron-dataset.html)]:

{% include figure.html
  file="/assets/img/posts/introducing-objectron-imagenet-to-advance-3d-object-understanding-02.gif"
  caption="Example videos and annotations in the Objectron dataset. [[source](https://ai.googleblog.com/2020/11/announcing-objectron-dataset.html)]"
%}

With over 4 million annotated images, the images are labeled in the following categories: 
`bikes, books, bottles, cameras, cereal boxes, chairs, cups, laptops, and shoes.`

To ensure geo-diversity, the video recordings in the dataset are collected from 10 countries across five continents.

This [tutorial](https://github.com/google-research-datasets/Objectron/blob/master/notebooks/Download%20Data.ipynb) covers how to download and use Objectron datasets. There are three ways you can download the dataset:

- Use `gsutil`
- Download via Public HTTP API
- Download using Cloud Python client.

Currently, in Nov 2020, the dataset size is 1.9TB, including videos and annotations.

# How to perform 3D object detection (sample solutions provided)

Along with the dataset, the team shared their solutions to predict 3D bounding boxes. They provided solutions for four categories of objects — shoes, chairs, mugs, and cameras. Here are some sample results of a 3D object detection solution running on a mobile device.

Sample results of 3D object detection from the sample solutions running on mobile. [[source](https://ai.googleblog.com/2020/11/announcing-objectron-dataset.html)]:

{% include figure.html
  file="/assets/img/posts/introducing-objectron-imagenet-to-advance-3d-object-understanding-03.gif"
  caption="Sample results of 3D object detection from the sample solutions running on mobile. [[source](https://ai.googleblog.com/2020/11/announcing-objectron-dataset.html)]"
%}

In contrast to the previously released [single-stage Objectron model](https://ai.googleblog.com/2020/03/real-time-3d-object-detection-on-mobile.html), this newer version uses a two-stage architecture. 

The first stage utilizes the TensorFlow Object Detection model to find the position of the object in each frame. The second stage then uses the cropped 2D image to estimate the 3D bounding box while simultaneously computing the 2D crop of the object for the next frame, so that the object detector does not need to run every frame. 

The two-stage pipeline is illustrated in this diagram [[source](https://ai.googleblog.com/2020/11/announcing-objectron-dataset.html)].

{% include figure.html
  file="/assets/img/posts/introducing-objectron-imagenet-to-advance-3d-object-understanding-04.png"
  caption="Diagram of the 3D object detection solution described above. [[source](https://ai.googleblog.com/2020/11/announcing-objectron-dataset.html)]"
%}

This two-stage pipeline is 3x faster than the previous single-stage pipeline with similar or better accuracy. We can even switch out to use any 2D object detector for the first stage.

This [tutorial](https://github.com/google-research-datasets/Objectron/blob/master/notebooks/SequenceExamples.ipynb) shows how to use Objectron dataset. The SequenceExamples hold the entire video sequence and corresponding annotation in them. Every sequence example has two parts: context and feature lists. The context is sequence attributes that apply to the entire sequence. This tracks objects in 3D across multiple frames.

Here are the results of 3D bounding boxes taken from the [notebook](https://github.com/google-research-datasets/Objectron/blob/master/notebooks/SequenceExamples.ipynb).

{% include figure.html
  file="/assets/img/posts/introducing-objectron-imagenet-to-advance-3d-object-understanding-05.jpg"
  caption="Screenshots of the results, taken from the [notebook](https://github.com/google-research-datasets/Objectron/blob/master/notebooks/SequenceExamples.ipynb)"
%}

# How to evaluate 3D object detection tasks (evaluation source code provided)

With the ground truth annotations, we evaluate the 2D object detection tasks performance with intersection over union (IoU). This evaluation metric measures how close the bounding boxes are to the ground truth. 

For 3D object detection tasks, the team proposes a three-part algorithm for computing accurate 3D IoU values for 3D-oriented boxes. Firstly, we compute the intersection points between the faces of the two boxes using [Sutherland-Hodgman Polygon clipping algorithm](https://en.wikipedia.org/wiki/Sutherland%E2%80%93Hodgman_algorithm). The volume of the intersection is computed by the convex hull of all the clipped polygons. Then, the IoU is computed from the volume of the intersection and volume of the union of two boxes.

{% include figure.html
  file="/assets/img/posts/introducing-objectron-imagenet-to-advance-3d-object-understanding-06.png"
  caption="Compute the 3D intersection over union using the polygon clipping algorithm, Left: Compute the intersection points of each face by clipping the polygon against the box. Right: Compute the volume of intersection by computing the convex hull of all intersection points (green). [[source](https://ai.googleblog.com/2020/11/announcing-objectron-dataset.html)]"
%}

Compute the 3D intersection over union using the polygon clipping algorithm. Left: Compute the intersection points of each face by clipping the polygon against the box. Right: Compute the volume of intersection by computing the convex hull of all intersection points (green). [[source](https://ai.googleblog.com/2020/11/announcing-objectron-dataset.html)]

The team released this [3D IoU source code](https://github.com/google-research-datasets/Objectron/blob/master/notebooks/3D_IOU.ipynb) along with the dataset to enable the research community a standard evaluation metrics.

Screenshots of the IoU between 2 objects, taken from the [notebook](https://github.com/google-research-datasets/Objectron/blob/master/notebooks/3D_IOU.ipynb):

{% include figure.html
  file="/assets/img/posts/introducing-objectron-imagenet-to-advance-3d-object-understanding-07.png"
  caption="Screenshots of the IoU between 2 objects, taken from the [notebook](https://github.com/google-research-datasets/Objectron/blob/master/notebooks/3D_IOU.ipynb)"
%}

# Why is this exciting

With the popularity in application and research for self-driving cars, advancement in 3D object understanding will detect objects’ size, position, and orientation in the world, thus improving self-driving capabilities.

With the arrival of Google’s [ARCore](https://developers.google.com/ar) and Apple’s [ARKit](https://developer.apple.com/augmented-reality/), and [hundreds of millions of smartphones now have AR capabilities](https://arinsider.co/2019/05/13/arcore-reaches-400-million-devices/), this will enable us to collect more data and build interesting applications.

Just like how ImageNet has allowed computer vision to explode with advancements, it has brought useful applications to the real world and breaks every benchmark year after year. We can expect to see similar effects to 3D objects’ understanding and detection with the release of this dataset.