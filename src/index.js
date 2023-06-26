import app from './app.js'
import './database.js'

const PORT = 3000

app.listen(PORT, () => {
    console.log(`server on port ${PORT}`)
})