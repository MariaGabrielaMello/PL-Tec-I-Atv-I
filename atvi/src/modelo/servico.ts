export default class Servico {
    public nome: string
    public descricao: string
    public preco: number
    public quantidade: number = 0
    nomeServico: any
    constructor(nome: string, descricao: string, preco: number) {
        this.nome = nome
        this.preco = preco
        this.descricao = descricao
    }
    public get getNome(): string {
        return this.nome
    }
    public get getDescricao(): string {
        return this.descricao
    }
    public get getPreco(): number {
        return this.preco
    }
}