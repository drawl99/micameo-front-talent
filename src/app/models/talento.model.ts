import { User } from './usuario.model';

export class Talent{

    constructor(
        public profile_image: string,
        public description: string,
        public response_days: number,
        public price: number,
        public categories: string[],
        public birthday: string,
        public phone_number: string,
        public user: User,
    ){}

    imprimirTalento(){
        console.log(this.user);
        
    }
}