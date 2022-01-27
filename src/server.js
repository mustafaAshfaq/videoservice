const express= require('express');
const {createServer}=require('http');
const socketio=require('socket.io');
const app = express();
const httpServer= createServer(app);
//const staticPath=path.join(__dirname,'public');
//console.log(staticPath);
app.use(express.static('public'));
const port=process.env.PORT ||3000;

httpServer.listen(port,()=>{
    console.log(`html server started on ${port}`);
});
const io= socketio(httpServer);
io.on('connection',(socket)=>{
    console.log(socket.id+'j');
})