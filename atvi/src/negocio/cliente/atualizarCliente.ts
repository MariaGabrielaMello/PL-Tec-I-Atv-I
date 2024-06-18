import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import RG from "../../modelo/rg"
import Telefone from "../../modelo/telefone"
import Atualizar from "../atualizar"

export default class AtualizarCliente extends Atualizar {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        let cpf = this.entrada.receberTexto('Insira o CPF a ser atualizado: ')
        var atualizarCliente = (cpf: string) => {
            for (let indexCliente = 0; indexCliente < this.clientes.length; indexCliente++) {
                if (this.clientes[indexCliente].getCpf.getValor == cpf) {
                    let operacao = true
                    const alvo = this.clientes[indexCliente]
                    console.log(alvo.getTelefones);
                    while (operacao) {
                        console.log(`--------------------------------------`);
                        console.log(`O que voce deseja alterar?`);
                        console.log(`1 - Nome`);
                        console.log(`2 - Nome social`);
                        console.log(`3 - RG`);
                        console.log(`4 - Telefone`);
                        console.log(`0 - Voltar`);

                        let opcao = this.entrada.receberNumero('Escolha uma opção: ')

                        switch (opcao) {
                            case 1:
                                let nome = this.entrada.receberTexto('Insira o novo nome: ')
                                alvo.nome = nome
                                break;
                            case 2:
                                let nomeSocial = this.entrada.receberTexto('Insira o novo nome social: ');
                                alvo.nomeSocial = nomeSocial;
                                break;
                            case 3:
                                let rgValor = this.entrada.receberTexto('Insira o novo RG: ')
                                let RGdata = this.entrada.receberTexto(`Insira a data de emissão do novo RG (dd/mm/yyyy): `)

                                let RGpartesData = RGdata.split('/')
                                let RGano = new Number(RGpartesData[2].valueOf()).valueOf()
                                let RGmes = new Number(RGpartesData[1].valueOf()).valueOf()
                                let RGdia = new Number(RGpartesData[0].valueOf()).valueOf()
                                let RGdataEmissao = new Date(RGano, RGmes, RGdia)
                                let rg = new RG(rgValor, RGdataEmissao)
                                alvo.getRgs.push(rg)
                                break;
                            case 4:
                                let menuTel = true
                                while (menuTel) {
                                    console.log("1 - Deletar número");
                                    console.log("2 - Adicionar número");
                                    console.log("0 - Voltar");

                                    let opcaomenuTel = this.entrada.receberNumero("Escolha uma opção: ")
                                    switch (opcaomenuTel) {
                                        case 1:
                                            for (let index = 0; index < alvo.getTelefones.length; index++) {
                                                console.log("Opção " + index + ": ");
                                                console.log(alvo.getTelefones[index])
                                            }
                                            console.log("----------------------------------------------------------------------------")
                                            let opcaoTel = this.entrada.receberNumero("Escolha uma opção: ")
                                            alvo.getTelefones.splice(opcaoTel, 1)
                                            break;
                                        case 2:
                                            let ddd = this.entrada.receberTexto(`Indira o DDD: `)
                                            let numero = this.entrada.receberTexto(`Insira telefone: `)
                                            let tel = new Telefone(ddd, numero)
                                            alvo.getTelefones.push(tel)
                                            break;
                                        case 0:
                                            menuTel = false
                                            break;
                                        default:
                                            console.log(`Operação não econtrada:`)
                                    }
                                }
                            case 0:
                                operacao = false
                                break;
                            default:
                                console.log(`Operação não econtrada:`)
                        }
                    }
                }
            }
        }
        atualizarCliente(cpf)
        console.log(`--------------------------------------`);
    }
}