export class ConsumoSetor {
    id: number;
    dataCadastro: string;
    descricao: string;
    valor: number;
    id_unidade:number;
    data_update: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.descricao = '';
        this.valor = 0;
        this.id_unidade = 0;
        this.data_update = '';
    }
}