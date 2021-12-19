---
title: Gakachu
published: true
locale: 'en'
---
import callout from '~/components/callout.vue'
import smallHeader from '~/components/smallHeader.vue'
import textBlock from '~/components/textBlock.vue'
import buttonsRow from '~/components/buttonsRow.vue'
import iconButton from '~/components/iconButton.vue'
import videoInsert from '~/components/videoInsert.vue'
import Icon from '~/components/Icon.vue'
import gallery from '~/components/gallery.vue'
import galleryImg from '~/components/galleryImg.vue'

import tempGallery from '~/components/tempGallery.vue'


<h2 class="callout">Robot Artist and Entrepreneur</h2>

<img style="width: 100%" alt="Gakachu image" src="/gakachu.png"/>

<p></p>
<p></p>
<p>Gaka-chu (from Japanese 画家 — gaka — artist, chu — in honor of Pikachu) is an industrial 6 axis manipulator, that has been re-equipped to draw with brushes and paints and provided with the software to sell its works and maintain self-sufficiency. Gaka-chu allows us to look beyond the line that separates robots as tools and robots as peers. </p>

<h2>Mission</h2>

<smallHeader>Anathomy from human</smallHeader>
<textBlock>To dive into the concept of an “autonomous creative system,” we tried to make Gaka-chu as independent of a human as possible. This allowed us to explore a completely gray area where robotic systems become authors and even owners of assets.</textBlock>

<smallHeader>Generation ideas for art</smallHeader>
<textBlock>We bypassed the most difficult task for AI — imagination — by concentrating on finding topics and ideas for paintings that would be interesting to sell. To do this, we use Microsoft Azure cognitive services to select keywords of interest to humanity from publications and posts on social networks or forums. So, we erode the concept of authorship, so that in the end there is nothing left but to acknowledge the authorship of the robot.</textBlock>

<smallHeader>Drawing with a brush</smallHeader>
<textBlock>Gaka-chu can draw Japanese kanji characters that mean a keyword or prepared simple images (such as logos). This requires several components to work together (sensing, planning, actuation), which includes, for example, transforming the canvas coordinates and solving the inverse kinematic.</textBlock>

<smallHeader>Selling artworks for cryptocurrency</smallHeader>
<textBlock>The robot has its own cryptocurrency wallet on the Ethereum platform, and with the help of software it can perform transactions on the network. In particular, the robot is able to create non-fungible tokens (NFT) based on the created paintings, put them up for auction and use the received cryptocurrency.</textBlock>

<smallHeader>Automatic purchase of drawings consumables</smallheader>
<textBlock>The main task of a robot as an entrepreneur is to support its activities using the accumulated capital. We ran an experiment in which Gaka-chu purchased canvases, paints, and brushes from a test automated system of an art shop, paying for the order with cryptocurrency.</textBlock>

<buttonsRow>
    <iconButton type="OpenSea">OpenSea</iconButton>
    <iconButton type="Rarible">Rarible</iconButton>
</buttonsRow>



<videoInsert src="https://www.youtube.com/embed/xSD_lsrAA0I"></videoInsert>

<h2>Tech details</h2>

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

<buttonsRow>
    <iconButton type="Github">Github repository</iconButton>
</buttonsRow>

<h2>R&D interests</h2>
<ul>
<li>Solving the inverse kinematics for 6 axis manipulator control when drawing.</li>
<li>Task of web scraping for extracting the data for painting topics.</li>
<li>Using cognitive technologies to generate topics.</li>
<li>Determination of the working space using a depth camera.</li>
<li>Finding the most profitable topics using statistics from the sale of paintings.</li>
</ul>

<h2>Media</h2>

<table>
    <tbody>
        <tr class="tr__no_reverse"><Icon type="paper"/><a href="https://forklog.com/robot-hudozhnik-gaka-chu-predstavil-svoi-pervye-nft/"><strong>Робот-художник Gaka-chu представил свои первые NFT</strong></a></tr>
        <tr class="tr__no_reverse"><Icon type="paper"/><a href="https://news.itmo.ru/en/science/cyberphysics/news/9331/"><strong>Gaka-Chu: The Robot That Dreams of Being an Artist</strong></a></tr>
        <tr class="tr__no_reverse"><Icon type="paper"/><a href="https://blog.aira.life/gaka-chu-d2f6cfa61390"><strong>“Gaka-Chu. The Robot-artist” project: small clumsy KUKA manipulator living in the big world of serious industrial robots</strong></a></tr>
    </tbody>
</table>

<gallery>
    <gallery-img url="/gakachuGallery_1.png"/>
    <gallery-img url="/gakachuGallery_2.png"/>
    <gallery-img url="/gakachuGallery_3.png"/>
    <gallery-img url="/gakachuGallery_4.png"/>
    <gallery-img url="/gakachuGallery_5.png"/>
    <gallery-img url="/gakachuGallery_6.png"/>
</gallery>

<videoInsert src="https://www.youtube.com/embed/GxlYxaykqTU"></videoInsert>

<h2>Gaka-chu profiles</h2>

<buttonsRow>
<iconButton type="Github">Github</iconButton>
<iconButton type="Youtube">YouTube</iconButton>
<iconButton type="OpenSea">OpenSea</iconButton>
<iconButton type="Rarible">Rarible</iconButton>
</buttonsRow>

[//]: # (<tempGallery>)

[//]: # (    <gallery-img url="/gakachuGallery_1.png"/>)

[//]: # (    <gallery-img url="/gakachuGallery_2.png"/>)

[//]: # (    <gallery-img url="/gakachuGallery_3.png"/>)

[//]: # (    <gallery-img url="/gakachuGallery_4.png"/>)

[//]: # (    <gallery-img url="/gakachuGallery_5.png"/>)

[//]: # (    <gallery-img url="/gakachuGallery_6.png"/>)

[//]: # (</tempGallery>)
