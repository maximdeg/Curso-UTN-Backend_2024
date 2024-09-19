import express from 'express'
import fs from 'fs'

const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/date', (req, res) => {
  res.send(new Date().toLocaleString())
})

app.post('/register', async (req, res) => {
  try {
    let users

    if (!req.body.name) throw new Error('USER FAILED TO REGISTER: Name is required')
    if (!req.body.email) throw new Error('USER FAILED TO REGISTER: Email is required')

    const result = await fs.promises.readFile('./data/users.json', 'utf-8')

    if (!result) {
      users = [req.body]
    } else {
      users = [...JSON.parse(result)]
      users.push(req.body)
    }
    const data = await fs.promises.writeFile('./data/users.json', JSON.stringify(users), 'utf-8')

    // data devuelve undefined si la promesa fue exitosa 🤷‍♂️
    if (data) throw new Error('Server failed to register user')

    res.status(200).send('User registred 🥳')
  } catch (err) {
    res.send(err.message)
  }
})

app.listen(3000, () => {
  console.log('App listening on port 3000 🚀🦾')
})
