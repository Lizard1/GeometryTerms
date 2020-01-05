function justdoit() {

    var headTemplate = $("#headerTempl").html(),
        htmlCod = Mustache.to_html(headTemplate, describe);
    $("#templatehead").append(htmlCod);

    var midletemplate = $("#midletemplate").html(),
        htmlCod = Mustache.to_html(midletemplate, describe);
    $("#centertemplate").append(htmlCod);


    var cleaning = new Cleaner(),
        paint = new Painter(),
        data = new DataProvider(),
        discribeEachDefinition = new Discribing();

       // firstLoad(cleaning, data, paint, discribeEachDefinition);

    //функция осуществления поиска(сортировки)
    $("#Search").keyup(function () {
        var listItems = $("#listDefinitions li");

        for (var i = 0; i < listItems.length; i++) {
            var value = $(this).val(),
                valLow = value.toLowerCase();
            var $li = $(listItems[i]),
                liValue = $li.html(),
                liValueLowRegistered = liValue.toLowerCase(),
                indexOf = liValueLowRegistered.indexOf(valLow);

            if (indexOf >= 0) {
                $li.show();
            }
            else {
                $li.hide();
            }
        }
    });

    $(".jq-navigate").click(function(){
        var id = $(this).attr("id"),
            buttonList = data.lokingFor(id),
            max = buttonList.length;

        cleaning.clearForButtonClick();
        for(var i= 0; i< max; i+=1){
            var nameSSS = buttonList[i].nameDef,
            elemSSS = $("<li></li>");
            elemSSS.html(nameSSS);
            elemSSS.addClass("defenit");
            elemSSS.attr("id", i);
            $("#listDefinitions").append(elemSSS);
        }
        paint.setDistinguich();
        discribeEachDefinition.showDefinition(id, cleaning, data);
    });
}