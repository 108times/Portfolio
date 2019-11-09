let ready;
let transform_rotate = 0;
let this_url = window.location.href;

console.log(this_url);
// console.log(getType(this_url));
ready = $(document).ready(function () {


    function burger_become_x(){
        let borger_icon_1 = $('#navbar-icon i:nth-child(1)');
        let borger_icon_2 = $('#navbar-icon i:nth-child(2)');
        let borger_icon_3 = $('#navbar-icon i:nth-child(3)');
        let borger_icon_4 = $('#navbar-icon i:nth-child(4)');

        borger_icon_1.css({
            "top":"45%",
            "transform":"rotate(45deg)"
        });
        
        borger_icon_2.css({
            "top":"45%",
            "transform":"rotate(-45deg)"
        });
        
        borger_icon_3.css({
            "top":"45%",
            "transform":"rotate(135deg)"
        });
        
        borger_icon_4.css({
            "top":"45%",
            "transform":"rotate(225deg)"
        });
        $('#navbar-icon  :nth-child(n)').css({
            // "background":"white"
        })
    }

     
    function burger_become_menu(){
        let borger_icon_1 = $('#navbar-icon i:nth-child(1)');
        let borger_icon_2 = $('#navbar-icon i:nth-child(2)');
        let borger_icon_3 = $('#navbar-icon i:nth-child(3)');
        let borger_icon_4 = $('#navbar-icon i:nth-child(4)');

        borger_icon_1.css({
            "top":"10%",
            "transform":"rotate(0)"
        });
        
        borger_icon_2.css({
            "top":"45%",
            "transform":"rotate(0)"
        });
        
        borger_icon_3.css({
            "top":"45%",
            "transform":"rotate(0)"
        });
        
        borger_icon_4.css({
            "top":"80%",
            "transform":"rotate(0)"
        });

        $('#navbar-icon  :nth-child(n)').css({
            // "background":"black"
        })
    }


    let menu_toggle = $('#navbar-toggle');
    menu_toggle.on('click', function () {
    transform_rotate +=90;
    let str = "rotate(";

        let str2 = str.concat(transform_rotate,"deg)");
   

        let header = $('#header');
        let headertop = parseInt(header.css("top"));

        if (headertop < -700) {
            header.css({"top": "0"})
            menu_toggle.css({"transform": str2});
           burger_become_x();
        }
        else if (headertop == 0) {
            header.css({"top": "-100vh"})
            menu_toggle.css({"transform": str2});
            burger_become_menu();
        }

    });

    let menu_list = $('#nav-list');

    menu_list.on('click' , function () {
        menu_toggle.click();
    })

    let menu_ite =menu_list.find('li');
    let menu_item = menu_ite.find('a');
    let nav = $('#nav');
    let navColor =nav.css("background");

    menu_item.mouseenter( function () {
        let txt = this.text;
        let swidth = $(this).css("width");
        let string = "var(--"+txt+"-color)";
        console.log(string);
        $(this).css({
            "background-color":"#253155",
        })
        $(this).parent().css({
            "width":"30%"
        })
        // nav.css({"color":string});
    }).mouseleave(function () {
        // nav.css({"background":navColor});
        $(this).css({
            "background-color":"inherit",
        })
        $(this).parent().css({
            "width":"80%"
        })
    });

    let next =  $('#next-toggle');
    // let main = $('#main');
    // let offset =main.css("left");
    // console.log("offset = "+offset);
    //  //offset =offset.replace(
    //  offset = parseInt(main.css("left"));
    //
    // console.log("offset = "+offset);
    next.on('click', function () {
        console.log(this_url);

   if (this_url.contains('#portfolio')){
                next.attr("href","#contact");
        };

        // if (parseInt(main.css("left")) >= -200){
        //     offset = offset - 100;
        //     $('#main').css({
        //         "left":offset+"%"
        //     })
        //     console.log(offset);
        // }
        // console.log("offset = "+offset);
    })

    });


