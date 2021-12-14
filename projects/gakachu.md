---
title: Gakachu
published: true
locale: 'en'
---
import callout from '~/components/callout.vue'
import smallHeader from '~/components/smallHeader.vue'
import textBlock from '~/components/textBlock.vue'
import blockHeader from '~/components/blockHeader.vue'
import buttonsRow from '~/components/buttonsRow.vue'
import iconButton from '~/components/iconButton.vue'
import videoInsert from '~/components/videoInsert.vue'
import Row from '~/components/Row.vue'
import Col from '~/components/Col.vue'
import Icon from '~/components/Icon.vue'
import gallery from '~/components/gallery.vue'
import imgCaption from '~/components/imgCaption.vue'
import galleryImg from '~/components/galleryImg.vue'


<callout>Robot Artist and Entrepreneur</callout>

<img style="width: 100%" alt="Gakachu image" src="/gakachu.png"/>

<imgCaption>Gaka-chu (from Japanese 画家 — gaka — artist, chu — in honor of Pikachu) is an industrial 6 axis manipulator, that has been re-equipped to draw with brushes and paints and provided with the software to sell its works and maintain self-sufficiency. Gaka-chu allows us to look beyond the line that separates robots as tools and robots as peers. </imgCaption>

<blockHeader>Mission</blockHeader>

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
    <iconButton to="/" type="OpenSea">OpenSea</iconButton>
    <iconButton to="/" type="Rarible">Rarible</iconButton>
</buttonsRow>

<videoInsert src="https://www.youtube.com/embed/GZQ0LKsHGak?rel=0&disablekb=1&modestbranding=1"></videoInsert>

<blockHeader>Tech details</blockheader>

<table>
    <Row>
        <Col><strong>Hardware</strong></Col>
        <Col>Manipulator KUKA KR6 R900 with Intel RealSense  D435i depth camera and Intel NUC NUC7i5BNB (Intel Core i5-7260U, 3.40 GHz, 8 GB RAM) for image and motion processing</Col>
    </Row>
    <Row>
        <Col><strong>Main software connector</strong></Col>
        <Col>Robot Operating System: all components are implemented as ROS packages and nodes</Col>
    </Row>
    <Row>
        <Col><strong>Image processing software</strong></Col>
        <Col>librealsense ROS package, OpenCV library for image skeletonization</Col>
    </Row>
    <Row>
        <Col><strong>Motion planning</strong></Col>
        <Col>MoveIt Motion Planning Framework with own module for inverse kinematics</Col>
    </Row>
    <Row>
        <Col><strong>NTF mining and auction</strong></Col>
        <Col>OpenSea platform with its SDK</Col>
    </Row>
    <Row>
        <Col><strong>Agent-agent economic interaction</strong></Col>
        <Col>Robonomics Network with AIRA client: provides the ability to send transactions to the Ethereum network</Col>
    </Row>
    <Row>
        <Col><strong>Data storage</strong></Col>
        <Col>InterPlanetary File System</Col>
    </Row>
</table>

<buttonsRow>
    <iconButton to="/" type="Github">Github repository</iconButton>
</buttonsRow>

<blockHeader>R&D interests</blockHeader>
<ul>
<li>Solving the inverse kinematics for 6 axis manipulator control when drawing.</li>
<li>Task of web scraping for extracting the data for painting topics.</li>
<li>Using cognitive technologies to generate topics.</li>
<li>Determination of the working space using a depth camera.</li>
<li>Finding the most profitable topics using statistics from the sale of paintings.</li>
</ul>

<blockHeader>Media</blockHeader>

<table>
    <Row stickToTop><Icon type="paper"/><a href="/"><strong>Робот-художник Gaka-chu представил свои первые NFT</strong></a></Row>
    <Row stickToTop><Icon type="paper"/><a href="/"><strong>Gaka-Chu: The Robot That Dreams of Being an Artist</strong></a></Row>
    <Row stickToTop><Icon type="paper"/><a href="/"><strong>“Gaka-Chu. The Robot-artist” project: small clumsy KUKA manipulator living in the big world of serious industrial robots</strong></a></Row>
</table>

<gallery>
    <gallery-img url="/cover.jpg"/>
    <gallery-img url="/cover.jpg"/>
    <gallery-img url="/cover.jpg"/>
    <gallery-img url="/cover.jpg"/>
    <gallery-img url="/cover.jpg"/>
    <gallery-img url="/cover.jpg"/>
</gallery>

<videoInsert src="https://www.youtube.com/embed/GZQ0LKsHGak?rel=0&disablekb=1&modestbranding=1"></videoInsert>

<blockHeader>Gaka-chu profiles</blockHeader>

<buttonsRow>
<iconButton to="/" type="Github">Github</iconButton>
<iconButton to="/" type="Youtube">YouTube</iconButton>
<iconButton to="/" type="OpenSea">OpenSea</iconButton>
<iconButton to="/" type="Rarible">Rarible</iconButton>
</buttonsRow>