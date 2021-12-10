---
title: Gakachu
published: true
locale: 'en'
---
import smallHeader from '~/components/smallHeader.vue'
import textBlock from '~/components/textBlock.vue'
import blockHeader from '~/components/blockHeader.vue'
import buttonsRow from '~/components/buttonsRow.vue'
import iconButton from '~/components/iconButton.vue'
import videoInsert from '~/components/videoInsert.vue'


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
<iconButton to="/" type="Github">Github</iconButton>
<iconButton to="/" type="Youtube">YouTube</iconButton>
</buttonsRow>

<videoInsert src="https://www.youtube.com/embed/GZQ0LKsHGak?rel=0&disablekb=1&modestbranding=1"></videoInsert>