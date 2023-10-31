export type Choice = {
    id: string;
    text: string;
};

export type Answers = {
    answer_a: string | boolean;
    answer_b: string | boolean;
    answer_c: string | boolean;
    answer_d: string | boolean;
    answer_e: string | boolean;
    answer_f: string | boolean;
};

export type Question = {
    id: number;
    question: string;
    description: string | null;
    answers: Answers[];
    category: string;
    correct_answer: string;
    correct_answers: object;
    difficulty: string;
    explanation: null;
    multiple_correct_answers: boolean;
    tags: [];
    tip: null;
};

export type QuizState = {
    questions: Question[];
    currentQuestionIndex: number;
    currentAnswer: string;
    questionIndex: number;
    score: number | null;
};
