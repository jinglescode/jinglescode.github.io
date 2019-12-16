---
title: Readings on Glaucoma Medical Imaging
layout: note
description: Notes on my readings in research papers containing Glaucoma
---

[Haleem, M.S., Han, L., van Hemert, J., Li, B., Fleming, A., Pasquale, L.R. and Song, B.J., 2018. A novel adaptive deformable model for automated optic disc and cup segmentation to aid glaucoma diagnosis. Journal of medical systems, 42(1), p.20.](https://link.springer.com/article/10.1007/s10916-017-0859-4)

What's the reason for performing this research? (objective)
- segment disc and cup and then compute CDR

Implementations
- use mean shape from the training set as initial input
- Region Classification model: identify initial disc and cup boundary by pixel-wise classification
- Adaptive Edge Smoothing Update: smoothing and accurate detection of the boundary
- training pixel classifier is large and slow, so they split optic disc into 3 zones
    - 1: retinal area (class 0)
    - 2: atrophy region (class 0)
    - 3: optic disc (class 1)
- same for disc and cup:
    - 1: disc (class 0)
    - 2: cup (class 1)


[Chen, Z., Zheng, X., Shen, H., Zeng, Z., Liu, Q. and Li, Z., 2019. Combination of Enhanced Depth Imaging Optical Coherence Tomography and Fundus Images for Glaucoma Screening. Journal of medical systems, 43(6), p.163.](https://link.springer.com/article/10.1007/s10916-019-1303-8)

What's the reason for performing this research? (objective)
- to use both from EDI-OCT images and fundus images to screen glaucoma in the early stage
- network 1: EDI-OCT images, region aware strategy and residual u-net to classify each pixel to either anterior lamina cribrosa surface (ALCS) or background
- network 2: fundus images, CDR and textural features are extracted 
- hybrid features extracted from EDI-OCT images and fundus images using gcForest as the classifier

Implementations
- optic disc segmentation:
    - they did brightness reduction based on mean and standard deviation of the image
    - set a threshold of 0.9 to determine optic disc or background
- optic cup segmentation:
    - they did similar adaptive brightness method, and threshold to separate disc and cup
- extract ALCSD and lamina cribrosa deformation:
    - ALCSD is defined as the distance between the ALCS and the BMO reference plane, ALCSD is more likely to be larger in glaucoma than in normal eyes
    - minimum, maximum and average depths of ALCS are extracted


[Cheng, J., Liu, J., Xu, Y., Yin, F., Wong, D.W.K., Tan, N.M., Tao, D., Cheng, C.Y., Aung, T. and Wong, T.Y., 2013. Superpixel classification based optic disc and optic cup segmentation for glaucoma screening. IEEE transactions on medical imaging, 32(6), pp.1019-1032.](https://ieeexplore.ieee.org/abstract/document/6464593/)

What's the reason for performing this research? (objective)
- superpixel classification method is computational heavy, so they combine with deformable model based method
    - compute centre surround statistics from superpixels and unify them with histograms for disc and cup segmentation
        - use superpixel classification for initialisation of disc boundary
        - use deformable model method to fine tune the disc boundary

Implementations
- contrast enhanced histogram: histogram equalisation applied to RGB, as well as hue and saturation
- centre surround statistics: from superpixels as texture feature
    - because PPA and disc looks similar

For understanding
- ways to do disc segmentation:
    - template based methods: computational efficient but poor fitting
    - deformable model based methods: finding optimal points based on image gradient, contour, boundary, edge detection. sensitive to poor initialization
    - pixel classification based methods: use intensity, texture


[Fu, H., Xu, Y., Lin, S., Zhang, X., Wong, D.W.K., Liu, J., Frangi, A.F., Baskaran, M. and Aung, T., 2017. Segmentation and quantification for angle-closure glaucoma assessment in anterior segment OCT. IEEE transactions on medical imaging, 36(9), pp.1930-1938.](https://ieeexplore.ieee.org/abstract/document/7924386/)

What's the reason for performing this research? (objective)
- Anterior Segment Optical Coherence Tomography (AS-OCT) segmentation of corneal boundary, iris region, and trabecular-iris contact
- using these segmentation, to compute 13 major clinical parameters

Implementations
- marker transfer: for labelling initial markers
- marker refinement: used graph (nodes and edges)
    - unary term: likelihood a pixel candidate lies on a boundary
    - pairwise term: for spatial smoothness between neighboring nodes

Thoughts
- its very high level, no details on how they determine how they determine the segment between corneal boundary, iris region, and trabecular-iris contact
- no details on how they determine the 13 clinical parameters, they just did


[Fu, H., Xu, Y., Lin, S., Wong, D.W.K., Baskaran, M., Mahesh, M., Aung, T. and Liu, J., 2019. Angle-Closure Detection in Anterior Segment OCT Based on Multilevel Deep Network. IEEE transactions on cybernetics.](https://ieeexplore.ieee.org/abstract/document/8642855/)

What's the reason for performing this research? (objective)
- using anterior segment optical coherence tomography (AS-OCT) images, crop 3 ROI images of different scale, fit into 3 parallel CNN, and a binary classify (angle closure or open angle)
- intensities of AS-OCT image extracted from different machines would affect prediction, they propose intensity based data augmentation

Implementations
- ROI for anterior chamber angle (ACA) detection: sliding-window regression
- multiple different level of CNN, to extract different level images features from ROI extracted
- output maps of the three CNN are concatenated as input into one fully connected layer to predict the angle-closure detection
- resize all to 224x224, and use pre-train ImageNet model, they compare against VGG, Inception and ResNet50, but didnt say which they initialise theirs with
- classic data augmentation like rotation and scaling wont work for this, instead they train on scaling different intensity, this increase AUC performance

Thoughts
- their sliding window for ROI, is pretty complex
- they know to use these 3 regions, because of how clinical diagnosis of angle-closure, they have experts knowledge



[Fu, H., Cheng, J., Xu, Y., Wong, D.W.K., Liu, J. and Cao, X., 2018. Joint optic disc and cup segmentation based on multi-label deep network and polar transformation. IEEE transactions on medical imaging, 37(7), pp.1597-1605.](https://ieeexplore.ieee.org/abstract/document/8252743/)

What's the reason for performing this research? (objective)
- instead of segmenting optic disc first then optic cup, they want to propose a 1 stage, fully automatic deep learning technique, to segment both disc and cup
- polar transform the cropped image to do further segmentation of optical cup and optic disc

Implementations
- multi-scale U-shape convolutional network (M-Net), for segmentation
- polar transformation, balancing cup proportion, improve segmentation performance
    - spatial constraint: transform from redial to layers
    - data augmentation: easy to augment by tweaking polar parameters
    - balancing cup proportion: without polar transform, the cup is very low proportion compared to the background, polar transform enlarge the cup region, increased by 23%, help avoid overfitting thus improve segmentation performance
- used polar transformed image to their "m-net" to perform multi label task (background, disc, cup)
- m-net (that segment cup and disc and label them both)consist of:
    - mutli scale input layer: to improve segmentation for u-net  
    - u-net: it is the original u-shape convolution network
    - side output layer: classifier at every layers in the u-net, average layer to combine all side output as final prediction map
        - help in learning: side output loss backprop final layer's loss, to reliever gradient vanishing problem
        - help in performance
    - multi label classifier: 2 independent binary classifiers
        - multi-label loss function based on Dice coefficient to handle multi label and imbalance of data (pixel wise segmentation)

Thoughts
- by doing polar transform seems good, many benefits


[Fu, H., Cheng, J., Xu, Y., Zhang, C., Wong, D.W.K., Liu, J. and Cao, X., 2018. Disc-aware ensemble network for glaucoma screening from fundus image. IEEE transactions on medical imaging, 37(11), pp.2493-2501.](https://ieeexplore.ieee.org/abstract/document/8359118/)

What's the reason for performing this research? (objective)
- existing cup to disc ratio technique to determine glaucoma, rely too much on segmentation accuracy
- they wanna explore outside this "clinical measurements" (should be CDR), and rely on pure ML classifier method directly from image features
- they have 1 network, that has 4 network in it, ensemble the results to produce final output

Implementations
- they want to do these:
    - disc aware: extract features from optic disc region
    - multi level: used both global and local region image
    - multi module: used polar transformation to optic cup segmentation
- to achieve these, their Disc-aware Ensemble Network (DENet),  have 4 "levels" or "deep streams" or "modules":
    - global image stream (ResNet-50): classify using the global image directly
    - segmentation guided network (U-Net): detect the disc region for segmentation
    - disc region stream (ResNet-50): screening probability from disc region
    - disc region stream with polar transformation (ResNet-50): enlarges disc and cup, improve screening performance
        - display more details: the proportion of cup region is increased and more balanced than that in original fundus image
    - then combine the outputs to get final screening result, ensemble of outputs from 4 networks, by averaging
- they have 2 phases for training the segmentation guided model
- evaluation metric:
    - sensitivity (Sen)
    - specificity (Spe)
    - balanced accuracy (BAcc)

Thoughts
- the 4 networks are trained separately
- a lot of customisation


[Fu, H., Xu, Y., Lin, S., Wong, D.W.K., Mani, B., Mahesh, M., Aung, T. and Liu, J., 2018, September. Multi-context deep network for angle-closure glaucoma screening in anterior segment OCT. In International Conference on Medical Image Computing and Computer-Assisted Intervention (pp. 356-363). Springer, Cham.](https://link.springer.com/chapter/10.1007/978-3-030-00934-2_40)

What's the reason for performing this research? (objective)
- classification of glaucoma, by detecting angle-closure, with Multi-Context Deep Network (MCDN) architecture
- past works: extract representation based on clinical parameters used for angle closure classification, but these are easily affected by noise and low quality images
- for computationally manageable, images are down-sampled (e.g. 244x244), but loss in details
    - local window chosen at specific ocular region for diagnosis of angle closure glaucoma

Implementations
- 2 stages to compute anterior chamber angle:
    - based on clinical parameters
    - Multi-Context Deep Network (MCDN), discriminative representation
- 1st stage - AS-OCT Segmentation and Clinical Parameter:
    - compute the clinical parameters (e.g., Anterior Chamber Width, Lens-Vault, Chamber Height, Iris Curvature, and Anterior Chamber Area)
    - apply SVM to predict angle-closure probability
- 2nd stage - Multi-Context Deep Network (MCDN):
    - 2 networks for 2 images:
        - global fundus image
        - segmented, local disc region
- data augmentation: 
    - standard augmentation (rotation and scaling) does not aid in AS-OCT screening
    - they used intensity-based augmentation to enlarge the data with varied intensities
    - they also shift the ACA position to extract multiple patches
- measure performance:
    - sensitivity (Sen)
    - specificity (Spe)
    - balanced Accuracy (B-Acc)
- use pretrained VGG16

For understanding
- glaucoma: angle-closure, where the anterior chamber angle (ACA) is narrow
- cornea structure offers various cues associated with factors for angle closure glaucoma
- they resized to 224x224, so that it can use other pre-trained models
- different AS-OCT imaging devices, may affect screening accuracy
- visual features represent wider set of image properties, thus perform better than clinical parameters

Thoughts
- segmentation is important, as it is the input to its MCDN, but they didnt mention about how the do segmentation


[Juneja, M., Singh, S., Agarwal, N., Bali, S., Gupta, S., Thakur, N. and Jindal, P., 2019. Automated detection of Glaucoma using deep learning convolution network (G-net). Multimedia Tools and Applications, pp.1-23.](https://link.springer.com/article/10.1007/s11042-019-7460-4)

Implementations
- glaucoma network (G-net), modified version of U-net, 2 network to segment optic cup and disc separately
- pre-processing:
    - remove outliers from input images
        - use of various filters such as mean, median and morphology
        - cropped to remove the unnecessary part of the image
    - data augmentation to increase the dataset
- segmentation
    - segmentation of disc is use using only the red channel
    - segmentation of cup by using all 3 (RGB) channels

For understanding
- early diagnosis of glaucoma in the initial stages can significantly reduce the risk of permanent blindness
- optic disc: central circular yellowish region of the retina
    - location where millions of retinal nerve fibers that carry visual signals from the eye to the brain
- optic cup: central portion of optic disc
    - smaller, brighter
    - health: 30% of optic disc
- glaucomatous eye can be identified by increase in the size of the optic cup
    - measure by cup to disc ratio (CDR)
    - greater than 0.65: classified as glaucomic
- identify the optic cup and optic disc regions, to calculate cup to disc ratio (CDR)
    - researchers has been using different methods since 2002
    - 2015: Chen used CNN method, name ALADDIN
    - 2016: morphological operations
    - 2017: equiripple low pass finite impulse response (FIR) filter
     - Ant Colony Optimization meta-heuristics
     - type-II fuzzy thresholding approach and blood vessel extraction to segment the optic cup



[Raghavendra, U., Fujita, H., Bhandary, S.V., Gudigar, A., Tan, J.H. and Acharya, U.R., 2018. Deep convolution neural network for accurate diagnosis of glaucoma using digital fundus images. Information Sciences, 441, pp.41-49.](https://www.sciencedirect.com/science/article/pii/S0020025518300744)

what is glaucoma
- fluid pressure in the inner portion of the eye is called intraocular pressure (IOP), increase in IOP lead to damage of optic nerve
- deterioration of optic nerve fibers results in thickening of retinal nerve fibre layer (RNFL), which is usually known as ‘cupping’
- measuring cup to disc ratio, healthy eye is 0.3

how clinic diagnose glaucoma
- tonometry measures the pressure within the eye, if exceed 21mm Hg, person diagnosed with glaucoma 
- eye drops are used to dilate the pupil so that the doctor can see through the eye to examine the shape and color of the optic nerve
- pachymetry test, measures cornea thickness, helps in clinical diagnosis as it has great influence on eye pressure reading

what i think
- i dont feel good about this paper, this paper has incredible results
- they wrote "To the best of our knowledge, this is the first fully automated CNN architecture for the CAD of glaucoma using digital fundus images"; its published on 2018, how can this be



[Chen, X., Xu, Y., Wong, D.W.K., Wong, T.Y. and Liu, J., 2015, August. Glaucoma detection based on deep convolutional neural network. In 2015 37th annual international conference of the IEEE engineering in medicine and biology society (EMBC) (pp. 715-718). IEEE.](https://ieeexplore.ieee.org/abstract/document/7318462)

Main findings
- classifier using CNN to identify between glaucoma and non-glaucoma patterns for diagnostic decisions
- 6 conv and 2 FC layers, relu
- dropout and data augmentation to improve performance
- ROI extraction: divide into grid and determine maximum likelihood

For understanding
- optic disc images can be divided into 2 zones
    - optic cup: central bright zone
    - neuroretinal rim: peripheral region
- to detect for glaucoma:
    - indicators are the enlargement of the cup with respect to the optic disc, such as the 
        - vertical cup to disc ratio (CDR): major consideration of clinicians, manually annotating is labor-intensive
        - disc diameter
        - ISNT rule
        - peripapillary atrophy
- a preprocessing step to reduce or remove the bright fringe, which involves finding the center of the trimming circle and the trim radius
- data augmentation:
    - training: to increase training images of different reflections
    - testing: multi view test, testing on different reflections

[Cheng, J., Li, Z., Gu, Z., Fu, H., Wong, D.W.K. and Liu, J., 2018. Structure-Preserving Guided Retinal Image Filtering and Its Application for Optic Disk Analysis. IEEE transactions on medical imaging, 37(11), pp.2536-2546.](https://ieeexplore.ieee.org/abstract/document/8361495/)

What's the reason for performing this research? (objective)
- retinal fundus images can be low quality, this paper propose methods to restore these images based on attenuation and scattering model
    - eyes affected by cataract, produce very low quality images (cloudy)
    - scattering (of light to read retina image) increases with age (more blur)
- then, used the processed image, to do segmentation, for cup to disc ratio (CDR)

Implementations
- basically, they go through some filtering process, Guided image filtering (GIF), a pixel from a high variance area will retain its values while pixel from flat area, will be smoothed by its nearby pixels
    - but the boundary between the disc and cup might be smooth away too, so they have another filter, structure-preserving guided retinal image filtering (SGRIF), with empirically set thresholds by experiments and searching

Thoughts
- why they wanna clean the image, i can understand. but why would we want to know the details of a cataract eye? we is it that they are looking for in a cataract eye? other than labelling "this is cataract, this is not"? in this paper, they wanna know the cup to disc ratio, by cleaning any technical image problem, but for cataract eye is for what? to know if this cataract eye has glaucoma too?
- so they keep testing and keep trying out different threshold range, and validate by CDR?