import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import Deletar from "../deletar"

export default class ExcluirCliente extends Deletar {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public deletar(): void {
        var cpf = this.entrada.receberTexto('Insira o CPF de quem quer excluir: ')

        var excluirCliente = (cpf: string) => {
            for (let index = 0; index < this.clientes.length; index++) {
                if (this.clientes[index].getCpf.getValor == cpf) {
                    this.clientes.splice(index, 1)
                }
            }
        }
        excluirCliente(cpf)
        console.log(`--------------------------------------`);
    }
}