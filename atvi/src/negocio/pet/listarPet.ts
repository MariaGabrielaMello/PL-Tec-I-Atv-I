import Pet from "../../modelo/pet";
import Listagem from "../listagem";

export default class ListagemPet extends Listagem {
    private pets: Array<Pet>
    constructor(pets: Array<Pet>) {
        super()
        this.pets = pets
    }
    public listar(): void {
        console.log(`\nLista de todos os pets: `);
        this.pets.forEach(pets => {
            console.log(`Nome: ${pets.getNome}`);
            console.log(`Tipo: ${pets.tipo}`); // mexer aqui se não listar informações dos pets
            console.log(`Raça: ${pets.raca}`);
            console.log(`Genero: ${pets.genero}`);

            console.log(`--------------------------------------`);
        }) 
    }
}