let finca = [];

function ingresar() {
  let opcion = 0;
  do {
    opcion = parseInt(
      prompt(
        `Bienvenido a nuestro aplicativo ControlMilk, el sistema le ofrece las siguientes opciones:\n1. Registrar una nueva finca\n2. Ver las fincas registradas\n3. Ver el promedio de todas las fincas\n4. Salir `
      )
    );
    switch (opcion) {
      case 1:
        control();
        opcion = 1;
        break;
      case 2:
        mostrar();
        opcion = 1;
        break;
      case 3:
        promedioLeche();
        opcion = 1;
        break;
      case 4:
        alert("Gracias por visitar el programa");
        opcion = 1;
        break;

      default:
        alert("Opcion no valida");
        opcion = 0;
        break;
    }
  } while (opcion == 0);
}

function control() {
  let respuesta = 0;
  let nombreF;
  do {
    nombreF = prompt("Ingrese el nombre de la finca a registrar");
    var regex = new RegExp("^[A-Z]+$", "i");
    if (regex.test(nombreF)) {
      alert(` Bienvenido  finca ${nombreF}`);
      respuesta = 1;
    } else {
      alert("Nombre no valido , Ingrese correctamente ");
      respuesta = 0;
      break;
    }
  } while (respuesta != 1);
  let precioL, lunes, martes, miercoles, jueves, viernes;

  do {
    precioL = parseFloat(
      prompt("Ingrese el precio por litro de leche de vaca")
    );
  } while (isNaN(precioL));

  do {
    lunes = parseInt(
      prompt("Ingrese los litros de leche producidos el día lunes")
    );
  } while (isNaN(lunes));

  do {
    martes = parseInt(
      prompt("Ingrese los litros de leche producidos el día martes")
    );
  } while (isNaN(martes));

  do {
    miercoles = parseInt(
      prompt("Ingrese los litros de leche producidos el día miércoles")
    );
  } while (isNaN(miercoles));

  do {
    jueves = parseInt(
      prompt("Ingrese los litros de leche producidos el día jueves")
    );
  } while (isNaN(jueves));

  do {
    viernes = parseInt(
      prompt("Ingrese los litros de leche producidos el día viernes")
    );
  } while (isNaN(viernes));

  finca.push({
    nombreF,
    precioL,
    lunes,
    martes,
    miercoles,
    jueves,
    viernes,
  });
  mostrar();
}

function mostrar() {
  alert(finca.length + " Fincas registradas");

  for (let i = 0; i < finca.length; i++) {
    let sumaTotal =
      finca[i].lunes +
      finca[i].martes +
      finca[i].miercoles +
      finca[i].jueves +
      finca[i].viernes;
    let precioTotal = finca[i].precioL * sumaTotal;
    let promedioLeche = sumaTotal / 5; // Promedio de los 5 días

    alert(
      `
        Producción de leche para la Finca ${finca[i].nombreF}:
        precio por litro de leche $ ${finca[i].precioL}
        Lunes: ${finca[i].lunes} litros
        Martes: ${finca[i].martes} litros
        Miércoles: ${finca[i].miercoles} litros
        Jueves: ${finca[i].jueves} litros
        Viernes: ${finca[i].viernes} litros
        Suma total de litros: ${sumaTotal} litros
        Precio total: $ ${precioTotal}
        Promedio de litros por día: ${promedioLeche} litros
        `
    );
  }

  validar();
}
function validar() {
  let respuesta = 0;
  do {
    opcion = prompt("¿Desea ingresar otra Finca? si/no");
    if (opcion.toLowerCase() == "si") {
      respuesta = 1;
      alert("Ingrese los datos de la nueva finca");
      control();
    } else if (opcion.toLowerCase() == "no") {
      respuesta = 1;
      ingresar();
    } else {
      respuesta = 0;
      alert("digite una opcion valida");
    }
  } while (respuesta != 1);
}

function promedioLeche() {
  let sumaT = 0;
  let ingresosT = 0.0;
  let promedioLeche = 0;
  for (let i = 0; i < finca.length; i++) {
    let sumaTotal =
      finca[i].lunes +
      finca[i].martes +
      finca[i].miercoles +
      finca[i].jueves +
      finca[i].viernes;

    sumaT += sumaTotal;
    let ingresos = finca[i].precioL * sumaTotal;
    ingresosT += ingresos;
  }

  promedioLeche = sumaT / (finca.length * 5);

  alert(
    `Total de litros: ${sumaT}\nIngresos totales: ${ingresosT}\nPromedio de litros por día: ${promedioLeche}`
  );

  ingresar();
}

