import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemCompraServico extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nRegistro de compras de produtos por cliente:`);
        this.clientes.forEach(cliente => {
            console.log(`Cliente: ${cliente.nome}`);

            for (let index = 0; index < cliente.getServicosConsumidos.length; index++) {
                console.log(`${index} - Serviço consumido: ${cliente.getServicosConsumidos[index].getNome}`);
            }            
        })
    }
}