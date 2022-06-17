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

//for loop
for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

