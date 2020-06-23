let editor = ace.edit("editor", {
    fontSize: 16
});

let startingCode = `(pose, poseHistory) => [
    {
        what: 'line',
        when: true,
        where: {
          x1: pose.leftHip.x,
          y1: pose.leftHip.y,
          x2: pose.rightHip.x,
          y2: pose.rightHip.y
        },
        how: {
            fill: 'rgba(0,0,255, 1)',
            stroke: 50
        }
    },
    {
        what: 'circle',
        when: pose.rightWrist.y < pose.nose.y,
        where: {
            start: {
                x: pose.rightWrist.x,
                y: pose.rightWrist.y,
                velocityX: random(-5, 5),
                velocityY: random(-5, 5)
            },
            accelerationX: 0,
            accelerationY: 0
        },
        how: {
            d: [{frame: 0, value: 0}, {frame: 30, value: 30}],
            fill: 'rgba(255,0,0, 0.25)',
            stroke: 50
        }
    },
    {
        what: 'circle',
        when: pose.leftWrist.y < pose.nose.y,
        where: {
            start: {
                x: pose.leftWrist.x,
                y: pose.leftWrist.y,
                velocityX: random(-5, 5),
                velocityY: random(-5, 5)
            },
            accelerationX: 0,
            accelerationY: 0
        },
        how: {
            d: [{frame: 0, value: 0}, {frame: 30, value: 30}],
            fill: 'rgba(0,255,0, 0.25)',
            stroke: 50
        }
    }
];`

/*if (typeof(Storage) !== "undefined" && localStorage.getItem('userDeclarations')) {
    startingCode = localStorage.getItem('userDeclarations');
}*/

let declarations = new ace.EditSession(startingCode);

declarations.setMode("ace/mode/javascript");
editor.setSession(declarations);
