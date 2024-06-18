import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemCompraProduto extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super ()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nRegistro de compras de produtos por cliente:`);
        this.clientes.forEach(cliente => {
            console.log(`Cliente: ${cliente.nome}`);

            for (let index = 0; index < cliente.getProdutosConsumidos.length; index++) {
                console.log(`${index} - Produto comprado: ${cliente.getProdutosConsumidos[index].getNome}`);
            }            
        })
    }
}