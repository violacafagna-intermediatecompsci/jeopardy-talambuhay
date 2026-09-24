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
        points: 300,
        question:
            'What was the EVER first national park, established in 1872?',
        imgSrc: "https://i0.wp.com/travelmontana.com/wp-content/uploads/2020/08/yellowstone-national-park.png?w=1000&ssl=1",
        answer: 'Yellowstone',
    },
    {
        points: 200,
        question:
            'What acronym helps you remember the order of operations in math?',
        answer: 'PEMDAS',
    },
    {
        points: 400,
        question: 'When did skiing make its debut in the olympics?',
        answer: '1924',
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
            points: 200,
            question:
                "What is the name of the region which forms Italy's boot?",
            imgSrc: 'https://i0.wp.com/designdestinations.org/wp-content/uploads/2023/02/image-1.png?ssl=1',
            answer: 'Pulgia',
        },
        {
            points: 300,
            question: 'Who wrote Fahrenheit 451?',
            answer: 'Ray Bradbury',
        },
        {
            points: 100,
            question:
                'What do you call twins that do not look alike?',
            imgSrc:
                '/fraternal.png',
            answer: 'Fraternal',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'What word is Natalie without the i?',
        answer: 'Natale',
    },
    {
        points: 200,
        question:
            'What branch of math focused on collecting, analyzing, and interpreting data?',
        answer: 'Statistics',
    },
    {
        points: 300,
        question:
            'What type of snake is this?',
        ImgScr: 
            'https://upload.wikimedia.org/wikipedia/commons/4/4d/Ball_python_lucy.JPG?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
        answer: 'Python',
    },
    {
        points: 400,
        question:
            'What number president was Warren G. Harding',
        answer: '29',
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