

const express = require('express');
const expressHandlebars = require('express-handlebars');
const WebSocket = require('ws');
const http = require('http');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Configuración de Handlebars
app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index');
});

wss.on('connection', (ws) => {
  console.log('Cliente conectado');
  const productos = [
    { nombre: 'Producto 1' },
    { nombre: 'Producto 2' },
    { nombre: 'Producto 3' },
    { nombre: 'Producto 4' },
    { nombre: 'Producto 5' },

    // Añade más productos si es necesario
  ];
  ws.send(JSON.stringify(productos));
});

server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
