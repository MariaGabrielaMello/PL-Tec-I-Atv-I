export default class Produto {
    public nome: string
    public preco: number
    public quantidade: number = 0
    public descricao: string
    nomeProduto: any
    constructor(nome: string, descricao: string,  preco: number) {
        this.nome = nome
        this.descricao = descricao
        this.preco = preco
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