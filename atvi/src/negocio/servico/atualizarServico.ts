import Entrada from "../../io/entrada"
import Servico from "../../modelo/servico"
import Atualizar from "../atualizar"

export default class AtualizarServico extends Atualizar {
    private servico: Array<Servico>
    private entrada: Entrada
    constructor(servico: Array<Servico>) {
        super()
        this.servico = servico
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        let nome = this.entrada.receberTexto('Insira o nome do produto o qual quer atualizar: ')
        var atualizarServico = (nome: string) => {
            for (let indexServico = 0; indexServico < this.servico.length; indexServico++) {
                if (this.servico[indexServico].getNome == nome) {
                    let operacao = true;
                    const alvo = this.servico[indexServico]
                    
                    while (operacao) {
                        console.log(`--------------------------------------`);
                        console.log(`Escolha a opção que quer atualizar:`);
                        console.log(`1 - Nome`);
                        console.log(`2 - Descricao`);
                        console.log(`3 - Preço`);
                        console.log(`0 - Voltar`);
                        
                        let opcao = this.entrada.receberNumero('Insira qual informação será alterada: ')
                        switch (opcao) {
                            case 1:
                                let nome = this.entrada.receberTexto('Insira o novo nome do servico: ')
                                alvo.nome = nome
                                break;

                            case 1:
                                let descricao = this.entrada.receberTexto('Insira a nova descricao do servico: ')
                                alvo.descricao = descricao
                                break;
                            case 3:
                                let preco = this.entrada.receberNumero('Insira o novo preço do servico: ');
                                alvo.preco = preco;
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
        atualizarServico(nome)
        console.log(`--------------------------------------`);
    }
}