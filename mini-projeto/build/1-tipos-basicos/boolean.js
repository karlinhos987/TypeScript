"use strict";
let isActive;
isActive = true;
function mapearStatusDeUsuario(status) {
    if (status) {
        return `Usuario está ativo`;
    }
    else {
        return `Usuario não está ativo`;
    }
}
mapearStatusDeUsuario(isActive);
