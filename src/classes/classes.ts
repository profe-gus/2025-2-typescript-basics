import { message } from '../type-basics/type-basics';
import axios from 'axios';

export class Student{
    //definición de atributos

    //globales:
    id:number;
    private name:string;

    
    constructor(id: number, name:string){
        this.id = id;
        this.name = name;
    }
    
    get getName():string{
        return this.name;
    }

    set setName(name:string){
        this.name = name;
    }

    joinClass(){
        console.log(`
            The student ${this.name} now is in the class
            `)
    }

    async getScore():Promise<number>{
        return 10;
    }

    async getPokemon(pokeId: number){
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
        return pokemon;
    }

}

export const gus = new Student(1, "Gus");
console.log("🚀 ~ :33 ~ gus.getName", gus.getName)
gus.joinClass();
const score:number = await gus.getScore();
console.log("🚀 ~ :39 ~ score:", score);
 const pokemon = await gus.getPokemon(1);
 console.log("🚀 ~ :48 ~ pokemon:", pokemon.data.name)
