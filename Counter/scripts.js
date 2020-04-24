let getValue = () => {
    return parseInt($('#counter-value').text()); 
}

$('#inc-btn').on('click', () => {
    $('#counter-value').text(getValue() + 1);
});

$('#dec-btn').on('click', () => {
    $('#counter-value').text(getValue() - 1);
});
