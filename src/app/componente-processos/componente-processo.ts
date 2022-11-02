export class ComponenteProcesso {
    id: number;
    dataCadastro: string;
    id_componente: number;
	id_processo: number;
	id_unidade: number;
	tempo: number;
    update: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.id_componente = 0;
        this.id_processo = 0;
        this.id_unidade = 0;
        this.tempo = 0;
        this.update = '';
    }
}