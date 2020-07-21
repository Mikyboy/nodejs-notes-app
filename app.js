const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const utils = require('./utils'); // using our own module

// Customize yargs version
yargs.version('1.1.0')

yargs.command({
    command: 'add',
    description: 'Add a new note',
    builder: {
        title: {
            description: 'Note title',
            required: true,
            type: 'string'
        },
        body: {
            description: 'Note body',
            required: true,
            type: 'string'
        }
    },
    handler: (argv) => utils.addNote(argv.title, argv.body)
})

yargs.command({
    command: 'list',
    description: 'List the notes',
    handler: () => utils.listNotes()
})

yargs.command({
    command: 'read',
    description: 'Reading a node',
    handler: (argv) => utils.readNote(argv.title)
})

yargs.command({
    command: 'remove',
    description: 'Remove a note',
    builder: {
        title: {
            description: 'Note title',
            required: true,
            type: 'string'
        }
    },
    handler: (argv) => utils.removeNote(argv.title)
})

yargs.parse()

