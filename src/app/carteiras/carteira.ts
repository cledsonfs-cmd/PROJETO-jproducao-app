export class  Carteira{
    id: number;
    dataCadastro: string;
    id_empresa: number;
    valor: number;
    update: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.id_empresa = 0;
        this.valor = 0.0;
        this.update = '';
    }
}