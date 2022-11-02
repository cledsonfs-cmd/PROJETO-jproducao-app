export class ComponenteMateriaPrima {
    id: number;
    dataCadastro: string;
    id_componente: number;
	id_materia_prima: number;
	id_unidade: number;
	quantidade: number;
    update: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.id_componente = 0;
        this.id_materia_prima = 0;
        this.id_unidade = 0;
        this.quantidade = 0;
        this.update = '';
    }
}