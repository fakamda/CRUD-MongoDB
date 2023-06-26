import { connect } from "mongoose";

(async() => { // en ts se añade automaticamente
    try{
        const db = await connect('mongodb://localhost/crud-mongo') // connect es asincrona por lo tanto le damos await
        console.log('DB connected to', db.connection.name)
    } 
    catch (error) {
        console.log(error)
    }

})()





