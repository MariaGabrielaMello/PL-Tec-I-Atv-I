import Entrada from "../../io/entrada"
import Pet from "../../modelo/pet"
import Atualizar from "../atualizar"

export default class AtualizarPet extends Atualizar {
    private pet: Array<Pet>
    private entrada: Entrada
    constructor(pet: Array<Pet>) {
        super()
        this.pet = pet
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        let nome = this.entrada.receberTexto('Insira o nome do pet que deseja atualizar: ')
        var atualizarProduto = (nome: string) => {
            for (let indexPet = 0; indexPet < this.pet.length; indexPet++) {
                if (this.pet[indexPet].getNome == nome) {
                    let operacao = true;
                    const alvo = this.pet[indexPet]
                    
                    while (operacao) {
                        console.log(`--------------------------------------`);
                        console.log(`Para atualizar escolha uma opção:`);
                        console.log(`1 - Nome`);
                        console.log(`2 - Tipo`);
                        console.log(`3 - Raça`);
                        console.log(`4 - Genero`);
                        console.log(`0 - Voltar`);
                        
                        let opcao = this.entrada.receberNumero('Insira qual informação será alterada: ')
                        switch (opcao) {
                            case 1:
                                let nome = this.entrada.receberTexto('Insira o novo nome do pet: ')
                                alvo.nome = nome
                                break;
                            case 2:
                                let tipo = this.entrada.receberTexto('Insira o novo tipo do pet: ');
                                alvo.tipo = tipo.toString();
                                break;
                            case 3:
                                let raca = this.entrada.receberTexto('Insira a nova raça do pet: ');
                                alvo.raca = raca.toString();
                                break;
                            case 4:
                                let genero = this.entrada.receberTexto('Insira o novo genero do pet: ');
                                alvo.genero = genero.toString();
                                break;                                
                            case 0:
                                operacao = false
                                break;
                            default:
                                console.log(`Operação não encontrada`)
                        }
                    }
                }
            }
        }
        atualizarProduto(nome)
        console.log(`--------------------------------------`);
    }
}