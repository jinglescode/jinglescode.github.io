---
title: Realistic Deepfakes in 5 Minutes on Colab
layout: note
image: /assets/img/posts/deepfake-existence-01.jpg
image-thumb: /assets/img/posts/deepfake-existence-01-mini.jpg
description: And why we should educate the public about the existence of such technology
tags:
- computer vision
last_modified_at: 2020-09-18
---

Do you wish that you could do a moonwalk like Michael Jackson? Or do you want to dance like BTS, but you can't even get your hands to synchronize? Well, now you can. 

Ladies and gentlemen, Deepfake videos are so easy to create that anyone can make one. You do not need a Ph.D., and you don't have to train models for hours, you don't even have to take a Generative Adversarial Network course.

All you need is a full-body picture of yourself, just a still image. Next, get a solo video of the dancer performing these stunning moves. How about impersonating someone? All you have to do is record a video of yourself and pick one photo of a person you want to imitate. Machine learning will animate the person in the picture the way you want it in your video.

### Generate Deepfakes with a single image

Image animation aims to generate video sequences such that the person in the source image is animated according to a video's motion.

This technology lies within the field of computer vision, and academic researchers have been working on producing more realistic videos. It leverages machine learning to manipulate and generate visual images or videos that replace a person with someone else's.

{% include figure.html
  file="/assets/img/posts/deepfake-existence-02.gif"
  caption="First Order Motion Model for Image Animation [by [Aliaksandr](https://aliaksandrsiarohin.github.io/first-order-model-website/)]"
%}

For the love of science and from a research standpoint, [Aliaksandr's work](https://aliaksandrsiarohin.github.io/first-order-model-website/) is certainly impressive. They presented a novel way to animate a source image given a driving video, without any additional information or annotation about the object to animate. It has been published in [NeurIPS](http://papers.nips.cc/paper/8935-first-order-motion-model-for-image-animation), and the [source codes](https://github.com/AliaksandrSiarohin/first-order-model) are available online.

His work outperforms state of the art on all the benchmarks, and it works on a variety of images (faces, body, cartoon, and robot). The model is so flexible that you can create good quality Deepfakes with a single target object image.

#### No prior information required

Its ability to learn the facial movements is unbelievable. You can see that it can identify key points on the face, and it follows these key points to the video's movements very well.

{% include figure.html
  file="/assets/img/posts/deepfake-existence-03.gif"
  caption="Model learns to identify key points [by [Aliaksandr](https://aliaksandrsiarohin.github.io/first-order-model-website/)]"
%}

In previous works, we need additional information such as facial landmarks to map head movement and pose estimation to map full-body movement.

{% include figure.html
  file="/assets/img/posts/deepfake-existence-04.jpg"
  caption="Past works require facial landmarks and pose estimation [by [Aliaksandr](https://aliaksandrsiarohin.github.io/first-order-model-website/)]"
%}

In this work, it **can work without using any annotation or prior information** about the specific object to animate. Once the model has trained on faces, the model can transfer any motion onto any faces.

#### Beautiful head movement

You can record a video of yourself and animate the person in the photo. Yes, even a painting portrait of Mona Lisa. The model tracks everything interesting in an animation: head, mouth, and eye movements.

You can look up and turn your head around. You can say something, and the mouth movements look great. You can roll your eyes, and it maps the eye movements nicely onto the target video.

{% include figure.html
  file="/assets/img/posts/deepfake-existence-05.gif"
  caption="Generated head movements [by [Aliaksandr](https://aliaksandrsiarohin.github.io/first-order-model-website/)]"
%}

#### Full-body movement too

It works for videos with full-body movement as well! Theoretically, this means that you can take the [Billie Jean video](https://www.youtube.com/watch?v=b6pomaq30Gg) and make Donald Trump do moonwalk like Michael Jackson.

{% include figure.html
  file="/assets/img/posts/deepfake-existence-06.gif"
  caption="Generated body movements [by [Aliaksandr](https://aliaksandrsiarohin.github.io/first-order-model-website/)]"
%}

#### It generates the background

As the person covers the part of the image, the algorithm needs to figure out the person's background. In this work, it **automatically generates the background that is covered** by the moving person — absolutely fantastic.

### How does it work?

During training, the neural network reconstructs a video with a still image and learns the latent representation of a video's motion. At test time, the model uses a source image and a driving video. The model tries to reconstruct the video by identifying the key points in the image and the video, by representing the motion between the source image moves according to the motion depicted in these frames.

{% include figure.html
  file="/assets/img/posts/deepfake-existence-07.jpg"
  caption="First Order Motion Model [from [paper](http://papers.nips.cc/paper/8935-first-order-motion-model-for-image-animation)]"
%}

This model consists of two models, a motion extractor and a generator network. 

The motion extractor learns to extract key points along with their local affine transformations. A generator network models occlusions in the target motions and combines the appearance extracted from the source image and the motion derived from the driving video.

The motion estimator learns the latent representations of the motion in the video. These representations are encoded as motion-specific key point displacements (where key points can be the position of eyes or mouth) and local affine transformations. 

The output of the model is two-fold: a dense motion field and an occlusion mask. 

This mask defines which parts of the driving video can be reconstructed by warping the source image. The context needs to infer parts that are not present in the source image, such as the back of the person in the fashion example, where the person's back is not presented in the source picture.

The video generator output of the motion detector and the source image and animates it according to the driving video. It warps that source image in ways that resemble the driving video and the occluded parts.

To understand how it works, I suggest you to visit the [GitHub page](https://aliaksandrsiarohin.github.io/first-order-model-website/) and examine the [research paper](http://papers.nips.cc/paper/8935-first-order-motion-model-for-image-animation). You can also watch his [video](https://www.youtube.com/watch?v=u-0cQ-grXBQ), explaining how it works. Solid cool stuff.

{% include youtube.html
  link="https://www.youtube.com/embed/u-0cQ-grXBQ"
%}

Want to make your own? Check out this [Colab notebook](https://colab.research.google.com/github/AliaksandrSiarohin/first-order-model/blob/master/demo.ipynb).

### Negative consequences of Deepfakes

Deepfakes have garnered widespread attention for their uses in fake news, frauds, scams, and many other illegal activities.

People used to share their Deepfakes videos, which they have created in the subreddit, [_r/deepfakes_](https://www.reddit.com/r/deepfakes). Many of these videos are swapping celebrities' faces, such as Gal Gadot and Taylor Swift, onto pornography performers' bodies.

Many Deepfakes videos are also shared depicting politicians. It has affected politics by being authoritarian governments to spread false information, hate, and fear.

This technology has concerned both industry and government to control and limit the use of Deepfakes. In February 2018, [Reddit suspended r/deepfakes](https://www.vice.com/en_us/article/neqb98/reddit-shuts-down-deepfakes) for violating policies. In June 2019, it [elicited attention from the government](https://www.congress.gov/bill/116th-congress/house-bill/3230) to combat the spread of disinformation through the limitation of Deepfakes video alteration technology.

### Join me to inform about its existence

Knowing that there are people around the world who will abuse this technology. You may ask, why am I writing about this? Why am I spreading this knowledge?

Since anyone can create fake videos easily in this current day and age, such generative models aren't science fiction anymore. I aim to educate the public so that people know about the existence of such technology. **By understanding its existence, people can be aware and pay more attention to discerning between real and fake.**

Fake news is part of the fabric of today's internet, now with Deepfakes easily assessable; this has brought disinformation to a whole new level. It has [affected politics](https://www.ft.com/content/4bf4277c-f527-11e9-a79c-bc9acae3b654) by spreading false information. It has led to people exploited by scammers who are using it to cheat money online.

The world is already in a mess right now due to coronavirus; I am not sure how people will abuse this technology at such times. Deepfakes, as a form of disinformation, are dangerous. **We need to educate people about technology, and people need to discern the truth rather than just believing what we see.**
