"use strict";
function a() {
}
function b() {
}
function principal() {
    const valorA = a();
    const valorB = b();
    console.log('executando...');
    return 1234;
}
principal();
//laços de repetição infinitos
//funções qeu disparam erros 
function funcaoQueNuncaRetorna() {
    while (true) {
        return false;
    }
}
funcaoQueNuncaRetorna();
