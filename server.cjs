require('dotenv').config();

const client = require('./db/client.cjs');
client.connect();

const { getUser, getUserByToken } = require('./db/users.cjs');

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('dist'));

app.post('/api/v1/login', async(req, res, next) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;
  
    const token = await getUser(username, password);
    
    res.send({ token: token });
  } catch(err) {
    next(err);
  }
});

app.get('/api/v1/login', async(req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await getUserByToken(token);
    console.log(user);
  
    res.send(user);
  } catch(err) {
    next(err);
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});