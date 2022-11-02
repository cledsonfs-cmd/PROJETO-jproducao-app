export class FolhaElemento {
    id: number;
    dataCadastro: string;
    id_folha_observacao: number;
	ordinal: number;
    elemento: string;
    velocidade: number;
    avanco: number;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.id_folha_observacao = 0;
        this.ordinal = 0;
        this.elemento = '';
        this.velocidade = 0;
        this.avanco = 0;
    }
}