const path = require('path')
const xlsx = require('node-xlsx').default;
const getGroupsByName = require('./helpers/getGroupsByName')
const getLessons = require('./helpers/getLessons')
const clearLesson = require('./helpers/clearLesson')
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


// сгруппированные занятия по группам
const lessonsArray = Array.from(lessonsSet)
const lessonsGroupedByGroup = []

for (const lesson of lessonsArray) {
  if(!lesson.length) continue

  const data = {
    name: clearLesson(lesson),
    groups: []
  }

  for(const groupObj of lessons) {
    for (const lessonObj of groupObj.lessons) {
      if(lessonObj === lesson && !data.groups.find(group => group === groupObj.group)) {
        data.groups.push(groupObj.group)
      }
    }
  }

  lessonsGroupedByGroup.push(data)
}

// запись в groups

let groupsJson = JSON.stringify({groups}, null, 2)
fs.writeFileSync('groups.json', groupsJson)

// запись в предметы

let lessonsJson = JSON.stringify({lessons: Array.from(lessonsGroupedByGroup)}, null, 2)
fs.writeFileSync('lessons.json', lessonsJson)
