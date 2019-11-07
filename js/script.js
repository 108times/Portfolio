$(document).ready(function () {
    $('#navbar-toggle').click( function () {

        let header = $('#header');
        let headertop = parseInt(header.css("top"));

        if(headertop < 0)
        {
            header.css({"top":"0"})
        }
        else if(headertop == 0){
            header.css({"top":"-100vh"})
        }
        // $('#header').css({"top:0"})
    });

    $('#navbar-toggle-icon').click(function () {
        $('#navbar-toggle').click();
    });
});


