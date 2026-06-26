export const NAV_LABELS = [
    'Rólam',
    'Tapasztalat',
    'Tanulmányok',
    'Készségek',
    'Hobbik',
    'Kapcsolat',
] as const;

export type SkillGroup = {
    label: string;
    items: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
    {
        label: 'Frontend',
        items: [
            'HTML',
            'CSS / SCSS',
            'JavaScript',
            'React',
            'Bootstrap',
            'Inertia',
        ],
    },
    {
        label: 'Backend',
        items: ['PHP', 'Laravel', 'MySQL', 'Redis', 'Node-RED'],
    },
    {
        label: 'Eszközök',
        items: ['Git', 'Docker', 'ClickUp', 'AI integráció'],
    },
];

export type Hobby = {
    title: string;
    body: string;
};

export const HOBBIES: Hobby[] = [
    {
        title: 'Csillagászat',
        body: 'Szeretek az univerzum kialakulásán, a galaxisokon és a fekete lyukakon elmélkedni. Tiszta éjszakákon szívesen nézem a csillagokat, és sosem unom meg, mennyi minden van még odakint, amit nem értünk.',
    },
    {
        title: 'Sport',
        body: 'A calisthenics a kedvenc mozgásformám: főleg a saját testsúlyommal edzek, egy világbajnoki bronzérmes edző segítségével. Élvezem, ahogy fokozatosan épül a kontroll a saját testem felett.',
    },
    {
        title: 'Kávé',
        body: 'Imádom a jó kávét, mondhatni házi barista vagyok. Szívesen próbálok ki új pörköléseket, és kísérletezem a tökéletes espressoval.',
    },
    {
        title: 'Kertészkedés',
        body: 'Pihentet a növények gondozása a kertben, a palántázástól a betakarításig. Jó látni, ahogy valami a kezem alatt nő és életre kel.',
    },
];

export const PROJECT_LINKS = [
    'https://origotalent.com',
    'https://feriagumis.hu',
    'https://koselakautosiskola.hu',
    'https://szereteterod-tsmt.hu',
] as const;

export type ContactIconName = 'mail' | 'phone' | 'github' | 'linkedin';

export type Contact = {
    value: string;
    label: string;
    href: string;
    external: boolean;
    icon: ContactIconName;
};

export const CONTACTS: Contact[] = [
    {
        value: 'szabolcs.felfoldi10@gmail.com',
        label: 'E-mail',
        href: 'mailto:szabolcs.felfoldi10@gmail.com',
        external: false,
        icon: 'mail',
    },
    {
        value: '+36 30 665 6634',
        label: 'Telefon',
        href: 'tel:+36306656634',
        external: false,
        icon: 'phone',
    },
    {
        value: 'github.com/szabtsi',
        label: 'GitHub',
        href: 'https://github.com/szabtsi',
        external: true,
        icon: 'github',
    },
    {
        value: 'linkedin.com/in/szabolcs-felföldi',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/szabolcs-felf%C3%B6ldi-b1a0a8136',
        external: true,
        icon: 'linkedin',
    },
];
