const todos = [
    {
        id: 1, 
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2, 
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3, 
        text: 'Dentist Appointment',
        isCompleted: false
    }
];

console.log(todos[1].text);

//convert to JSON
const todosJSON = JSON.stringify(todos);
console.log(todosJSON)