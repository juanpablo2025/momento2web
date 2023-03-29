const inicioSesion = document.querySelector('#inicioSesion');
const salir = document.querySelector('#salir');
const portatil = document.querySelector('#portatil');
const cliente = document.querySelector('#cliente');
const celular = document.querySelector('#celular');
const guardarPortatil = document.querySelector('#guardarPortatil');
const guardarCelular = document.querySelector('#guardarCelular');
const guardarCliente = document.querySelector('#guardarCliente');
const volverPortatil = document.querySelector('#btnVolverPortail');
const volverCelular = document.querySelector('#btnVolverCelular');
const volverCliente = document.querySelector('#btnVolverCliente');
const volverP = document.querySelector('#btnVolverP');
const volverC = document.querySelector('#btnVolverC');
const usuario ='usuario';
const contra='usuario';

const iniciarSesion = () => {
    const nombre = document.querySelector('#nombre');
    const contrasena = document.querySelector('#contrasena');
    const validar = document.querySelector('#validar');

    if ((nombre.value == usuario && contrasena.value == contra)) {
        const inicio = document.querySelector('#login');
        
        inicio.classList.add('ocultar');
        

        nombre.value = '';
        contrasena.value = '';
        validar.textContent = '';
    } else if (nombre.value == '' && contrasena.value == '') {
        validar.textContent = '';
    } else {
        validar.textContent = alert( 'Contraseña incorrecta, vuelve a intentarlo');
    }
}
const cerrarSesion = () => {
    const inicio = document.querySelector('#login');
    const menu = document.querySelector('#menu');
    const formPortatil = document.querySelector('#formPortatil');
    const formCelular = document.querySelector('#formCelular');
    const formCliente = document.querySelector('#formCliente');

    inicio.classList.remove('ocultar');
    menu.classList.remove('ocultar');
    formPortatil.classList.remove('ocultar');
    formCliente.classList.remove('ocultar');
    formCelular.classList.remove('ocultar');
}

const regresar =()=>{
    
    const menu = document.querySelector('#menu');
    const formPortatil = document.querySelector('#formPortatil');
    const formCelular = document.querySelector('#formCelular');
    const formCliente = document.querySelector('#formCliente');
    const cardP = document.querySelector('#cardP');
    const cardC = document.querySelector('#cardC');
    menu.classList.remove('ocultar');
    formPortatil.classList.remove('ocultar');
    formCliente.classList.remove('ocultar');
    formCelular.classList.remove('ocultar');
    cardP.classList.add('ocultar');
    cardC.classList.add('ocultar');

}

const menuPortatil = () => {
    const menu = document.querySelector('#menu');
    const formPortatil = document.querySelector('#formPortatil');
    const cardP = document.querySelector('#cardP');
    const cardC = document.querySelector('#cardC');

    menu.classList.add('ocultar');
    formPortatil.classList.remove('ocultar');

    cardP.classList.add('ocultar');
    cardC.classList.add('ocultar');
}

const menuCelular = () => {
    const menu = document.querySelector('#menu');
    const formPortatil = document.querySelector('#formPortatil');
    const formCelular = document.querySelector('#formCelular');
    const cardP = document.querySelector('#cardP');
    const cardC = document.querySelector('#cardC');

    menu.classList.add('ocultar');
    formPortatil.classList.add('ocultar');
    formCelular.classList.remove('ocultar');

    cardP.classList.add('ocultar');
    cardC.classList.add('ocultar');
}

const menuCliente = () => {
    const menu = document.querySelector('#menu');
    const formPortatil = document.querySelector('#formPortatil');
    const formCelular = document.querySelector('#formCelular');
    const formCliente = document.querySelector('#formCliente');
    const cardP = document.querySelector('#cardP');
    const cardC = document.querySelector('#cardC');

    menu.classList.add('ocultar');
    formPortatil.classList.add('ocultar');
    formCelular.classList.add('ocultar');
    formCliente.classList.remove('ocultar');
    cardP.classList.add('ocultar');
    cardC.classList.add('ocultar');
}

const cardPortatil = () => {
    const cardP = document.querySelector('#cardP');
    const formPortatil = document.querySelector('#formPortatil');
    const formCelular = document.querySelector('#formCelular');
    const formCliente = document.querySelector('#formCliente');

    const nombrePortatil = document.querySelector('#nombrePortatil');
    const referenciaPortatil = document.querySelector('#referenciaPortatil');
    const codigoPortatil = document.querySelector('#codigoPortatil');
    const valorPortatil = document.querySelector('#valorPortatil');
    const cantidadPortatil = document.querySelector('#cantidadPortatil');
    const imagenPl = document.querySelector('#imagenPortatil');

    if ((codigoPortatil.value != '') && (nombrePortatil.value != '') && (referenciaPortatil.value != '') && (valorPortatil.value != '') && (cantidadPortatil.value != '') && (imagenPortatil.value != '')) {
        cardP.classList.remove('ocultar');
        formPortatil.classList.add('ocultar');
        formCelular.classList.add('ocultar');
        formCliente.classList.add('ocultar');

        const nombrecardp = document.querySelector('#nombrecardp');
        const codigo = document.querySelector('#codigo');
        const referencia = document.querySelector('#referencia');
        const precio = document.querySelector('#precio');
        const cantidad = document.querySelector('#cantidad');
        const imgUpload = document.querySelector('#imgUpload');

        const imagen = imagenPl.files;
        const ruta = URL.createObjectURL(imagen[0]);

        
      
        
        nombrecardp.innerHTML = 'Nombre: ' + nombrePortatil.value;
        codigo.innerHTML = 'Codigo: ' + codigoPortatil.value;
        referencia.innerHTML = 'Referencia: ' + referenciaPortatil.value;
        precio.innerHTML = 'Precio: ' + valorPortatil.value;
        cantidad.innerHTML = 'Cantidad: ' + cantidadPortatil.value;
        imgUpload.src = ruta;

        
        nombrePortatil.value = '';
        codigoPortatil.value = '';
        referenciaPortatil.value = '';
        valorPortatil.value = '';
        cantidadPortatil.value = '';
        imagenPortatil.src = '';
    }
}

const cardCelular = () => {
    const cardP = document.querySelector('#cardP');
    const formPortatil = document.querySelector('#formPortatil');
    const formCelular = document.querySelector('#formCelular');
    const formCliente = document.querySelector('#formCliente');

    const nombreCelular = document.querySelector('#nombreCelular');
    const referenciaCelular = document.querySelector('#referenciaCelular');
    const codigoCelular = document.querySelector('#codigoCelular');
    const valorCelular = document.querySelector('#valorCelular');
    const cantidadCelular = document.querySelector('#cantidadCelular');
    const imagenCelular = document.querySelector('#imagenCelular');

    if ((codigoCelular.value != '') && (nombreCelular.value != '') && (referenciaCelular.value != '') && (valorCelular.value != '') && (cantidadCelular.value != '') && (imagenCelular.value != '')) {
        cardP.classList.remove('ocultar');
        formPortatil.classList.add('ocultar');
        formCelular.classList.add('ocultar');
        formCliente.classList.add('ocultar');

        const nombrecardp = document.querySelector('#nombrecardp');
        const codigo = document.querySelector('#codigo');
        const referencia = document.querySelector('#referencia');
        const precio = document.querySelector('#precio');
        const cantidad = document.querySelector('#cantidad');
        const imgUpload = document.querySelector('#imgUpload');

        const imagen = imagenCelular.files;
        const ruta = URL.createObjectURL(imagen[0]);

      
        nombrecardp.innerHTML = 'Nombre:' + nombreCelular.value;
        codigo.innerHTML = 'Codigo: ' + codigoCelular.value;
        referencia.innerHTML = 'Referencia:' + referenciaCelular.value;
        precio.innerHTML = 'Precio: ' + valorCelular.value;
        cantidad.innerHTML = 'Cantidad: ' + cantidadCelular.value;
        imgUpload.src = ruta;

       
        nombreCelular.value = '';
        codigoCelular.value = '';
        referenciaCelular.value = '';
        valorCelular.value = '';
        cantidadCelular.value = '';
        imagenCelular.src = '';
    }
}

const cardCliente = () => {
    const cardC = document.querySelector('#cardC');
    const formPortatil = document.querySelector('#formPortatil');
    const formCelular = document.querySelector('#formCelular');
    const formCliente = document.querySelector('#formCliente');

    const nombreCliente = document.querySelector('#nombreCliente');
    const documentoCliente = document.querySelector('#documentoCliente');
    const telefonoCliente = document.querySelector('#telefonoCliente');
    const direccionCliente = document.querySelector('#direccionCliente');
    const emailCliente = document.querySelector('#emailCliente');

    if ((documentoCliente.value != '') && (nombreCliente.value != '') && (telefonoCliente.value != '') && (direccionCliente.value != '') && (emailCliente.value != '')) {
        cardC.classList.remove('ocultar');
        formPortatil.classList.add('ocultar');
        formCelular.classList.add('ocultar');
        formCliente.classList.add('ocultar');

        const nombreclie = document.querySelector('#nombreclie');
        const cedula = document.querySelector('#cedula');
        const telefono = document.querySelector('#telefono');
        const direccion = document.querySelector('#direccion');
        const correo = document.querySelector('#correo');

        
        nombreclie.innerHTML = 'Nombre: ' + nombreCliente.value;
        cedula.innerHTML = 'CC: '+documentoCliente.value;
        telefono.innerHTML = 'Celular :' + telefonoCliente.value;
        direccion.innerHTML = 'Dirección :' + direccionCliente.value;
        correo.innerHTML ='Correo: ' + emailCliente.value;

        documentoCliente.value = '';
        nombreCliente.value = '';
        telefonoCliente.value = '';
        direccionCliente.value = '';
        emailCliente.value = '';
    }
}


inicioSesion.addEventListener('click', iniciarSesion);
salir.addEventListener('click', cerrarSesion);
portatil.addEventListener('click', menuPortatil);
celular.addEventListener('click', menuCelular);
cliente.addEventListener('click', menuCliente);
guardarPortatil.addEventListener('click', cardPortatil);
guardarCelular.addEventListener('click', cardCelular);
guardarCliente.addEventListener('click', cardCliente);
btnVolverPortatil.addEventListener('click', regresar);
btnVolverCelular.addEventListener('click', regresar);
btnVolverCliente.addEventListener('click', regresar);
btnVolverP.addEventListener('click', regresar);
btnVolverUS.addEventListener('click', regresar);