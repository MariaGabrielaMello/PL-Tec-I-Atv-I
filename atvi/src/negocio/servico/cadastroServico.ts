import Entrada from "../../io/entrada"
import Servico from "../../modelo/servico"
import Cadastro from "../cadastro"

export default class CadastroServico extends Cadastro {
    private servico: Array<Servico>
    private entrada: Entrada
    constructor(servico: Array<Servico>) {
        super()
        this.servico = servico
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro de serviço`);
        
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do serviço: `)
        let descricao = this.entrada.receberTexto(`Por favor, informe a descricao do serviço: `)
        let preco = this.entrada.receberNumero(`Por favor, informe o preço do Serviço: `)
        let servico = new Servico (nome, descricao, preco)
        this.servico.push(servico)
    }
}