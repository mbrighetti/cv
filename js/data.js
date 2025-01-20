// Sidebar Data

const skills = [
   "Troubleshooting",
   "Tailwind",
   "Exchange Online",
   "Powershell",
   "Sharepoint",
   "Helpdesk",
   "HTML", 
   "AD",
];

const details = [
   { label: "Posizione", value: "Bologna, IT" },
   { label: "Esperienza", value: ">8 Anni" },
   { label: "Disponibilità", value: "Non stabilita" },
   { label: "Trasferimento", value: "No" },
];

// Navigation

const navigation = [
   { name: "Resume", href: "./" },
   { name: "Progetti", href: "./projects.html" },
   { name: "Blog", href: "./blog.html" },
];

/**
 * Resume Page
 */

// Experience Data

const jobsList = [
   {
      icon: "https://www.coswell.biz/flex/TemplatesUSR/assets/RS/favicon/apple-touch-icon.png",
      role: "IT Department Specialist",
      company: "Coswell S.p.A.",
      location: "Funo di Argelato, Bologna",
      period: "Agosto 2021 - Presente",
      type: "Full-time",
      description:
         "Installazione e configurazione di nuove tecnologie e aggiornamenti. Supporto tecnico al personale aziendale, risolvendo problemi legati a software e hardware. Gestione degli account aziendali (email, software gestionali, accessi) e assistenza per problematiche correlate. Familiarità con i principali sistemi operativi aziendali e con strumenti diagnostici per troubleshooting. Esperienza nel risolvere problematiche tecniche di diversa complessità, inclusa l'installazione di patch e aggiornamenti.",
   },
   {
      icon: "https://www.coswell.biz/flex/TemplatesUSR/assets/RS/favicon/apple-touch-icon.png",
      role: "Web Digital Marketing Specialist",
      company: "Coswell S.p.A.",
      location: "Funo di Argelato, Bologna",
      period: "28 Ottobre 2015 - Ottobre 2021",
      type: "A contratto",
      description:
         "Analisi di mercato e posizionamento prodotto/servizio. Comprensione delle logiche comportamentali dei consumatori e propensione all'acquisto. Utilizzo di software applicativi e servizi web-based per il marketing commerciale. Implementazione di modelli e strumenti di marketing operativo: comunicazione pubblicitaria e leve promozionali. Esperienza con Photoshop CS5/CS6 per la creazione di contenuti e immagini pubblicitarie.",
   },
   {
      icon: "https://www.coswell.biz/flex/TemplatesUSR/assets/RS/favicon/apple-touch-icon.png",
      role: "Marketing Department Specialist in Test",
      company: "Coswell S.p.A.",
      location: "Funo di Argelato, Bologna",
      period: "Maggio 2015 - 28 Ottobre 2015",
      type: "Stage",
      description:
         "Assistenza nella creazione di contenuti, Gestione delle campagne pubblicitarie, supporto nella gestione dei social media, collaborazione con il team Marketing.",
   },
   {
      icon: "https://www.conad.it/etc.clientlibs/conad-corporate/clientlibs/clientlib-site/resources/corporate/assets/spazio-conad-930ad13fb836b7451287.png",
      role: "Stage Amministrazione",
      company: "uffici E.Leclerc Conad",
      location: "Centro Commerciale Via Larga",
      period: "Gennaio - Aprile 2014",
      type: "Stage formativo",
      description:
         "Durante questa attività formativa sono state svolte mansioni come: organizzazione e archiviazione di documenti come fatture, bolle tramite utilizzo di scanner; uso di internet e di programmi Office.",
   },
   {
      icon: "https://asphi.it/asphi/wp-content/themes/asphi-child/favicon.ico",
      role: "Stage Amministrazione e Informatica",
      company: "ASPHI",
      location: "Via Arienti,6 (BO)",
      period: "Giugno - Luglio 2012",
      type: "Stage formativo",
      description:
         "Terminata la classe quarta, è stato svolto in collaborazione con la scuola, un stage estivo, presso ASPHI con sede in Via Arienti,6 (BO). Durante questa attività sono state svolte mansioni come: Organizzazione di documentazione, svolgimento delle pratiche, apprendimento tecnologia per integrazione, uso di internet e di programmi Office.",
   },
];

// Education

const educationList = [
   {
      icon: "https://i.ytimg.com/vi/PRHNTD1lWJs/maxresdefault.jpg",
      degree: "Istituto Tecnico Odone Belluzzi",
      university: "Diploma Perito Informatico",
      location: "Bologna, IT",
      period: "2009 - 2013",
      description:
         "Attività e associazioni: Informatica, sistemi, elettronica. Basi programmazione java, programmazione e sviluppo applicazioni web in php html.",
   },
];

/**
 * Projects Page
 */

// Projects
const projectsList = [
   {
      icon: "https://smat.bolognatrailteam.run/img/loghi/faviconsmat.webp",
      name: "Sasso Marconi Trail (SMAT)",
      category: "Website",
      role: "Frontend",
      date: "2023 - 2024",
      description:
         "Sono felice di aver contribuito alla realizzazione del sito web per la gara di Trail Running 'Sasso Marconi Trail (SMAT)' 2024, un evento sportivo che si svolge ogni anno nelle colline bolognesi, a Sasso Marconi.",
      website: "https://github.com/mbrighetti/smat/blob/main/smat.bolognatrailteam.run.jpeg",
   },
];

/**
 * Projects Page
 */

// Posts

const posts = [
   {
      date: "February 22, 2024",
      title: "Building an Online Presence as a Full Stack Developer",
      excerpt:
         "Explore the importance of establishing a strong online presence for full stack developers. Learn how to create a compelling portfolio, engage with the developer community, and leverage social media to boost your career.",
   },
   {
      date: "February 15, 2024",
      title: "Navigating the Full Stack Developer Job Interview Maze",
      excerpt:
         "Prepare for success in your full stack developer job interviews. Uncover common interview questions, tips for showcasing your problem-solving skills, and strategies for handling technical assessments.",
   },
   {
      date: "February 8, 2024",
      title: "Mastering the Art of Full Stack Developer Cover Letters",
      excerpt:
         "Explore the art of writing compelling cover letters for full stack developer positions. Learn how to tailor your cover letter to showcase your technical prowess and demonstrate your passion for coding.",
   },
   {
      date: "February 1, 2024",
      title: "Crafting a Comprehensive Full Stack Developer Resume",
      excerpt:
         "Learn the essential elements to include in your full stack developer resume for a stand-out application. Nail down the perfect balance between showcasing skills and work experience.",
   },
];
