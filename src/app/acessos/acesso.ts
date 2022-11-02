export class Acesso {
    id: number;
    dataCadastro: string;
    id_perfil: number;
    id_menu: number;
    leitura: boolean;
    gravacao: boolean;
    

    constructor() {
        this.id = 0;
        this.dataCadastro = '';
        this.id_perfil = 0;
        this.id_menu = 0;
        this.leitura = false;
        this.gravacao = false;        
    }
}