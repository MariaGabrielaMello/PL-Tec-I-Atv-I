import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto"
import Cadastro from "../cadastro"

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro de produto`);
        let nome = this.entrada.receberTexto(`Por favor, insira o nome do produto: `)
        let descricao = this.entrada.receberTexto(`Por favor, insira a descricao do produto: `)
        let preco = this.entrada.receberNumero(`Por favor, insira o preço do produto: `)
        let produto= new Produto (nome, descricao, preco)

        this.produtos.push(produto)
    }
}