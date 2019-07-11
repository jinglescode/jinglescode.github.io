---
title: Sync remote Github repo with local
layout: note
image: https://image.ibb.co/csB41V/github.png
description: How to setup Github repo and synchronise with local copy
category: setup
tags:
  - Github
---

Personally, I tend to forget how to setup a Git repo, and thus I'm writing this as a guide for myself.

# Have a Github account and a repository
If you do not have one, go to [Github](https://github.com) and sign up. After you have verified your account, go on and click on the green `New repository` button.

You will be given a URL ending with .git like:
> https://github.com/`your username`/`repo name`.git

# Create a repository locally
Open your `Terminal`, and type ```cd <folder path>``` to the folder you wish to remotely sync with your Github files. This folder is your `Working Directory`.

Create a new git repository with `git init` then `git remote add origin <your .git link>`

# Pull files
In order to sync your local `Working Directory`, use `git pull <your .git link> master` to pull the files on Github server.

# Add files, commit and push
Go on and add some files to your `Working Directory`. After you're done, commit and push with the following
```
git add -A
git commit -m "some commit message"
git push <your .git link> master
```
