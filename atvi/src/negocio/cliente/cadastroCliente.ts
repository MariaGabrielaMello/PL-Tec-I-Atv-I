import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";
import Cadastro from "../cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor, informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor, informe cpf do cliente: `);
        let data = this.entrada.receberTexto(`Por favor, informe a data de emissão do CPF (dd/mm/yyyy): `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let cliente = new Cliente(nome, nomeSocial, cpf);
        let numRGs = this.entrada.receberNumero(`Por favor, a quantidade de RGs: `) 
        for (var x = 1; x <= numRGs; x++ ) {
            let RGvalor = this.entrada.receberTexto(`Por favor, informe o número do RG: `) 
            let RGdata = this.entrada.receberTexto(`Por favor, informe a data de emissão do RG (dd/mm/yyyy): `)
            let RGpartesData = RGdata.split('/')
            let RGano = new Number(RGpartesData[2].valueOf()).valueOf()
            let RGmes = new Number(RGpartesData[1].valueOf()).valueOf()
            let RGdia = new Number(RGpartesData[0].valueOf()).valueOf()
            let RGdataEmissao = new Date(RGano, RGmes, RGdia)
            let rg = new RG (RGvalor, RGdataEmissao)
            cliente.getRgs.push(rg)
        }
        let numTels = this.entrada.receberNumero(`Por favor, a quantidade de telefones: `) 
        for (var x = 1; x <= numTels; x++ ) {
            let ddd = this.entrada.receberTexto(`Por favor, informe o DDD: `) 
            let numero = this.entrada.receberTexto(`Por favor, informe telefone: `)
            let tel = new Telefone (ddd, numero)
            cliente.getTelefones.push(tel)
        }

        this.clientes.push(cliente)
        
        console.log(`\nCadastro concluído com sucesso!\n`);
    }
}