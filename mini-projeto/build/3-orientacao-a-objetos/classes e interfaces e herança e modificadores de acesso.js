"use strict";
//classes e interfaces e herança e modificadores de acesso
//classes e funções
class User2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
/* function User(name, age){
    this.name = name;
    this.age = age;
}

const pessoa2 = new User2('Carlos', 35)
console.log();


class Player extends User2{
    constructor(name, age, game){
        super(name, age);
        this.game = game;
    }
}

const jogador = new Player('Carlos', 35, 'GTA-5');
console.log(jogador) */
//static
class Player2 extends User2 {
    constructor(name, age, jogo) {
        super(name, age);
        this.jogo = jogo;
    }
    dizerOJogoAtual() {
        return `Estou jogando, no momento: ${this.jogo}`;
    }
    static queHorasSao() {
        return Date();
    }
}
const jogador2 = new Player2('Carlos', 25, 'GTA');
console.log(jogador2.dizerOJogoAtual());
//private, protected, public
//extends
//interfaces
//implements
