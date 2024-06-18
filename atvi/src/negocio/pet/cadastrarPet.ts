import Entrada from "../../io/entrada"
import Pet from "../../modelo/pet"
import Cadastro from "../cadastro"

export default class CadastroPet extends Cadastro {
    private pet: Array<Pet>
    private entrada: Entrada
    constructor(pet: Array<Pet>) {
        super()
        this.pet = pet
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro de pet`);

        let nomePet = this.entrada.receberTexto(`Por favor, informe o nome do pet: `)
        let tipoPet = this.entrada.receberTexto(`Por favor, informe o tipo do pet: `)
        let racaPet = this.entrada.receberTexto(`Por favor, informe a raça do pet: `)
        let generoPet = this.entrada.receberTexto(`Por favor, informe o gênero do pet: `)

        let pet = new Pet(nomePet, racaPet, generoPet, tipoPet)

        this.pet.push(pet)
    }
}