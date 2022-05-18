"use strict";
var Permissoes;
(function (Permissoes) {
    Permissoes[Permissoes["admin"] = 0] = "admin";
    Permissoes[Permissoes["editor"] = 1] = "editor";
    Permissoes[Permissoes["comum"] = 2] = "comum";
})(Permissoes || (Permissoes = {}));
;
var Cores;
(function (Cores) {
    Cores["black"] = "#000000";
    Cores["red"] = "#ff0000";
})(Cores || (Cores = {}));
;
const usuario = {
    perfil: Cores.red,
    nivel: Permissoes.editor,
};
console.log(usuario);
