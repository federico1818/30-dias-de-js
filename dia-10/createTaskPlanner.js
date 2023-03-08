export function createTaskPlanner() {
    const tasks = []
    return {
        addTask: (task) => {
            task.completed = false
            tasks.push(task)
        },
        removeTask: (value) => {
            const task = tasks.find(task => {
                return task.id === value || task.name === value
            })
            const index = tasks.indexOf(task)
            tasks.splice(index, 1)
        },
        getTasks: () => {
            return tasks
        },
        getPendingTasks: () => {
            return tasks.filter(task => {
                return !task.completed
            })
        },
        getCompletedTasks: () => {
            return tasks.filter(task => {
                return task.completed
            })
        },
        markTaskAsCompleted: (value) => {
            const task = tasks.find(task => {
                return task.id === value || task.name === value
            })
            task.completed = true
        },
        getSortedTasksByPriority: () => {
            return [...tasks].sort((a, b) => {
                return a.priority - b.priority
            })
        },
        filterTasksByTag: (tag) => {
            return tasks.filter(task => {
                return task.tags.includes(tag)
            })
        },
        updateTask: (taskId, updates) => {
            const index = tasks.map(task => {
                return task.id
            }).indexOf(taskId)
            tasks[index] = { ...tasks[index], ...updates }
        }
    }
}
  