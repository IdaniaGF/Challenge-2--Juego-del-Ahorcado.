var gallow = document.querySelector("#ahorcado");

function drawAhorcado(error) {
    var coordinates = assignCoordinates(error);
    var brush = gallow.getContext("2d");
    brush.lineWidth = 7;
    brush.lineCap = "round";
    brush.lineJoin = "round";
    brush.strokeStyle = "#FFFFFF";
    brush.beginPath();
    if (error == 4) {
        brush.arc(coordinates.xi, coordinates.yi, 25, 0, 2 * Math.PI);
    } else {
        brush.moveTo(coordinates.xi, coordinates.yi);
        brush.lineTo(coordinates.xf, coordinates.yf);
    }
    brush.stroke();
}

//keys to draw la horca
function assignCoordinates(error) {
    var coordinates = {}
    if (error == 0) {
        coordinates = {
            xi: 3.5,
            yi: 226.5,
            xf: 246.5,
            yf: 226.5,
        }
    }
    if (error == 1) {
        coordinates = {
            xi: 50,
            yi: 230,
            xf: 50,
            yf: 3.5
        }
    }
    if (error == 2) {
        coordinates = {
            xi: 50,
            yi: 3.5,
            xf: 150,
            yf: 3.5
        }
    }
    if (error == 3) {
        coordinates = {
            xi: 150,
            yi: 3.5,
            xf: 150,
            yf: 30
        }
    }
    if (error == 4) {
        coordinates = {
            xi: 150,
            yi: 55
        }
    }
    if (error == 5) {
        coordinates = {
            xi: 150,
            yi: 80,
            xf: 150,
            yf: 160
        }
    }
    if (error == 6) {
        coordinates = {
            xi: 150,
            yi: 160,
            xf: 120,
            yf: 190
        }
    }
    if (error == 7) {
        coordinates = {
            xi: 150,
            yi: 160,
            xf: 180,
            yf: 190
        }
    }
    if (error == 8) {
        coordinates = {
            xi: 150,
            yi: 100,
            xf: 120,
            yf: 130
        }
    }
    if (error == 9) {
        coordinates = {
            xi: 150,
            yi: 100,
            xf: 180,
            yf: 130
        }
    }
    return coordinates;
}