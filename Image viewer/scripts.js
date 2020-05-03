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
    title: "Hátul a Bali Dobol",
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
    title: "Slash és Frusciante",
    description: "Hát nem hihetetlen, hogy mindketten itt voltak?!"
};
let picture7 = {
    id: 6,
    src: "pictures\\16kari01.jpg",
    title: "2016, Karácsony",
    description: "Bandival"
};

let picture8 = {
    id: 7,
    src: "pictures\\16kari02.jpg",
    title: "2016, Karácsony",
    description: ""
};
let picture9 = {
    id: 8,
    src: "pictures\\16kari04.jpg",
    title: "2016, Karácsony",
    description: ""
};
let picture10 = {
    id: 9,
    src: "pictures\\16kari05.jpg",
    title: "2016, Karácsony",
    description: ""
};
let picture11 = {
    id: 10,
    src: "pictures\\16kari06.jpg",
    title: "2016, Karácsony",
    description: ""
};
let picture12 = {
    id: 11,
    src: "pictures\\16kari08.jpg",
    title: "2016, Karácsony",
    description: ""
};
let picture13 = {
    id: 12,
    src: "pictures\\16kari09.jpg",
    title: "2016, Karácsony",
    description: ""
};
let picture14 = {
    id: 13,
    src: "pictures\\16kari11.jpg",
    title: "2016, Karácsony",
    description: ""
};
let picture15 = {
    id: 14,
    src: "pictures\\16kari16.jpg",
    title: "2016, Karácsony",
    description: ""
};
let picture16 = {
    id: 15,
    src: "pictures\\16kari17.jpg",
    title: "2016, Karácsony",
    description: ""
};

let picture17 = {
    id: 16,
    src: "pictures\\18kari.jpg",
    title: "2018, Karácsony",
    description: "Keménykedős"
};

let picture18 = {
    id: 17,
    src: "pictures\\18kari01.jpg",
    title: "2018, Karácsony",
    description: ""
};
let picture19 = {
    id: 18,
    src: "pictures\\18kari02.jpg",
    title: "2018, Karácsony",
    description: ""
};
let picture20 = {
    id: 19,
    src: "pictures\\18kari03.jpg",
    title: "2018, Karácsony",
    description: ""
};
let picture21 = {
    id: 20,
    src: "pictures\\18kari04.jpg",
    title: "2018, Karácsony",
    description: ""
};
let picture22 = {
    id: 21,
    src: "pictures\\18kari05.jpg",
    title: "2018, Karácsony",
    description: ""
};
let picture23 = {
    id: 22,
    src: "pictures\\18kari07.jpg",
    title: "2018, Karácsony",
    description: ""
};
let picture24 = {
    id: 23,
    src: "pictures\\18kari08.jpg",
    title: "2018, Karácsony",
    description: ""
};
let picture25 = {
    id: 24,
    src: "pictures\\18kari09.jpg",
    title: "2018, Karácsony",
    description: ""
};
let picture26 = {
    id: 25,
    src: "pictures\\18kari10.jpg",
    title: "2018, Karácsony",
    description: ""
};
let picture27 = {
    id: 26,
    src: "pictures\\IMG-20170317-WA0000.jpg",
    title: "2017 március, S8",
    description: "Az első koncert 'házon kívül'"
};
let picture28 = {
    id: 27,
    src: "pictures\\IMG-20170317-WA0003.jpg",
    title: "2017 március, S8",
    description: "Még előzenekarunk is volt"
};
let picture29 = {
    id: 28,
    src: "pictures\\IMG-20170317-WA0007.jpg",
    title: "2017 március, S8",
    description: "'Kezek nélkül nincsen Edda!'"
};
let picture30 = {
    id: 29,
    src: "pictures\\IMG-20170317-WA0009.jpg",
    title: "2017 március, S8",
    description: "Yea"
};


let pictures = [picture1, picture2, picture3, picture4, picture5, picture6, picture7,
picture8, picture9, picture10, picture11, picture12, picture13, picture14, picture15, 
picture16, picture17, picture18, picture19, picture20, picture21, picture22, picture23, 
picture24, picture25, picture26, picture27, picture28, picture29, picture30];

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

            '<div class="tooltip-holder" >' +
            '<div class="tooltip">' + picture.title + '</div>' +
            '<div class="tooltip-arrow"></div>' +
            '</div>' +
            '<div class="selected-thumbnail-arrow"></div>' +
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