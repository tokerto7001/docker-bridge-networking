This project consists of 2 different servers<br>
In this example, docker bridge networking is explained in basic terms<br>
The server named receiver is expecting a GET request for a test purpose<br>
Other server named sender is sending a GET request to receiver server<br>
In docker environment, it is not possible to maintain communication between containers<br>
By using networking through different driver options, this communication is handled<br>
In order to achieve this:<br>
1) Change the url in index.js inside sender folder to the name of the receiver container in order to send a request successfully<br>
2) Build the images inside receiver and sender folders (go to each folder and run docker build -t imageName .)<br>
3) Create a new bridge network (docker network create networkName)<br>
4) Run the receiver container first because it sends a request directly (docker run -p 8000:8000 -d --rm --name containerName --network networkName imageName)<br>
5) Run the sender container (docker run -p 8001:8001 -d --rm --name containerName --network networkName imageName)<br>
6) Check the logs of the receiver container to see the message "Test request is handled successfully"<br>