const { Request } = require('./protos/serial_pb');
const { SerialClient } = require('./protos/serial_grpc_web_pb') ;

let client = new SerialClient('http://localhost:8080');

let request = new Request();
let stream = client.getSerialData(request, {});

stream.on('data', (res) => {
    document.getElementById("text").innerHTML = "Received data: " + res.array.toString();
});

console.log("Setup success");