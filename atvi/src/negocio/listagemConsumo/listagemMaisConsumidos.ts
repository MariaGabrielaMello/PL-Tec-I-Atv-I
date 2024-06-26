import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListagemMaisConsumidos extends Listagem {
    private clientes: Array<Cliente> 
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
    }
    
    public listar(): void {
        console.log('Listagem de Produtos/Serviços mais consumidos:');

        const topProdutos: Array<Produto> = []
        const topServicos: Array<Servico> = []
  
        // PRODUTOS
        this.produtos.forEach(produto => {
            topProdutos.push(produto)
        })

        topProdutos.forEach(prod => {
            let qtdProduto = 0
            
            this.clientes.forEach(cliente => {
                cliente.getProdutosConsumidos.forEach(prodConsumido => {
                    for (let indexProduto = 0; indexProduto < topProdutos.length; indexProduto++) {
                        if (prodConsumido.nome == prod.nome) {
                            qtdProduto += 1
                        }     
                    }       
                })
            });

            prod.quantidade = qtdProduto;
        })
        
        topProdutos.sort((prod1, prod2) => (prod1.quantidade > prod2.quantidade) ? -1 : 1)
            console.log(`PRODUTOS:`);

            let ordemProd = 1;

            topProdutos.forEach(prod => {
                console.log(`${ordemProd} - ${prod.nome}`);
                ordemProd++;
        });

        // SERVIÇOS
        this.servicos.forEach(servico => {
            topServicos.push(servico)
        })

        topServicos.forEach(serv => {
            let qtdServico = 0
            
            this.clientes.forEach(cliente => {
                cliente.getServicosConsumidos.forEach(servConsumido => {
                    for (let indexServico = 0; indexServico < topServicos.length; indexServico++) {
                        if (servConsumido.nome == serv.nome) {
                            qtdServico += 1
                        }     
                    }       
                })
            });

            serv.quantidade = qtdServico;
        })

        topServicos.sort((serv1, serv2) => (serv1.quantidade > serv2.quantidade) ? -1 : 1)
            console.log(`SERVIÇOS:`);

            let ordemServ = 1;

            topServicos.forEach(serv => {
                console.log(`${ordemServ} - ${serv.nome}`);
                ordemServ++;
        });
    }
}