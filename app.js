const express = require('express')
const app = express()
const PORT = 2023
const cors = require('cors');
const render = require('render')

app.use(cors())

const words = {
    'adjective': {
        'lk': ['calm', 'comfortable', 'curious', 'disappointed', 'embarrassed', 'enormouse', 'exhausted', 'fair', 'fascinating', 'frustrated', 'gigantic', 'grumpy', 'huge', 'important', 'jealous', 'lovely', 'miserable', 'negative', 'nervous', 'opposite', 'ordinary', 'positive', 'precious', 'proud', 'special', 'spotless', 'uncomfortable', 'worried'],
        'l1': ['', '', '', '', '', '', ''],
        'l2': ['', '', '', '', '', '', ''],
        'l3': ['', '', '', '', '', '', ''],
        'l4': ['', '', '', '', '', '', ''],
        'l5': ['', '', '', '', '', '', ''],
        'l6': ['', '', '', '', '', '', ''],
        'l7': ['', '', '', '', '', '', ''],
    },  

    'adverb': {
        'lk': ['instead', 'suddenly'],
        'l1': ['', '', '', '', '', '', ''],
        'l2': ['', '', '', '', '', '', ''],
        'l3': ['', '', '', '', '', '', ''],
        'l4': ['', '', '', '', '', '', ''],
        'l5': ['', '', '', '', '', '', ''],
        'l6': ['', '', '', '', '', '', ''],
        'l7': ['', '', '', '', '', '', ''],
    },    

    'noun': {
        'lk': ['attention', 'consequences', 'curve', 'directions', 'explore', 'feast', 'leader', 'list', 'note', 'problem', 'question', 'report', 'rhyme', 'respect', 'suggestion', 'surprise', 'warning'],
        'l1': ['', '', '', '', '', '', ''],
        'l2': ['', '', '', '', '', '', ''],
        'l3': ['', '', '', '', '', '', ''],
        'l4': ['', '', '', '', '', '', ''],
        'l5': ['', '', '', '', '', '', ''],
        'l6': ['', '', '', '', '', '', ''],
        'l7': ['', '', '', '', '', '', ''],
    },

    'verb': {
        'lk': ['annoy', 'decide', 'discover', 'focus', 'ignore', 'investigate', 'invite', 'listen', 'measuring', 'mumble', 'nibbled', 'notice', 'observing', 'prefer', 'protect', 'reminds', 'repeat', 'report', 'searching', 'squirm', 'stomped', 'wonder'],
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
    const word = request.params.name.toLowerCase()
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}.`)
})