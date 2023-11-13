require ('dotenv').config()

const PORT = process.env.PORT

//create a func named server
const server = () => {
    console.log('You are listening to port:', PORT);
}

server()