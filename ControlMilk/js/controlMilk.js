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
  let opcion;
  do {
    let nombreF = prompt("Ingrese el nombre de la finca a registrar");
    let precioL = parseFloat(prompt("Ingrese el precio por litro de leche de vaca"));
    let lunes = parseInt(prompt("Ingrese los litros de leche producidos el día lunes"));
    let martes = parseInt(prompt("Ingrese los litros de leche producidos el día martes"));
    let miercoles = parseInt(prompt("Ingrese los litros de leche producidos el día miércoles"));
    let jueves = parseInt(prompt("Ingrese los litros de leche producidos el día jueves"));
    let viernes = parseInt(prompt("Ingrese los litros de leche producidos el día viernes"));

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
  } while (opcion.toLowerCase() === "si");
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
  opcion = prompt("¿Desea ingresar otra Finca? si/no");
  if (opcion.toLowerCase() == "si") {
    alert("Ingrese los datos de la nueva finca");
    control();
  } else {
    ingresar();
  }
}

function promedioLeche() {
  let sumaT = 0;
  let ingresosT = 0.0;
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

  let promedioLeche = sumaT / (finca.length * 5);

  alert(`Total de litros: ${sumaT}\nIngresos totales: ${ingresosT}\nPromedio de litros por día: ${promedioLeche}`);

  ingresar(); 
}
ingresar();