const express = require('express')
const app = express()
const PORT = 2023
const cors = require('cors');
const render = require('render')

app.use(cors())

const words = {
    'adjective': {
        'lk': ['calm', 'comfortable', 'curious', 'disappointed', 'embarrassed', 'enormouse', 'exhausted', 'fair', 'fascinating', 'frustrated', 'gigantic', 'grumpy', 'huge', ],
        'l1': ['', '', '', '', '', '', ''],
        'l2': ['', '', '', '', '', '', ''],
        'l3': ['', '', '', '', '', '', ''],
        'l4': ['', '', '', '', '', '', ''],
        'l5': ['', '', '', '', '', '', ''],
        'l6': ['', '', '', '', '', '', ''],
        'l7': ['', '', '', '', '', '', ''],
    },  

    'adverb': {
        'lk': ['instead', '', '', '', '', '', ''],
        'l1': ['', '', '', '', '', '', ''],
        'l2': ['', '', '', '', '', '', ''],
        'l3': ['', '', '', '', '', '', ''],
        'l4': ['', '', '', '', '', '', ''],
        'l5': ['', '', '', '', '', '', ''],
        'l6': ['', '', '', '', '', '', ''],
        'l7': ['', '', '', '', '', '', ''],
    },    

    'noun': {
        'lk': ['attention', 'consequences', 'curve', 'directions', 'explore', 'feast', ''],
        'l1': ['', '', '', '', '', '', ''],
        'l2': ['', '', '', '', '', '', ''],
        'l3': ['', '', '', '', '', '', ''],
        'l4': ['', '', '', '', '', '', ''],
        'l5': ['', '', '', '', '', '', ''],
        'l6': ['', '', '', '', '', '', ''],
        'l7': ['', '', '', '', '', '', ''],
    },

    'verb': {
        'lk': ['annoy', 'decide', 'discover', 'focus', 'ignore', '', ''],
        'l1': ['', '', '', '', '', '', ''],
        'l2': ['', '', '', '', '', '', ''],
        'l3': ['', '', '', '', '', '', ''],
        'l4': ['', '', '', '', '', '', ''],
        'l5': ['', '', '', '', '', '', ''],
        'l6': ['', '', '', '', '', '', ''],
        'l7': ['', '', '', '', '', '', ''],
    }
}

// network request

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const disabilityName = request.params.name.toLowerCase()
    if(learningDisabilities[disabilityName]) {
        response.json(learningDisabilities[disabilityName])
    } else {
        response.json(learningDisabilities['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}.`)
})