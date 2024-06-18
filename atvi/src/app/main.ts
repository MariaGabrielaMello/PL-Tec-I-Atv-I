import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cliente/cadastroCliente";
import ListagemClientes from "../negocio/cliente/listagemClientes";
import AtualizarCliente from "../negocio/cliente/atualizarCliente";
import DeletarCliente from "../negocio/cliente/deletarCliente";
import CadastroPet from "../negocio/pet/cadastrarPet";
import ListagemPet from "../negocio/pet/listarPet";
import AtualizarPet from "../negocio/pet/atualizarPet";
import DeletarPet from "../negocio/pet/deletarPet";
import CadastroProduto from "../negocio/produto/cadastroProduto";
import ListagemProdutos from "../negocio/produto/listagemProduto";
import AtualizarProduto from "../negocio/produto/atualizarProduto";
import DeletarProduto from "../negocio/produto/deletarProduto";
import CadastroServico from "../negocio/servico/cadastroServico";
import ListagemServicos from "../negocio/servico/listagemServico";
import AtualizarServico from "../negocio/servico/atualizarServico";
import DeletarServico from "../negocio/servico/deletarServico";
import ComprarProduto from "../negocio/compra/compraProduto";
import ListagemCompraProduto from "../negocio/compra/listagemCompraProduto";
import ComprarServico from "../negocio/compra/compraServico";
import ListagemCompraServico from "../negocio/compra/listagemCompraServico";
import ListagemConsumoQuantidade from "../negocio/listagemConsumo/listagemConsumoQuantidade";
import ListagemConsumoValor from "../negocio/listagemConsumo/listagemConsumoValor";
import ListagemMaisConsumidos from "../negocio/listagemConsumo/listagemMaisConsumidos";
import ListagemMaisConsumidosTipoRaca from "../negocio/listagemConsumo/listagemMaisConsumidosPet";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`MENU DO CLIENTE`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Atualizar clientes`);
    console.log(`4 - Deletar clientes`);

    console.log(`MENU DO PET`);
    console.log(`5 - Cadastrar pet`);
    console.log(`6 - Listar todos os pets`);
    console.log(`7 - Atualizar pets`);
    console.log(`8 - Deletar pets`);

    console.log(`MENU DO PRODUTO`);
    console.log(`9 - Cadastrar produto`);
    console.log(`10 - Listar todos os produtos`);
    console.log(`11 - Atualizar produtos`);
    console.log(`12 - Deletar produtos`);

    console.log(`MENU DO SERVIÇO`);
    console.log(`13 - Cadastrar serviço`);
    console.log(`14 - Listar todos os serviços`);
    console.log(`15 - Atualizar serviço`);
    console.log(`16 - Deletar serviço`);

    console.log(`MENU DE COMPRAS`);
    console.log(`17. Registrar compra de produtos`);
    console.log(`18. Listar compra de produtos`);
    console.log(`19. Registrar compra de serviços`);
    console.log(`20. Listar compra de serviços\n`);

    console.log(`MENU DE LISTAGENS`);
    console.log(`21. 10 clientes que mais consumiram por Quantidade`);
    console.log(`22. 10 clientes que mais consumiram por Valor`);
    console.log(`23. Lista geral de produtos e servços mais consumidos`);
    console.log(`24. Lista de produtos e serviços mais consumidos por tipo e raça`);



    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {

        //CLIENTE
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let atualizar = new AtualizarCliente(empresa.getClientes)
            atualizar.atualizar()
            break;
        case 4:
            let deletar = new DeletarCliente(empresa.getClientes)
            deletar.deletar()
            break;

        //PET
        case 5:
            let cadastroPet = new CadastroPet(empresa.getPets)
            cadastroPet.cadastrar()
            break;
        case 6:
            let listagemPet = new ListagemPet(empresa.getPets)
            listagemPet.listar()
            break;
        case 7:
            let atualizarPet = new AtualizarPet(empresa.getPets)
            atualizarPet.atualizar()
            break;
        case 8:
            let deletarPet = new DeletarPet(empresa.getPets)
            deletarPet.deletar()
            break;

        //PRODUTO
        case 9:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 10:
            let listagemProduto = new ListagemProdutos(empresa.getProdutos)
            listagemProduto.listar()
            break;
        case 11:
            let atualizarProduto = new AtualizarProduto(empresa.getProdutos)
            atualizarProduto.atualizar()
            break;
        case 12:
            let deletarProduto = new DeletarProduto(empresa.getProdutos)
            deletarProduto.deletar()
            break;

        //SERVICO
        case 13:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        case 14:
            let listagemServico = new ListagemServicos(empresa.getServicos)
            listagemServico.listar()
            break;
        case 15:
            let atualizarServico = new AtualizarServico(empresa.getServicos)
            atualizarServico.atualizar()
            break;
        case 16:
            let deletarServico = new DeletarServico(empresa.getServicos)
            deletarServico.deletar()
            break;

        //COMPRAS
        case 17:
            let comprarProduto = new ComprarProduto(empresa.getClientes,empresa.getProdutos)
            comprarProduto.comprar()
            break;
        case 18:
            let listarPedidoProduto = new ListagemCompraProduto(empresa.getClientes)
            listarPedidoProduto.listar()
            break;
        case 19:
            let comprarServico = new ComprarServico(empresa.getClientes,empresa.getServicos)
            comprarServico.comprar()
            break;
        case 20:
            let listarPedidoServico = new ListagemCompraServico(empresa.getClientes)
            listarPedidoServico.listar()
            break;

        //LISTAGEM CONSUMO
        case 21:
            let listagemConsumoQuantidade = new ListagemConsumoQuantidade(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            listagemConsumoQuantidade.listar();
            break;
        case 22:
            let listagemConsumoValor = new ListagemConsumoValor(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            listagemConsumoValor.listar();
            break;
        case 23:
            let listagemMaisConsumidos = new ListagemMaisConsumidos(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            listagemMaisConsumidos.listar();
            break;    
        case 24:
            let listagemMaisConsumidosTipoRaca = new ListagemMaisConsumidosTipoRaca(empresa.getPets, empresa.getProdutos, empresa.getServicos);
            listagemMaisConsumidosTipoRaca.listar();
            break;


        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida.`)
    }
}