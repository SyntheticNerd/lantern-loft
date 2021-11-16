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

function resetColor(arr, child, childColor) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.background = '';
    }
    child.style.background = childColor;
}

var color;

function changeColorR(button, parent) {
    const buttons = parent.querySelectorAll('.skill-level');
    color = button.style.background;
    color === 'rgb(129, 58, 58)' ? button.style.background = '' : resetColor(buttons, button, "rgb(129, 58, 58)");
}

function changeColorY(button, parent) {
    const buttons = parent.querySelectorAll('.skill-level');
    color = button.style.backgroundColor;
    color === 'rgb(188, 169, 72)' ? button.style.background = '' : resetColor(buttons, button, "rgb(188, 169, 72)");
}

function changeColorG(button, parent) {
    const buttons = parent.querySelectorAll('.skill-level');
    color = button.style.backgroundColor;
    color === 'rgb(97, 136, 78)' ? button.style.background = '' : resetColor(buttons, button, "rgb(97, 136, 78)");
}

function resetDefaults() {
    console.log("You are in the reset function")
    $('.npc').css({
        'transform': "scale(1.2, 1.2)",
        'box-shadow': "0px 12px 8px rgba(0, 0, 0, 0.14)"
    });

    $('.portrait-box').css({
        'transform': "none",
        'box-shadow': "0px 4px 4px rgba(0, 0, 0, 0.25)"
    });

    $('.skills').css({
        'transform': "none",
        'box-shadow': "0px 4px 4px rgba(0, 0, 0, 0.25)"
    });

    $('.name').css({
        'transform': "none",
        'box-shadow': "0px 4px 4px rgba(0, 0, 0, 0.25)"
    });

    $('.content-grid').css({
        'transform': "none",
        'box-shadow': "0px 4px 4px rgba(0, 0, 0, 0.25)"
    });

    $('.content-2').css({
        'transform': "none"
    })

    $('.title').css({
        'transform': "none",
        'box-shadow': "0px 4px 4px rgba(0, 0, 0, 0.25)"
    })

    $('.title-box').css({
        'transform': "none",
        'box-shadow': "0px 4px 4px rgba(0, 0, 0, 0.25)"
    })
}


document.addEventListener('DOMContentLoaded', function () {
    var strtWdth1 = Number($('.npc').css('margin-left').replace('px', ''));
    var strtHght1 = Number($('.npc').css('margin-top').replace('px', ''));

    var strtWdth2 = Number($('.portrait-box').css('margin-left').replace('px', ''));
    var strtHght2 = Number($('.portrait-box').css('margin-top').replace('px', ''));



    $('body').on('mousemove', function (event) {
        //if while the moouse is moving
        if ($("#npc-card").is(":hover") != 0) {
            // test to see if you are above the npc card

            docHeight = $(document).height();
            docWidth = $(document).width();
            var x = Math.round(100 / docWidth * (event.clientX));
            var y = Math.round(100 / docHeight * (event.clientY));
            // rounding to a whole integer made the animations much smoother

            x -= 50;
            y -= 55;
            // off set by 55 instead of 50 to account for the nav bar height
            // center of the screen is at 50 50 we want center coordinates to be 0 0

            var transform0 = "scale(1.2, 1.2) perspective(1000px) rotateX(" + (y) + "deg) rotateY(" + -(x) + "deg)";
            var transform1 = "perspective(2000px) rotateX(" + Math.round(y * .2) + "deg) rotateY(" + -Math.round(x * .4) + "deg)";
            var transform2 = "perspective(2000px) rotateX(" + Math.round(y * .1) + "deg) rotateY(" + -Math.round(x * .2) + "deg)";
            var transform3 = "perspective(2000px) rotateX(" + Math.round(y * .9) + "deg) rotateY(" + -Math.round(x * .9) + "deg)";
            // create aditional rates of perspective change by changing the multiplying decimal number
            // notice the x is negative to reverse the direction of the perspective shift

            var shadow0 = Math.round(x) + "px " + Math.round(y) + "px 8px rgba(0, 0, 0, 0.25)";
            var shadow1 = Math.round(x) + "px " + Math.round(y) + "px 8px rgba(0, 0, 0, 0.25)";


            $('.npc').css({
                'transform': transform0,
                'box-shadow': shadow0
            });

            $('.portrait-box').css({
                'transform': transform1,
                'box-shadow': shadow1
            });

            $('.port-front').css({
                'transform': transform3
            });

            $('.skills').css({
                'transform': transform1,
                'box-shadow': shadow1
            });

            $('.name').css({
                'transform': transform1,
                'box-shadow': shadow1
            });

            $('.content-grid').css({
                'transform': transform1,
                'box-shadow': shadow1
            });

            $('.content-2').css({
                'transform': transform1
            })

            $('.title').css({
                'transform': transform2,
                'box-shadow': shadow1
            })

            $('.title-box').css({
                'transform': transform2,
                'box-shadow': shadow1
            })
        } else {
            resetDefaults();
            //i need to make it so the function pulls from the originall css
        }
    });
})