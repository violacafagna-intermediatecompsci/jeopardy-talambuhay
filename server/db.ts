import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'What princess has a magical purple amulet?',
           imgSrc: '/sofiathefirst.png',
        answer: 'Sofia the First',
    },
    {
        points: 200,
        question:
            'What was the EVER first national park, established in 1872?',
        imgSrc: "https://i0.wp.com/travelmontana.com/wp-content/uploads/2020/08/yellowstone-national-park.png?w=1000&ssl=1",
        answer: 'Yellowstone National Park',
    },
    {
        points: 300,
        question:
            'What year was Inside Out released?',
        answer: '2015',
    },
    {
        points: 400,
        question: 'Who wrote Fahrenheit 451?',
        answer: 'Ray Bradbury',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 400,
            question:
                'When is national frozen yogurt day?',
            imgSrc: '/froyo.png',
            answer: 'February 6th',
        },
        {
            points: 100,
            question:
                'What is the capital of Italy?',
            imgSrc: 'https://italoamericano.org/wp-content/uploads/2021/05/dreamstime_l_60254394-2048x1360.jpg',
            answer: 'Rome',
        },
        {
            points: 300,
            question: 'When did skiing make its debut in the olympics?',
            imgSrc: '/programming_language.png',
            answer: '1924',
        },
        {
            points: 200,
            question:
                'What do you call twins that do not look alike?',
            imgSrc:
                "https://laguidalpina.it/cdn/shop/products/ferrata-marmolada-cresta-ovest-Cristiano-Gregnanin-Guida-Alpina-Certificata-Dolomiti-5.jpg?v=1738870778",
            answer: 'Fraternal Twins',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'What is 12 + 17',
        answer: '29',
    },
    {
        points: 200,
        question:
            'How many ounces are in a pound? (do not include the unit)',
        imgSrc:
            "https://www.taylorusa.com/cdn/shop/products/74104102-1_6f89c875-3191-485b-8f97-0c4152cee07e.jpg?v=1607387682&width=1800",
        answer: '16',
    },
    {
        points: 300,
        question:
            'What type of snake is this?',
        ImgScr: 
            'https://upload.wikimedia.org/wikipedia/commons/4/4d/Ball_python_lucy.JPG?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original'
        answer: 'Python',
    },
    {
        points: 400,
        question:
            'This type of 2D drawing allows you to see the sides of a 3D object at the same scale.',
        imgSrc:
            "https://static.mathigon.org/cms/a8141a111490d026fa6578a4933d1d47.png",
        answer: 'Isometric',
    }
]);


const categories = [
    {
        title: 'Viola\'s Past',
        questions: pastQuestions
    },
    {
        title: `Viola's Present`,
        questions: presentQuestions
    },
    {
        title: "Viola's Future",
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}