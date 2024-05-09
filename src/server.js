const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 8080,
        host: 'localhost',
        routes:{
            cors:true
        }
      });
      server.route(routes);

    
    await server.start();
    console.log(`Server Berjalan di port ${server.info.uri}`);
}
init();
