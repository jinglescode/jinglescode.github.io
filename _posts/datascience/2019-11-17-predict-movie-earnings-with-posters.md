---
title: Predict Movie Earnings with Posters
layout: note
image: /assets/img/posts/predict-movie-00.webp
description: Identify the genre and earnings of the movie with movie posters
category: datascience
tags:
- computer vision
- data analysis
---

If you have a summer blockbuster or a short film, what would be the best way to capture your audience’s attention and interest? The 2 most prominent methods are apparent: posters and trailers.

Movie posters communicate essential information about the movie such as the title, theme, characters and casts as well as producers involved in the movie. Movie posters serve to inform the audience what genre of movie they are watching, so if given a movie poster, can a machine learning model tell the genre of a movie?

Movie posters are a crucial source of promotion with a great poster design being advantageous to appeal as extensive a viewership as possible. We want to find out if given a movie poster, can we predict if the movie is going to do well in the box office?

In this article, we will explore the data preparation and using convolution neural networks to build machine learning models to answer these questions.

# Dataset

We collected 45466 movies metadata from [The Movie Database (TMDb)](https://www.themoviedb.org/). There is a wide variety of attributes we can get from TMDb, but for this experiment, we are only interested in the following fields, 1) title, 2) genre, 3) poster, 4) popularity, 5) budget, 6) revenue.

Since a movie can fall into multiple genres, we will only pick the first genre of each movie so that each movie can only have 1 genre. In this experiment we intend to predict if a movie will do well in the box office, we will use revenue/budget ratio, defined as the movie is making money if the value is greater than 1; otherwise, it is not.

Here is the sample dataset loaded in Pandas data frame:

<script src="https://gist.github.com/jinglescode/723b44e7f43d1229a2c84071af7dd3e6.js"></script>

# Data analysis and filtering

We won’t download all 45466 images right away. Instead, we will do some analysis, filter out those with data issues and select the list of movie posters to download.

Firstly, we will remove those with missing information:
- blank title after removing all non-alphanumeric characters
- no genre
- no poster URL
- no budget
- no revenue

After filtering out the undesirable data, there are 40727 movies. Below is the distribution of the number of movies in each genre:

{% include figure.html
  file="/assets/img/posts/predict-movie-01.webp"
  caption="Genres"
  size="s"
%}

For our genre prediction task, we want to predict between 10 classes. So we will select the top 10 genres and remove the rest.

{% include figure.html
  file="/assets/img/posts/predict-movie-02.webp"
  caption="Genres top 10"
  size="s"
%}

Hence, we select the top 1000 most popular movies in each genre based on popularity. These are the movies posters we will be downloading, 10,000 images across 10 genres.

{% include figure.html
  file="/assets/img/posts/predict-movie-03.webp"
  caption="Genres top 10 equal"
  size="s"
%}

# Download the movie posters

From the data frame shown above, the *poster_path* is the name of the file. To get the image URL for Toy Story poster, we append *http://image.tmdb.org/t/p/w185/* to the poster URL to get: [http://image.tmdb.org/t/p/w185//rhIRbceoE9lR4veEXuwCC2wARtG.jpg](http://image.tmdb.org/t/p/w185//rhIRbceoE9lR4veEXuwCC2wARtG.jpg).

We can download all the images with the Requests library. I would suggest adding a 1-second delay between each image download. This code is to download and save the images into respective genre folders for predicting the genre of the movie:

<script src="https://gist.github.com/jinglescode/4399678315112db75dee37b30e035d63.js"></script>

# Image processing

In order to make use of pretrained models, we would first need to transform our rectangular posters into a square. Furthermore, to reduce the computation cost, the image size is resized to 224 by 224. We have identified 4 image processing methods to achieve these requirements:
- PIL library resize
- center crop library resize
- padding
- random crop and resize

{% include figure.html
  file="/assets/img/posts/predict-movie-04.webp"
  caption="Poster"
  size="s"
%}

## Method #1: PIL library resize

Use the PIL library to resize the images to 224x224.
from PIL import Image

```python
image = Image.open(PATHOFIMAGE)
image = image.resize((224, 224), Image.BILINEAR)
image.save(NEWPATH)
```

The processed image after resize was distorted below:

{% include figure.html
  file="/assets/img/posts/predict-movie-05.webp"
  caption="Poster: PIL library resize"
  size="s"
%}

## Method #2: center crop

We will transform the images using [PyTorch’s Torchvision](https://pytorch.org/docs/stable/torchvision/transforms.html).

```python
do_transforms = transforms.Compose([
        transforms.CenterCrop(input_size),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406],
                             [0.229, 0.224, 0.225])
])
dataset = datasets.ImageFolder(PATH, transform=do_transforms)
```

The processed image caused both the top and bottom of the image are cropped.

{% include figure.html
  file="/assets/img/posts/predict-movie-06.webp"
  caption="Poster: center crop"
  size="s"
%}

## Method #3: padding

As most movie posters are portrait orientated, we decided to add black padding on the left and right. This would avoid any distortion and cropping of the original poster image. Since black padding is zeros in RGB, it will have a minimum effect on our convolution neural networks.

```python
from skimage.transform import resize
def resize_image_to_square(img, side, pad_cval=0, dtype=np.float64):    
    h, w, ch = img.shape
    if h == w:
        padded = img.copy()
    elif h > w:
        padded = np.full((h, h, ch), pad_cval, dtype=dtype)
        l = int(h / 2 - w / 2)
        r = l + w
        padded[:, l:r, :] = img.copy()
    else:
        padded = np.full((w, w, ch), pad_cval, dtype=dtype)
        l = int(w / 2 - h / 2)
        r = l + h
        padded[l:r, :, :] = img.copy()
resized_img = resize(padded, output_shape=(side, side))
    return resized_img
```

The processed image after applying *Padding*:

{% include figure.html
  file="/assets/img/posts/predict-movie-07.webp"
  caption="Poster: padding"
  size="s"
%}

## Method #4: random crop and resize

We will transform the images using [PyTorch’s Torchvision](https://pytorch.org/docs/stable/torchvision/transforms.html).

```python
do_transforms = transforms.Compose([
        transforms.RandomCrop((280,280), padding=None, pad_if_needed=True, fill=0, padding_mode='constant'),
        transforms.Resize(input_size, interpolation=2),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406],
                             [0.229, 0.224, 0.225])
])
dataset = datasets.ImageFolder(PATH, transform=do_transforms)
```

The processed image after *Random Crop and Resize*.

{% include figure.html
  file="/assets/img/posts/predict-movie-08.webp"
  caption="Poster: random crop and resize"
  size="s"
%}

## Image processing results

To measure the accuracy of image processing methods, we used pretrained ResNet18 to perform classification. We will classify between the comedy and horror genre, as their posters are distinctly different in general. To ensure our comparison is fair, we did the following:
- the same set of movies for training and same set for validation
- set seed number
- load pretrained ResNet18 from PyTorch’s Torchvision

Model accuracy with different image processing methods are as follows:
- PIL library resize is approximately 80%
- Center crop library resize is approximately 80%
- Padding is approximately 85%
- Random crop and resize is approximately 85%

{% include figure.html
  file="/assets/img/posts/predict-movie-09.webp"
  caption="Poster: compare"
%}

*Random Crop and Resize* method performs the best in model accuracy and processing speed. Position of the object in an image does not matter in convolution neural networks.

# Can we tell the genre of the movie, by its poster?

In our preprocessing step, we can achieve approximately 85% accuracy for classification between 2 classes: *comedy* and *horror*. We choose *comedy* and *horror* because their posters are distinctly different between the 2 genres. *Comedy* generally brighter colours, while *horror* may be darker in contrast.

Here are some of our test cases, which are unseen by the model:

{% include figure.html
  file="/assets/img/posts/predict-movie-10.webp"
  caption="Predicted genre"
%}

Interestingly, the model can learn and differentiate between these 2 genres. The model can likely pick up posters with skulls designs and associate the poster with *horror* movies. The 4th image shows that not all posters with a white background are *comedy* movies and that the model prediction is correct.

However, as not all genres following the general requirement of movie poster designs, these posters may cause the model to misread the designs. Subsequently, the model may misclassify these movies into the opposite genre. Below are some examples of movie posters deviating from the general designs associated with their respective genres.

{% include figure.html
  file="/assets/img/posts/predict-movie-11.webp"
  caption="Predicted genre"
  size="m"
%}

The first image contains many regions of white and generally looked cheerful while the second image contains large regions of black which resulted in the poster looking dark despite cartoonish designs and fonts. These layouts misled the model, thus resulting in the wrong prediction.

## Model identifying between 10 genres

In our dataset, we have 10 genres; each genre contains 1000 movie posters. An 80/20 split was performed to train and validate the model. We used 8000 images for training and 2000 images for validation (not used for training).

We utilised weights from the pretrained ResNet18 model to train a model to classify the genre of the movie based on its poster. These are the accuracies and losses during the training.

{% include figure.html
  file="/assets/img/posts/predict-movie-12.webp"
  caption="Accuracies and losses during the training"
%}

The validation accuracy is approximately 32%. Our model can learn and overfit on the trainset, but unable to generalise on the validation dataset.

The top-3 accuracy is approximately 65%. Which leads us to think, what could be causing all the misclassification? How could we further improve its accuracy? Below is a heatmap showing all the misclassification for top-1 model:

{% include figure.html
  file="/assets/img/posts/predict-movie-13.webp"
  caption="Actual vs predicted"
  size="m"
%}

What we realised is that the model is having difficulty differentiating between *horror* and *thriller* posters. If you think about it, it is true even for us humans, where we might not be able to tell the difference between *horror* and *thriller* posters.

The same result is observed for *comedy* and *romance*, as both genres’ posters are in the lighter mood, and contains human and smiling faces.

# Can we tell if the movie will make money in the box office, by its poster?

Since posters are a marketing tool for a movie, we want to find out whether a movie poster attracts more viewers. Can a model identify if a particular type of poster tends to do better in the box office?

In our experiment, we define how well a movie is doing by its *revenue to budget ratio*. A higher budget movie would require higher revenue to break even. The higher the ratio, the better the movie is doing.

We created 2 classes with the *revenue to budget ratio*, “did well” and “didn’t do well”. Movies with the ratio of 1 and higher “did well”, otherwise it is classified as “didn’t do well”.

## Pretrained ResNet18

Yes! Our pretrained ResNet18 model can correctly identify if a movie would potentially make money, approximately 68% of the time.

{% include figure.html
  file="/assets/img/posts/predict-movie-14.webp"
  caption="Accuracies and losses during the training"
%}

Can we do better than this? I could change to a deeper Resnet but would not be interesting, so here are a few other experiments that we tried.

## Bag of Tricks for Image Classification with Convolutional Neural Networks

A [paper by Tong He et al.](https://arxiv.org/abs/1812.01187) suggested ResNet tweaks that would improve by receiving more information in the downsampling blocks.
The author used these tweaks to improve ResNet50 model top-1 accuracy on ImageNet from 75.3% to 79.29%

## Mish activation function

[Mish](https://github.com/digantamisra98/Mish) is an activation function that is unbounded above, bounded below, smooth and non-monotonic.

The positive range of Mish activation function resembles closely to the most popular activation function, ReLu. Being bounded below resulted in regularisation effect. The negative range preserved small negative inputs which improve expressivity and gradient flow. Read more in this [article about Mish by Diganta Misra](https://towardsdatascience.com/mish-8283934a72df).

## Data augmentation

Recently advances in model accuracy have been attributed to generating more data via data augmentation; which significantly increase the diversity of data available for training.

```python
from torchvision import transforms
image_transforms = {
    # Train uses data augmentation
    'train':
    transforms.Compose([
        transforms.RandomResizedCrop(size=256, scale=(0.8, 1.0)),
        transforms.RandomRotation(degrees=15),
        transforms.ColorJitter(),
        transforms.RandomHorizontalFlip(),
        transforms.CenterCrop(size=224),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406],
                             [0.229, 0.224, 0.225])
    ]),
    # Validation does not use augmentation
    'validate':
    transforms.Compose([
        transforms.Resize(size=256),
        transforms.CenterCrop(size=224),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406],
                             [0.229, 0.224, 0.225])
    ]),
}
```

## Homemade deep and wide ResNet

This is inspired by the [Wide & Deep model for Recommender Systems](https://arxiv.org/abs/1606.07792), by combining a pretrained ResNet with pretrained wide-ResNet.

Firstly, we loaded both pretrained ResNet and pretrained wide-ResNet and removed the last fully connected layers for ImageNet classification. We then appended a 3x3 convolution, batch normalisation and ReLu from the inputs to both ResNet. Lastly, we concatenate the output from both ResNet followed by addition of another 3x3 convolution and a fully connected layer for classification.

## Classification results with various experiments

Here are our results:

<script src="https://gist.github.com/jinglescode/a660e498eb3ba4142618909ae7924674.js"></script>

Mish can get a 3% improvements because of the regularisation effect, thus generalise on the unseen a little better. I would give this activation more exploration in future.

Data augmentation have 3% improvements too, in fact, I am a little surprised that data augmentation would have improvements on this problem.

# Conclusion

Given based off a movie poster alone, predicting earnings and popularity of a movie can be a daunting task. This issue rings true even for distribution companies and investors who have hundreds of experts and analysts working for them to ensure that their investments are not in vain and reap rich returns. The introduction and progress of our model may result in the future aid these analysts and companies in making more detailed and sound predictions.

Upon further experimentation, to achieve a more accurate reading, delving into a deeper ResNet model might increase in performance. However, in our experiments, we applied Mish activation and various tweaks from research papers; as such results returned are promising and is a path worth exploring further.

Training the AI model is half the battle; it is worth noting real-world data are “dirty” and “unrefined”; what these meant are not all data are accurate and present. For machine learning to work, we must first understand our data well and understand what is needed for our model to succeed.
