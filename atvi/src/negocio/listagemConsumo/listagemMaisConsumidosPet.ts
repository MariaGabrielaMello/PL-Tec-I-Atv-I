import Pet from "../../modelo/pet";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListagemMaisConsumidosTipoRaca extends Listagem {
    private pets: Array<Pet>
    produtos: Produto[];
    servicos: Servico[];

constructor(pets: Array<Pet>, produtos: Array<Produto>, servicos: Array<Servico>) {
    super()
    this.pets = pets
    this.produtos = produtos
    this.servicos = servicos
}


public listar(): void {
    console.log('Listagem de Produtos e Serviços mais consumidos por tipo e raça:');

    const topProdutosTipo: { nome: string, valor: number, quantidade: number }[] = []
    const topServicosTipo: { nome: string, valor: number, quantidade: number }[] = []

    const topProdutosRaca: { nome: string, valor: number, quantidade: number }[] = []
    const topServicosRaca: { nome: string, valor: number, quantidade: number }[] = []

    console.log('TIPO');

    // PRODUTOS TIPO
    this.produtos.forEach(produto => {
        topProdutosTipo.push({ nome: produto.getNome, valor: produto.getPreco, quantidade: 0 })
    })

    topProdutosTipo.forEach(prod => {
        this.pets.forEach(pet => {
            pet.getProdutosConsumidos.forEach(prodConsumido => {
                if (prodConsumido.nomeProduto == prod.nome) {
                    if (pet.genero.toUpperCase() == 'T' || pet.genero.toUpperCase() == 'TIPO') {
                        prod.quantidade = prod.quantidade + 1
                    }
                }
            })
        });
    })

    topProdutosTipo.sort((prod1, prod2) => (prod1.quantidade > prod2.quantidade) ? -1 : 1)
    console.log(`PRODUTOS:`);


    let ordemProdTipo = 1;

    topProdutosTipo.forEach(prod => {
        console.log(`${ordemProdTipo} - ${prod.nome}`);
        ordemProdTipo++;
    });

    // SERVIÇOS TIPO
    this.servicos.forEach(servico => {
        topServicosTipo.push({ nome: servico.getNome, valor: servico.getPreco, quantidade: 0 })
    })

    topServicosTipo.forEach(serv => {
        this.pets.forEach(pet => {
            pet.getServicosConsumidos.forEach(servConsumido => {
                if (servConsumido.nomeServico == serv.nome) {
                    if (pet.genero.toUpperCase() == 'T' || pet.genero.toUpperCase() == 'TIPO') {
                        serv.quantidade = serv.quantidade + 1
                    }
                }
            })
        });
    })

    topServicosTipo.sort((serv1, serv2) => (serv1.quantidade > serv2.quantidade) ? -1 : 1)
    console.log(`SERVIÇOS:`);

    let ordemServTipo = 1;

    topServicosTipo.forEach(serv => {
        console.log(`${ordemServTipo} - ${serv.nome}`);
        ordemServTipo++;
    });


    // PRODUTOS RACA
    this.produtos.forEach(produto => {
        topProdutosRaca.push({ nome: produto.getNome, valor: produto.getPreco, quantidade: 0 })
    })

    topProdutosRaca.forEach(prod => {
        this.pets.forEach(pet => {
            pet.getProdutosConsumidos.forEach(prodConsumido => {
                if (prodConsumido.nomeProduto == prod.nome) {
                    if (pet.genero.toUpperCase() == 'R' || pet.genero.toUpperCase() == 'RACA') {
                        prod.quantidade = prod.quantidade + 1
                    }
                }
            })
        });
    })

    console.log('RACA');

    topProdutosRaca.sort((prod1, prod2) => (prod1.quantidade > prod2.quantidade) ? -1 : 1)
    console.log(`PRODUTOS:`);

    let ordemProdRaca = 1;

    topProdutosRaca.forEach(prod => {
        console.log(`${ordemProdRaca} - ${prod.nome}`);
        ordemProdRaca++;
    });

    // SERVIÇOS RACA
    this.servicos.forEach(servico => {
        topServicosRaca.push({ nome: servico.getNome, valor: servico.getPreco, quantidade: 0 })
    })

    topServicosRaca.forEach(serv => {

        this.pets.forEach(pet => {
            pet.getServicosConsumidos.forEach(servConsumido => {
                for (let indexServico = 0; indexServico < topServicosRaca.length; indexServico++) {
                    if (servConsumido.nomeServico == serv.nome) {
                        if (pet.genero.toUpperCase() == 't' || pet.genero.toUpperCase() == 'tipo') {
                            serv.quantidade = serv.quantidade + 1
                        }
                    }
                }
            })
        });
    })

    topServicosRaca.sort((serv1, serv2) => (serv1.quantidade > serv2.quantidade) ? -1 : 1)
    console.log(`SERVIÇOS:`);

    let ordemServRaca = 1;

    topServicosRaca.forEach(serv => {
        console.log(`${ordemServRaca} - ${serv.nome}`);
        ordemServRaca++;
    });
}
}