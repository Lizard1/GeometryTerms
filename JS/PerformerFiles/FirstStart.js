/**
 * Created by Sergey on 13.04.2016.
 */

/*function showFirstTimeOneDefenition(id, cleaning, data) {
    cleaning.clear();
    var variable = id;
    var text11 = data.choseDefenition(variable, "jq-allDefinitions");
    $(".etymology").append(text11.etymology);
    $(".discription").append(text11.definition);
    $(".relatedWords ").append(text11.relatedWords);
    $(".sourses").append(text11.literarySource);

    var nullurl = "";
    if (text11.imgUrl !== nullurl) {
        debugger;
        var picture = $("<img/>");
        picture.attr("tabindex", 0);
        picture.attr("src", text11.imgUrl);
        $("#divForDisplay").append(picture);
    }
}

function firstLoad(cleaning, data, paint, discribeEachDefinition){
    var id = "jq-allDefinitions";
    var buttonList = data.lokingFor(id);

    cleaning.clearForButtonClick();

    for(var i=0; i< buttonList.length; i+=1){
        var nameSSS = buttonList[i].nameDef;
        var elemSSS = $("<li></li>");
        elemSSS.html(nameSSS);
        elemSSS.addClass("defenit");
        elemSSS.attr("id", i);
        $("#listDefinitions").append(elemSSS);
    }

    showFirstTimeOneDefenition(0, cleaning, data);
    $("li#0").addClass("backGroundForLi");
    paint.setDistinguich();
    discribeEachDefinition.showDefinition(id);

};*/