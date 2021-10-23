<template>
  <Layout>
    <template v-slot:title>{{$ts('About us')}}</template>

    <p>{{$ts('about-1')}}</p>
    
    <h2>{{$ts('Watch intro from the head of the laboratory')}}</h2>
    <div class="embed-v"><iframe src="https://www.youtube.com/embed/GZQ0LKsHGak?rel=0&disablekb=1&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    
    <h2>{{$ts('Our goals and activities')}}</h2>

    <div class="grid-2 grid-plus">
      <div>
        {{$ts('about-2')}}
        <svg class="plus" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 74.8 74.8" style="enable-background:new 0 0 74.8 74.8;" xml:space="preserve"><g transform="translate(-879.429 -948.668)"><path class="st0" d="M916.8,948.7v74.8"/><path class="st0" d="M954.3,986.1h-74.8"/></g></svg>
      </div>
      <div>
        {{$ts('about-3')}}
        <svg class="plus" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 74.8 74.8" style="enable-background:new 0 0 74.8 74.8;" xml:space="preserve"><g transform="translate(-879.429 -948.668)"><path class="st0" d="M916.8,948.7v74.8"/><path class="st0" d="M954.3,986.1h-74.8"/></g></svg>
      </div>
      <div>
        {{$ts('about-4')}}
        <svg class="plus" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 74.8 74.8" style="enable-background:new 0 0 74.8 74.8;" xml:space="preserve"><g transform="translate(-879.429 -948.668)"><path class="st0" d="M916.8,948.7v74.8"/><path class="st0" d="M954.3,986.1h-74.8"/></g></svg>
      </div>
      <div>
        {{$ts('about-5')}}
        <svg class="plus" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 74.8 74.8" style="enable-background:new 0 0 74.8 74.8;" xml:space="preserve"><g transform="translate(-879.429 -948.668)"><path class="st0" d="M916.8,948.7v74.8"/><path class="st0" d="M954.3,986.1h-74.8"/></g></svg>
      </div>
    </div>

    <section class="tags">
        <span>{{$ts('A networked cyberphysical systems')}}</span>
        <span>{{$ts('Robot-as-a-service')}}</span>
        <span>{{$ts('Decentralized technologies')}}</span>
        <span>{{$ts('Blockchain')}}</span>
        <span>{{$ts('Peer-to-peer')}}</span>
        <span>{{$ts('Industry 4.0')}}</span>
        <span>{{$ts('IoT networks')}}</span>
    </section>

    <h2>{{$ts('Team experience')}}</h2>

    <div class="isection">
      <g-link class="isection-image" to="https://github.com/Vourhey"><g-image src="~/assets/images/Vadim-Manaenko.png" /></g-link>
      <div class="isection-text">
        <h3><g-link to="https://github.com/Vourhey">{{$ts('Vadim Manaenko')}}</g-link></h3>
        <div class="isection-title">{{$ts('Manaenko_position')}}</div>
        <div class="isection-desc" v-show="$locale=='en'">
          <ul>
            <li>DevOps engineer of the Airalab team (Robonomics developers) with three years of experience.</li>
            <li>Team lead of the engineering department of the Robonomics platform.</li>
            <li>Experience in decentralized projects since 2017: Ethereum, Tezos, Lightning Network.</li>
            <li>Knowledge of the Robot Operating System at the package development level.</li>
            <li>Languages: Python (> 3 years), Rust, Kotlin.</li>
            <li>Linux: Ubuntu, Arch, NixOS, Bash.</li>
            <li>Experience in conducting master classes, seminars, video lectures.</li>
          </ul>
          <p>Recent projects:</p>
          <ul>
            <li>Protocol for issuing green certificates based on data from renewable energy sources.</li>
            <li>A system for registering a digital passport of drones and their flights.</li>
            <li>Quality control system for chemical products.</li>
          </ul>
        </div>

         <div class="isection-desc" v-show="$locale=='ru'">
          <ul>
            <li>DevOps-инженер команды Airalab (разработчики Robonomics) с трехлетним опытом.</li>
            <li>Тимлид инженерного отдела платформы Робономика.</li>
            <li>Опыт децентрализованных проектов с 2017 года: Ethereum, Tezos, Lightning Network.</li>
            <li>Знание Robot Operating System на уровне разработки пакетов.</li>
            <li>Языки: Python (> 3 лет), Rust, Kotlin.</li>
            <li>Linux: Ubuntu, Arch, NixOS, Bash.</li>
            <li>Опыт проведения мастер-классов, семинаров, видеолекций.</li>
          </ul>
          <p>Последние проекты:</p>
          <ul>
            <li>Протокол для выпуска “зеленых сертификатов” (green certificate) на основе данных из возобновляемых источников энергии.</li>
            <li>Система регистрация цифрового паспорта дронов и их полетов.</li>
            <li>Система контроля качества для химической продукции.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="isection">
      <g-link class="isection-image" to="https://scholar.google.com/citations?user=jo5zE10AAAAJ"><g-image src="~/assets/images/Ivan-Berman.png" /></g-link>
      <div class="isection-text">
        <h3><g-link to="https://scholar.google.com/citations?user=jo5zE10AAAAJ">{{$ts('Ivan Berman')}}</g-link></h3>
        <div class="isection-title">{{$ts('Berman_position')}}</div>
        <div class="isection-desc" v-show="$locale=='en'">
          <ul>
            <li>Performer of various research projects on cyber-physical systems and methods of control theory, since 2013.</li>
            <li>h-index = 5, author of over 10 scientific publications.</li>
            <li>Skills of technical analysis, CPS modeling, research, drawing up specifications and technical documentation.</li>
            <li>Member of the Student Design Bureau from 2015-2018.</li>
            <li>Knowledge of Robot Operating System, Matlab + Simulink.</li>
            <li>Languages: Python, C ++.</li>
          </ul>
          <p>Recent projects:</p>
          <ul>
            <li>Methods for controlling the autonomous movement of small-sized robotic swimming facilities.</li>
            <li>Monitoring the safety of forest areas using UAVs and machine learning methods.</li>
            <li>Environmental monitoring based on IoT technologies.</li>
          </ul>
        </div>

        <div class="isection-desc" v-show="$locale=='ru'">
          <ul>
            <li>Исполнитель различных НИР, посвященных киберфизическим системам и методам теории управления, с 2013 г.</li>
            <li>h-index = 5, автор более 10 научных публикаций.</li>
            <li>Навыки технического анализа, моделирования КФС, проведения исследований, составления спецификаций и технической документации.</li>
            <li>Участник Студенческого конструкторского бюро с 2015-2018.</li>
            <li>Знание Robot Operating System, Matlab+Simulink.</li>
            <li>Языки: Python, C++.</li>
          </ul>
          <p>Последние проекты:</p>
          <ul>
            <li>Методы управления автономным движением маломерных роботизированных плавательных средств.</li>
            <li>Мониторинг безопасности лесных массивов с помощью БПЛА и методов машинного обучения.</li>
            <li>Экологический мониторинг на основе технологий Интернета вещей.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="isection">
      <g-link class="isection-image" to="https://scholar.google.com/citations?user=J3HFpjoAAAAJ"><g-image src="~/assets/images/Alexander-Kapitonov.png" /></g-link>
      <div class="isection-text">
        <h3><g-link to="https://scholar.google.com/citations?user=J3HFpjoAAAAJ">{{$ts('Alexander Kapitonov')}}</g-link></h3>
        <div class="isection-title">{{$ts('Kapitonov_position')}}</div>
        <div class="isection-desc" v-show="$locale=='en'">
          <ul>
            <li>One of the creators of the concept of “robot economy”, the progressor of the Robonomics platform.</li>
            <li>Scientific supervisor of grants from the Russian Science Foundation, Erasmus +, student design bureaus.</li>
            <li>h-index = 11, author of over 30 scientific publications.</li>
            <li>Regular program participant of the MIT Media Lab Symposium Blockchain for Robotics and AI Systems.</li>
          </ul>
        </div>

        <div class="isection-desc" v-show="$locale=='ru'">
          <ul>
            <li>Один из создателей концепции “экономики роботов”, прогрессор платформы Робономика.</li>
            <li>Научный руководитель грантов РНФ, Erasmus+, студенческих конструкторских бюро.</li>
            <li>h-index = 11, автор более 30 научных публикаций.</li>
            <li>Постоянный программный участник MIT Media Lab Symposium Blockchain for Robotics and AI Systems.</li>
          </ul>
        </div>
      </div>
    </div>

    <h2>{{$ts('Research area and objectives')}}</h2>

    <div class="text-sea" v-show="$locale=='en'">
      <p>The ongoing large-scale digitalization of human activity has been made possible by the common network infrastructure offered by the World Wide Web, as well as numerous devices, from CCTV systems and sensors to smartphones and smart devices.</p>
      <p>Given the growing influence of robotics, a logical step should be the same digitalization of cyber-physical systems and devices themselves, i.e., their large-scale network integration to interact with human infrastructure and with each other. This will allow devices to use the collected data to self-manage and provide the most effective services to the person. Researchers have called this approach Robot-as-a-Service and see it as a potential economic model for the future.</p>
      <p>However, the multitude of autonomous devices that are networked and capable of physically affecting the world raise great security concerns, exacerbated by the negative experience of large centralized projects. Such network CPSs require studying the issues of communication protocols and managing multi-agent systems of heterogeneous devices, without taking into account the fact that managing a single device can also be a nontrivial task. In addition, the final goal of creating a networked CPS is its integration into the digital economy, and this imposes additional restrictions related to legal and economic aspects and information protection.</p>
      <p>Decentralized technologies such as peer-to-peer networks, blockchains and smart contracts are a promising area of research in this area. They do not have the drawbacks of centralized approaches, make it easier to solve some issues of organizing a multi-agent system, and also already have ways of integrating with the digital economy.</p>
      <p>Therefore, within the framework of this laboratory, we propose to investigate aspects of the application of precisely decentralized technologies for managing network CPS. It is supposed to use the open source platform <g-link to="https://robonomics.network/">Robonomics</g-link>, which offers the capabilities of the Ethereum and Polkadot blockchains for robotic devices compatible with the Robot Operating System framework, and uses the market mechanism as the basic way of interaction between devices and humans. The main goal of the laboratory is the application of decentralized technologies for networked cyber-physical systems in various applications.</p>
    </div>
    <div class="text-sea" v-show="$locale=='ru'">
      <p>Текущая масштабная цифровизация человеческой активности стала возможна благодаря общей сетевой инфраструктуре, предложенной Всемирной сетью, а также многочисленным устройствам, от систем CCTV и датчиков до смартфонов и умных устройств.</p>
      <p>С учетом роста влияния робототехники, логичным шагом в этой цепочке должна стать такая же цифровизация самих киберфизических систем и устройств, т. е. их масштабная сетевая интеграция для взаимодействия с человеческой инфраструктурой и друг с другом. Это позволит устройствам использовать собираемые данные для самоуправления и предоставления наиболее эффективных услуг человеку. Исследователи назвали подобный подход Robot-as-a-Service (робот как услуга) и рассматривают его как потенциальную экономическую модель будущего.</p>
      <p>Однако, множество автономных устройств, объединенных в сеть и способных физически влиять на мир, вызывают большие опасения с точки зрения безопасности, усугубленные негативным опытом крупных централизованных проектов. Подобные сетевые КФС требуют изучения вопросов коммуникационных протоколов и управления многоагентыми системами разнородных устройств, без учета того, что управление отдельным устройством может быть также нетривиальной задачей. Кроме того, финальной целью создания сетевой КФС становится ее интеграция в цифровую экономику, а это накладывает дополнительные ограничения, связанные с правовыми и экономическими аспектами и защитой информации.</p>
      <p>Перспективным направлением исследований в этой области выступают децентрализованные технологии, такие как пиринговые сети, блокчейны и смарт-контракты. Они не обладают недостатками централизованных подходов, позволяют более просто решить некоторые вопросы организации многоагентной системы, а также уже имеют способы интеграции с цифровой экономикой.</p>
      <p>Поэтому в рамках этой лаборатории мы предлагаем исследовать аспекты применения именно децентрализованных технологий для управления сетевыми КФС. Предполагается использовать открытую платформу Робономика, которая предлагает возможности блокчейнов Ethereum и Polkadot для робототехнических устройств, совместимых с фреймворком Robot Operating System, и использует рыночный механизм как базовый способ взаимодействия между устройствами и человеком. Главная цель лаборатории — применение децентрализованных технологий для сетевых киберфизических систем в разных приложениях.</p>
    </div>

    <h2 class="tick">{{$ts('Relevance to ITMO’s prioritized areas')}}</h2>
    <p v-show="$locale=='en'">The research interest of the laboratory corresponds to the priority areas of <g-link to="https://en.itmo.ru">ITMO University</g-link> in “Intelligent technologies and robotics”, as well as on “Intelligent technologies in the economy, social sphere and art”.</p>
    <p v-show="$locale=='ru'">Исследовательский интерес лаборатории соответствует приоритетным направлениям <g-link to="https://itmo.ru">Университета ИТМО</g-link> по “Интеллектуальным технологиям и робототехнике”, а также по “Интеллектуальным технологиям в экономике, социальной сфере и искусстве”.</p>

    <h2>{{$ts('The laboratory focuses on four major areas of research')}}:</h2>

    <div class="isection">
      <g-image class="isection-image" src="~/assets/images/project-1.png" />
      <div class="isection-text">
        <h3>{{$ts('Certified measurements of the quality of water resources using unmanned surface vehicles')}}</h3>
        
        <div class="isection-title" v-show="$locale=='en'">The main focus is on an environmental monitoring system built on a small fleet of <g-link to="https://www.youtube.com/watch?v=Mtqm5y6Bolo">small marine vessels</g-link> equipped with compact sensors. In this case, the Robnonomics platform is used for secure registration of vessels, their missions and collected data on water samples, thereby ensuring the certification of measurements. </div>
        <div class="isection-title" v-show="$locale=='ru'">Основной фокус уделяется системе мониторинга окружающей среды, построенной на небольшом флоте <g-link to="https://www.youtube.com/watch?v=Mtqm5y6Bolo">малогабаритных морских судов</g-link> , оснащенных компактными датчиками. Платформа Робнономика в данном случае используется для защищенной регистрации судов, их миссий и собранных данных о пробах воды, тем самым обеспечивая сертифицированность замеров.</div>
        
        <div class="isection-desc" v-show="$locale=='en'">
          <p>Within the framework of the direction, the following issues are investigated:</p>
          <ul>
            <li>finding and tracking pollution sources, taking into account the computing limitations of devices;</li>
            <li>construction of pollution maps using unmanned surface vehicles;</li>
            <li>movement and data collection in waves and currents;</li>
            <li>optimal distribution of the fleet of water drones in the task of collecting water samples;</li>
            <li>efficient network configurations for communication between the fleet / ground control station, taking into account the communication constraints;</li>
            <li>mixed reality simulations for testing a fleet of real and virtual devices;</li>
            <li>protection of environmental data sent from devices using cryptography;</li>
            <li>methods of blockchainization and monetization of environmental data.</li>
          </ul>
        </div>
        <div class="isection-desc" v-show="$locale=='ru'">
          <p>В рамках направления исследуются следующие вопросы:</p>
          <ul>
            <li>поиск и отслеживание источников загрязнений с учетом вычислительных ограничений устройств;</li>
            <li>построение карт загрязнений при помощи безэкипажных надводных аппаратов;</li>
            <li>движение и сбор данных в условиях волн и течений;</li>
            <li>оптимальное распределение флота надводных аппаратов в задаче сбора проб воды;</li>
            <li>эффективные конфигураций сети для связи между флотом / наземной станцией управления с учетом коммуникационных ограничений;</li>
            <li>симуляции смешанной реальности для тестирования флота реальных и виртуальных устройств;</li>
            <li>защита отправляемых с устройств экологических данных с помощью криптографии;</li>
            <li>методы блокчейнизации и монетизации экологических данных.</li>
          </ul>
        </div>

      </div>
    </div>

    <div class="isection">
      <g-image class="isection-image" src="~/assets/images/project-2.png" style="width:15rem" />
      <div class="isection-text">
        <h3>{{$ts('Smart factories for Industry 4.0')}}</h3>

        <div class="isection-title" v-show="$locale=='en'">Smart factories are factories in which autonomous production occurs by collecting, exchanging and using information between people, materials and machines using network technologies. In the final stage, such factories operate without human intervention, independently adjusting their production process based on feedback from product sales. A <g-link to="https://youtu.be/yuxOF_z70us">test bench</g-link> is available at the faculty, based on the Fischertechnik designer and Siemens controllers, which simulates a smart factory, from the supply of raw materials to the shipment of products from warehouses, depending on the demand for it.</div>
        <div class="isection-title" v-show="$locale=='ru'">Умные фабрики — это фабрики, в которых автономное производство происходит путем сбора, обмена и использования информации между людьми, материалами и машинами с помощью сетевых технологий. В финальном варианте такие фабрики функционируют без участия человека, самостоятельно корректируя свой производственный процесс по обратной связи от продаж продукции. На факультете доступен <g-link to="https://youtu.be/yuxOF_z70us">тестовый стенд</g-link> , на основе конструктора Fischertechnik и контроллеров Siemens, который имитирует умную фабрику, от поставки сырья до отгрузки продукции со складов в зависимости от спроса на нее.</div>
        
        <div class="isection-desc" v-show="$locale=='en'">
          <p>The stand allows you to explore the following issues:</p>
          <ul>
            <li>optimal management of a multi-agent system using market mechanisms;</li>
            <li>modeling of industrial processes;</li>
            <li>adaptive management of industrial processes based on external economic factors;</li>
            <li>the laws of resource and production cycle management to maximize profits;</li>
            <li>control of industrial Siemens microcontrollers.</li>
          </ul>
        </div>
        <div class="isection-desc" v-show="$locale=='ru'">
          <p>Стенд позволяет исследовать следующие вопросы:</p>
          <ul>
            <li>оптимальное управление многоагентной системой с помощью рыночных механизмов;</li>
            <li>моделирование промышленных процессов;</li>
            <li>адаптивное управление промышленными процессами на основе внешних экономических факторов;</li>
            <li>законы управления ресурсами и циклом производства для максимизации прибыли;</li>
            <li>управление промышленными микроконтроллерами Siemens.</li>
          </ul>
        </div>

      </div>
    </div>

    <div class="isection">
      <g-image class="isection-image" src="~/assets/images/project-3.png" style="width:15rem" />
      <div class="isection-text">
        <h3>{{$ts('The robot artist as an autonomous creative system')}}</h3>

        <div class="isection-title" v-show="$locale=='en'">Autonomous systems that create art objects (or artifacts) have been of interest to researchers since the 1980s, gradually accelerating with the development of image recognition and Simultaneous Localization and Mapping (SLAM) techniques. However, the task of generating a human-independent idea of an artifact - what is called creativity - has begun to advance recently, with the development of neural networks, for example, art in the style of Inceptionism from the Google AI team. The most intriguing thing is the creation of a completely autonomous creative system capable of “inventing” the idea of an artifact, realizing it, presenting it for review, and drawing conclusions from feedback on how to proceed further. The <g-link to="https://www.youtube.com/watch?v=xSD_lsrAA0I">KUKA KR6 R900</g-link> manipulator is available to work on this direction at the faculty, which can draw with a brush on canvas. The robot works on the basis of the Robonomics platform, which allows it, for example, to put up paintings for a digital auction.</div>
        <div class="isection-title" v-show="$locale=='ru'">Автономные системы, создающие предметы искусства (или артефакты), интересовали исследователей начиная с 1980-х годов, постепенно ускоряясь с развитием распознавания изображений и методов SLAM (Simultaneous Localization and Mapping). Однако задача генерации независимой от человека идеи артефакта — то, что и называется творчеством — стала продвигаться недавно, с развитием нейросетей, например, арт в стиле инсепшионизма от команды Google AI. Наиболее интригует создание полностью автономной творческой системы, способной “придумать” идею артефакта, реализовать ее, представить на обозрение, а по обратной связи сделать выводы, как действовать далее. Для работы над этим направлением на факультете доступен манипулятор <g-link to="https://www.youtube.com/watch?v=xSD_lsrAA0I">KUKA KR6 R900</g-link> , способный рисовать кистью на холсте. Робот работает на базе платформы Робономика, что позволяет ему, например, выставлять картины на цифровой аукцион.</div>
        
        <div class="isection-desc" v-show="$locale=='en'">
          <p>The stand allows you to explore the following issues:</p>
          <ul>
            <li>solving the inverse problem of kinematics for manipulator control when drawing;</li>
            <li>the task of web scraping is to extract the data used to generate the idea of the picture;</li>
            <li>determination of the working space using a 3D camera;</li>
            <li>using feedback from the sale of paintings to find the most popular ideas for new ones.</li>
          </ul>
        </div>
        <div class="isection-desc" v-show="$locale=='ru'">
          <p>Стенд позволяет исследовать следующие вопросы:</p>
          <ul>
            <li>решение обратной задачи кинематики для управления манипулятором при рисовании;</li>
            <li>задача веб-скрейпинга — извлечение данных, используемых для генерации идеи картины;</li>
            <li>определение рабочего пространства с помощью 3D камеры;</li>
            <li>использование обратной связи от продаж картин для поиска наиболее популярных идей для новых.</li>
          </ul>
        </div>

      </div>
    </div>

    <div class="isection">
      <g-image class="isection-image" src="~/assets/images/project-4.png" style="width:15rem" />
      <div class="isection-text">
        <h3>{{$ts('Digitalization of the state of the infrastructure using a network of sensors')}}</h3>

        <div class="isection-title" v-show="$locale=='en'">The Internet of Things has been actively expanding in the last decade, but it still has significant limitations for ubiquitous use, primarily related to security when connecting smart devices and sensors. Decentralization of governance has the potential to circumvent this limitation, opening the way for decentralized autonomous organizations and even smart cities. This infrastructure has a digital footprint for every facility in the organization, allowing you to <g-link to="https://youtu.be/shqey3tmNUk">analyze health and efficiently manage</g-link> assets and costs, from electricity consumption to PM10 concentration in offices.</div>
        <div class="isection-title" v-show="$locale=='ru'">Интернет вещей активно расширялся в последнее десятилетие, но все еще имеет существенные ограничения для повсеместного использования, в первую очередь связанную с безопасностью при подключении умных устройств и датчиков. Децентрализация управления потенциально способна обойти это ограничение, что открывает дорогу децентрализованным автономным организациям и даже умным городам. В такой инфраструктуре за каждым объектом организации закреплен цифровой след, позволяющий <g-link to="https://youtu.be/shqey3tmNUk">анализировать состояние и эффективно управлять</g-link> активами и расходами, от электропотребления до концентрации частиц PM10 в офисах.</div>
        
        <div class="isection-desc" v-show="$locale=='en'">
          <p>Within the framework of this direction, it is planned to investigate:</p>
          <ul>
            <li>optimal placement of sensors in rooms to collect data on temperature / humidity / air quality;</li>
            <li>systems for automatic localization and diagnostics of infrastructure problems;</li>
            <li>efficient configurations and architectures for wireless sensor networks;</li>
            <li>safety of sensor networks.</li>
          </ul>
        </div>
        <div class="isection-desc" v-show="$locale=='ru'">
          <p>В рамках данного направления планируется исследовать:</p>
          <ul>
            <li>оптимальное размещение датчиков в помещениях для сбора данных о температуре / влажности / качества воздуха;</li>
            <li>системы автоматической локализации и диагностики неполадок инфраструктуры;</li>
            <li>эффективные конфигураций и архитектуры для беспроводных сетей датчиков;</li>
            <li>безопасность сетей датчиков.</li>
          </ul>
        </div>

      </div>
    </div>

    <h2>{{$ts('Skills that participants will develop')}}</h2>
    <ul v-show="$locale=='en'">
      <li>Working with web3 technologies: Ethereum ecosystems, Polkadot and Robonomics, deploying smart contracts.</li>
      <li>Robot Operating System framework: the entire pipeline, from sending a task for a robot mission to receiving the resulting data from executing devices.</li>
      <li>Modeling the work of various CPS and management theory skills.</li>
      <li>Programming in Python, Rust, JavaScript.</li>
      <li>DevOps Skills (CI / CD).</li>
      <li>Ability to work with microcontrollers, single board computers and sensor systems.</li>
      <li>Scientific activity, setting up experiments, design and publication of scientific articles.</li>
    </ul>
    <ul v-show="$locale=='ru'">
      <li>Работа с web3-технологиями: экосистемы Ethereum, Polkadot и Robonomics, развертывание смарт-контрактов.</li>
      <li>Фреймворк Robot Operating System: весь пайплайн, от отправки задания на миссию робота до получения результирующих данных от исполняющих устройств.</li>
      <li>Моделирование работы различных КФС и навыки теории управления.</li>
      <li>Программирование на языках Python, Rust, JavaScript.</li>
      <li>Навыки DevOps (CI/CD).</li>
      <li>Умение работать с микроконтроллерами, одноплатными компьютерами и системами датчиков.</li>
      <li>Научная деятельность, постановка экспериментов, оформление и публикация научных статей.</li>
    </ul>

    <h2>{{$ts('First year plan')}}</h2>
    <ul v-show="$locale=='en'">
      <li>Control of an unmanned surface vehicle: an article co-authored with Professor A. S. Matveev with a more accurate mathematical model of the vehicle.</li>
      <li>Robot Artist: An article with Professor E. C. Ferrer of the MIT Media Lab on the concept of • “Digital Autonomous Robotic Entrepreneur”; See article about manipulator control in a brush painting task.</li>
      <li>DAOS project - managing smart devices in an office or coworking space based on Aragon DAO and Robonomics; launching the project on Kickstarter.</li>
      <li>Vending machine based on the Robonomics platform.</li>
      <li>The Home Assistant project is a simple robot assistant for the home, capable of mobile filming and sending notifications; launching the project on Kickstarter.</li>
      <li>The network of sensors and the aggregation of their information: article for the conference.</li>
      <li>Initial experiments with the smart factory stand.</li>
    </ul>
    <ul v-show="$locale=='ru'">
      <li>Управление безэкипажным надводным аппаратом: статья в соавторстве с профессором А. С. Матвеевым с более точной математической моделью аппарата.</li>
      <li>Робот-художник: статья с профессором E. C. Ferrer из MIT Media Lab о концепции “Digital Autonomous Robotic Entrepreneur”; статья об управлении манипулятором в задаче рисования кистью.</li>
      <li>Проект DAOS — управление умными устройствами в офисе или коворкинге на базе Aragon DAO и Robonomics; вывод проекта на Kickstarter.</li>
      <li>Вендинговый аппарат, работающий на базе платформы Робономика.</li>
      <li>Проект Home Assistant — простой робот-помощник для дома, способный вести мобильную съемку и посылать уведомления; вывод проекта на Kickstarter.</li>
      <li>Сеть датчиков и агрегация их информации: статья для конференции.</li>
      <li>Начальные эксперименты со стендом умной фабрики.</li>
    </ul>

    <h2>{{$ts('Our published research articles')}}</h2>

    <ul>
      <li>A. Kapitonov, S. Lonshakov, A. Krupenkin, and I. Berman, “Blockchain-based protocol of autonomous business activity for multi-agent systems consisting of UAVs,” 2017 Workshop on Research, Education and Development of Unmanned Aerial Systems (RED-UAS), Nov. 2017.</li>
      <li>A. Kapitonov, I. Berman, S. Lonshakov, and A. Krupenkin, “Blockchain Based Protocol for Economical Communication in Industry 4.0,” 2018 Crypto Valley Conference on Blockchain Technology (CVCBT), Nov. 2018.</li>
      <li>A. Kapitonov, I. Berman, V. Bulatov, S. Lonshakov, and A. Krupenkin, “Robonomics Based on Blockchain as a Principle of Creating Smart Factories,” 2018 Fifth International Conference on Internet of Things: Systems, Management and Security, Dec. 2018.</li>
      <li>A. Kapitonov, S. Lonshakov, I. Berman, E. C. Ferrer, F. P. Bonsignorio, V. Bulatov, and A. Svistov, “Robotic Services for New Paradigm Smart Cities Based on Decentralized Technologies,” Ledger, 2019.</li>
      <li>D. Alexandrov, E. Pertseva, I. Berman, I. Pantiukhin, and A. Kapitonov, “Analysis of Machine Learning Methods for Wildfire Security Monitoring with an Unmanned Aerial Vehicles,” 2019 24th Conference of Open Innovations Association (FRUCT), May 2019.</li>
      <li>A. Kapitonov, I. Berman, V. Manaenko, V. Rzhevskiy, V. Bulatov, and A. Zenkin, “Robonomics as a Blockchain-based Platform for Unmanned Traffic Management of Mobile Vehicles,” 2019 Workshop on Research, Education and Development of Unmanned Aerial Systems (RED UAS), Nov. 2019.</li>
      <li>A. Zenkin, I. Berman, K. Pachkouski, I. Pantiukhin, and V. Rzhevskiy, “Quadcopter Simulation Model for Research of Monitoring Tasks,” 2020 26th Conference of Open Innovations Association (FRUCT), 2020.</li>
      <li>I. Berman, E. Zereik, A. Kapitonov, F. Bonsignorio, A. Khassanov, A. Oripova, S. Lonshakov, and V. Bulatov, “Trustable Environmental Monitoring by Means of Sensors Networks on Swarming Autonomous Marine Vessels and Distributed Ledger Technology,” Frontiers in Robotics and AI, vol. 7, 2020.</li>
    </ul>

  </Layout>
</template>