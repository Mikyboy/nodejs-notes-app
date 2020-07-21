const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
    } else {
        console.log('Note already exists!')
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length !== notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
    } else (
        console.log(chalk.red.inverse('No note found!'))
    )

    saveNotes(notesToKeep)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }  
}

const listNotes = () => {
    notes = loadNotes()

    console.log(chalk.inverse('Your notes:'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    debugger
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse('Note: ' + note.title))
        console.log(chalk.blue.inverse('Body: ' + note.body))
    } else {
        console.log(chalk.red.inverse('Note not found bro :('))
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    'addNote': addNote,
    'removeNote': removeNote,
    'listNotes': listNotes, 
    'readNote': readNote
} 