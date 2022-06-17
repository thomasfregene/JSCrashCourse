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

for(let todo of todos){
    console.log(todo.text);
}

