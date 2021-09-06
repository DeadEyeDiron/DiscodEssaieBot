module.exports = {
    run: (client) => {
        client.logger.log('info', `Bot identifié en tant que ${client.user.tag}! (${client.user.id})`);
        
        client.setTimeout(() => console.log('Hey!'), 5000 * 60) // ce code ne sera exécuté que dans 5 minutes

        client.setInterval(() => console.log('ping!'), 5000 * 60) // toutes les 5 minutes, le message 'ping!' s'affichera dans la console du bot

        client.setInterval(() => {
            // du code plus complexe a executer toutes les 5 minutes
            console.log('another ping!')
        }, 5000 * 60) // toutes les 5 minutes
    }
};