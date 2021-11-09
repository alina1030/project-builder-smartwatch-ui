function updateClock()
{
    var now = new Date();
    var hou = now.getHours(),
        min = now.getMinutes(),
        days = now.getDay();
        
        var ids=["hours","minutes","day"];
        var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var values=[hou,min,week[days]];
        for(var i=0;i<ids.length;i++)
         document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock(){
    updateClock();
    window.setInterval("updateClock()",1);
}