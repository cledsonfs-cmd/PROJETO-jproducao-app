export class ItemPedido {
    id: number;
    dataCadastro: string;
    id_empresa: number;
    id_pedido: number;
    id_produto: number;
    id_unidade: number;
    id_embelagem: number;
    observacao: string;
    update:string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.id_empresa = 0;
        this.id_pedido = 0;
        this.id_produto = 0;
        this.id_unidade = 0;
        this.id_embelagem = 0;
        this.observacao = '';
        this.update = '';
    }
}