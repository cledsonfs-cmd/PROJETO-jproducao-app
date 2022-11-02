export class PrazoEntrega {
    id: number;
    dataCadastro: string;
    data: string;
    id_linha_producao: number;	
	prazo: number;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.data = '';
        this.id_linha_producao = 0;	
        this.prazo = 0;
    }
}