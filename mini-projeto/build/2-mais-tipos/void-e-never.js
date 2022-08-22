"use strict";
/* function a(){

}

function b(){

}

function principal(){
    const valorA = a();
    const valorB = b();

    console.log('executando...');
    return 1234;
}

principal();


//laços de repetição infinitos
//funções qeu disparam erros
function funcaoQueNuncaRetorna(){
    while(true){
        return false;
    }
}

funcaoQueNuncaRetorna(); */
function principal() {
    console.log('executando');
}
principal();
// laços de repetição infinitos
// ou funções que disparam erros
function funcaoQueNuncaRetorna() {
    throw new Error('ola');
}
const a = funcaoQueNuncaRetorna();
