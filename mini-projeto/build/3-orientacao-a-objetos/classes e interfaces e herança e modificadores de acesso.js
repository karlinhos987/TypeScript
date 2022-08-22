"use strict";
//classes e interfaces e herança e modificadores de acesso
// classes e funções
class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
// É a mesma coisa que
// function Usuario(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
// }
// static e extends
class Player extends Usuario {
    constructor(nome, idade, jogo) {
        super(nome, idade);
        this.jogo = jogo;
    }
    dizerOJogoAtual() {
        return `Estou jogando, no momento: ${this.jogo}`;
    }
    static queHorasSao() {
        return Date();
    }
}
// const jogador = new Player('Gabriel', 25, 'Ghost of Tsushima');
// console.log(jogador.dizerOJogoAtual())
// private, protected, public
// public: acessível de forma geral, dentro e fora da classe
// private: é acessível apenas dentro da classe onde o campo foi criado
// protected: é acessivel apenas dentro da classe (e subclasses) onde o campo foi criado
class Jogo {
    // não funcionaria classe JogoComDescricao
    // private nome;
    constructor(nome) {
        this.nome = nome;
    }
    dizerNome() {
        return `O nome do jogo é: ${this.nome}`;
    }
}
// implements
// class JogoComDescricao extends Jogo implements IJogoComDescricao {
//     public descricao;
//     constructor(nome: string, descricao: string) {
//         super(nome);
//         this.descricao = descricao;
//     }
//     dizerNomeComDescricao() {
//         return `O nome do jogo é: ${this.nome}`;
//     }
// }
// type TJogoComDescricao = {
//     descricao: string;
//     dizerNomeComDescricao(): string;
// }
// const obj: TJogoComDescricao = {
//     descricao: 'descricao do jogo',
//     dizerNomeComDescricao() {
//         return '123'
//     }
// }
