let picture1 = {
    id: 0,
    src: "pictures\\DSC_0928conc.jpg",
    title: "Miki énekel",
    description: "Miki énekel, Anita, tolja basszgitárt ezerrel"
};

let picture2 = {
    id: 1,
    src: "pictures\\DSC_0934conc.jpg",
    title: "Balázs szólóba kezd",
    description: "Miki kipengette magát, Balázs szólóba kezd"
};

let picture3 = {
    id: 2,
    src: "pictures\\DSC_0939conc.jpg",
    title: "Balázs befejezte a szólót",
    description: "Balázs egy atomcsászári szólisztikus kinyilatkoztatáson van túl!"
};
let picture4 = {
    id: 3,
    src: "pictures\\DSC_0947conc.jpg",
    title: "Bali Dobol",
    description: "Bali tolja a ritmus szekciót, hogy a többieknek jó legyen"
};
let picture5 = {
    id: 4,
    src: "pictures\\DSC_0959conc.jpg",
    title: "Mindenki",
    description: "Hú de nagyon húzza mindenki a talpalávalót"
};
let picture6 = {
    id: 5,
    src: "pictures\\DSC_0966conc.jpg",
    title: "A két gitáros",
    description: "Slash és Jhon Frusciante - Szinte hihetetlen, hogy mindketten itt voltak!"
};

let pictures = [picture1, picture2, picture3, picture4, picture5, picture6];
let currentPicture = 0;


let loadPicture = (pictureNumber) => {
    $('#picture').attr('src', pictures[pictureNumber].src);
    $('#description-header').text(pictures[pictureNumber].title);
    $('#description-text').text(pictures[pictureNumber].description);
}

loadPicture(currentPicture);

$('#right-arrow').on('click', () => {
    if (currentPicture < pictures.length - 1) {
        
        currentPicture++;
        loadPicture(currentPicture);
        selectThumbnail(currentPicture);
    }

});
$('#left-arrow').on('click', () => {
    if (currentPicture > 0) {
        
        currentPicture--;
        loadPicture(currentPicture);
        selectThumbnail(currentPicture);
        
    }
});

let addThumbnail = () => {
    pictures.forEach(picture => {
        $('.thumbnail-container').append(
            '<div class="thumbnail-holder">' +

            '<div class="tooltip-holder hidden" >' +
            '<div class="tooltip">' + picture.title + '</div>' +
            '<div class="tooltip-arrow"></div>' +
            '</div>' +
            '<div class="selected-thumbnail-arrow hidden"></div>' +
            '<img class="thumbnail-pic" data-pic-id=' + picture.id + ' src=' + picture.src + ' alt="">' +
            '</div>')


    });
}

addThumbnail();

$('div.thumbnail-holder').on('click', (event) => {

    $(event.currentTarget).siblings().removeClass('selected');
    $(event.currentTarget).siblings().addClass('thumbnail-holder')
    $(event.currentTarget).addClass('selected');
    $(event.currentTarget).removeClass('thumbnail-holder');
    $(event.currentTarget).find('.selected-thumbnail-arrow').removeClass('hidden');
    $(event.currentTarget).siblings().find('.selected-thumbnail-arrow').addClass('hidden');

    currentPicture = $(event.target).attr('data-pic-id');
    loadPicture(currentPicture);
})

let selectThumbnail = (number) => {
    number++;
    let selector = '.thumbnail-holder:nth-child(' + number + ')';
    
    $(selector).addClass('selected');
    $(selector).siblings().removeClass('selected');
    $(selector).siblings().addClass('thumbnail-holder')
    $(selector).find('.selected-thumbnail-arrow').removeClass('hidden');
    $(selector).siblings().find('.selected-thumbnail-arrow').addClass('hidden');
    $(selector).removeClass('thumbnail-holder');

}

selectThumbnail(currentPicture)