/**
 * Created by Sergey on 13.04.2016.
 */

function DataProvider(){};

DataProvider.prototype.filds = {
    "fullList" : "jq-allDefinitions",
    "geometryList" : "descriptiveGeometry",
    "engineeringList" : "engineeringGraphics",
    "computerList" : "computerGraphics" ,
    "programmingList" : "graphicsProgramming",
    "otherList" : "other"
};

DataProvider.prototype.choseDefenition = function (id, buttonId) {
    if (buttonId === this.filds.fullList) {
        return {
            "definition": formulations.forms[id].definition,
            "etymology": formulations.forms[id].etymology,
            "relatedWords":  formulations.forms[id].relatedWords,
            "literarySource":formulations.forms[id].literarySource,
            "imgUrl": formulations.forms[id].imgUrl
        }
    } else if (buttonId === this.filds.geometryList) {
        return {
            "definition":formulations.Geometry[id].definition,
            "etymology": formulations.Geometry[id].etymology,
            "relatedWords":  formulations.Geometry[id].relatedWords,
            "literarySource":formulations.Geometry[id].literarySource,
            "imgUrl": formulations.Geometry[id].imgUrl
        }
    } else if (buttonId === this.filds.engineeringList) {
        return {
            "definition":formulations.EngineersGrafic[id].definition,
            "etymology": formulations.EngineersGrafic[id].etymology,
            "relatedWords":  formulations.EngineersGrafic[id].relatedWords,
            "literarySource":formulations.EngineersGrafic[id].literarySource,
            "imgUrl": formulations.EngineersGrafic[id].imgUrl
        }
    } else if (buttonId === this.filds.computerList) {
        return {
            "definition":formulations.MachineGrafic[id].definition,
            "etymology": formulations.MachineGrafic[id].etymology,
            "relatedWords":  formulations.MachineGrafic[id].relatedWords,
            "literarySource":formulations.MachineGrafic[id].literarySource,
            "imgUrl": formulations.MachineGrafic[id].imgUrl
        }
    } else if (buttonId === this.filds.programmingList) {
        return {
            "definition":formulations.ProgrammingGrafic[id].definition,
            "etymology": formulations.ProgrammingGrafic[id].etymology,
            "relatedWords":  formulations.ProgrammingGrafic[id].relatedWords,
            "literarySource":formulations.ProgrammingGrafic[id].literarySource,
            "imgUrl":formulations.ProgrammingGrafic[id].imgUrl
        }
    } else if (buttonId === this.filds.otherList) {
        return {
            "definition":formulations.other[id].definition,
            "etymology": formulations.other[id].etymology,
            "relatedWords":  formulations.other[id].relatedWords,
            "literarySource":formulations.other[id].literarySource,
            "imgUrl":formulations.other[id].imgUrl
        }
    }
};


DataProvider.prototype.lokingFor = function(id){
    if (id === this.filds.fullList) {
        return formulations.forms;

    } else if (id === this.filds.geometryList) {
        return formulations.Geometry;

    } else if (id === this.filds.engineeringList) {
        return formulations.EngineersGrafic;

    } else if (id === this.filds.computerList) {
        return formulations.MachineGrafic;

    } else if (id === this.filds.programmingList) {
        return formulations.ProgrammingGrafic;

    } else if (id === this.filds.otherList) {
        return formulations.other;
    }
};