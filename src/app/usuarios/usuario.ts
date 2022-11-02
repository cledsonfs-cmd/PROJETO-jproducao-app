export class Usuario {
    id: number;
    dataCadastro: string;
    nome: string;
	login: string;
    password: string;
    id_perfil: number;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.nome = '';
        this.login = '';
        this.password = '';
        this.id_perfil = 0;
    }
}