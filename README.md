# Laboratory of Multi-Agent Systems in Smart Cities and Industry 4.0

*Please find the Russian version [here](README_ru.md)*

> The laboratory specializes in the study of issues of cybernetics and economic theory as applied to communication in multi-agent systems.

Examples of issues to be considered are:

* building user communication with a multi-agent system that provides a complete service. For example: Drone station > AI dispatcher > autonomous vehicle with a charger station > automated receiving point of goods;
* conducting research development in the field of web3 + robotics with the publication of results in open source.

The priority tasks are:

* experiments in the field of machine-to-machine economically significant communication;
* formation of a knowledge base and publications in the field of robot economics and Industry 4.0.

Lab tasks: https://github.com/orgs/airalab/projects/9

# Program

## Name

Robonomics Lab

## Brief Description

Laboratory for the study of aspects of the organization of networked cyber-physical systems in autonomous conditions using decentralized technologies

## Keywords

* networked cyberphysical systems
* robot-as-a-service
* decentralized technologies
* blockchain
* peer-to-peer
* industry 4.0
* IoT networks

## Research area and objectives

The ongoing large-scale digitalization of human activity has been made possible by the common network infrastructure offered by the World Wide Web, as well as numerous devices, from CCTV systems and sensors to smartphones and smart devices.

Given the growing influence of robotics, a logical step should be the same digitalization of cyber-physical systems and devices themselves, i.e., their large-scale network integration to interact with human infrastructure and with each other. This will allow devices to use the collected data to self-manage and provide the most effective services to the person. Researchers have called this approach Robot-as-a-Service and see it as a potential economic model for the future.

However, the multitude of autonomous devices that are networked and capable of physically affecting the world raise great security concerns, exacerbated by the negative experience of large centralized projects. Such network CPSs require studying the issues of communication protocols and managing multi-agent systems of heterogeneous devices, without taking into account the fact that managing a single device can also be a nontrivial task. In addition, the final goal of creating a networked CPS is its integration into the digital economy, and this imposes additional restrictions related to legal and economic aspects and information protection.

Decentralized technologies such as peer-to-peer networks, blockchains and smart contracts are a promising area of research in this area. They do not have the drawbacks of centralized approaches, make it easier to solve some issues of organizing a multi-agent system, and also already have ways of integrating with the digital economy.

Therefore, within the framework of this laboratory, we propose to investigate aspects of the application of precisely decentralized technologies for managing network CPS. It is supposed to use the open source platform [Robonomics](https://robonomics.network/), which offers the capabilities of the Ethereum and Polkadot blockchains for robotic devices compatible with the Robot Operating System framework, and uses the market mechanism as the basic way of interaction between devices and humans. The main goal of the laboratory is the application of decentralized technologies for networked cyber-physical systems in various applications.

## Relevance to ITMO's prioritized areas

The research interest of the laboratory corresponds to the priority areas of ITMO University in “Intelligent technologies and robotics”, as well as on “Intelligent technologies in the economy, social sphere and art”.

## Research plan

The laboratory focuses on four major areas of research:

*1) Certified measurements of the quality of water resources using unmanned surface vehicles.* 

The main focus is on an environmental monitoring system built on a small fleet of [small marine vessels](https://www.youtube.com/watch?v=Mtqm5y6Bolo) equipped with compact sensors. In this case, the Robnonomics platform is used for secure registration of vessels, their missions and collected data on water samples, thereby ensuring the certification of measurements. Within the framework of the direction, the following issues are investigated:

* finding and tracking pollution sources, taking into account the computing limitations of devices;
* construction of pollution maps using unmanned surface vehicles;
* movement and data collection in waves and currents;
* optimal distribution of the fleet of water drones in the task of collecting water samples;
* efficient network configurations for communication between the fleet / ground control station, taking into account the communication constraints;
* mixed reality simulations for testing a fleet of real and virtual devices;
* protection of environmental data sent from devices using cryptography;
* methods of blockchainization and monetization of environmental data.

*2) Smart factories for Industry 4.0.*

Smart factories are factories in which autonomous production occurs by collecting, exchanging and using information between people, materials and machines using network technologies. In the final stage, such factories operate without human intervention, independently adjusting their production process based on feedback from product sales. A [test bench](https://youtu.be/yuxOF_z70us) is available at the faculty, based on the Fischertechnik designer and Siemens controllers, which simulates a smart factory, from the supply of raw materials to the shipment of products from warehouses, depending on the demand for it. The stand allows you to explore the following issues:

* optimal management of a multi-agent system using market mechanisms;
* modeling of industrial processes;
* adaptive management of industrial processes based on external economic factors;
* the laws of resource and production cycle management to maximize profits;
* control of industrial Siemens microcontrollers.

*3) The robot artist as an autonomous creative system.*

Autonomous systems that create art objects (or artifacts) have been of interest to researchers since the 1980s, gradually accelerating with the development of image recognition and Simultaneous Localization and Mapping (SLAM) techniques. However, the task of generating a human-independent idea of an artifact - what is called creativity - has begun to advance recently, with the development of neural networks, for example, art in the style of Inceptionism from the Google AI team. The most intriguing thing is the creation of a completely autonomous creative system capable of “inventing” the idea of an artifact, realizing it, presenting it for review, and drawing conclusions from feedback on how to proceed further. The [KUKA KR6 R900](https://www.youtube.com/watch?v=xSD_lsrAA0I) manipulator is available to work on this direction at the faculty, which can draw with a brush on canvas. The robot works on the basis of the Robonomics platform, which allows it, for example, to put up paintings for a digital auction. The stand allows you to explore the following issues:

* solving the inverse problem of kinematics for manipulator control when drawing;
* the task of web scraping is to extract the data used to generate the idea of the picture;
* determination of the working space using a 3D camera;
* using feedback from the sale of paintings to find the most popular ideas for new ones;

*4) Digitalization of the state of the infrastructure using a network of sensors.*

The Internet of Things has been actively expanding in the last decade, but it still has significant limitations for ubiquitous use, primarily related to security when connecting smart devices and sensors. Decentralization of governance has the potential to circumvent this limitation, opening the way for decentralized autonomous organizations and even smart cities. This infrastructure has a digital footprint for every facility in the organization, allowing you to [analyze health and efficiently manage](https://youtu.be/shqey3tmNUk) assets and costs, from electricity consumption to PM10 concentration in offices. Within the framework of this direction, it is planned to investigate:

* optimal placement of sensors in rooms to collect data on temperature / humidity / air quality;
* systems for automatic localization and diagnostics of infrastructure problems;
* efficient configurations and architectures for wireless sensor networks;
* safety of sensor networks.

## Skills that participants will develop

* Working with web3 technologies: Ethereum ecosystems, Polkadot and Robonomics, deploying smart contracts.
* Robot Operating System framework: the entire pipeline, from sending a task for a robot mission to receiving the resulting data from executing devices.
* Modeling the work of various CPS and management theory skills.
* Programming in Python, Rust, JavaScript.
* DevOps Skills (CI / CD).
* Ability to work with microcontrollers, single board computers and sensor systems.
* Scientific activity, setting up experiments, design and publication of scientific articles.

## Team experience

[Vadim Manaenko](https://github.com/Vourhey) - head of the laboratory, ICT assistant, postgraduate student of the 2nd year of study.

* DevOps engineer of the Airalab team (Robonomics developers) with three years of experience.
* Team lead of the engineering department of the Robonomics platform.
* Experience in decentralized projects since 2017: Ethereum, Tezos, Lightning Network.
* Knowledge of the Robot Operating System at the package development level.
* Languages: Python (> 3 years), Rust, Kotlin.
* Linux: Ubuntu, Arch, NixOS, Bash
* Experience in conducting master classes, seminars, video lectures.

Recent projects:

* Protocol for issuing green certificates based on data from renewable energy sources.
* A system for registering a digital passport of drones and their flights.
* Quality control system for chemical products.

[Ivan Berman](https://scholar.google.com/citations?user=jo5zE10AAAAJ) is a scientific administrator, an engineer of CSR, a post-graduate student of the 2nd year of study.

* Performer of various research projects on cyber-physical systems and methods of control theory, since 2013.
* h-index = 5, author of over 10 scientific publications.
* Skills of technical analysis, CPS modeling, research, drawing up specifications and technical documentation.
* Member of the Student Design Bureau from 2015-2018.
* Knowledge of Robot Operating System, Matlab + Simulink.
* Languages: Python, C ++.

Recent projects:

* Methods for controlling the autonomous movement of small-sized robotic swimming facilities.
* Monitoring the safety of forest areas using UAVs and machine learning methods.
* Environmental monitoring based on IoT technologies.

[Alexander Kapitonov](https://scholar.google.com/citations?user=J3HFpjoAAAAJ) - curator of the laboratory, Ph.D., dean of ICT.

* One of the creators of the concept of "robot economy", the progressor of the Robonomics platform.
* Scientific supervisor of grants from the Russian Science Foundation, Erasmus +, student design bureaus.
* h-index = 11, author of over 30 scientific publications.
* Regular program participant of the MIT Media Lab Symposium Blockchain for Robotics and AI Systems.

## First year plan

* Control of an unmanned surface vehicle: an article co-authored with Professor A. S. Matveev with a more accurate mathematical model of the vehicle.
* Robot Artist: An article with Professor E. C. Ferrer of the MIT Media Lab on the concept of “Digital Autonomous Robotic Entrepreneur”; See article about manipulator control in a brush painting task.
* DAOS project - managing smart devices in an office or coworking space based on Aragon DAO and Robonomics; launching the project on Kickstarter.
* Vending machine based on the Robonomics platform.
* The Home Assistant project is a simple robot assistant for the home, capable of mobile filming and sending notifications; launching the project on Kickstarter.
* The network of sensors and the aggregation of their information: article for the conference.
* Initial experiments with the smart factory stand.

## Materials

* A. Kapitonov, S. Lonshakov, A. Krupenkin, and I. Berman, “Blockchain-based protocol of autonomous business activity for multi-agent systems consisting of UAVs,” 2017 Workshop on Research, Education and Development of Unmanned Aerial Systems (RED-UAS), Nov. 2017.
* A. Kapitonov, I. Berman, S. Lonshakov, and A. Krupenkin, “Blockchain Based Protocol for Economical Communication in Industry 4.0,” 2018 Crypto Valley Conference on Blockchain Technology (CVCBT), Nov. 2018.
* A. Kapitonov, I. Berman, V. Bulatov, S. Lonshakov, and A. Krupenkin, “Robonomics Based on Blockchain as a Principle of Creating Smart Factories,” 2018 Fifth International Conference on Internet of Things: Systems, Management and Security, Dec. 2018.
* A. Kapitonov, S. Lonshakov, I. Berman, E. C. Ferrer, F. P. Bonsignorio, V. Bulatov, and A. Svistov, “Robotic Services for New Paradigm Smart Cities Based on Decentralized Technologies,” Ledger, 2019.
* D. Alexandrov, E. Pertseva, I. Berman, I. Pantiukhin, and A. Kapitonov, “Analysis of Machine Learning Methods for Wildfire Security Monitoring with an Unmanned Aerial Vehicles,” 2019 24th Conference of Open Innovations Association (FRUCT), May 2019.
* A. Kapitonov, I. Berman, V. Manaenko, V. Rzhevskiy, V. Bulatov, and A. Zenkin, “Robonomics as a Blockchain-based Platform for Unmanned Traffic Management of Mobile Vehicles,” 2019 Workshop on Research, Education and Development of Unmanned Aerial Systems (RED UAS), Nov. 2019.
* A. Zenkin, I. Berman, K. Pachkouski, I. Pantiukhin, and V. Rzhevskiy, “Quadcopter Simulation Model for Research of Monitoring Tasks,” 2020 26th Conference of Open Innovations Association (FRUCT), 2020.
* I. Berman, E. Zereik, A. Kapitonov, F. Bonsignorio, A. Khassanov, A. Oripova, S. Lonshakov, and V. Bulatov, “Trustable Environmental Monitoring by Means of Sensors Networks on Swarming Autonomous Marine Vessels and Distributed Ledger Technology,” Frontiers in Robotics and AI, vol. 7, 2020.

