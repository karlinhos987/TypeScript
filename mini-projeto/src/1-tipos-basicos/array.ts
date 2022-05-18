const gatos: string[] = [
    'lota',
    'logan'
]

function exibeGatos(gatos: string[]){
    return `Os gatos são: ${gatos.join(', ')}`
}


exibeGatos(gatos);