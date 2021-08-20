# go-serialport-grpc
one day I was asked how to display sensor data arduino into mobile phone.
"do we need additional hardware module, etc"

well yes
or we can just make a server that send the data to html and open the html in phone browser.
hehe.

originally I used socket io as transfer method but in this repo I tried grpc for no reason. 
what annoying is that grpc currently has less browser support compared to websocket.
therefore in order bridge server and web client, you need a proxy.

how to run server:
- clone
- plug arduino / something similar
- upload the ino script. you can use one in arduino folder for testing purpose.
- go to this project root folder
- cd main
- go run main.go

how to run cli client:
- run server
- go to root
- in the cli-client/main.go, edit the serial port configuration (the com thing) to match your PC condition (TODO add port discovery logic)
- cd to cli-client directory
- go run main.go

how to run web-client:
- go to root
- cd to envoy-proxy directory
- docker build -t <image:tag> .
- docker run -dp 8080:8080 <image:tag>
- run server
- cd to web-client directory
- npm install
- npx webpack ./grpc_client.js
- nodemon index.js / node index.js
- wish your localhost:3000 shows something

