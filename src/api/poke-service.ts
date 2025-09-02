import axios from "axios";

export interface HttpAdapter {
    getPokemon<T>(id:number): Promise<T>
}

export class PokeServiceFetch implements HttpAdapter{

    private url: string = "https://pokeapi.co/api/v2/pokemon/";

    async getPokemon<T>(pokeId: number):Promise<T>{
        const response = await fetch(`${this.url}${pokeId}`);
        const data: T = await response.json();
        return data;
    }
}

export class PokeServiceAxios implements HttpAdapter{

    private url: string = "https://pokeapi.co/api/v2/pokemon/";

    async getPokemon<T>(pokeId: number):Promise<T>{
        const { data } = await axios.get<T>(`${this.url}${pokeId}`);
        return data;
    }

}