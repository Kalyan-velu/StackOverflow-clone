import mongoose from 'mongoose'

export const connectDatabase = ()=>{
    const connectk=process.env.CONNECTION_URL
    console.log(connectk)
    mongoose.connect(connectk) //Mongodb URI is fetched from environment variable
        .then( (c) => console.log( `Database Connected ${c.connection.host}` ))
        .catch((e)=>console.log(e))
}