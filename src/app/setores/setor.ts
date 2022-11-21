import { Empresa } from "../empresas/empresa";
import { TipoSetor } from "../tipo-setores/tipo-setor";

export class Setor {
    id: number;
    dataCadastro: string;
    empresa: Empresa;
    codigo: string;
    descricao: string;    
    abreviado: string;
    tipoSetor: TipoSetor;
    update: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.empresa = new Empresa();
        this.tipoSetor = new TipoSetor();
        this.codigo = '';
        this.descricao = '';        
        this.abreviado = '';        
        this.update = '';
    }
}