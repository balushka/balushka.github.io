
let getTodo = () => {
    return ($('#todo-input').val());
}

let clearTodo = () => {
    $('#todo-input').val('')
} 

$('#add-todo-button').on('click', () => {
    if (getTodo() != '') {
        $('ul').append('<li>' + getTodo() + '</li>');
        $('li:last-child').on('click', (event) => {
            $(event.target).toggleClass('done-item') //event.targettel éred el, hogy csak az éppen klikkelt li változik
        });
        clearTodo();
    }
})


