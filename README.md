# Static website https://multi-agent.io

This is repoitory for website of Laboratory of Multi-Agent Systems.

## For developers

* Built with [Gridsome](https://gridsome.org/).
* Please, use [npm](https://www.npmjs.com) to install packages
* You need also to add locally `.env`, look at `.env.example`
> FORM_SCRIPT – file with Google Sheet script code deployed

## For contributors

Please, fill free to open issues with your suggestions or pull requests.

## How to add project

### First preprations

* add .md file in folder `./project` or in `./project/ru` for Russian locale
* add folder with same name as .md file to `./project/image` or `./project/ru/image` (you need to duplicate it even images are same)
* for common images use folder `./project/image/shared` or `./project/ru/image/shared`

### Editing .md file

Place setting at the top:

```
---
title: "Project"
subtitle: "Super nice project"
cover: "./images/project/cover.jpg"
video: "https://youtu.be/GxlYxaykqTU" or video: ""
description: "This zuper very nice project"
published: true
locale: "en" or locale: "ru"
---
```

#### Custom section

```
<ma-section title="Anathomy from human">
To dive into the concept of an “autonomous creative system,” we tried to make Gaka-chu as independent of a human as possible. This allowed us to explore a completely gray area where robotic systems become authors and even owners of assets.
</ma-section>
```

or with title only

```
<ma-section title="Anathomy from human" />
```

or with content only

```
<ma-section>Yor content here</ma-section>
```

#### YouTube video
To embed YouTube video you need just insert in .md file link for sharing, e.g.

```
https://www.youtube.com/embed/xSD_lsrAA0I
```

#### Anything in the line with gaps

```
<ma-line>
    ![logo image](src)
    ![logo image](src)
    ![logo image](src)
</ma-line>
```

#### Buttons

You may add border buttons like this:

```
<ma-button href="https://yourlink.here"><img src="./images/shared/someicon.png"/><span>Button Text</span></ma-button>
```

or without any additional elements:

```
<ma-button href="https://yourlink.here">Button Text</ma-button>
```

#### Media / article / news list

```
<ma-list-news>

* [Common md markdown link 1](https://anylink1.go)
* [Common md markdown link 2](https://anylink2.go)
* [Common md markdown link 3](https://anylink3.go)

</ma-list-news>
```

#### Image gallery

```
<ma-gallery>
    <g-image src="./images/your-project-name/image.jpg"/>
    <g-image src="./images/your-project-name/image-2.jpg"/>
</ma-gallery>
```

#### Green title

```
<ma-title type="tick">Any text here</ma-title>
```