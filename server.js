const express = require('express')

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(express.static('public'));

app.get('**', (req, res) => {

  for (i= 0; i <= 1000000; i++){
    total = i
  }
  response = {msg: `Total de iteraciones: ${total}`}
  res.json(response)
});

app.listen(port, () => console.log(`App listening on port ${port}`));
