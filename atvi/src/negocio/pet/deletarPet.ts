import Entrada from "../../io/entrada"
import Pet from "../../modelo/pet"
import Deletar from "../deletar"

export default class ExcluirPet extends Deletar {
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(pets: Array<Pet>) {
        super()
        this.pets = pets
        this.entrada = new Entrada()
    }
    public deletar(): void {
        var nome = this.entrada.receberTexto('Insira o nome do pet que deseja excluir: ')

        var excluirPet = (nomePet: string) => {
            for (let index = 0; index < this.pets.length; index++) {
                if (this.pets[index].getNome == nomePet) {
                    this.pets.splice(index, 1)
                }                
            }
        }
        excluirPet(nome)
        console.log(`--------------------------------------`);
    } 
} 