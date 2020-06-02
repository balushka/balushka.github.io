// Make the paper scope global, by injecting it into window:
paper.install(window);

window.onload = function () {
    paper.setup('myCanvas');
    // view.draw();
    var tool = new Tool();
    var goodKeys = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];
    // var goodLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "x", "y", "z"]
    var pattern = new RegExp( "[a-zA-Z]{1}");
    var randomInInterval = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function createRndPolygon() {
        var xCoord = randomInInterval(0, myCanvas.width);
        var yCoord = randomInInterval(0, myCanvas.height);
        var numberOfSides = randomInInterval(3, 20);
        var sideLength = randomInInterval(20, 300);
        var point = new Point(xCoord, yCoord);
        var polygon = new Path.RegularPolygon(point, numberOfSides, sideLength);
        addRandomColorToPolygon(polygon);
        return polygon;
    }

    function addRandomColorToPolygon(polygon) {
        var redComponent = Math.round(Math.random() * 100) / 100;
        var greenComponent = Math.round(Math.random() * 100) / 100;
        var blueComponent = Math.round(Math.random() * 100) / 100;
        polygon.fillColor = new Color(redComponent, greenComponent, blueComponent);
    }

    function createRndBgColor() {
        var redBg = randomInInterval(0, 255);
        var greenBg = randomInInterval(0, 255);
        var blueBg = randomInInterval(0, 255);
        return "rgb(" + redBg + ", " + greenBg + ", " + blueBg + ")";
    }

    $(document).on("click", function() {
        $('#dummy').focus();
      });
      $('#dummy').focus();

    $("body").on("keypress", function (event) {
        console.log(event.which);
        //Create random body background color:
        if (goodKeys.includes(event.which)) {
            $(this).css("background", createRndBgColor());
            $("#hint").fadeOut(2000, function () { this.remove() });

            // Create random sided, sized and colored polygons on keydown
            tool.onKeyDown = function (event) {
                // if (goodLetters.includes(event.key) && event.key.length == 1) {
                if (pattern.test(event.key) && event.key.length == 1) {
                    console.log(event.key.length);
                    var polygon = createRndPolygon();
                    polygon.onFrame = function (e) {
                        // On each frame, decrease the size to 90%:
                        polygon.scale(0.9);
                    }
                }
            }


            switch (event.which) {
                
                case 65:
                    var sound = new Howl({
                        src: ['sounds/bubbles.mp3']
                    });
                    break;
                case 66:
                    var sound = new Howl({
                        src: ['sounds/clay.mp3']
                    });
                    break;
                case 67:
                    var sound = new Howl({
                        src: ['sounds/confetti.mp3']
                    });
                    break;
                case 68:
                    var sound = new Howl({
                        src: ['sounds/corona.mp3']
                    });
                    break;
                case 69:
                    var sound = new Howl({
                        src: ['sounds/dotted-spiral.mp3']
                    });
                    break;
                case 70:
                    var sound = new Howl({
                        src: ['sounds/flash-1.mp3']
                    });
                    break;
                case 71:
                    var sound = new Howl({
                        src: ['sounds/flash-2.mp3']
                    });
                    break;
                case 72:
                    var sound = new Howl({
                        src: ['sounds/flash-3.mp3']
                    });
                    break;
                case 73:
                    var sound = new Howl({
                        src: ['sounds/glimmer.mp3']
                    });
                    break;
                case 74:
                    var sound = new Howl({
                        src: ['sounds/moon.mp3']
                    });
                    break;
                case 75:
                    var sound = new Howl({
                        src: ['sounds/pinwheel.mp3']
                    });
                    break;
                case 76:
                    var sound = new Howl({
                        src: ['sounds/piston-1.mp3']
                    });
                    break;
                case 77:
                    var sound = new Howl({
                        src: ['sounds/piston-2.mp3']
                    });
                    break;
                case 78:
                    var sound = new Howl({
                        src: ['sounds/piston-3.mp3']
                    });
                    break;
                case 79:
                    var sound = new Howl({
                        src: ['sounds/prism-1.mp3']
                    });
                    break;
                case 80:
                    var sound = new Howl({
                        src: ['sounds/prism-2.mp3']
                    });
                    break;
                case 81:
                    var sound = new Howl({
                        src: ['sounds/prism-3.mp3']
                    });
                    break;
                case 82:
                    var sound = new Howl({
                        src: ['sounds/splits.mp3']
                    });
                    break;
                case 83:
                    var sound = new Howl({
                        src: ['sounds/squiggle.mp3']
                    });
                    break;
                case 84:
                    var sound = new Howl({
                        src: ['sounds/strike.mp3']
                    });
                    break;
                case 85:
                    var sound = new Howl({
                        src: ['sounds/suspension.mp3']
                    });
                    break;
                case 86:
                    var sound = new Howl({
                        src: ['sounds/timer.mp3']
                    });
                    break;
                case 87:
                    var sound = new Howl({
                        src: ['sounds/ufo.mp3']
                    });
                    break;
                case 88:
                    var sound = new Howl({
                        src: ['sounds/veil.mp3']
                    });
                    break;
                case 89:
                    var sound = new Howl({
                        src: ['sounds/wipe.mp3']
                    });
                    break;
                case 90:
                    var sound = new Howl({
                        src: ['sounds/zig-zag.mp3']
                    });
                    break;
                case 97:
                    var sound = new Howl({
                        src: ['sounds/bubbles.mp3']
                    });
                    break;
                case 98:
                    var sound = new Howl({
                        src: ['sounds/clay.mp3']
                    });
                    break;
                case 99:
                    var sound = new Howl({
                        src: ['sounds/confetti.mp3']
                    });
                    break;
                case 100:
                    var sound = new Howl({
                        src: ['sounds/corona.mp3']
                    });
                    break;
                case 101:
                    var sound = new Howl({
                        src: ['sounds/dotted-spiral.mp3']
                    });
                    break;
                case 102:
                    var sound = new Howl({
                        src: ['sounds/flash-1.mp3']
                    });
                    break;
                case 103:
                    var sound = new Howl({
                        src: ['sounds/flash-2.mp3']
                    });
                    break;
                case 104:
                    var sound = new Howl({
                        src: ['sounds/flash-3.mp3']
                    });
                    break;
                case 105:
                    var sound = new Howl({
                        src: ['sounds/glimmer.mp3']
                    });
                    break;
                case 106:
                    var sound = new Howl({
                        src: ['sounds/moon.mp3']
                    });
                    break;
                case 107:
                    var sound = new Howl({
                        src: ['sounds/pinwheel.mp3']
                    });
                    break;
                case 108:
                    var sound = new Howl({
                        src: ['sounds/piston-1.mp3']
                    });
                    break;
                case 109:
                    var sound = new Howl({
                        src: ['sounds/piston-2.mp3']
                    });
                    break;
                case 110:
                    var sound = new Howl({
                        src: ['sounds/piston-3.mp3']
                    });
                    break;
                case 111:
                    var sound = new Howl({
                        src: ['sounds/prism-1.mp3']
                    });
                    break;
                case 112:
                    var sound = new Howl({
                        src: ['sounds/prism-2.mp3']
                    });
                    break;
                case 113:
                    var sound = new Howl({
                        src: ['sounds/prism-3.mp3']
                    });
                    break;
                case 114:
                    var sound = new Howl({
                        src: ['sounds/splits.mp3']
                    });
                    break;
                case 115:
                    var sound = new Howl({
                        src: ['sounds/squiggle.mp3']
                    });
                    break;
                case 116:
                    var sound = new Howl({
                        src: ['sounds/strike.mp3']
                    });
                    break;
                case 117:
                    var sound = new Howl({
                        src: ['sounds/suspension.mp3']
                    });
                    break;
                case 118:
                    var sound = new Howl({
                        src: ['sounds/timer.mp3']
                    });
                    break;
                case 119:
                    var sound = new Howl({
                        src: ['sounds/ufo.mp3']
                    });
                    break;
                case 120:
                    var sound = new Howl({
                        src: ['sounds/veil.mp3']
                    });
                    break;
                case 121:
                    var sound = new Howl({
                        src: ['sounds/wipe.mp3']
                    });
                    break;
                case 122:
                    var sound = new Howl({
                        src: ['sounds/zig-zag.mp3']
                    });
                    break;
                default: console.log("not defined");
            }
            sound.play();
        }
    });



}