const express = require('express')
const path = require('path')
const methodOverride = require("method-override")

const app = express()

const port = 3000 || process.env.PORT

// Setup forms
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'));

// Config static folder
app.use(express.static(path.join(__dirname, 'public')))

/* Ejs engine */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'))
})

app.get('/detail', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'detail.html'))
})

app.get('/create', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'create.html'))
})

app.get('*', (req, res)=>{
  res.send(`
  <div style="display:flex; flex-direction:column; align-items:center">
  <h1>Esta pagina no existe loco</h1>
  <img style="width:50%" src="/img/not-found.webp" alt="error-404">
  </div>  
  `)
})

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port} 😎🙌`)
})