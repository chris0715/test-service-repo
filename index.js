const express = require('express')
const cors = require('cors')

const server = express()
server.use(cors())

server.get('/', (req, res) => {
    res.status(200)
    res.json({ message: 'currently working'})
    //res.send('Currently Working')

})

server.listen(process.env.PORT || 5050, () => console.log('listening on port ....'))