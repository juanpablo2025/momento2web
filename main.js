const inicioSesion = document.querySelector('#inicioSesion');
const salir = document.querySelector('#salir');
const portatil = document.querySelector('#portatil');
const cliente = document.querySelector('#cliente');
const celular = document.querySelector('#celular');
const guardarPl = document.querySelector('#guardarPl');
const guardarCr = document.querySelector('#guardarCr');
const guardarCe = document.querySelector('#guardarCe');
const volverPl = document.querySelector('#btnVolverPl');
const volverCel = document.querySelector('#btnVolverCel');
const volverCli = document.querySelector('#btnVolverCli');
const volverP = document.querySelector('#btnVolverP');
const volverC = document.querySelector('#btnVolverC');

const iniciarSesion = () => {
    const nombre = document.querySelector('#nombre');
    const contrasena = document.querySelector('#contrasena');
    const validar = document.querySelector('#validar');

    if ((nombre.value == 'usuario' && contrasena.value == 'usuario')) {
        const inicio = document.querySelector('#login');
        
        inicio.classList.add('ocultar');
        

        nombre.value = '';
        contrasena.value = '';
        validar.textContent = '';
    } else if (nombre.value == '' && contrasena.value == '') {
        validar.textContent = '';
    } else {
        validar.textContent = alert( 'Error vuelve a intentarlo');
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
    const cartaP = document.querySelector('#cartaP');
    const cartaC = document.querySelector('#cartaC');
    menu.classList.remove('ocultar');
    formPortatil.classList.remove('ocultar');
    formCliente.classList.remove('ocultar');
    formCelular.classList.remove('ocultar');
    cartaP.classList.add('ocultar');
    cartaC.classList.add('ocultar');

}

const menuPortatil = () => {
    const menu = document.querySelector('#menu');
    const formPortatil = document.querySelector('#formPortatil');
    const cartaP = document.querySelector('#cartaP');
    const cartaC = document.querySelector('#cartaC');

    menu.classList.add('ocultar');
    formPortatil.classList.remove('ocultar');

    cartaP.classList.add('ocultar');
    cartaC.classList.add('ocultar');
}

const menuCelular = () => {
    const menu = document.querySelector('#menu');
    const formPortatil = document.querySelector('#formPortatil');
    const formCelular = document.querySelector('#formCelular');
    const cartaP = document.querySelector('#cartaP');
    const cartaC = document.querySelector('#cartaC');

    menu.classList.add('ocultar');
    formPortatil.classList.add('ocultar');
    formCelular.classList.remove('ocultar');

    cartaP.classList.add('ocultar');
    cartaC.classList.add('ocultar');
}

const menuCliente = () => {
    const menu = document.querySelector('#menu');
    const formPortatil = document.querySelector('#formPortatil');
    const formCelular = document.querySelector('#formCelular');
    const formCliente = document.querySelector('#formCliente');
    const cartaP = document.querySelector('#cartaP');
    const cartaC = document.querySelector('#cartaC');

    menu.classList.add('ocultar');
    formPortatil.classList.add('ocultar');
    formCelular.classList.add('ocultar');
    formCliente.classList.remove('ocultar');
    cartaP.classList.add('ocultar');
    cartaC.classList.add('ocultar');
}

const cartaPl = () => {
    const cartaP = document.querySelector('#cartaP');
    const formPortatil = document.querySelector('#formPortatil');
    const formCelular = document.querySelector('#formCelular');
    const formCliente = document.querySelector('#formCliente');

    const nombrePl = document.querySelector('#nombrePl');
    const referenciaPl = document.querySelector('#referenciaPl');
    const codigoPl = document.querySelector('#codigoPl');
    const valorPl = document.querySelector('#valorPl');
    const cantidadPl = document.querySelector('#cantidadPl');
    const imagenPl = document.querySelector('#imagenPl');

    if ((codigoPl.value != '') && (nombrePl.value != '') && (referenciaPl.value != '') && (valorPl.value != '') && (cantidadPl.value != '') && (imagenPl.value != '')) {
        cartaP.classList.remove('ocultar');
        formPortatil.classList.add('ocultar');
        formCelular.classList.add('ocultar');
        formCliente.classList.add('ocultar');

        const dato1 = document.querySelector('#dato1');
        const dato2 = document.querySelector('#dato2');
        const dato3 = document.querySelector('#dato3');
        const dato4 = document.querySelector('#dato4');
        const dato5 = document.querySelector('#dato5');
        const imgUpload = document.querySelector('#imgUpload');

        const imagen = imagenPl.files;
        const ruta = URL.createObjectURL(imagen[0]);

        
      
        
        dato2.innerHTML = 'Nombre: ' + nombrePl.value;
        dato1.innerHTML = 'Codigo: ' + codigoPl.value;
        dato3.innerHTML = 'Referencia: ' + referenciaPl.value;
        dato4.innerHTML = 'Precio: ' + valorPl.value;
        dato5.innerHTML = 'Cantidad: ' + cantidadPl.value;
        imgUpload.src = ruta;

        
        nombrePl.value = '';
        codigoPl.value = '';
        referenciaPl.value = '';
        valorPl.value = '';
        cantidadPl.value = '';
        imagenPl.src = '';
    }
}

const cartaCr = () => {
    const cartaP = document.querySelector('#cartaP');
    const formPortatil = document.querySelector('#formPortatil');
    const formCelular = document.querySelector('#formCelular');
    const formCliente = document.querySelector('#formCliente');

    const nombreCr = document.querySelector('#nombreCr');
    const referenciaCr = document.querySelector('#referenciaCr');
    const codigoCr = document.querySelector('#codigoCr');
    const valorCr = document.querySelector('#valorCr');
    const cantidadCr = document.querySelector('#cantidadCr');
    const imagenCr = document.querySelector('#imagenCr');

    if ((codigoCr.value != '') && (nombreCr.value != '') && (referenciaCr.value != '') && (valorCr.value != '') && (cantidadCr.value != '') && (imagenCr.value != '')) {
        cartaP.classList.remove('ocultar');
        formPortatil.classList.add('ocultar');
        formCelular.classList.add('ocultar');
        formCliente.classList.add('ocultar');

        const dato1 = document.querySelector('#dato1');
        const dato2 = document.querySelector('#dato2');
        const dato3 = document.querySelector('#dato3');
        const dato4 = document.querySelector('#dato4');
        const dato5 = document.querySelector('#dato5');
        const imgUpload = document.querySelector('#imgUpload');

        const imagen = imagenCr.files;
        const ruta = URL.createObjectURL(imagen[0]);

      
        dato2.innerHTML = 'Nombre:' + nombreCr.value;
        dato1.innerHTML = 'Codigo: ' + codigoCr.value;
        dato3.innerHTML = 'Referencia:' + referenciaCr.value;
        dato4.innerHTML = 'Precio: ' + valorCr.value;
        dato5.innerHTML = 'Cantidad: ' + cantidadCr.value;
        imgUpload.src = ruta;

       
        nombreCr.value = '';
        codigoCr.value = '';
        referenciaCr.value = '';
        valorCr.value = '';
        cantidadCr.value = '';
        imagenCr.src = '';
    }
}

const cartaCe = () => {
    const cartaC = document.querySelector('#cartaC');
    const formPortatil = document.querySelector('#formPortatil');
    const formCelular = document.querySelector('#formCelular');
    const formCliente = document.querySelector('#formCliente');

    const nombreCe = document.querySelector('#nombreCe');
    const documentoCe = document.querySelector('#documentoCe');
    const telefonoCe = document.querySelector('#telefonoCe');
    const direccionCe = document.querySelector('#direccionCe');
    const emailCe = document.querySelector('#emailCe');

    if ((documentoCe.value != '') && (nombreCe.value != '') && (telefonoCe.value != '') && (direccionCe.value != '') && (emailCe.value != '')) {
        cartaC.classList.remove('ocultar');
        formPortatil.classList.add('ocultar');
        formCelular.classList.add('ocultar');
        formCliente.classList.add('ocultar');

        const dato6 = document.querySelector('#dato6');
        const dato7 = document.querySelector('#dato7');
        const dato8 = document.querySelector('#dato8');
        const dato9 = document.querySelector('#dato9');
        const dato10 = document.querySelector('#dato10');

        
        dato7.innerHTML = 'Nombre: ' + nombreCe.value;
        dato6.innerHTML = 'CC: '+documentoCe.value;
        dato8.innerHTML = 'Celular :' + telefonoCe.value;
        dato9.innerHTML = 'Dirección :' + direccionCe.value;
        dato10.innerHTML ='Correo: ' + emailCe.value;

        documentoCe.value = '';
        nombreCe.value = '';
        telefonoCe.value = '';
        direccionCe.value = '';
        emailCe.value = '';
    }
}


inicioSesion.addEventListener('click', iniciarSesion);
salir.addEventListener('click', cerrarSesion);
portatil.addEventListener('click', menuPortatil);
celular.addEventListener('click', menuCelular);
cliente.addEventListener('click', menuCliente);
guardarPl.addEventListener('click', cartaPl);
guardarCr.addEventListener('click', cartaCr);
guardarCe.addEventListener('click', cartaCe);
btnVolverPl.addEventListener('click', regresar);
btnVolverCel.addEventListener('click', regresar);
btnVolverCli.addEventListener('click', regresar);
btnVolverP.addEventListener('click', regresar);
btnVolverUS.addEventListener('click', regresar);