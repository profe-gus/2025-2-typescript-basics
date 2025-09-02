import { PokeServiceAxios, PokeServiceFetch, type HttpAdapter } from '../api/poke-service';
import type { PokeResponse } from '../interfaces/poke-response';
import { message } from '../type-basics/type-basics';
import axios from 'axios';

export class Student{
    //definición de atributos

    //globales:
    id:number;
    private name:string;

    
    constructor(
        id: number, 
        name:string,
        //private pokeServiceFetch: PokeServiceFetch
        //private pokeServiceAxios: PokeServiceAxios
        private pokeService : HttpAdapter
        ){
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

    async getPokemonData(id:number){
        return await this.pokeService.getPokemon<PokeResponse>(id);
    }

 

}

// export const gus = new Student(1, "Gus");
// console.log("🚀 ~ :33 ~ gus.getName", gus.getName)
// gus.joinClass();
// const score:number = await gus.getScore();
// console.log("🚀 ~ :39 ~ score:", score);
//  const pokemon = await gus.getPokemon(1);
//  console.log("🚀 ~ :48 ~ pokemon:", pokemon.data.name)
const pokeServiceFetchInstance = new PokeServiceFetch();
const pokeServiceAxiosInstance = new PokeServiceAxios();

export const gus = new Student(1,"Gus", pokeServiceFetchInstance);
//export const gus = new Student(1,"Gus", pokeServiceAxiosInstance);

const pokemon = await gus.getPokemonData(4);
console.log(pokemon.name);
