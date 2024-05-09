let usuarios = [];
function ingresar() {
  let i = 0;
  do {
    let ingreso = parseInt(
      prompt(
        `Bienvenido(a), ¿qué opción desea realizar?\n1. Registrarse\n2. Iniciar sesión\n3. Salir `
      )
    );

    switch (ingreso) {
      case 1:
        i = 1;
        registrar();
        break;

      case 2:
        i = 1;
        login();
        break;

      case 3:
        alert(`Gracias por usar nuestro servicio`);
        i = 1;
        break;
      default:
        alert(`Opción no valida `);
        i = 0;
        break;
    }
  } while (i !== 1);
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
        `Ingrese una contraseña:\nTenga en cuenta que debe tener mínimo 8 caracteres`
      );

      if (password.length >= 8) {
        usuarios.push({
          name: name,
          password: password,
          saldo: saldo,
        });
        alert(`Usuario ${name} fue registrado con éxito`);
        estado = 1;
        ingresar();
      } else {
        alert(`La contraseña debe tener mínimo 8 caracteres`);
        estado = 0;
      }
    } else {
      alert(`El nombre no puede estar vacío`);
      estado = 0;
    }
  } while (estado !== 1);
}

function login() {
  let nameU;
  let passwordU;

  do {
    nameU = prompt("Ingrese su nombre de usuario");
    passwordU = prompt("Ingrese su contraseña");

    if (nameU === "" || passwordU === "") {
      alert("Los datos no pueden estar vacíos");
    } else {
      let usuario = usuarios.find
      (
        function (usuario) {
        return usuario.name === nameU && usuario.password === passwordU;
      }
      );

      if (usuario) {
        alert("Bienvenido(a) " + usuario.name);
        banco(usuario);
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    }
  } while (nameU === "" || passwordU === "");
}

function banco(usuario) {
  let operaciones;
  let retiro;
  let ingreso;
  let i =0;

  menu = `Que operación desea realizar: \n 1.Consultar saldo \n 2.Retiro \n 3.Ingreso \n 4.Salir`;
  do {
    operaciones = parseInt(prompt(menu));
    switch (operaciones) {
      case 1:
        i = 0;
        alert("Su saldo es de: $" + usuario.saldo);
        break;

      case 2:
        i = 0;
        retiro = parseFloat(prompt("Cuanto dinero desea retirar"));
        if (retiro > usuario.saldo || retiro <= 0) {
          alert("Saldo insuficiente");
        } else {
          usuario.saldo -= retiro;
          alert(
            `Se a retirado $${retiro} su nuevo saldo es de: $${usuario.saldo}`
          );
        }
        break;

      case 3:
        i = 0;
        ingreso = parseFloat(prompt("Cuanto dinero desea ingresar"));
        if (ingreso <= 0) {
          alert("El ingreso debe ser mayor de 0");
        } else {
          usuario.saldo += ingreso;
          alert(
            `Se ha ingresado $${ingreso} su nuevo saldo es de: $${usuario.saldo}`
          );
        }
        break;

      case 4:
        i = 1;
        alert("Gracias por su visita");
        ingresar();
        break;

      default:
        i = 0;
        alert("Operación  no valida");
        break;
    }
  } while (i !== 1);
}
