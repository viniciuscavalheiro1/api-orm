import express from "express";
const app = express();

app.use(express.json());

app.get('/teste', (request, response) => {
  response.status(200).json({ mensage: 'Rota teste API'});
})

app.listen(3000, () => console.log("Server is running in http://localhost:3000"));