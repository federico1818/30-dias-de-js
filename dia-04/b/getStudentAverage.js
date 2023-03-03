export function getStudentAverage(students) {
    students = students.map(student => {
        return {
            ...student,
            sum: student.grades.reduce((sum, grade) => sum + grade, 0),
            average: + (student.sum / student.grades.length).toFixed(2)
        }
    })
    let classAverage = students.reduce((sum, student) => sum + student.sum, 0) 
}
  