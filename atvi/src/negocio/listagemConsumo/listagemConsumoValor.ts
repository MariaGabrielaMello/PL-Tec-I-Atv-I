import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListagemConsumoValor extends Listagem {
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
        console.log(`\nClientes que mais consumiram por Valor`);

        let produtos: Array<Produto> = []
        let servicos: Array<Servico> = []

        this.produtos.forEach(produto => {
            produtos.push(produto)
        })

        this.servicos.forEach(servico => {
            servicos.push(servico)
        })

        this.clientes.forEach(cliente => {

            var precoPedido: number = 0

            cliente.getProdutosConsumidos.forEach(prodConsumido => {
                for (let index = 0; index < produtos.length; index++) {
                    if (produtos[index].nome == prodConsumido.nome) {
                        precoPedido += produtos[index].preco
                    }
                }
            });

            cliente.getServicosConsumidos.forEach(servConsumido => {
                for (let indexS = 0; indexS < servicos.length; indexS++) {
                    if (servicos[indexS].nome == servConsumido.nome) {
                        precoPedido += servicos[indexS].preco
                    }
                }
            });

            cliente.precoPedido = precoPedido
        });

        this.clientes.sort((precoPedido1, precoPedido2) => (precoPedido1.precoPedido > precoPedido2.precoPedido) ? -1 : 1)

        let ordemPedido = 1;
        
        if (this.clientes.length > 5) {
            for (let i = 0; i < 5; i++) {
                this.clientes.forEach(preco => {
                    console.log(`${ordemPedido} - ${preco.nome}: ${preco.precoPedido}`);
                    ordemPedido++;
                });
            }
        }
        else {
            this.clientes.forEach(preco => {
                console.log(`${ordemPedido} - ${preco.nome}: ${preco.precoPedido}`);
                ordemPedido++;
            });
        }
    }
}