function celsius() {

    var fahr= document.getElementById("fah").value;

    var celsi = (5/9)*(fahr - 32);


    if(celsi > 10){
        document.getElementById("image").src="image/sun.png";
        document.getElementById("c").innerHTML="Its a nice day and it's "+ celsi.toFixed(2)+ " degree Celsius";
    }
    else {
        document.getElementById("image").src = "image/snow.png";
        document.getElementById("c").innerHTML = "Its snowing out side and it's " + celsi.toFixed(2) + " degree Celsius. ";
    }

}
function fahrenheit() {
    var celsiu= document.getElementById("cel").value;

    var fahre = celsiu*(9/5)+32;


    if(celsiu > 10){
        document.getElementById("image").src="image/sun.png";
        document.getElementById("f").innerHTML="Its a nice day and it's "+ fahre.toFixed(2)+ " degree Celsius";
    }
    else {
        document.getElementById("image").src = "image/snow.png";
        document.getElementById("f").innerHTML = "Its snowing out side and it's " + fahre.toFixed(2) + " degree Celsius. ";
    }
}

