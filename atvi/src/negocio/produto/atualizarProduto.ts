import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto"
import Atualizar from "../atualizar"

export default class AtualizarProduto extends Atualizar {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        let nome = this.entrada.receberTexto('Insira o nome do produto que deseja atualizar: ')
        var atualizarProduto = (nome: string) => {
            for (let indexProduto = 0; indexProduto < this.produtos.length; indexProduto++) {
                if (this.produtos[indexProduto].getNome == nome) {
                    let operacao = true;
                    const alvo = this.produtos[indexProduto]
                    
                    while (operacao) {
                        console.log(`--------------------------------------`);
                        console.log(`Escolha uma opção:`);
                        console.log(`1 - Nome`);
                        console.log(`2 - Preço`);
                        console.log(`0 - Voltar`);
                        
                        let opcao = this.entrada.receberNumero('Escolha uma opção para alterar: ')
                        switch (opcao) {
                            case 1:
                                let nome = this.entrada.receberTexto('Insira o novo nome do produto: ')
                                alvo.nome = nome
                                break;
                            case 2:
                                let precoProduto = this.entrada.receberNumero('Insira o novo preço do produto: ');
                                alvo.preco = precoProduto;
                                break;
                            case 0:
                                operacao = false
                                break;
                            default:
                                console.log(`Operação não encontrada:`)
                        }
                    }
                }
            }
        }
        atualizarProduto(nome)
        console.log(`--------------------------------------`);
    }
}