const fs = require('fs')
const moment = require('moment')

const todoList = [
    const todo = {
        text: 'Workout',
        date: moment('11.12.2020, 15:00', 'DD.MM.YYYY, hh:mm'),
        id: 1,
        done: false
      }
      const todo = {
        text: 'Make lunch',
        date: moment('11.12.2020, 13:10', 'DD.MM.YYYY, hh:mm'),
        id: 1,
        done: false
      }
      const todo = {
        text: 'Do CDS Homerwork',
        date: moment('11.12.2020, 02:10', 'DD.MM.YYYY, hh:mm'),
        id: 1,
        done: true
      }

]

const json = JSON.stringify(todoList)

fs.writeFileSync('todo.json', json)