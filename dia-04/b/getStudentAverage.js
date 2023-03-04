export function getStudentAverage(students) {
    let total = 0
    let size = 0

    students = students.map(student => {
        let sum = student.grades.reduce((sum, grade) => sum + grade, 0)
        total += sum
        size += student.grades.length
        return {
            name: student.name,
            average: + (sum / student.grades.length).toFixed(2)
        }
    })

    return {
        classAverage: + (total / size).toFixed(2),
        students: students,
    }
}
  