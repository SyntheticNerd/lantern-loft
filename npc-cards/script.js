// let skill = document.querySelector('.skill-level');
// console.log(skill)
// skillLevel.addEventListener('click', () => {
//     console.log('clicking')
//     //toggle skill level
//     skillLevel.classList.toggle('.toggle');
// });

// var button1 = document.getElementById('btn1');
// var color = button1.style.background;
// button1.addEventListener('click', function () {
//     console.log('youmade iut')
//     // this function executes whenever the user clicks the button
//     color = button1.style.background = color === '#813A3A' ? 'none' : '#813A3A';
// });

// console.log(document.querySelector('.skill-level'))


// button.addEventListener("click", () => {
//     console.log('you clicked');
//     // button.classList.add('active');
//     // if (button.style.backgroundColor == "rgb(129, 58, 58)") {
//     //     button.style.backgroundColor = "rgba(129, 58, 58, 0)";
//     //     console.log('true')
//     // } else {
//     //     button.style.backgroundColor = "#813A3A";
//     // }
//     color = button.style.background = color === '#813A3A' ? 'rgba(129, 58, 58, 0)' : '#813A3A';

// });

function resetColor(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].style.backgroundColor) {
            arr[i].style.backgroundColor = 'rgba(129, 58, 58, 0)';
        }
    }
}

function changeColorR(button, parent) {
    const buttons = parent.querySelectorAll('.skill-level');
    resetColor(buttons);
    button.style.background = '#813A3A';
}

function changeColorY(button, parent) {
    const buttons = parent.querySelectorAll('.skill-level');
    resetColor(buttons);
    button.style.background = '#BCA948';
}

function changeColorG(button, parent) {
    const buttons = parent.querySelectorAll('.skill-level');
    resetColor(buttons);
    button.style.background = '#61884E';
}