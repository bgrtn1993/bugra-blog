const localization = {
    tr: {
        header: {
            name: "Buğra Tuna",
            home: "Ana Sayfa",
            about: "Hakkımda",
            experience: "Deneyim",
            projects: "Projeler",
            skills: "Yetenekler",
            contact: "İletişim",
            blog: "Blog",
            mobileMenu: {
                close: "Kapat",
            }
        },
        homePage: {
            greeting: "Merhaba, Ben",
            title: "Buğra Tuna",
            subtitle: "Yaratıcı ve verimli web deneyimleri geliştirmeye tutkulu bir Full Stack Yazılımcıyım. Karmaşık problemleri zarif ve ölçeklenebilir kodlarla çözmeyi severim.",
            contactButton: "Bana Ulaşın",
            projectsButton: "Projelerimi İncele",
            profileImageAlt: "Buğra Tuna Profil Fotoğrafı",
        },
        aboutPage: {
            title: "Hakkımda",
            paragraph1: "Merhaba! Ben Buğra Tuna. Antalya'da yaşayan, web geliştirmenin dinamik dünyasına tutkuyla bağlı bir yazılımcıyım. Bilgisayar Mühendisliği alanında Selçuk Üniversitesi'nden mezun oldum ve o günden bu yana 7 yılı aşkın süredir frontend ve backend teknolojileriyle projeler geliştiriyorum.",
            paragraph2: "Angular, React, Node.js, .Net Core gibi modern teknolojileri kullanarak kullanıcı dostu arayüzler ve güçlü backend sistemleri oluşturmayı seviyorum. Öğrenmeye ve kendimi geliştirmeye her zaman açık biriyim. Yeni teknolojileri keşfetmek ve projelerime entegre etmek beni heyecanlandırıyor.",
            paragraph3: "Kod yazmanın ötesinde, iyi tasarlanmış kullanıcı deneyimlerinin ve ölçeklenebilir mimarilerin önemine inanıyorum. Boş zamanlarımda yeni algoritmalar denerim, doğa yürüyüşü, yüzmek gibi aktivitelerle ilgileniyorum.",
            imageAlt: "Hakkımda Görseli",
        },
        experiencePage: {
            title: "Deneyimlerim",
            experiences: [
                {
                    position: 'Senior Software Developer',
                    company: 'Freelancer',
                    duration: 'Ocak 2025 - Nisan 2025',
                    description: [
                        'Freelancer olarak bir şirketin muhasebe departmanı için özel bir proje geliştirdim.',
                        'Projenin temelini React kullanarak, modern ve interaktif bir yapıda oluşturdum.',
                        'Arayüz tasarımında Tailwind CSS kullanarak hızlı ve esnek bir geliştirme sağladım.',
                        'Amacım, muhasebe süreçlerini kolaylaştıran, kullanıcı dostu bir araç sunmaktı.'
                    ],
                    technologies: ['React.js','Tailwindcss','Redux','SQL']
                },
                {
                    position: 'Senior Software Developer',
                    company: 'Arde Yazılım and Demirtag Consulting (GER)',
                    duration: 'Ocak 2024 - Ocak 2025',
                    description: [
                        'Eonus (Elektrikli Araç Yönetim) projesinin tüm yazılım sürecine liderlik ettim.',
                        'Uygun teknolojileri seçerek modüler ve API tabanlı bir altyapı tasarladım.',
                        'DodoJobs (İş Arama Platformu) projesinde full-stack geliştirmeyi yönettim.',
                        'Ön yüz ekibine liderlik ederek tasarım ve işlevselliği entegre ettim.',
                        'Almanya yönetmeliklerine uygun, kullanıcı dostu bir platform oluşturduk.',
                        'Elektrikli şarj üniteleriyle sinerji içinde çalışarak yazılım etkinliğini artırdım.',
                        'Çapraz fonksiyonlu ekiplerle iş birliği yaparak sürekli iyileştirme uyguladım.',
                    ],
                    technologies: ['Angular', '.Net Core', 'WebSocket', 'AG-Grid', 'MongoDB', 'Bootstrap','Deno.js','Node.js']
                },
                {
                    position: 'Frontend Developer',
                    company: 'Auxilius (USA)',
                    duration: 'Ekim 2021 - Ağustos 2023',
                    description: [
                        'Agile bir ortamda, kullanıcı odaklı tasarım stratejileri geliştirdim.',
                        'Takımın hedeflerine ulaşması için yol gösterici bir rol üstlendim.',
                        'Biyoteknoloji firmaları için veri odaklı bir yazılım platformu geliştirdim.',
                        'Auxilius (Hastane Faturalandırma) projesinin kullanıcı arayüzünü geliştirdim.',
                        'Arayüzü, Angular ve Tailwind kullanarak modern ve hızlı bir yapıda oluşturdum.',
                        'Projenin kullanıcı dostu ve işlevsel olmasını sağladım.',
                        'Dinamik veri tablolarının yönetimi için AG-Grid kütüphanesini kullandım.',
                        'Veri alışverişini GraphQL kullanarak optimize edip performansı artırdım.'
                    ],
                    technologies: ['Angular','Tailwindcss', 'AG-Grid', 'GraphQL', 'Chart.js']
                },
                {
                    position: 'Senior Frontend Developer',
                    company: 'Freelancer',
                    duration: 'Ekim 2023 - Kasım 2023',
                    description: [
                        'Bir gayrimenkul danışmanlık firması için özel bir e-ticaret sitesi geliştirdim.',
                        'Firma yetkililerinin ilanlarını kolayca yöneteceği bir panel tasarladım.',
                        'Bu panel sayesinde içerik ekleme, düzenleme ve silme işlemleri basitleştirildi.',
                        'Görsel olarak çekici ve tüm cihazlarla uyumlu (responsive) bir tasarım uyguladım.'
                    ],
                    technologies: ['Next.js','Tailwindcss','Redux','Chakra-UI']
                },
                {
                    position: 'Frontend Developer',
                    company: 'ERS Yazılım',
                    duration: 'Nisan 2021 - Ağustos 2023',
                    description: [
                        'Talya Bilişim altındaki bir firmada, seyahat portalı projesinde görev aldım.',
                        'Otel, uçuş ve araç kiralama seçeneklerini optimize eden bir sistem geliştirdik.',
                        'Dinamik paketleme algoritmalarıyla kişiye özel seyahat paketleri oluşturduk.',
                        'Kullanıcı deneyimini (UX) iyileştirmeye odaklanan bir rol üstlendim.',
                        'Vue.js ve Angular kullanarak kullanıcı dostu ve modern web arayüzleri tasarladım.',
                        'Amacım, seyahat planlamayı kolaylaştıran tek bir platform sunmaktı.',
                        'Tüm servislerin tek bir noktadan sorunsuzca çalışmasını sağladım.'
                    ],
                    technologies: ['Vue.js','Angular', 'Asp Net']
                },
                {
                    position: 'Software Developer',
                    company: 'Talya Bilişim',
                    duration: 'Ocak 2019 - Ağustos 2023',
                    description: [
                        'Şirket içi kullanılan web uygulamalarının geliştirilmesinde aktif rol aldın.',
                        'Operasyonel verimliliği artıracak ve iş akışlarını dijitalleştirecek çözümler ürettim.',
                        'Bu projelerle kurum içi verimliliğe doğrudan katkı sağladım.',
                        'HTML, CSS, JavaScript ve Angular framework ile tamamen duyarlı web sayfaları tasarladım.',
                        'Tüm cihazlarda (masaüstü, tablet, mobil) kusursuz bir kullanıcı deneyimi hedefledim.',
                        'Modern tasarım trendlerini takip ederek kullanıcı dostu arayüzler oluşturdum.',
                        'Takımın hedeflerine ulaşmasına ve projenin ilerlemesine destek oldum.'
                    ],
                    technologies: ['Angular','.Net','HTML', 'CSS', 'JavaScript','SQL','Node.js']
                },
            ],
        },
        projectsPage: {
            title: "Projelerim",
            projectCards: [
                {
                    title: 'E-Onus Back-Office Uygulaması',
                    description: 'Şarj cihazı şirketlerinin istasyonlarını uzaktan yönetmesini sağlar. Kullanıcılar randevu alarak kolayca araçlarını şarj edebilirler. Böylece hem operasyonlar optimize edilir hem de müşteri memnuniyeti artar.',
                    technologies: ['Angular', 'Node.js', 'Tailwindcss', 'MongoDB', 'Stripe API','.Net Core','Deno.js','Ag-Grid','Chart.js'],
                    image: 'https://placehold.co/400x150/2C3E50/ECF0F1?text=E-Onus Back-Office',
                },
                {
                    title: 'Dodo Jobs Uygulaması',
                    description: 'Almanya\'da ihtiyaç duyduğunuz her alanda, yasalara uygun çalışan ve yetkinliği doğrulanmış profesyonellere anında ulaşmanızı sağlar.',
                    technologies: ['Angular', 'Bootstrap', 'ngneat', 'Ng-Zorro','MongoDB','.Net Core'],
                    image: 'https://placehold.co/400x600/2C3E50/ECF0F1?text=Dodo+Jobs',
                },
                {
                    title: 'Auxilius Uygulaması',
                    description: 'Auxilius, özellikle ilaç ve biyoteknoloji (biyofarma) şirketleri için tasarlanmış bir finans yazılımıdır. Bu şirketlerin en karmaşık ve masraflı süreçlerinden biri olan klinik araştırmaların (Ar-Ge) parasal yönetimini kolaylaştırır.',
                    technologies: ['Angular', 'Tailwind', 'AG-Grid', 'GraphQL','Chart.js'],
                    image: 'https://placehold.co/600x400/2C3E50/ECF0F1?text=Auxilius',
                },
                {
                    title: 'Travel Portal Uygulaması',
                    description: 'Seyahat acenteleri ve tur operatörleri için geliştirilmiş yeni nesil bir online seyahat portalı çözümüdür',
                    technologies: ['Angular', 'Bootstrap', 'Vue.js','Karma','Jest'],
                    image: 'https://placehold.co/600x400/2C3E50/ECF0F1?text=Travel+Portal',
                },
                {
                    title: 'Elektra-Web Otel Yönetim Uygulaması',
                    description: 'Otelinizin tüm operasyonel ihtiyaçlarını (online rezervasyon, kanal yönetimi, ön büro, POS, ön muhasebe) tek bir platformda birleştiren, web tabanlı ve yenilikçi bir otel yönetim sistemidir.',
                    technologies: ['Angular', 'Ag-Grid', 'Bootstrap','NodeJs','SQL'],
                    demoLink: 'https://app.elektraweb.com/login',
                    image: 'https://placehold.co/600x400/2C3E50/ECF0F1?text=Elektra-Web',
                },
            ],
            githubText: "GitHub",
            liveDemoText: "Canlı Demo",
        },
        skillsPage: {
            title: "Yeteneklerim",
            skillCategories: [
                {
                    category: 'IDE',
                    icon: 'Hammer',
                    items: ['WebStorm', 'Rider', 'Vue.js', 'Visual Code', 'Visual Studio', 'SSMS', 'Postman', 'GitHub Desktop', 'MongoDB Compass']
                },
                {
                    category: 'Program Dilleri',
                    icon: 'AppWindow',
                    items: ['JScript', 'TScript', 'C#', 'C++', 'Java']
                },
                {
                    category: 'Program Frameworkleri',
                    icon: 'Code',
                    items: ['.Net Core','NodeJS ',' Spring Boot ',' GraphQL ',' Angular ',' React',
                        'VueJS',' React-Native ',' Bootstrap ',' Tailwind ',' ChakraUI ',' Ngx',
                        ' Antd ',' MaterialUI ',' AG-Grid ',' Chart.js ',' Canvas ',' Apex Charts',
                        ' AkitaJs ',' ReduxJS ',' Ngrx ',' Elf ',' JestJs ',' Karma ',' Cypress'
                    ]
                },
                {
                    category: 'Araçlar & Diğerleri',
                    icon: 'Info',
                    items: ['Git', 'GitHub', 'Docker', 'Jira', 'Agile/Scrum', 'Figma']
                }
            ],
        },
        contactPage: {
            title: "İletişim",
            contactFormTitle: "Bana Ulaşın",
            nameLabel: "Adınız Soyadınız",
            emailLabel: "E-posta Adresiniz",
            subjectLabel: "Konu",
            messageLabel: "Mesajınız",
            sendButton: "Mesajı Gönder",
            sendingButton: "Gönderiliyor...",
            successMessage: "Mesajınız başarıyla gönderildi! Teşekkür ederiz.",
            errorMessage: "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
            socialMediaTitle: "Sosyal Medya ve İletişim Bilgileri",
            emailText: "Email",
            phoneText: "Telefon",
        },
        footer: {
            copyright: "Tüm Hakları Saklıdır.",
            designBy: "React ve Tailwind CSS ile Sevgiyle Tasarlandı",
        }
    },
    en:{
        "header": {
            "name": "Buğra Tuna",
            "home": "Home",
            "about": "About",
            "experience": "Experience",
            "projects": "Projects",
            "skills": "Skills",
            "contact": "Contact",
            "blog": "Blog",
            "mobileMenu": {
                "close": "Close"
            }
        },
        "homePage": {
            "greeting": "Hello, I'm",
            "title": "Buğra Tuna",
            "subtitle": "A Full Stack Developer passionate about creating creative and efficient web experiences. I love solving complex problems with elegant and scalable code.",
            "contactButton": "Contact Me",
            "projectsButton": "View My Projects",
            "profileImageAlt": "Buğra Tuna Profile Picture"
        },
        "aboutPage": {
            "title": "About Me",
            "paragraph1": "Hello! I'm Buğra Tuna. I'm a software developer based in Antalya, passionately dedicated to the dynamic world of web development. I graduated from Selçuk University with a degree in Computer Engineering, and since then, I've been developing projects using frontend and backend technologies for over 7 years.",
            "paragraph2": "I enjoy building user-friendly interfaces and robust backend systems using modern technologies like Angular, React, Node.js, and .Net Core. I'm always eager to learn and improve myself. Discovering new technologies and integrating them into my projects excites me.",
            "paragraph3": "Beyond coding, I believe in the importance of well-designed user experiences and scalable architectures. In my free time, I experiment with new algorithms and enjoy activities like hiking and swimming.",
            "imageAlt": "About Me Image"
        },
        "experiencePage": {
            "title": "My Experiences",
            "experiences": [
                {
                    "position": "Senior Software Developer",
                    "company": "Freelancer",
                    "duration": "January 2025 - April 2025",
                    "description": [
                        "Developed a custom project for a company's accounting department as a freelancer.",
                        "Built the core of the project using React, creating a modern and interactive structure.",
                        "Used Tailwind CSS for interface design, ensuring fast and flexible development.",
                        "My goal was to provide a user-friendly tool that streamlines accounting processes."
                    ],
                    "technologies": ["React.js", "Tailwindcss", "Redux", "SQL"]
                },
                {
                    "position": "Senior Software Developer",
                    "company": "Arde Yazılım and Demirtag Consulting (GER)",
                    "duration": "January 2024 - January 2025",
                    "description": [
                        "Led the entire software development process for the Eonus (Electric Vehicle Management) project.",
                        "Designed a modular and API-based infrastructure by selecting appropriate technologies.",
                        "Managed full-stack development for the DodoJobs (Job Search Platform) project.",
                        "Led the front-end team, integrating design and functionality.",
                        "Created a user-friendly platform compliant with German regulations.",
                        "Enhanced software efficiency by working in synergy with electric charging units.",
                        "Collaborated with cross-functional teams to implement continuous improvement."
                    ],
                    "technologies": ["Angular", ".Net Core", "WebSocket", "AG-Grid", "MongoDB", "Bootstrap", "Deno.js", "Node.js"]
                },
                {
                    "position": "Frontend Developer",
                    "company": "Auxilius (USA)",
                    "duration": "October 2021 - August 2023",
                    "description": [
                        "Developed user-centric design strategies in an Agile environment.",
                        "Played a guiding role in helping the team achieve its goals.",
                        "Developed a data-driven software platform for biotechnology companies.",
                        "Developed the user interface for the Auxilius (Hospital Billing) project.",
                        "Created a modern and fast interface using Angular and Tailwind.",
                        "Ensured the project was user-friendly and functional.",
                        "Used the AG-Grid library for managing dynamic data tables.",
                        "Optimized data exchange using GraphQL to improve performance."
                    ],
                    "technologies": ["Angular", "Tailwindcss", "AG-Grid", "GraphQL", "Chart.js"]
                },
                {
                    "position": "Senior Frontend Developer",
                    "company": "Freelancer",
                    "duration": "October 2023 - November 2023",
                    "description": [
                        "Developed a custom e-commerce website for a real estate consultancy firm.",
                        "Designed a panel for firm officials to easily manage their listings.",
                        "This panel simplified content addition, editing, and deletion.",
                        "Implemented a visually appealing and responsive design compatible with all devices."
                    ],
                    "technologies": ["Next.js", "Tailwindcss", "Redux", "Chakra-UI"]
                },
                {
                    "position": "Frontend Developer",
                    "company": "ERS Yazılım",
                    "duration": "April 2021 - August 2023",
                    "description": [
                        "Worked on a travel portal project within a company under Talya Bilişim.",
                        "Developed a system that optimizes hotel, flight, and car rental options.",
                        "Created personalized travel packages with dynamic packaging algorithms.",
                        "Assumed a role focused on improving user experience (UX).",
                        "Designed user-friendly and modern web interfaces using Vue.js and Angular.",
                        "My goal was to provide a single platform that simplifies travel planning.",
                        "Ensured all services worked seamlessly from a single point."
                    ],
                    "technologies": ["Vue.js", "Angular", "Asp Net"]
                },
                {
                    "position": "Software Developer",
                    "company": "Talya Bilişim",
                    "duration": "January 2019 - August 2023",
                    "description": [
                        "Actively participated in the development of in-house web applications.",
                        "Created solutions to increase operational efficiency and digitize workflows.",
                        "Directly contributed to internal efficiency through these projects.",
                        "Designed fully responsive web pages with HTML, CSS, JavaScript, and Angular framework.",
                        "Aimed for a flawless user experience across all devices (desktop, tablet, mobile).",
                        "Created user-friendly interfaces by following modern design trends.",
                        "Supported the team in achieving its goals and advancing the project."
                    ],
                    "technologies": ["Angular", ".Net", "HTML", "CSS", "JavaScript", "SQL", "Node.js"]
                }
            ]
        },
        "projectsPage": {
            "title": "My Projects",
            "projectCards": [
                {
                    "title": "E-Onus Back-Office Application",
                    "description": "Enables charging station companies to remotely manage their stations. Users can easily charge their vehicles by making appointments, thereby optimizing operations and increasing customer satisfaction.",
                    "technologies": ["Angular", "Node.js", "Tailwindcss", "MongoDB", "Stripe API", ".Net Core", "Deno.js", "Ag-Grid", "Chart.js"],
                    "image": "https://placehold.co/400x150/2C3E50/ECF0F1?text=E-Onus Back-Office"
                },
                {
                    "title": "Dodo Jobs Application",
                    "description": "Allows you to instantly reach legally compliant and verified professionals in every field you need in Germany.",
                    "technologies": ["Angular", "Bootstrap", "ngneat", "Ng-Zorro", "MongoDB", ".Net Core"],
                    "image": "https://placehold.co/400x600/2C3E50/ECF0F1?text=Dodo+Jobs"
                },
                {
                    "title": "Auxilius Application",
                    "description": "Auxilius is a financial software designed specifically for pharmaceutical and biotechnology (biopharma) companies. It simplifies the monetary management of clinical trials (R&D), one of the most complex and costly processes for these companies.",
                    "technologies": ["Angular", "Tailwind", "AG-Grid", "GraphQL", "Chart.js"],
                    "image": "https://placehold.co/600x400/2C3E50/ECF0F1?text=Auxilius"
                },
                {
                    "title": "Travel Portal Application",
                    "description": "A new generation online travel portal solution developed for travel agencies and tour operators.",
                    "technologies": ["Angular", "Bootstrap", "Vue.js", "Karma", "Jest"],
                    "image": "https://placehold.co/600x400/2C3E50/ECF0F1?text=Travel+Portal"
                },
                {
                    "title": "Elektra-Web Hotel Management Application",
                    "description": "A web-based and innovative hotel management system that unifies all your hotel's operational needs (online reservations, channel management, front office, POS, preliminary accounting) on a single platform.",
                    "technologies": ["Angular", "Ag-Grid", "Bootstrap", "NodeJs", "SQL"],
                    "demoLink": "https://app.elektraweb.com/login",
                    "image": "https://placehold.co/600x400/2C3E50/ECF0F1?text=Elektra-Web"
                }
            ],
            "githubText": "GitHub",
            "liveDemoText": "Live Demo"
        },
        "skillsPage": {
            "title": "My Skills",
            "skillCategories": [
                {
                    "category": "IDEs",
                    "icon": "Hammer",
                    "items": ["WebStorm", "Rider", "Vue.js", "Visual Code", "Visual Studio", "SSMS", "Postman", "GitHub Desktop", "MongoDB Compass"]
                },
                {
                    "category": "Programming Languages",
                    "icon": "AppWindow",
                    "items": ["JScript", "TScript", "C#", "C++", "Java"]
                },
                {
                    "category": "Programming Frameworks",
                    "icon": "Code",
                    "items": [".Net Core", "NodeJS", "Spring Boot", "GraphQL", "Angular", "React",
                        "VueJS", "React-Native", "Bootstrap", "Tailwind", "ChakraUI", "Ngx",
                        "Antd", "MaterialUI", "AG-Grid", "Chart.js", "Canvas", "Apex Charts",
                        "AkitaJs", "ReduxJS", "Ngrx", "Elf", "JestJs", "Karma", "Cypress"
                    ]
                },
                {
                    "category": "Tools & Others",
                    "icon": "Info",
                    "items": ["Git", "GitHub", "Docker", "Jira", "Agile/Scrum", "Figma"]
                }
            ]
        },
        "contactPage": {
            "title": "Contact",
            "contactFormTitle": "Contact Me",
            "nameLabel": "Your Name and Surname",
            "emailLabel": "Your Email Address",
            "subjectLabel": "Subject",
            "messageLabel": "Your Message",
            "sendButton": "Send Message",
            "sendingButton": "Sending...",
            "successMessage": "Your message has been sent successfully! Thank you.",
            "errorMessage": "An error occurred while sending the message. Please try again.",
            "socialMediaTitle": "Social Media and Contact Information",
            "emailText": "Email",
            "phoneText": "Phone"
        },
        "footer": {
            "copyright": "All Rights Reserved.",
            "designBy": "Designed with Love using React and Tailwind CSS"
        }
    }
};

export default localization;