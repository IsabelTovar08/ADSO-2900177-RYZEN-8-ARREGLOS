let usuarios = [];
function ingresar(){
   let ingreso = parseInt(prompt(`Hola que opcion desea realiza:\n1.Registrarse\n2.Inciar sesion`));

   switch (ingreso) {
    case 1:
      registrar();
      break;
   
      case 2:
      login();
      break;
   
    default:
      alert(`Opcion no valida`);
      break;
   }
}

function registrar() {
  let estado;
  let name;
  let password;
  let saldo = 0;

  do {
    name = prompt("Ingrese un nombre:");
    if (name !== "") {
      password = prompt(
        `Ingrese una contraseña:\nTenga en cuenta que debe tener minimo 8 caracteres`
      );

      if (password.length >= 8) {
        usuarios.push({
          name: name,
          password: password,
          saldo: saldo,
        });
        alert(`Usuario ${name} fue registrado con exito`);
        estado = 1;
        ingresar();
      } else {
        alert(`La contraseña debe tener minimo 8 caracteres`);
        estado = 0;
      }
    } else {
      alert(`El nombre no puede estar vacio`);
      estado = 0;
    }
  } while (estado !== 1);
}

function login() {
  let nameU;
  let passwordU;

  nameU = prompt("Ingrese su nombre de usuario: ");
  passwordU = prompt("Ingrese su contraseña");
  for (i = 0; i < usuarios.length; i++) {
    if (
      usuarios[i].name === nameU &&
      usuarios[i].password === passwordU
    ) {
      alert(`El usuario ${nameU} se a encontrado en la posición ${i}`);
      banco(usuarios[i]);
    }else{

      alert( 'posición: '+ i + " Usuario o contraseña no se a encontrado ");
    }
  }
}

function banco(usuario) {
  let operaciones;
  let retiro;
  let ingreso;

  menu = `Que operacion desea realizar: \n 1.Consultar sueldo \n 2.Retiro \n 3.Ingreso \n 4.Salir`;
  do {
    operaciones = parseInt(prompt(menu));

    switch (operaciones) {
      case 1:
        alert("Su sueldo es de: " + usuario.saldo);
        break;

      case 2:
        retiro = parseFloat(prompt("Cuanto dinero desea retirar"));
        if (retiro > usuario.saldo || retiro <= 0) {
          alert("Saldo insuficiente");
        } else {
          usuario.saldo -= retiro
          alert(`Se a retirado $${retiro} su nuevo saldo es de: $${usuario.saldo}`);
        }
        break;

      case 3:
        ingreso = parseFloat(prompt("Cuanto dinero desea ingresar"));
        if (ingreso <= 0) {
          alert("El ingreso debe ser mayor de 0");
        } else {
          usuario.saldo += ingreso;
          alert(`Se ha ingresado $${ingreso} su nuevo saldo es de: $${usuario.saldo}`)
        }
        break;
      case 4:
        alert("Gracias por su visita");
        ingresar();
        break;

      default:
        alert("Operacion no valida");
        break;
    }
  } while (operaciones < 4);
}

