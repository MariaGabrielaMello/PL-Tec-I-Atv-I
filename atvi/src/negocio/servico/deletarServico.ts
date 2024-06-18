import Entrada from "../../io/entrada"
import Servico from "../../modelo/servico"
import Deletar from "../deletar"

export default class ExcluirServico extends Deletar {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public deletar(): void {
        var nome = this.entrada.receberTexto('\nInsira o nome do serviço o qual quer excluir: ')

        var excluirServico = (nome: string) => {
            for (let index = 0; index < this.servicos.length; index++) {
                if (this.servicos[index].getNome == nome) {
                    this.servicos.splice(index, 1)
                }                
            }
        }
        excluirServico(nome)
        console.log(`--------------------------------------`);
    }
}