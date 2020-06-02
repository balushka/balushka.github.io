// Make the paper scope global, by injecting it into window:
paper.install(window);

var tool1, tool2

window.onload = function () {
    // Setup directly from canvas id:
    paper.setup('myCanvas');
    var path = new Path();
    path.strokeColor = 'black';
    var start = new Point(100, 100);
    path.moveTo(start);
    path.lineTo(start.add([200, -50]));
    view.draw();

    var circle = new Path.Circle({
        center: view.center,
        radius: 300,
        strokeColor: 'black',
        fillColor: "green",
        opacity: 0.5
    });

    //on resize event
    function onResize(event) {
        // Whenever the window is resized, recenter the path:
        circle.position = view.center;
    }

    var rectangle = new Path.Rectangle([75, 175], [150, 100]);
    rectangle.strokeColor = 'red';

    //onFrame event
    view.onFrame = function (event) {
        // On each frame, rotate the path by 3 degrees:
        path.rotate(3);
        rectangle.rotate(10);
    }

    //TOOLS

    // Create a simple drawing tool:
    var tool = new Tool();
    var lineWithMouse;

    // Define a mousedown and mousedrag handler
    tool.onMouseDown = function(event) {
    	lineWithMouse = new Path();
    	lineWithMouse.strokeColor = 'black';
    	lineWithMouse.add(event.point);
    }

    tool.onMouseDrag = function(event) {
    	lineWithMouse.add(event.point);
    }

    var vonal = new Path();
    vonal.strokeColor = "green";
    vonal.add(new Point (0, 0));
    vonal.add(new Point (100, 50));

    vonal.insert(2, new Point(30, 40));
    vonal.smooth();
    path.closed = true;
    vonal.fullySelected = true;

    var copyOfVonal = vonal.clone();
    copyOfVonal.position.x += 100;

    // Create two drawing tools.
    // tool1 will draw straight lines,
    // tool2 will draw clouds.

    // Both share the mouseDown event:
    // var vonalFele;
    // function onMouseDown(event) {
    //     vonalFele = new Path();
    //     vonalFele.strokeColor = 'black';
    //     vonalFele.add(event.point);
    // }

    // tool1 = new Tool();
    // tool1.onMouseDown = onMouseDown;

    // tool1.onMouseDrag = function (event) {
    //     vonalFele.add(event.point);
    // }

    // tool2 = new Tool();
    // tool2.minDistance = 40;
    // tool2.onMouseDown = onMouseDown;

    // tool2.onMouseDrag = function (event) {
    //     // Use the arcTo command to draw cloudy lines
    //     vonalFele.arcTo(event.point);
    // }

    // var firstPoint = new Point(200, 200);
    // var topLeft = new Point(10, 20);
    // var rectSize = new Size(200, 100);
    // var rect = new Rectangle(topLeft, rectSize);
    // console.log(rect); // { x: 10, y: 20, width: 200, height: 100 }
    // console.log(rect.point); // { x: 10, y: 20 }
    // console.log(rect.size); // { width: 200, height: 100 }
    
    // //The same Rectangle object can be created using the new Rectangle(x, y, width, height) constructor:
    // var rect1 = new Rectangle(10, 20, 200, 100);
    // console.log(rect1); // { x: 10, y: 20, width: 200, height: 100 }

    var triangle = new Path.RegularPolygon(new Point(80, 70), 3, 60);
triangle.fillColor = '#e9e9ff';
triangle.selected = true;
triangle.opacity = 0.5;
triangle.smooth();
console.log(triangle);

// Create a decagon shaped path 
var decagon = new Path.RegularPolygon(new Point(200, 70), 10, 50);
decagon.fillColor = '#e9e9ff';
decagon.selected = true;
decagon.opacity = 0.4;

var checkMarkShapedPath = new Path({
	segments: [[40, 115], [80, 180], [200, 20]],
	selected: false
});
checkMarkShapedPath.strokeWidth = 40;
checkMarkShapedPath.strokeColor = 'red';
checkMarkShapedPath.smooth();
checkMarkShapedPath.strokeCap = "round";
}