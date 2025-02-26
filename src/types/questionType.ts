export interface QuestionType {
	flag: string;
	options: Option[];
}

export interface Option {
	id: string;
	name: string;
	isCorrect: boolean;
}
