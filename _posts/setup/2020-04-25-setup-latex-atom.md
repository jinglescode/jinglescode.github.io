---
title: Setting up LaTeX on your Atom Editor
layout: note
image: /assets/img/posts/setup-latex-atom-01.webp
image-thumb: /assets/img/posts/setup-latex-atom-01-mini.webp
description: Edit and preview .tex files, all from within your Atom editor
tags:
 - how to
---

In this tutorial, I will guide you through setting up a LaTeX editor on [Atom](https://atom.io/), and here are some reasons and benefits for doing so:

- preview your work side by side as you save your work
- fast, generate previews in 3-seconds
- clicking on the preview will bring your cursor to the syntax’s location
- Dropbox and GitHub integration for backup and working with collaborators
- Free

# What is LaTeX

[LaTeX](https://www.latex-project.org/about/) is a document preparation system that is widely used in academia for publishing scientific documents. Authors use markup syntax to define the structure of a document, to stylise text, to insert images, to add citations and cross-references.

Because there are so many publishers, each having their design standards. For example, 18pt Times Roman for the title, 12pt Times Italic for the name, and so on. The purpose of LaTeX is to let authors focus on the writing and not wasting time following publishers’ document design guidelines. Authors simply download publishers’ LaTeX template and start writing.

If you’re new to TeX or just want to use LaTeX for a one-time project, the quickest way to get started is using online services like [Papeeria](http://papeeria.com/), [Overleaf](https://www.overleaf.com/), and [LaTeX base](https://latexbase.com/). They offer the ability to edit, preview, and download your work in PDF format.

Since there are online solutions, so why set up a LaTeX editor on your machine?

Unless you are paying for their plans, the free tier has some limitations, let me list a few:

1. Limited private documents [Papeeria], or no private document [Latex base]
2. No GitHub integration [Overleaf], or only public repositories [Papeeria]
3. No collaborators [Overleaf]
4. Need to be online.

Personally, I choose to set up LaTeX on my local so that my co-authors and I can work on the same LaTeX document and sync with private GitHub repositories.

Secondly, unlike online services, generating a preview on a local machine is much quicker too. When I will hit _Cmd+S_, the preview will be generated in 3-seconds.

# Set up LaTeX editor on Atom

In this section, I will guide you through setting up a LaTex editor on [Atom](https://atom.io/) on macOS. The setup consists of 4 parts:

- setup TeX distributions
- setup Atom
- install Latexmk
- install packages in Atom

## TeX distributions

On OS X, download [MacTeX](http://www.tug.org/mactex/). As of April 2020, the distribution is MacTeX-2020. You can choose to download the full package, which is 4GB. It contains all the files that most users need, and you don’t have to face the daunting task of searching for missing components. Highly recommended.

If you don’t want to install the entire MacTeX distribution — which is pretty big, and if you are someone like me who prefers to select what gets installed, you can download [BasicTeX](https://www.tug.org/mactex/morepackages.html), which is only 80MB. BasicTeX contains the [TeX Live](https://www.tug.org/texlive/) distribution that suffices the need to generate PDF from _.tex_ files; it does not include GUI applications, Ghostscript, and other libraries. But this means that you have to search and download all the packages you may need. I will cover this later.

{% include figure.html
  file1="/assets/img/posts/setup-latex-atom-02.webp"
  file2="/assets/img/posts/setup-latex-atom-03.webp"
  size="c2"
%}

MacTeX is for OS X. But if you are on Linux or Windows, download [TeX Live](https://www.tug.org/texlive/).

## Atom

{% include figure.html
  file="/assets/img/posts/setup-latex-atom-04.webp"
  size="s"
%}

Atom is a beautiful text editor that is available on OS X, Windows, and Linux. It has a package manager that allows you to install thousands of open source packages that add new features and functionality to your editor. You can easily browse your project files on a single interface. You can split your interface into multiple panes to edit/reference code across files. [Download and install Atom](https://atom.io/).

## Latexmk

Latexmk is needed to automate the process of generating a LaTeX document. Nothing to explain here, we need this to work. The installation is simple, from the Terminal, type:

sudo tlmgr install latexmk

This will prompt you for your password and install the _latexmk_ package.

## Atom packages

{% include figure.html
  file="/assets/img/posts/setup-latex-atom-05.webp"
  size="s"
%}

These packages enable you to use Atom as a LaTeX editor.

- **Compile**. [Latex package](https://atom.io/packages/latex) compiles LaTeX documents from within Atom. It will execute Latexmk to build your work.
- **Preview PDF**. [PDF View package](https://atom.io/packages/pdf-view) enables you to view PDF files in Atom. This allows you to preview your work side-by-side. Clicking on the preview will bring your cursor to the syntax's location.
- **Syntax highlighting**. [Language-LaTeX package](https://atom.io/packages/language-latex) does LaTeX syntax highlighting in Atom. It is particularly useful to help you check that your syntax has valid LaTeX grammar.

# You did it!

At this point, you should have a working LaTeX editor on your Atom. I recommend a few changes to the configurations. Go to _Atom -> Preferences -> Packages_. Go to _Settings_ of the _latex_ package.

{% include figure.html
  file="/assets/img/posts/setup-latex-atom-06.webp"
  size="s"
%}

- [check] Build on Save
- [uncheck] Open Result after Successful Build
- [uncheck] Open Result in Background
- Under Output Directory, type “_build_”

In _language-latex_ package:
- [check] Soft Wrap

## Additional packages

If you have download BasicTeX, chances are you have to download packages that publishers use in their templates. The easiest way is to Google search for the missing packages, or search [Comprehensive TEX Archive Network (CTAN)](https://ctan.org/pkg).

For example, _algorithmic_ is one of the commonly used packages, and we might see this in the document.
```
\usepackage{algorithmic}
```

To install packages, open the Terminal, type:
```
sudo tlmgr install algorithms
```
----------

There you go! I hope you enjoy your LaTeX editor and love Atom even more. Want to thank all the open-source contributors for [Atom](https://github.com/atom/atom), [atom-latex](https://github.com/thomasjo/atom-latex), [atom-pdf-view](https://github.com/izuzak/atom-pdf-view), [language-latex](https://github.com/area/language-latex).
