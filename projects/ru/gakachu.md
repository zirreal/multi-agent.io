---
title: Gakachu
subtitle: Robot Artist and Entrepreneur
cover: "./images/gakachu/cover.jpg"
video: "https://youtu.be/GxlYxaykqTU"
description: "Gaka-chu (from Japanese 画家 — gaka — artist, chu — in honor of Pikachu) is an industrial 6 axis manipulator, that has been re-equipped to draw with brushes and paints and provided with the software to sell its works and maintain self-sufficiency. Gaka-chu allows us to look beyond the line that separates robots as tools and robots as peers."
published: true
locale: "ru"
---

## Mission

<ma-section title="Anathomy from human">
To dive into the concept of an “autonomous creative system,” we tried to make Gaka-chu as independent of a human as possible. This allowed us to explore a completely gray area where robotic systems become authors and even owners of assets.
</ma-section>

<ma-section title="Generation ideas for art">
We bypassed the most difficult task for AI — imagination — by concentrating on finding topics and ideas for paintings that would be interesting to sell. To do this, we use Microsoft Azure cognitive services to select keywords of interest to humanity from publications and posts on social networks or forums. So, we erode the concept of authorship, so that in the end there is nothing left but to acknowledge the authorship of the robot.
</ma-section>

<ma-section title="Drawing with a brush">
Gaka-chu can draw Japanese kanji characters that mean a keyword or prepared simple images (such as logos). This requires several components to work together (sensing, planning, actuation), which includes, for example, transforming the canvas coordinates and solving the inverse kinematic.
</ma-section>

<ma-section title="Selling artworks for cryptocurrency">
The robot has its own cryptocurrency wallet on the Ethereum platform, and with the help of software it can perform transactions on the network. In particular, the robot is able to create non-fungible tokens (NFT) based on the created paintings, put them up for auction and use the received cryptocurrency.
</ma-section>

<ma-section title="Automatic purchase of drawings consumables">
The main task of a robot as an entrepreneur is to support its activities using the accumulated capital. We ran an experiment in which Gaka-chu purchased canvases, paints, and brushes from a test automated system of an art shop, paying for the order with cryptocurrency.
</ma-section>

<ma-line>
    <ma-button href="https://opensea.io/accounts/Gaka-Chu"><img src="./images/shared/OpenSea.png"/><span>OpenSea</span></ma-button>
    <ma-button href="https://rarible.com/gakachu"><img src="./images/shared/Rarible.png"/><span>Rarible</span></ma-button>
</ma-line>

https://www.youtube.com/embed/xSD_lsrAA0I

## Tech details

<table>
    <tbody>
        <tr>
            <td><strong>Hardware</strong></td>
            <td>Manipulator KUKA KR6 R900 with Intel RealSense  D435i depth camera and Intel NUC NUC7i5BNB (Intel Core i5-7260U, 3.40 GHz, 8 GB RAM) for image and motion processing</td>
        </tr>
        <tr>
            <td><strong>Hardware</strong></td>
            <td>Manipulator KUKA KR6 R900 with Intel RealSense  D435i depth camera and Intel NUC NUC7i5BNB (Intel Core i5-7260U, 3.40 GHz, 8 GB RAM) for image and motion processing</td>
        </tr>
    <tr>
        <td><strong>Main software connector</strong></td>
        <td>Robot Operating System: all components are implemented as ROS packages and nodes</td>
    </tr>
    <tr>
        <td><strong>Image processing software</strong></td>
        <td>librealsense ROS package, OpenCV library for image skeletonization</td>
    </tr>
    <tr>
        <td><strong>Motion planning</strong></td>
        <td>MoveIt Motion Planning Framework with own module for inverse kinematics</td>
    </tr>
    <tr>
        <td><strong>NTF mining and auction</strong></td>
        <td>OpenSea platform with its SDK</td>
    </tr>
    <tr>
        <td><strong>Agent-agent economic interaction</strong></td>
        <td>Robonomics Network with AIRA client: provides the ability to send transactions to the Ethereum network</td>
    </tr>
    <tr>
        <td><strong>Data storage</strong></td>
        <td>InterPlanetary File System</td>
    </tr>
    </tbody> 
</table>

<ma-section>
    <ma-button href="https://github.com/Multi-Agent-io/gaka-chu.online"><img src="./images/shared/GitHub.png"/><span>Github repository</span></ma-button>
</ma-section>

## R&D interests
* Solving the inverse kinematics for 6 axis manipulator control when drawing.
* Task of web scraping for extracting the data for painting topics.
* Using cognitive technologies to generate topics.
* Determination of the working space using a depth camera.
* Finding the most profitable topics using statistics from the sale of paintings.

## Media

<ma-list-news>

* [Робот-художник Gaka-chu представил свои первые NFT](https://forklog.com/robot-hudozhnik-gaka-chu-predstavil-svoi-pervye-nft/)
* [Gaka-Chu: The Robot That Dreams of Being an Artist](https://news.itmo.ru/en/science/cyberphysics/news/9331/)
* [“Gaka-Chu. The Robot-artist” project: small clumsy KUKA manipulator living in the big world of serious industrial robots](https://blog.aira.life/gaka-chu-d2f6cfa61390)

</ma-list-news>

<ma-gallery>
    <g-image src="./images/gakachu/drawing-room.jpg"/>
    <g-image src="./images/gakachu/gakachu-2.jpg"/>
    <g-image src="./images/gakachu/gakachu-3.jpg"/>
    <g-image src="./images/gakachu/gakachu-4.jpg"/>
    <g-image src="./images/gakachu/gakachu-5.jpg"/>
    <g-image src="./images/gakachu/gakachu-6.jpg"/>
</ma-gallery>

https://www.youtube.com/embed/GxlYxaykqTU

## Gaka-chu profiles

<ma-line>
    <ma-button href="https://github.com/Multi-Agent-io/gaka-chu.online"><img src="./images/shared/GitHub.png"/><span>Github repository</span></ma-button>
    <ma-button href="https://www.youtube.com/channel/UCT5_U0Nddr9UG2Z15ArdOLA"><img src="./images/shared/YouTube.png"/><span>YouTube</span></ma-button>
    <ma-button href="https://opensea.io/accounts/Gaka-Chu"><img src="./images/shared/OpenSea.png"/><span>OpenSea</span></ma-button>
    <ma-button href="https://rarible.com/gakachu"><img src="./images/shared/Rarible.png"/><span>Rarible</span></ma-button>
</ma-line>
