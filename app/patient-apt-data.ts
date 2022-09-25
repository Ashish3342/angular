export class PatientAptData {
    constructor(
        public full_name: string,
        public mobile_number: string,
        public age: number,
        public gender: string,
        public describe_problem_in_few_words: string,
        public doctor: number,
        public date: Date,
        public slots: string,
    ) { }
}
