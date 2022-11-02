export class Pedido {
    id: number;
    dataCadastro: string;
    codigo: string;
    update: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.codigo = '';
        this.update = '';
    }
}