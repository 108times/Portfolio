let ready;
let transform_rotate = 0;
ready = $(document).ready(function () {

    let menu_toggle = $('#navbar-toggle');


    menu_toggle.on('click', function () {
    transform_rotate +=90;
    let str = "rotate(";

        let str2 = str.concat(transform_rotate,"deg)");
        menu_toggle.css({"transform": str2});

        let header = $('#header');
        let headertop = parseInt(header.css("top"));

        if (headertop < 0) {
            header.css({"top": "0"})
        }
        else if (headertop == 0) {
            header.css({"top": "-100vh"})
        }

    });

    let menu_list = $('#nav-list');

    menu_list.on('click' , function () {
        menu_toggle.click();
    })

    });


