type User = {
    name: string;
    lastName: string;
    birthday: string;
    age?: number;
}

const Carlos: User = {
    name: 'Carlos',
    lastName: 'Oliveira',
    birthday: '28/08/1987'
}

//uniao types
// | (como se fosse o ||)
type LogLevel = 'info' | 'error' | 'debug';

function logMessage(message: string, level: LogLevel){
    console.log('[${level}] - ${message}')
}

logMessage('Uma mensagem info', 'error');
logMessage('Uma mensagem info', 'info');
logMessage('Uma mensagem info', 'debug');


//intersection types: &
type About = {
    bio: string;
    interests: string[]
}

type Profile = User & About;

const userWithProfile: Profile = {
    name: 'Carlos',
    lastName: 'Oliveira',
    birthday: '28/08/1987',
    bio: 'biografia',
    interests: ['tecnologia', 'programcao', 'computacao']
}

type ComposedProfile = User & {
    log: LogLevel;
}