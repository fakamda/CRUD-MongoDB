import { connect } from "mongoose";
import { MONGODB_URI } from './config.js'

(async() => { // en ts se añade automaticamente
    try{
        const db = await connect(MONGODB_URI) // connect es asincrona por lo tanto le damos await
        console.log('DB connected to', db.connection.name)
    } 
    catch (error) {
        console.log(error)
    }

})
()
import { config } from "dotenv";
