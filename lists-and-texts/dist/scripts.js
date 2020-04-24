//Exercise 1:

let names = ['Géza', 'Józsi', 'Béla', 'Julcsi', 'Balázs', 'Gizi'];

let myName = 'Balázs';

names.forEach(name => {
    if (name == myName) {
        $('ul').append('<li class="myName">' + name + '</li>');
    } else {
        $('ul').append('<li>' + name + '</li>');
    }
});

//Exercise 2:
let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

let addBlock = (block) => {
    $('body').append('<h2>' + block.title +'</h2>');
    $('body').append('<p>' + block.text +'</p>')
};

addBlock(additionalBlock);