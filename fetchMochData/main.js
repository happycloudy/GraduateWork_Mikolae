const path = require('path')
const xlsx = require('node-xlsx').default;
const getGroupsByName = require('./helpers/getGroupsByName')
const getLessons = require('./helpers/getLessons')
const fs = require("fs");

const input = path.resolve('./data/input_data_course_2.xlsx')

const rawData = xlsx.parse(input);

const groups = []
let lessons = []

// console.log(getLessons(rawData[0].data))

for (const list of rawData) {
  const currentGroups = getGroupsByName(list.name)
  groups.push(...currentGroups)

  const currentLessons = getLessons(list.data)
  lessons.push(currentLessons)
}

lessons = lessons.flat()

// console.log(lessons[1])

const lessonsSet = new Set()

lessons.forEach(lessonItem => {
  lessonItem.lessons.forEach(item => {
    lessonsSet.add(item)
  })
})


// запись в groups

let groupsJson = JSON.stringify({groups}, null, 2)
fs.writeFileSync('groups.json', groupsJson)

// запись в предметы

let lessonsJson = JSON.stringify({lessons: Array.from(lessonsSet)}, null, 2)
fs.writeFileSync('lessons.json', lessonsJson)
