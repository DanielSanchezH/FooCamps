//tenemos que crear un un input donde el usurio pondra una contraseña
// esta contraseña debe ser de 8 caracteres
// si no tiene la longitud correcta, debe mostrar un mensaje de error que diga "la contraseña debe tener 8 caracteres"
// al pasar el mouse sobre la contraseña se debe mostrar la contraseña
// al pasar el mouse fuera de la contraseña se debe ocultar la contraseña


const clave = document.getElementById("password-caja"); //seleccionamos el input
const mensaje= document.getElementById("mensaje")
clave.addEventListener("mouseenter", () => { //cuando el mouse pase por encima de la caja de texto
    clave.type = "text";    //mostramos la contraseña
}
);
clave.addEventListener("mouseleave", () => { //cuando el mouse salga de la caja de texto
    clave.type = "password";    //ocultamos la contraseña
}
);

clave.addEventListener('keydown', (event) => { //cuando se presione una tecla
    if (event.key === "Enter") {    //si la tecla presionada es enter
        if (clave.value.length < 8) {    //si la contraseña tiene menos de 8 caracteres
            mensaje.innerHTML = "La contraseña debe tener 8 caracteres"; //mostramos el mensaje de error
        } else {
            mensaje.innerHTML = "Bienvenido"; //si no, mostramos un mensaje de bienvenida
        }

}});

