import { PontoControleRegistros } from "../ponto-controle-registros/ponto-controle-registros";
import { Setor } from "../setores/setor";

export class PontoControle {
    
    id: number;
    dataCadastro: string;
    descricao: string;
	setor: Setor;    
    registros: PontoControleRegistros[];

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.descricao = '';
        this.setor = new Setor();        
        this.registros = [];
        
    }
}