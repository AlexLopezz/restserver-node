const express = require('express');
const cors = require('cors');
require('dotenv').config();

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.subURL = '/api';

        this.sampleRoutePath = ''

        //Middlewares
        this.middlewares();
        this.loadAllRoutePaths();

        this.routes();
    }

    loadAllRoutePaths(){
        this.sampleRoutePath = `${this.subURL}/sample`; 
    }

    middlewares(){
        //Public path
        this.app.use( express.static('public') );
        //is to prevent CORS ERROR.
        this.app.use( cors() ); 
        // config request data (body)
        this.app.use( express.json() )
    }

    routes(){
        this.app.use( this.sampleRoutePath, require('../routes/sample.routes') ); //add route from sample
    }

    listen(){
        this.app.listen( this.port , ()=> {
            console.log(`app running at port ${ this.port }`);
        });        
    }
}

module.exports = Server;