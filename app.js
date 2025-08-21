import express from 'express';

const app = express();
app.use(express.json());

app.get('/saludo', (req, res) => {
  res.json({ mensaje: 'Hola mundo' });
});

export default app;
