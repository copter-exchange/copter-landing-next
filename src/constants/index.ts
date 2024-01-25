import { coverage, dollar, table, transfers, round1, round2, round3, doubletick, getprice, support, facebook, instagram, linkedin, telegram, bitcoin, ethereum, stellar, tether } from '@/assets/images'



export const navLinks = [
    // { href: "#home", label: "Home" },
    { href: "#otc", label: "OTC" },
    { href: "#contacto", label: "Contacto" },
    // { href: "https://copter-655bc.web.app/", label: "Acceder" },
];

export const services = [
    {
        imgURL: transfers,
        title: "Transferencias",
        subtext: "internacionales"
    },
    {
        imgURL: coverage,
        title: "Cobertura",
        subtext: "cambiaria"
    },
    {
        imgURL: dollar,
        title: "Dolarizá",
        subtext: "tu empresa"
    },
    {
        imgURL: table,
        title: "Mesa",
        subtext: "OTC"
    },
]

export const rounds = [
    {
        text: "Crear una cuenta",
        subtext: "Registrate en nuestro sitio web",
        imgURL: round1
    },
    {
        text: ".....",
        subtext: "mmm ...",
        imgURL: round2
    },
    {
        text: "¡Y listo!",
        subtext: "Ya podés pagar, cobrar y enviar dinero.",
        imgURL: round3
    },
]

export const otcIcons = [
    { 
        src: support, 
        alt: "Support",
        text: "Contactate con nosotros"
    },
    { 
        src: getprice, 
        alt: "Get price",
        text: "Solicitá tu cotizacion" 
    },
    { 
        src: doubletick, 
        alt: "Double tick", 
        text: "¡Trade listo!" 
    },
    
]

type FooterLink = {
    name: string;
    link: string;
    target?: string;
}

type FooterSection = {
    title: string;
    links: FooterLink[];
}

export const footerLinks: FooterSection[] = [
    {
        title: "Recursos",
        links: [
            { 
                name: "Centro de ayuda", 
                link: "https://t.me/+_N9YE4yir41hOGYx",
                target: "_blank",
            },
        ],
    },
    {
        title: "Cotizaciones",
        links: [
            { name: "Bitcoin", link: "#otc", },
            { name: "Ethereum", link: "#otc" },
            { name: "Tether", link: "#otc" },
            { name: "Stellar", link: "#otc" },
        ],
    },
    {
        title: "Empresa",
        links: [
            { name: "Términos y condiciones", link: "/terms" },
            { name: "Política de riesgo ", link: "/risk-policy" },
            { name: "Privacidad ", link: "/privacy" },
            { name: "Límites y comisiones ", link: "/limits-commissions" },
            // { name: "Sobre nosotros ", link: "/" },
        ],
    }
]

export const socialMedia = [
    {
        src: facebook,
        alt: "Facebook logo",
        link: "https://www.facebook.com/copterNews/",
        target: "_blank",
    },
    {
        src: instagram,
        alt: "Instagram logo",
        link: "https://www.instagram.com/copter_news/",
        target: "_blank",
    },
    {
        src: linkedin,
        alt: "LinkedIn logo",
        link: "https://www.linkedin.com/company/cotperexchange/",
        target: "_blank",
    },
    {
        src: telegram,
        alt: "Telegram logo",
        link: "https://t.me/+_N9YE4yir41hOGYx",
        target: "_blank",
    },
];

export const currencies = [
    {
      image: bitcoin,
      name: 'Bitcoin',
      abbr: 'BTC',
      description:
        '$ 2.605,27',
    },
    {
      image: ethereum,
      name: 'Ethereum',
      abbr: 'ETH',
      description:
        '$ 2.605,27',
    },
    {
      image: tether,
      name: 'Tether',
      abbr: 'USDT',
      description:
        '$ 2.605,27',
    },
    {
        image: stellar,
        name: 'Stellar',
        abbr: 'XLM',
        description:
          '$ 2.605,27',
      },
  ];
