import express from 'express';
import {createServer} from  'http';
import path from 'path';
import {Server} from 'socket.io';
const app = express();
const httpServer= createServer(app);
//const staticPath=path.join(__dirname,'public');
//console.log(staticPath);
app.use(express.static('public'));
const port=process.env.PORT ||3000;

httpServer.listen(port,()=>{
    console.log(`html server started on ${port}`);
});
const io= new Server(httpServer);
io.on('connection',(socket)=>{
    console.log(socket.id+'j');
})