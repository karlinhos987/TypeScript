let isActive: boolean;

isActive = true;

function mapearStatusDeUsuario(status: boolean){
    if(status){
        return `Usuario está ativo`;
    }else{
        return `Usuario não está ativo`;
    }
}

mapearStatusDeUsuario(isActive);