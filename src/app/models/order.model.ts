export class Order{

    constructor(
        public id: number,
        public talent: string,
        public occasion: string,
        public pay_method: string,
        public talent_response: string,
        public order_state: string,
        public created: string,
        public modified: string,
        public email_client: string,
        public phone_number: string,
        public is_public: string,
        public to: string,
        public from_client: string,
        public instructions: string,
        public order_price: number

    ){}
}