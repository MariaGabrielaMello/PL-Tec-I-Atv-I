import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto"
import Deletar from "../deletar"

export default class ExcluirProduto extends Deletar {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public deletar(): void {
        var nome = this.entrada.receberTexto('Insira o nome do produto o qual quer excluir: ')

        var excluirProduto = (nome: string) => {
            for (let index = 0; index < this.produtos.length; index++) {
                if (this.produtos[index].getNome == nome) {
                    this.produtos.splice(index, 1)
                }                
            }
        }
        excluirProduto(nome)
        console.log(`--------------------------------------`);
    } 
} 