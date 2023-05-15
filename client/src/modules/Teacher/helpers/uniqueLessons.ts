export const uniqueLessons = (lessons: {value: string}[]) => {
  let result: any = [];

  for (let lesson of lessons) {
    const existsLesson = result.find((item: any) => item.value === lesson.value)
    if (!existsLesson) {
      result.push(lesson);
    }
  }

  return result;
}