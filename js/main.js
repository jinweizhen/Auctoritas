/**
 * Created by jinjin on 15/9/14.
 */

$(document).ready(function(){
    $("#header-button").mouseover(function(){
        $("header").addClass("grayscale");
    });
    $("#header-button").mouseout(function(){
        $("header").removeClass("grayscale");
    });
});