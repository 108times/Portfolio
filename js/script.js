let ready;
let transform_rotate = 0;
ready = $(document).ready(function () {

    // let menu_toggle = $('button[name="navbar-toggle"]');
    let menu_toggle =$('#navbar-toggle');
    let menu_toggle_icon =$('img[name="navbar-toggle-icon"]');

    menu_toggle.on('click', function () {
    transform_rotate +=90;
    let str = "rotate(";

        let str2 = str.concat(transform_rotate,"deg)");
        console.log(str2);
        menu_toggle.css({"transform": str2});
        // menu_toggle_icon.animate({
        //         transform: 'translateX(90deg)'
        //     },700
        // );


        let header = $('#header');
        this.css
        let headertop = parseInt(header.css("top"));

        if (headertop < 0) {
            header.css({"top": "0"})
        }
        else if (headertop == 0) {
            header.css({"top": "-100vh"})
        }
        // $('#header').css({"top:0"})

    });

    let menu_list = $('#nav-list');

    let menu_item = menu_list.find("li");

    menu_list.on('click' , function () {
        menu_toggle.click();
    })

    });
// let navbarIcon = $('#navbar-toggle-icon');
    //$('#navbar-toggle').toggle( function () {
    //     $('#navbar-toggle').addClass("toggle-button-animation")
    // },function () {
    //     $('#navbar-toggle').removeClass("toggle-button-animation")
    // }
    // let toggle = $('#navbar-toggle').toggle(function () {
    //     $('#navbar-toggle').css({"animation-name": "toggle-nav-animation"})
    // }, function () {
    //     $('#navbar-toggle').css("animation-name":"none";)
    // });


