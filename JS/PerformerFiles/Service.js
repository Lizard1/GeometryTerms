/**
 * Created by Sergey on 13.04.2016.
 */

//class for cleaning
function Cleaner(){};
Cleaner.prototype.clear = function () {
    $(".etymology").html("");
    $(".discription").html("");
    $(".relatedWords").html("");
    $(".sourses").html("");
    $("#divForDisplay").html("");
};

Cleaner.prototype.clearForButtonClick = function () {
    $("#listDefinitions").html("");
    $(".etymology").html("");
    $(".discription").html("");
    $(".relatedWords ").html("");
    $(".sourses").html("");
    $("#divForDisplay").html("");
};

function Painter(){};

Painter.prototype.setDistinguich = function () {
    $(".defenit").click( function () {
        $("li.backGroundForLi").removeClass("backGroundForLi");
        $(this).addClass("backGroundForLi");
    });
};