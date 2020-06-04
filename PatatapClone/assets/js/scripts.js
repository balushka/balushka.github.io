// Make the paper scope global, by injecting it into window:
paper.install(window);

window.onload = function () {
    paper.setup('myCanvas');
    var tool = new Tool();
    var randomInInterval = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    var keyData = {
        a: {
            sound: new Howl({
                src: ['sounds/bubbles.mp3']
            })
        },
        b: {
            sound: new Howl({
                src: ['sounds/clay.mp3']
            })
        },
        c: {
            sound: new Howl({
                src: ['sounds/confetti.mp3']
            })
        },
        d: {
            sound: new Howl({
                src: ['sounds/corona.mp3']
            })
        },
        e: {
            sound: new Howl({
                src: ['sounds/dotted-spiral.mp3']
            })
        },
        f: {
            sound: new Howl({
                src: ['sounds/flash-1.mp3']
            })
        },
        g: {
            sound: new Howl({
                src: ['sounds/flash-2.mp3']
            })
        },
        h: {
            sound: new Howl({
                src: ['sounds/flash-3.mp3']
            })
        },
        i: {
            sound: new Howl({
                src: ['sounds/glimmer.mp3']
            })
        },
        j: {
            sound: new Howl({
                src: ['sounds/moon.mp3']
            })
        },
        k: {
            sound: new Howl({
                src: ['sounds/pinwheel.mp3']
            })
        },
        l: {
            sound: new Howl({
                src: ['sounds/piston-1.mp3']
            })
        },
        m: {
            sound: new Howl({
                src: ['sounds/piston-2.mp3']
            })
        },
        n: {
            sound: new Howl({
                src: ['sounds/piston-3.mp3']
            })
        },
        o: {
            sound: new Howl({
                src: ['sounds/prism-1.mp3']
            })
        },
        p: {
            sound: new Howl({
                src: ['sounds/prism-2.mp3']
            })
        },
        q: {
            sound: new Howl({
                src: ['sounds/splits.mp3']
            })
        },
        r: {
            sound: new Howl({
                src: ['sounds/squiggle.mp3']
            })
        },
        s: {
            sound: new Howl({
                src: ['sounds/strike.mp3']
            })
        },
        t: {
            sound: new Howl({
                src: ['sounds/suspension.mp3']
            })
        },
        u: {
            sound: new Howl({
                src: ['sounds/timer.mp3']
            })
        },
        v: {
            sound: new Howl({
                src: ['sounds/ufo.mp3']
            })
        },
        w: {
            sound: new Howl({
                src: ['sounds/veil.mp3']
            })
        },
        x: {
            sound: new Howl({
                src: ['sounds/prism-3.mp3']
            })
        },
        y: {
            sound: new Howl({
                src: ['sounds/wipe.mp3']
            })
        },
        z: {
            sound: new Howl({
                src: ['sounds/zig-zag.mp3']
            })
        }
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

    tool.onKeyDown = function (event) {
        if (keyData[event.key]) {
            var polygon = createRndPolygon();
            polygon.onFrame = function (e) {
                // On each frame, decrease the size to 95%:
                polygon.scale(0.95);
                polygon.fillColor.hue += 2;
                // if polygon is samell we don't need it anymore
                if (polygon.area < 1) {
                    polygon.remove();
                }
            }
            //then play the sound
            keyData[event.key].sound.play();
            // and change body background color
            $("body").css("background", createRndBgColor());
            // and remove the hint
            $("#hint").fadeOut(2000, function () {
                this.remove()
            });
        }
    }
}