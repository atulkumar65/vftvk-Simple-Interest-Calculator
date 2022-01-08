window.onload = function() {
    document.getElementById("myrate").innerHTML = `${document.getElementById("rate").value}%`;
}

function sliderChange(){
    var slider = document.getElementById("rate");
    document.getElementById("myrate").innerHTML = `${slider.value} %`;
}

function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("years").value;
    si = p*(1+(r/100)*t) - p;
    year = 202 + t;

    document.getElementById("result").innerHTML = `If you deposit <mark>${p}</mark>,<br> at an interest of <mark>${r}%</mark>.<br> You will receive an amount of <mark>${si.toFixed()}</mark>,<br> in the year <mark>${year}</mark>`;
}
        