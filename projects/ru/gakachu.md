---
title: Gakachu
subtitle: Робот-художник и предприниматель
cover: "./images/gakachu/cover.jpg"
video: "https://youtu.be/GxlYxaykqTU"
description: "Gaka-chu (с японского 画家 — gaka — художник, chu — в честь Пикачу) представляет собой промышленный 6-осевой манипулятор, который был переоборудован для рисования кистями и красками и снабжен программным обеспечением для продажи своих работ и поддержания самоокупаемости. Гака-чу позволяет нам заглянуть за грань, разделяющую роботов как инструменты и роботов как равных людям участников отношений."
published: true
locale: "ru"
---

## Миссия

<ma-section title="Анатомия от человека">
Чтобы погрузиться в концепцию «автономной творческой системы», мы попытались сделать Гака-чу как можно более независимым от человека. Это позволило нам исследовать совершенно серую зону, где роботизированные системы становятся авторами и даже владельцами активов.
</ma-section>

<ma-section title="Создание идей для искусства">
Мы обошли самую сложную для ИИ задачу — воображение — сосредоточившись на поиске тем и идей для картин, которые было бы интересно продавать. Для этого мы используем когнитивные сервисы Microsoft Azure для подбора популярных ключевых слов из публикаций и постов в социальных сетях или на форумах. Итак, мы размываем понятие авторства, чтобы в итоге ничего не оставалось, кроме как признать авторство робота.
</ma-section>

<ma-section title="Рисование кистью">
Гака-чу может рисовать японские иероглифы, обозначающие ключевое слово, или готовые простые изображения (например, логотипы). Для этого требуется, чтобы несколько компонентов работали вместе (восприятие, планирование, приведение в действие), что включает, например, преобразование координат холста и решение обратной задачи кинематики.
</ma-section>

<ma-section title="Продажа произведений искусства за криптовалюту">
У робота есть собственный криптовалютный кошелек на платформе Ethereum, и с помощью программного обеспечения он может совершать транзакции в сети. В частности, робот умеет создавать невзаимозаменяемые токены (NFT) на основе созданных картин, выставлять их на аукцион и использовать полученную криптовалюту.
</ma-section>

<ma-section title="Автоматическая закупка расходных материалов для картин">
Основная задача робота как предпринимателя – поддерживать свою деятельность за счет накопленного капитала. Мы провели эксперимент, в котором Гака-чу покупал холсты, краски и кисти в тестовой автоматизированной системе художественного магазина, оплачивая заказ криптовалютой.
</ma-section>

<ma-line>
    <ma-button href="https://opensea.io/accounts/Gaka-Chu"><img src="./images/shared/OpenSea.png"/><span>OpenSea</span></ma-button>
    <ma-button href="https://rarible.com/gakachu"><img src="./images/shared/Rarible.png"/><span>Rarible</span></ma-button>
</ma-line>

https://www.youtube.com/embed/xSD_lsrAA0I

## Технические подробности

<table>
    <tbody>
        <tr>
            <td><strong>Аппаратное обеспечение</strong></td>
            <td>Манипулятор KUKA KR6 R900 с камерой глубины Intel RealSense D435i и Intel NUC NUC7i5BNB (Intel Core i5-7260U, 3.40 GHz, 8 GB RAM) для обработки изображений и движения</td>
        </tr>
    <tr>
        <td><strong>Главное связующее звено</strong></td>
        <td>Robot Operating System: Все компоненты представлены как ROS пакеты или ноды</td>
    </tr>
    <tr>
        <td><strong>Обработка изображений</strong></td>
        <td>librealsense ROS пакет, OpenCV библиотека для скелетонизации изображений</td>
    </tr>
    <tr>
        <td><strong>Планирование движения</strong></td>
        <td>MoveIt Motion Planning Framework с собственным модулем инверсной кинематики</td>
    </tr>
    <tr>
        <td><strong>Майнинг и аукцион NTF</strong></td>
        <td>Платформа OpenSea с их SDK</td>
    </tr>
    <tr>
        <td><strong>Экономическое взаимодействите агент-агент</strong></td>
        <td>Сеть Robonomics с клиентом AIRA: позволяет отправлять транзакции в блокчейн Etherium для создания и фиализации миссий</td>
    </tr>
    <tr>
        <td><strong>Хранение данных</strong></td>
        <td>IPFS - межпланетная файловая система</td>
    </tr>
    </tbody> 
</table>

<ma-section>
    <ma-button href="https://github.com/Multi-Agent-io/gaka-chu.online"><img src="./images/shared/GitHub.png"/><span>Github репозиторий</span></ma-button>
</ma-section>

## R&D
* Решение обратной задачи кинематики для управления 6-осевым манипулятором при рисовании.
* Задача веб-скрапинга для извлечения данных для выбора темы картины.
* Использование когнитивных технологий для создания тематики картиин.
* Определение рабочего пространства с помощью камеры глубины.
* Поиск самых прибыльных тем с использованием статистики продаж картин.

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
    <ma-button href="https://github.com/Multi-Agent-io/gaka-chu.online"><img src="./images/shared/GitHub.png"/><span>Github репозиторий</span></ma-button>
    <ma-button href="https://www.youtube.com/channel/UCT5_U0Nddr9UG2Z15ArdOLA"><img src="./images/shared/YouTube.png"/><span>YouTube</span></ma-button>
    <ma-button href="https://opensea.io/accounts/Gaka-Chu"><img src="./images/shared/OpenSea.png"/><span>OpenSea</span></ma-button>
    <ma-button href="https://rarible.com/gakachu"><img src="./images/shared/Rarible.png"/><span>Rarible</span></ma-button>
</ma-line>
