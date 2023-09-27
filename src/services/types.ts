export type Question = {
    id: number;
    question: string;
    description: string;
    answers: {
        answer_a: string | boolean;
        answer_b: string | boolean;
        answer_c: string | boolean;
        answer_d: string | boolean;
        answer_e: string | boolean;
        answer_f: string | boolean;
    };
};
