export class Withdraw{

    constructor(
        public id: number,
        public created: string,
        public modified: string,
        public amount: string,
        public state_withdraw: number,
        public balance_talent: number
    ){}
}