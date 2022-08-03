const express = require('express')


const server = express()


server.get('/', (req, res) => {
    res.status(200)
    res.json({ message: 'currently working'})
    //res.send('Currently Working')

})

server.listen(process.env.PORT || 5050)