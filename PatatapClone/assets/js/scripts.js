// Make the paper scope global, by injecting it into window:
paper.install(window);

window.onload = function () {
    paper.setup('myCanvas');
    // view.draw();
    var tool = new Tool();
    
    var randomInInterval = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function createRndPolygon(){
        var xCoord = randomInInterval(0, myCanvas.width);
        var yCoord = randomInInterval(0, myCanvas.height);
        var numberOfSides = randomInInterval(3, 20);
        var sideLength = randomInInterval(20, 300);
        var point = new Point(xCoord, yCoord);
        var polygon = new Path.RegularPolygon(point, numberOfSides, sideLength);
        addRandomColorToPolygon(polygon);
        return polygon;
    }

    function addRandomColorToPolygon(polygon){
        var redComponent = Math.round(Math.random() * 100) / 100;
        var greenComponent = Math.round(Math.random() * 100) / 100;
        var blueComponent = Math.round(Math.random() * 100) / 100;
        polygon.fillColor = new Color(redComponent, greenComponent, blueComponent);  
    }

    function createRndBgColor(){
        var redBg = randomInInterval(0, 255);
        var greenBg = randomInInterval(0, 255);
        var blueBg = randomInInterval(0, 255);
        return "rgb(" + redBg + ", " + greenBg + ", " + blueBg + ")";
    }


    $("body").on("keypress", function(event) {
        //Create random body background color:
        $(this).css("background", createRndBgColor());

        // Create random sided, sized and colored polygons on keydown
        tool.onKeyDown = function (event) {
            var polygon = createRndPolygon();      
            polygon.onFrame = function (e) {
                // On each frame, decrease the size to 90%:
                polygon.scale(0.9);
            }
        }
       
        
        switch (event.which) {
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
    });

  
    
}