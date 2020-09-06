export class Talent{

    constructor(
        public profile_image: string,
        public description: string,
        public response_days: number,
        public price: number,
        public categories: number[],
        public birthday: string
    ){}
}