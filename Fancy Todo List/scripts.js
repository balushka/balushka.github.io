
let addNewTodo = (todo) => {
    $('.todo-list-container')
        .append(
            '<div class="todo-item">' +
            '<div class="todo-item-name">' +
            todo +
            '</div>' + 
            '<div>' +
            '<img class="delete-button" src="images\\icons8-delete.svg" alt="Delete">' +
            '<img class="check-box" src="images\\icons8-unchecked-checkbox-64.png" alt="Check">' +
            '</div>' +
            '</div>')
}


let getTodo = () => {
    return ($('#new-todo-input').val());
}

let clearTodo = () => {
    $('#new-todo-input').val('')
}


let notClickedSource = 'images\\icons8-unchecked-checkbox-64.png';
let clickedSource = 'images\\icons8-checked.svg';

$('#add-button').on('click', (event) => {
    if (getTodo() != '') {
        addNewTodo(getTodo());

        //Remove item:

        $('.todo-item:last-child').on('click', '.delete-button', (event) => {

            $(event.target.parentNode.parentNode).remove();

        });

        //Mark item as done and change the check-box to checked:
        $('.todo-item:last-child').on('click', '.check-box', (event) => {

            $(event.target.parentNode.parentNode).toggleClass('striked-through');
            if ($(event.target).attr('src') == notClickedSource) {
                $(event.target).attr("src", clickedSource);
            } else {
                $(event.target).attr("src", notClickedSource);
            }
        });




        clearTodo();
    }
});




