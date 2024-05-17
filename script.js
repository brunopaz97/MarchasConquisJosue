const initialPositions = {
    'A': {x: 0, y: 0},
    'B': {x: 1, y: 0},
    'C': {x: 2, y: 0},
    'D': {x: -3, y: 2},
    'E': {x: -2, y: 2},
    'F': {x: 4, y: 1},
    'G': {x: -1, y: 3},
    'H': {x: 0, y: 3},
    'I': {x: 1, y: 3}
};

let positions = JSON.parse(JSON.stringify(initialPositions));

function setPosition(id, x, y) {
    const element = document.getElementById(id);
    element.style.transform = `translate(${x * 60}px, ${y * 60}px)`;
}

function updatePositions() {
    Object.keys(positions).forEach(id => {
        setPosition(id, positions[id].x, positions[id].y);
    });
}

function startFormation() {
    positions = JSON.parse(JSON.stringify(initialPositions));
    updatePositions();
}

function makeCircle() {
    const circlePositions = [
        {x: -4, y: -1}, {x: -3, y: -2}, {x: -2, y: -1},
        {x: -8, y: 2}, {x: 1, y: 1},
        {x: -5, y: 4}, {x: -4, y: 5}, {x: -3, y: 4}
    ];
    ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I'].forEach((id, index) => {
        positions[id].x = circlePositions[index].x;
        positions[id].y = circlePositions[index].y;
    });
    positions['E'].x = -6;  // E en el centro
    positions['E'].y = 2;
    updatePositions();
}

function makeTriangle() {
    const trianglePositions = [
        {x: -6, y: -1}, {x: -3, y: -1}, {x: 0, y: -1},
        {x: -8, y: 2}, {x: 1, y: 1},
        {x: -4, y: 4}, {x: -4, y: 6}, {x: -4, y: 4}
    ];
    ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I'].forEach((id, index) => {
        positions[id].x = trianglePositions[index].x;
        positions[id].y = trianglePositions[index].y;
    });
    positions['E'].x = -6;  // E en el centro del triángulo
    positions['E'].y = 2;
    updatePositions();
}

// Inicializar posiciones
updatePositions();

// Obtener los botones
const startButton = document.getElementById('startButton');
const triangleButton = document.getElementById('triangleButton');

// Agregar eventos click a los botones
startButton.addEventListener('click', makeCircle);
triangleButton.addEventListener('click', makeTriangle);
