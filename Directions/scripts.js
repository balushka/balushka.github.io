let color = 'purple';
let number = 100;
let word = 'cool';

if (color == 'purple'){
    $('.direction-n').css('background', color);

}

if (number > 100) {
    $('.direction-w').text("whoah, that's a big number.");
};

if (word == 'cool') {
    $('.direction-s').text("Power of DOM");
    
} else {
    $('.direction-e').text("Power of DOM");
}