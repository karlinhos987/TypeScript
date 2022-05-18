"use strict";
const Carlos = {
    name: 'Carlos',
    lastName: 'Oliveira',
    birthday: '28/08/1987'
};
function logMessage(message, level) {
    console.log('[${level}] - ${message}');
}
logMessage('Uma mensagem info', 'error');
logMessage('Uma mensagem info', 'info');
logMessage('Uma mensagem info', 'debug');
const userWithProfile = {
    name: 'Carlos',
    lastName: 'Oliveira',
    birthday: '28/08/1987',
    bio: 'biografia',
    interests: ['tecnologia', 'programcao', 'computacao']
};
