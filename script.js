window.onload = function() {
    document.getElementById("myrate").innerHTML = `${document.getElementById("rate").value}%`;
}

function sliderChange(){
    var slider = document.getElementById("rate");
    document.getElementById("myrate").innerHTML = `${slider.value} %`;
}

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    if(principal<=0)
    {
        alert("Please enter a positive number as Principal Amount");
        document.getElementById("principal").focus();
    } else {
        var si = principal*rate*years/100;
        var year = new Date().getFullYear()+parseInt(years);;
        document.getElementById("result").innerHTML = `If you deposit <mark>${principal}</mark>,<br> at an interest of <mark>${rate}%</mark>.<br> You will receive an amount of <mark>${si.toFixed()}</mark>,<br> in the year <mark>${year}</mark>`;
    }
}
        