function valoracion() {
    let range = document.getElementById("range").value;
    window.alert("Has valorado con " + range);
}

function cuenta() {
    let mostrarCuenta = document.getElementById("inputEspacio2").value;
    let mostrarCuenta2 = document.getElementById("inputEspacio3").value;
    let mostrarCuenta3 = document.getElementById("inputEspacio4").value;
    let mostrarCuenta4 = document.getElementById("inputEspacio5").value;
    let mostrarCuenta5 = document.getElementById("inputEspacio6").value;

    if ((mostrarCuenta == "") || (mostrarCuenta2 == "") || (mostrarCuenta3 == "") || (mostrarCuenta4 == "") || (mostrarCuenta5 == "")) {
        window.alert("Ingrese datos bancarios");
    } else {
        window.alert("Le informamos que su cuenta bancaria es: ES " + mostrarCuenta + '-' + mostrarCuenta2 + '-' + mostrarCuenta3 + '-' + mostrarCuenta4 + '-' + mostrarCuenta5);
    }
}

let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
function diaSemana() {
    let date = new Date(document.getElementById("date").value);
    alert("La fecha seleccionada en el elemento de fecha es de un " + dias[date.getDay()]);
}

function darProvincia(cpostal) {
    var cp_provincias = {
        01: "Alava", 02: "Albacete", 03: "Alicante", 04: "Almeria", 05: "Avila",
        06: "Badajoz", 07: "Baleares", 08: "Barcelona", 09: "Burgos", 10: "Caceres",
        11: "Cadiz", 12: "Castellon", 13: "Ciudad Real", 14: "Cordoba", 15: "Coruña",
        16: "Cuenca", 17: "Gerona", 18: "Granada", 19: "Guadalajara", 20: "Guipuzcoa",
        21: "Huelva", 22: "Huesca", 23: "Jaen", 24: "Leon", 25: "Lerida",
        26: "La Rioja", 27: "Lugo", 28: "Madrid", 29: "Malaga", 30: "Murcia",
        31: "Navarra", 32: "Orense", 33: "Asturias", 34: "Palencia", 35: "Las Palmas",
        36: "Pontevedra", 37: "Salamanca", 38: "Santa Cruz de Tenerife", 39: "Cantabria", 40: "Segovia",
        41: "Sevilla", 42: "Soria", 43: "Tarragona", 44: "Teruel", 45: "Toledo",
        46: "Valencia", 47: "Valladolid", 48: "Vizcaya", 49: "Zamora", 50: "Zaragoza",
        51: "Ceuta", 52: "Melilla"
    };
    if (cpostal.length == 5 && cpostal <= 52999 && cpostal >= 1000)
        return cp_provincias[parseInt(cpostal.substring(0, 2))];
    else
        return " ";
}
var inputCP = document.getElementById('entradacp');
inputCP.onkeyup = function () {
    document.getElementById('salidaprovincia').value = darProvincia(inputCP.value);
}

