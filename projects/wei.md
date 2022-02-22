---
title: WEI
subtitle: Water Environmental Inspector
cover: "./images/wei/cover.jpg"
video: "https://youtu.be/4iCkdF2UJmo"
description: "WEI - unmanned catamaran-type surface vehicle for environmental monitoring, equipped with compact sensors, on-board navigation and network connection and powered by secure registration of its missions and collected data on water samples. The vessel provides automatic certified measurements and can be used for environmental services and businesses that need water quality control."
published: true
locale: "en"
---

## Features 

<ma-section title="High level of automation">
All you need is to set a mission for the USV with a GPS route and the desired parameters for measurement. The vessel will collect the necessary data and provide online access to it as soon as it is within range of the network connection. 
</ma-section>

<ma-section title="Blockchain based security">
Environmental data can be very valuable and therefore attractive to fraud. In order to ensure trust, USV has the ability to use the blockchain to publish data, thereby making it immutable and verifiable. Moreover, the vessel and sensors can be endowed with unique blockchain based IDs in order to unambiguously link the data and the source of their receipt.
</ma-section>

<ma-section title="Wide range of water params">
The USV has support for Libelium sensor kits, which allow the collection of many different water parameters in the field, from acidity levels to specific ions. 
</ma-section>

<ma-section title="Easy to deploy">
The USV is designed in such a way as to be as convenient as possible in transportation to the launch location by an average car. Thanks to the removable weights, the vessel can be easily carried over by hand.
</ma-section>

<ma-section title="Flexibility and scalability">
Thanks to the control software used, it is easy to build a scalable fleet of such USVs, in which each device will perform its specific task.
</ma-section>

## Tech details

### Design & Hardware 

<table>
    <tbody>
        <tr>
            <td><strong>Hull and components</strong></td>
            <td>Catamaran hull made of biodegradable PLA plastic, equipped with a waterproof electronics box and removable XX kg weights to ensure swimming performance. A winch for immersion of sensors is installed on the hull.</td>
        </tr>
        <tr>
            <td><strong>Thrusters</strong></td>
            <td>2x Blue Robotics T200, max full throttle FWD - 6.7 kg f</td>
        </tr>
    <tr>
        <td><strong>On-board computer</strong></td>
        <td>Raspberry Pi 4B 8 Gb</td>
    </tr>
    <tr>
        <td><strong>Flight controller</strong></td>
        <td>Pixhawk PX4 Autopilot 2.4.8 + power module Holybro PM06 v2 micro</td>
    </tr>
    <tr>
        <td><strong>Telemetry</strong></td>
        <td>3DR radio Dual TTL, 915Mhz 500mW</td>
    </tr>
    <tr>
        <td><strong>GPS</strong></td>
        <td>RadioLink M8N SE100</td>
    </tr>
    <tr>
        <td><strong>Sensor sets</strong></td>
        <td>Libelium Smart Water and Smart Water Ions boards support plus various sensors: pH, oxidation-reduction potential, dissolved oxygen, conductivity, temperature, turbidity, ions: NH4+, Br-, Ca2+, Cl-, Cu2+, F-, I-, Li+, Mg2+, NO3-, NO2-, CIO4-, K+, Ag+, Na+</td>
    </tr>
    </tbody> 
</table>

### Software

<table>
    <tbody>
        <tr>
            <td><strong>Main software connector</strong></td>
            <td>Robot Operating System: all components are implemented as ROS packages and nodes</td>
        </tr>
         <tr>
            <td><strong>Navigation and motion control</strong></td>
            <td>PX4 Drone Autopilot software with ROS integration</td>
        </tr>
         <tr>
            <td><strong>Secure mission control</strong></td>
            <td>Robonomics Network with AIRA client: provides the ability to send transactions to the Ethereum blockchain for creation and finalization USV missions</td>
        </tr>
         <tr>
            <td><strong>Data storage</strong></td>
            <td>InterPlanetary File System for content-addressable access to data</td>
        </tr>
 </tbody> 
</table>

## Media

https://www.youtube.com/watch?v=4iCkdF2UJmo

https://www.youtube.com/watch?v=-B7WX4pGtRM

