import http from 'http';
import app from './app';
import config from './config';


let server = http.createServer(app);


server.listen(config.get('port'), () => {
    let addr = server.address();
    let bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;

    console.log(`Application server listening on ${bind} in "${config.get('NODE_ENV')}" mode`); // eslint-disable-line no-console
});
