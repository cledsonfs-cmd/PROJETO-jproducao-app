export class Devolucao {
    id: number;
    dataCadastro: string;
    codpedido: string;
    valor: number;
    quantidade: number;
    data_faturada: string;
    data_devolucao: string;
    id_empresa: number;
    id_produto: number;
    id_vendedor: number;
    id_cliente: number;
	id_unidade: number;
	id_origem_erro: number;
	tipo: string;
    motivo: string;
    update: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.codpedido = '';
        this.valor = 0;
        this.quantidade = 0;
        this.data_faturada = '';
        this.data_devolucao = '';
        this.id_empresa = 0;
        this.id_produto = 0;
        this.id_vendedor = 0;
        this.id_cliente = 0;
        this.id_unidade = 0;
        this.id_origem_erro = 0;
        this.tipo = '';
        this.motivo = '';
        this.update = '';
    }
}