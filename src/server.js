/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    });
    
    server.route(routes);

    await server.start();
        console.log(`Server berjalan pada ${server.info.uri}`);
};

init();