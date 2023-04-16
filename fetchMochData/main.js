const path = require('path')
const xlsx = require('node-xlsx').default;
const getGroupsByName = require('./helpers/getGroupsByName')
const getLessons = require('./helpers/getLessons')

const input = path.resolve('./data/input_data_course_2.xlsx')

const rawData = xlsx.parse(input);

const groups = []
const lessons = []

// console.log(getLessons(rawData[0].data))

for (const list of rawData) {
  const currentGroups = getGroupsByName(list.name)
  groups.push(...currentGroups)

  const currentLessons = getLessons(list.data)
  lessons.push(currentLessons)
}

console.log(lessons)
