let idUsuario = 0;
let idAlquiler = 0;
let idTipoInstancia = 0;

class Sistema {
  constructor() {
    this.usuarios = [];
    this.tiposInstancia = [];
  }

  nuevaInstancia(optimizacion, size, cA, cE, stockInicial) {
    let instancia = new TipoInstancia(optimizacion, size, cA, cE, stockInicial);

    this.tiposInstancia.push(instancia);
  }

  /**
   * Función para agregar usuarios al listado de usuarios
   * @param {String} nombre
   * @param {String} apellido
   * @param {String} nombreUsuario
   * @param {String} contraseña
   * @param {Number} tcredito
   * @param {Number} cvc
   */
  nuevoUsuario(nombre, apellido, nombreUsuario, contraseña, tcredito, cvc) {
    let usuario = new Usuario(nombre, apellido, nombreUsuario, contraseña, tcredito, cvc);

    this.usuarios.push(usuario);
  }

  /**
   *  Se introducen los datos que deberán ser precargados al iniciar el programa. Usuarios, admin, instancias, etc.
   */
  precargarDatos() {
    this.nuevaInstancia('c7', 'small', 20, 2.5, 10);
    this.nuevaInstancia('c7', 'medium', 30, 3.5, 1);
    this.nuevaInstancia('c7', 'large', 50, 6.0, 0);
    this.nuevaInstancia('r7', 'small', 35, 4.0, 4);
    this.nuevaInstancia('r7', 'medium', 50, 6.5, 500);
    this.nuevaInstancia('r7', 'large', 60, 7.0, 11);
    this.nuevaInstancia('i7', 'medium', 30, 3.5, 6);
    this.nuevaInstancia('i7', 'large', 50, 6.5, 11);

    this.nuevoUsuario('Juan', 'Pérez', 'perez.juan777', 'Contraseña123', '4013253518046042', 736);
    this.usuarios[0].admin = false;
    this.usuarios[0].estado = 'activo';
  }
}

class Usuario {
  constructor(nombre, apellido, nombreUsuario, contraseña, tCredito, cvc, admin) {
    this.id = idUsuario++;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nombreUsuario = nombreUsuario;
    this.contraseña = contraseña;
    this.tCredito = tCredito;
    this.cvc = cvc;
    this.admin = admin;
    this.estado = 'pendiente';
  }
}

class TipoInstancia {
  constructor(optimizacion, size, cA, cE, stockInicial) {
    this.id = idTipoInstancia++;
    this.optimización = optimizacion;
    this.size = size;
    this.cA = cA;
    this.cE = cE;
    this.stockInicial = stockInicial;
    this.stock = stockInicial;
  }
}

class Alquiler {
  constructor(instancia) {
    this.id = idAlquiler++;
    this.encendidos = 1;
    this.encendido = true;
    this.instancia = instancia;
  }
}
