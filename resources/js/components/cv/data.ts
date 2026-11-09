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
        label: 'Backend',
        items: ['PHP', 'Laravel', 'Livewire', 'Filament'],
    },
    {
        label: 'Frontend',
        items: [
            'React',
            'JavaScript',
            'Inertia',
            'Tailwind',
            'HTML',
            'CSS / SCSS',
            'Bootstrap',
        ],
    },
    {
        label: 'Adatbázisok',
        items: ['MySQL', 'PostgreSQL', 'Redis'],
    },
    {
        label: 'Eszközök és működés',
        items: [
            'Docker',
            'Git',
            'Pest / PHPUnit',
            'Node-RED',
            'ClickUp',
            'Claude Code / AI agentek',
        ],
    },
];

export type WorkHighlight = {
    title: string;
    body: string;
};

export const WENERATE_RESPONSIBILITIES: WorkHighlight[] = [
    {
        title: 'Fullstack fejlesztés',
        body: 'az energiamenedzsment szoftver funkcióinak fejlesztése PHP/Laravel és React alapokon.',
    },
    {
        title: 'Energetikai számítások',
        body: 'algoritmusok megvalósítása energetikai mérnökökkel, valós mérési adatokra építve; a gépvizsgálati funkciók önálló fejlesztése.',
    },
    {
        title: 'Fejlesztői környezet',
        body: 'Docker-alapú, microservice architektúrájú környezet kialakítása, amely gyorsabbá és reprodukálhatóvá tette a fejlesztést.',
    },
    {
        title: 'Automatizált tesztelés',
        body: 'unit- és feature tesztek bevezetése (PHPUnit/Pest).',
    },
    {
        title: 'Kódminőség',
        body: 'egy túlterhelt legacy adatbázistábla szétválasztása felelősségi körök szerint; statikus analízis, típusdeklarációk és code review bevezetése.',
    },
    {
        title: 'Folyamatok és csapat',
        body: 'fejlesztési folyamatok kialakítása, ügyféligények összehangolása a fejlesztéssel, új kollégák betanítása.',
    },
    {
        title: 'AI-támogatott fejlesztés',
        body: 'AI coding agentek tudatos bevonása a csapat fejlesztési folyamataiba.',
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
