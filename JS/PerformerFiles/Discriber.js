function Discribing(){};

Discribing.prototype.showDefinition = function(buttonId, cleaning, data){

    $(".defenit").click(function() {
        debugger;
        cleaning.clear();
        var variable = $(this).attr("id"),
            text = data.choseDefenition(variable, buttonId),
            oop ={
            "etymology1" : text.etymology,
            "discriptionDesc2": text.definition,
            "relatedWords3": text.relatedWords,
            "soursesDesc4": text.literarySource,
            "urlPick": text.imgUrl
            };

        var tryingTemplate = $("#exampleTemplateTrying").html(),
            htmlCodTemplateTrying = Mustache.to_html(tryingTemplate, oop);
        $("#oop222").html(htmlCodTemplateTrying);

        if (text.imgUrl === "-") {
            $("img#imageForDefinitions").css("display", "none");
        }
    });
};

