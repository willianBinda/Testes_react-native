import axios from "axios";

export default axios.create({
    baseURL:' http://10be-179-124-144-21.ngrok.io'
})

//da para se conectar usando o ip da maquina mais a porta do back-end