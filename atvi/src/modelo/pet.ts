import Produto from "./produto"
import Servico from "./servico"

export default class Pet {
    public nome: string
    public tipo: string
    public raca: string
    public genero: string
    public ServicosConsumidos: Array<Servico>
    public ProdutosConsumidos: Array<Produto>
    produtosConsumidos: any
    servicosConsumidos: any
    
    constructor(nome: string, raca: string, genero: string, tipo: string) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
        this.ServicosConsumidos = []
        this.ProdutosConsumidos = []
    }

    public setNome(novoNome: string) {
        this.nome = novoNome;
    }

    public get getNome(){return this.nome}
    public get getRaca(){return this.raca}
    public get getGenero(){return this.genero}
    public get getTipo(){return this.tipo}
    public get getProdutosConsumidos(): Array<Produto> {return this.produtosConsumidos}
    public get getServicosConsumidos(): Array<Servico> {return this.servicosConsumidos}
}