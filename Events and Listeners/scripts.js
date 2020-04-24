//$(selector).on(eventType, event);



$('#tatika').on('click', () => {
    console.log('You clicked me!')
})


//This is equivalent:
// let uClickedMe = () => {
//     console.log('You clicked me!');
// }

// $('button').click(uClickedMe)


let changeBtnText = () => {
    $('#tatika').text('I told you!');
}

$('#balika').click(changeBtnText);

let changeAllButtonBg = () => {
    $('button').css('background', 'blue');
}

$('#kakika').click(changeAllButtonBg);

//Innentől kezdve két megolás arra, hogy a chg-button minden button színét az inputban megadottra változtatja
let chgButtonsBG = (color) => {
    $('button').css('background', color);
}


let getColorOfInput = () => {
    return ($('#input-color').val());
}

$('#chg-button1').on('click', () =>{
    // $('button').css('background', getColorOfInput) //ezeseteben nem kell a chgButtonsBG függvény
    chgButtonsBG(getColorOfInput); //getColorOfInput miért működik függvény zárójel nélkül???
});


// a masodik button csak egyszer engedi a változtatást
let clickCount = 0;
$('#chg-button2').on('click', () =>{
    if (clickCount < 1) {
        $('button').css('background', getColorOfInput) ;
    }    
    clickCount +=1;
});


