# sinkhole

A sinkhole for your archives on AWS Glacier.


# Why?

Too many times I come across a file/folder that's taking up precious hard drive space, or is.. just.. there.. staring at me.. taunting me.. daring me to delete it. And I'm not sure whether I should delete it or not.

In the presence of ever-failing external hard drives, I'd like to just push it to a low-cost cloud service like AWS Glacier and forget about it.

Enter sinkhole.

# How to use

## Prerequisites

Sinkhole needs an AWS key/secret with Glacier access. After you create a IAM user with this permission, simply 

## Install through npm

```sh
npm install sinkhole -g
```

## One time configuration

```sh
sinkhole init
```

## Upload archive

When you want to send something to Glacier,

```sh
sinkhole upload
```

will ask you a couple of questions. If you just select the default values, it will upload the file, insert the file path as the archive description in Glacier, and move the file to trash.

# Todo

- [ ] Support multiple files

- [ ] Support zipping folders