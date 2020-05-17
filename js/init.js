digital_divide_greet = document.querySelector('#digital-divide-greet');

shunts = new ShuntDiv(document.getElementById('container-content'), [
        new ShuntDiv.Introduction('frame-home-2', 'dualAnimateCss', {
            exit_animation_name:  'zoomOut',
            exit_animation_function: 'linear',
            exit_animation_time: 200,
            enter_animation_name: 'fadeIn',
            enter_animation_function: 'linear',
            enter_animation_time: 4000,
        }),
        new ShuntDiv.Transition('frame-home-2', 'frame-home', 'dualAnimateCss', 'click', {
            exit_animation_name:  'fadeOut',
            exit_animation_function: 'linear',
            exit_animation_time: 1000,
            enter_animation_name: 'zoomIn',
            enter_animation_function: 'ease',
            enter_animation_time: 2000,
        }),
    ], {
    default: 'frame-home',
    saveWithHash: true,
});

FRAMES = ["home", "resume", "code", "prose", "photo"];
FRAMES_WRAP = FRAMES.concat([FRAMES[0]]);

FRAMES.forEach(function(frame) {
    shunts.addShunt(new ShuntDiv.Introduction('frame-' + frame, 'dualAnimateCss', {
        exit_animation_name:  'fadeOutLeft',
        exit_animation_function: 'ease',
        enter_animation_name: 'fadeInLeft',
        enter_animation_function: 'ease',
    }));

    document.querySelector('a#link-' + frame).addEventListener('click', function() {
        shunts.introduce('frame-' + frame);
    });
});

for (i = 0, j = 1; j < FRAMES_WRAP.length; ++i, ++j) {
    (function(frame_1, frame_2) {
        shunts.addShunt(new ShuntDiv.Transition('frame-' + frame_1, 'frame-' + frame_2, 'dualAnimateCss', 'keypress', {
            key: 32,
            exit_animation_name:  'fadeOut',
            exit_animation_function: 'ease',
            enter_animation_name: 'zoomIn',
            enter_animation_function: 'ease',
        }));
        shunts.addShunt(new ShuntDiv.Transition('frame-' + frame_1, 'frame-' + frame_2, 'dualAnimateCss', 'keypress', {
            key: 13,
            exit_animation_name:  'zoomOut',
            exit_animation_function: 'ease',
            enter_animation_name: 'zoomIn',
            enter_animation_function: 'ease',
        }));

        shunts.addShunt(new ShuntDiv.Transition('frame-' + frame_1, 'frame-' + frame_2, 'dualAnimateCss', 'keypress', {
            key: 40,
            exit_animation_name:  'fadeOutUp',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInUp',
            enter_animation_function: 'ease',
        }));
        shunts.addShunt(new ShuntDiv.Transition('frame-' + frame_2, 'frame-' + frame_1, 'dualAnimateCss', 'keypress', {
            key: 38,
            exit_animation_name:  'fadeOutDown',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInDown',
            enter_animation_function: 'ease',
        }));
        shunts.addShunt(new ShuntDiv.Transition('frame-' + frame_1, 'frame-' + frame_2, 'dualAnimateCss', 'keypress', {
            key: 39,
            exit_animation_name:  'fadeOutLeft',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInRight',
            enter_animation_function: 'ease',
        }));
        shunts.addShunt(new ShuntDiv.Transition('frame-' + frame_2, 'frame-' + frame_1, 'dualAnimateCss', 'keypress', {
            key: 37,
            exit_animation_name:  'fadeOutRight',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInLeft',
            enter_animation_function: 'ease',
        }));

        shunts.addShunt(new ShuntDiv.Transition('frame-' + frame_1, 'frame-' + frame_2, 'dualAnimateCss', 'keypress', {
            key: 's',
            exit_animation_name:  'fadeOutUp',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInUp',
            enter_animation_function: 'ease',
        }));
        shunts.addShunt(new ShuntDiv.Transition('frame-' + frame_2, 'frame-' + frame_1, 'dualAnimateCss', 'keypress', {
            key: 'w',
            exit_animation_name:  'fadeOutDown',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInDown',
            enter_animation_function: 'ease',
        }));
        shunts.addShunt(new ShuntDiv.Transition('frame-' + frame_1, 'frame-' + frame_2, 'dualAnimateCss', 'keypress', {
            key: 'd',
            exit_animation_name:  'fadeOutLeft',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInRight',
            enter_animation_function: 'ease',
        }));
        shunts.addShunt(new ShuntDiv.Transition('frame-' + frame_2, 'frame-' + frame_1, 'dualAnimateCss', 'keypress', {
            key: 'a',
            exit_animation_name:  'fadeOutRight',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInLeft',
            enter_animation_function: 'ease',
        }));

        shunts.addShunt(new ShuntDiv.Transition('frame-' + frame_1, 'frame-' + frame_2, 'zRotate', 'touchSwipe', {
            swipe: 'left',
            rotate: 'left',
        }));
        shunts.addShunt(new ShuntDiv.Transition('frame-' + frame_2, 'frame-' + frame_1, 'zRotate', 'touchSwipe', {
            swipe: 'right',
            rotate: 'right',
        }));
        shunts.addShunt(new ShuntDiv.Transition('frame-' + frame_1, 'frame-' + frame_2, 'zRotate', 'touchSwipe', {
            swipe: 'up',
            rotate: 'up',
        }));
        shunts.addShunt(new ShuntDiv.Transition('frame-' + frame_2, 'frame-' + frame_1, 'zRotate', 'touchSwipe', {
            swipe: 'down',
            rotate: 'down',
        }));

        shunts.addShunt(new ShuntDiv.Transition('frame-' + frame_1, 'frame-' + frame_2, 'dualAnimateCss', 'wheel', {
            deltaY: 20,
            exit_animation_name:  'fadeOutUp',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInUp',
            enter_animation_function: 'ease',
        }));
        shunts.addShunt(new ShuntDiv.Transition('frame-' + frame_2, 'frame-' + frame_1, 'dualAnimateCss', 'wheel', {
            deltaY: -20,
            exit_animation_name:  'fadeOutDown',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInDown',
            enter_animation_function: 'ease',
        }));
    })(FRAMES_WRAP[i], FRAMES_WRAP[j]);
}

MESSAGES = [
    "no amount of words can describe a fully holistic experience",
    "misunderstanding and lack of communication is at the root of virtually all problems",
    "i am nothing but the collection of my experiences and interactions",
    "the only worry about darkness is what lies within",
    "take everything with a grain of salt; especially your own doubts",
    "appearances can be deceiving, actions are always deceptions",
    "always in pursuit of the unwakeable dream"
];
process_messages = function() {
    for(i = 0; i < MESSAGES.length; ++i) {
        j = Math.floor(Math.random() * (MESSAGES.length - i)) + i;
        message = MESSAGES[j];
        MESSAGES[j] = MESSAGES[i];
        MESSAGES[i] = "kelvin&#45;ism &#35;" + (Math.floor(Math.random() * 90000) + 10000) +"&#58; " + message;
    }
};
marquee_messages = document.querySelector('marquee#messages');
marquee_messages.parentNode.removeChild(marquee_messages);
process_messages();
marquee_messages.innerHTML = "&#x2639; " + MESSAGES.join(" &#x2639; ") + " &#x2639;";
shunts._container.appendChild(marquee_messages);

marquee_worldnews = document.querySelector('marquee#worldnews');
marquee_worldnews.parentNode.removeChild(marquee_worldnews);
worldnews_request = new XMLHttpRequest();
worldnews_regexp = new RegExp("e");
worldnews_request.responseType = 'json';
worldnews_request.onreadystatechange = function() {
    if (worldnews_request.readyState == 4 && worldnews_request.status == 200) {
        headlines = [];
        worldnews_request.response.data.children.forEach(function(o) {
            headlines.push(o.data.title.replace(/[^a-z0-9 .,:;?!&#$%"'_+\-/()]/gi,''));
        });
        marquee_worldnews.innerHTML = "&#x26A0; " + headlines.join(" &#x26A0; ") + " &#x26A0;";
        shunts._container.appendChild(marquee_worldnews);
    }
};
worldnews_request.open("GET", "//www.reddit.com/r/worldnews/top.json?t=day&limit=20", true);
worldnews_request.send();

name_elem = document.querySelector('a#link-home');
reddit_hint = document.querySelector('p#reddit-source');
name_bitmap = 0;

go_into_the_void = function() {
    name_bitmap = 0;
    marquee_messages.classList.remove("hide");
    marquee_worldnews.classList.remove("hide");
    reddit_hint.classList.remove("hide");
    shunts._container.classList.add("background");
    shunts.introduce('frame-home-2', true);
};

document.addEventListener('keydown', (callback = function(event) {
    k = event.keyCode;
    if (k >= 65 && k <= 90) {
        text = name_elem.innerHTML;
        do {
            i = Math.floor(Math.random() * text.length);
        } while(name_bitmap & (1 << i));
        text = name_elem.innerHTML = text.substr(0, i) + String.fromCharCode(k + 32) + text.substr(i + 1);

        name_bitmap &= (name_mask = ((1 << text.length) - 1));

        if ((name_bitmap |= (1 << i)) >= name_mask) go_into_the_void();
    }
}));

document.addEventListener('keydown', function(event) {
    switch(event.keyCode) {
        case 38:
            name_elem.style.fontSize = (1.05 * parseFloat(name_elem.style.fontSize.substr(0, name_elem.style.fontSize.length - 2))) + "em";
            break;
        case 40:
            name_elem.style.fontSize = (0.95238 * parseFloat(name_elem.style.fontSize.substr(0, name_elem.style.fontSize.length - 2))) + "em";
            break;
        default:
            break;
    }
});

name_elem.addEventListener('click', function() {
    name_elem.innerHTML = "kelvin lu"
    name_bitmap = 0;
});

digital_divide_greet_touch = {
    x_pos:  null,
    y_pos:  null,
    within: true,
};
digital_divide_greet.addEventListener('touchstart', function(event) {
    digital_divide_greet_touch.x_pos    = event.touches[0].screenX;
    digital_divide_greet_touch.y_pos    = event.touches[0].screenY;
    digital_divide_greet_touch.within   = true;
});
digital_divide_greet.addEventListener('touchmove', function(event) {
    left_offset = (event.touches[0].screenX - digital_divide_greet_touch.x_pos);
    top_offset = (event.touches[0].screenY - digital_divide_greet_touch.y_pos);
    if (!(digital_divide_greet_touch.within = digital_divide_greet_touch.within && (Math.abs(left_offset) < 5) && (Math.abs(top_offset) < 5))) {
        digital_divide_greet.style.position   = "relative";
        digital_divide_greet.style.top        = top_offset + "px";
        digital_divide_greet.style.left       = left_offset + "px";
        digital_divide_greet.style.opacity    = (opacity = Math.pow(Math.E, -(Math.abs(Math.max(top_offset, left_offset) / 10.0))));
        if (opacity < 0.1) go_into_the_void();
    }
});
digital_divide_greet.addEventListener('touchend', function() {
    digital_divide_greet.style.position   = "static";
    digital_divide_greet.style.top        = "auto";
    digital_divide_greet.style.left       = "auto";
    digital_divide_greet.style.opacity    = "initial";
});
