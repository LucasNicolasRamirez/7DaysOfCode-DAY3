// FRONT
// REACT
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const descripcionReact = document.getElementById('descripcion-react');
const reactDescription = document.getElementById('react-description');
const btnReact = document.getElementById('btn-react');
const btnVue = document.getElementById('btn-vue');
const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const botonSi = document.getElementById('boton-si');
const botonNo = document.getElementById('boton-no');
const mensaje1 = document.getElementById('mensaje1');
const mensaje2 = document.getElementById('mensaje2');
const mensaje3 = document.getElementById('mensaje3');
const mensaje4 = document.getElementById('mensaje4');
const especialidad = document.getElementById('especialidad');
const tecnologia = document.getElementById('mensaje4');
const escribir = document.getElementById('escribir');
const enviar = document.getElementById('enviar');
const tecno = document.getElementById('tecno');
const respuesta = document.getElementById('respuesta-escrita');
// VUE
const descripcionVue = document.getElementById('descripcion-vue');
const vueDescription = document.getElementById('vue-description');
const btnC = document.getElementById('btn-c');
const btnJava = document.getElementById('btn-java');
const boton1Vue = document.getElementById('boton1Vue');
const boton2Vue = document.getElementById('boton2Vue');
const botonSiVue = document.getElementById('boton-siVue');
const botonNoVue = document.getElementById('boton-noVue');
const mensaje1Vue = document.getElementById('mensaje1Vue');
const mensaje2Vue = document.getElementById('mensaje2Vue');
const mensaje3Vue = document.getElementById('mensaje3Vue');
const mensaje4Vue = document.getElementById('mensaje4Vue');
const especialidadVue = document.getElementById('especialidadVue');
const tecnologiaVue = document.getElementById('mensaje4Vue');
const escribirVue = document.getElementById('escribirVue');
const enviarVue = document.getElementById('enviarVue');
const tecnoVue = document.getElementById('tecnoVue');
const respuestaVue = document.getElementById('respuesta-escritaVue');

// BACK
// C#
const descripcionc = document.getElementById('descripcion-c');
const cDescription = document.getElementById('c-description');
const boton1C = document.getElementById('boton1C');
const boton2C = document.getElementById('boton2C');
const botonSiC = document.getElementById('boton-siC');
const botonNoC = document.getElementById('boton-noC');
const mensaje1C = document.getElementById('mensaje1C');
const mensaje2C = document.getElementById('mensaje2C');
const mensaje3C = document.getElementById('mensaje3C');
const mensaje4C = document.getElementById('mensaje4C');
const especialidadC = document.getElementById('especialidadC');
const tecnologiaC = document.getElementById('mensaje4C');
const escribirC = document.getElementById('escribirC');
const enviarC = document.getElementById('enviarC');
const tecnoC = document.getElementById('tecnoC');
const respuestaC = document.getElementById('respuesta-escritaC');

// JAVA
const descripcionjava = document.getElementById('descripcion-java');
const javaDescription = document.getElementById('java-description');
const boton1Java = document.getElementById('boton1Java');
const boton2Java = document.getElementById('boton2Java');
const botonSiJava = document.getElementById('boton-siJava');
const botonNoJava = document.getElementById('boton-noJava');
const mensaje1Java = document.getElementById('mensaje1Java');
const mensaje2Java = document.getElementById('mensaje2Java');
const mensaje3Java = document.getElementById('mensaje3Java');
const mensaje4Java = document.getElementById('mensaje4Java');
const especialidadJava = document.getElementById('especialidadJava');
const tecnologiaJava = document.getElementById('mensaje4Java');
const escribirJava = document.getElementById('escribirJava');
const enviarJava = document.getElementById('enviarJava');
const tecnoJava = document.getElementById('tecnoJava');
const respuestaJava = document.getElementById('respuesta-escritaJava');

// FRONT
// Evento para el botón 'Front-End'
document.getElementById('boton-front').addEventListener('click', () => {
    // Mostrar el paso 2 y ocultar el paso 1
    
    if (step1 && step2) {
        step1.classList.add('hidden');
        step2.classList.remove('hidden');
        continuar.classList.add('hidden');
        especialidadVue.classList.add('hidden');
        btnC.classList.add('hidden');
        btnJava.classList.add('hidden');
    }

    // Evento para el botón 'React'
    document.getElementById('btn-react').addEventListener('click', () => {
        // Mostrar información de React y ocultar el paso 2
        
        if (step2 && descripcionReact) {
            step2.classList.add('hidden');
            descripcionReact.classList.remove('hidden');
            mensaje3.classList.add('hidden');
            tecnologia.classList.add('hidden');
            escribir.classList.add('hidden');
            enviar.classList.add('hidden');
        }
        document.getElementById('boton1').addEventListener('click', ()=> {
        
            if (boton1 && mensaje1) {
                boton1.classList.add('hidden');
                boton2.classList.add('hidden');
                mensaje1.classList.remove('hidden');
                reactDescription.classList.add('hidden');
                especialidad.classList.add('hidden');
                mensaje3.classList.remove('hidden');
            } 
        });
        
        document.getElementById('boton2').addEventListener('click', ()=> {
            if (boton2 && mensaje2) {
                boton1.classList.add('hidden');
                boton2.classList.add('hidden');
                mensaje2.classList.remove('hidden');
                reactDescription.classList.add('hidden');
                especialidad.classList.add('hidden');
                mensaje3.classList.remove('hidden');
            }
        });
        
        document.getElementById('boton-si').addEventListener('click', () => {
            if (botonSi && tecnologia) {
                boton1.classList.add('hidden');
                boton2.classList.add('hidden');
                mensaje1.classList.add('hidden');
                mensaje2.classList.add('hidden');
                reactDescription.classList.add('hidden');
                especialidad.classList.add('hidden');
                mensaje3.classList.add('hidden');
                escribir.classList.remove('hidden');
                enviar.classList.remove('hidden');
                mensaje4.classList.remove('hidden'); // Mostrar mensaje4 solo después de presionar boton-si
            }
        });
        
        document.getElementById('boton-no').addEventListener('click', () => {
            const mensaje = "Muy bien, esto llegó a su fin, pero no te des por vencido 💪 y sigue investigando 📚 y aprendiendo nuevos lenguajes 🚀 para convertirte en el programador que quieres ser🤓. ✨¡ÉXITOS!✨";
            document.getElementById('respuesta-escrita').textContent = mensaje;
            respuesta.classList.remove('hidden');
            mensaje1.classList.add('hidden');
            mensaje3.classList.add('hidden');
            mensaje2.classList.add('hidden');
            especialidad.classList.add('hidden');
        });
        
        document.getElementById('continuar').addEventListener('click', () => {
            mensaje3.classList.remove('hidden');
            escribir.classList.add('hidden');
            escribir.value = '';  // Limpiar el input
            continuar.classList.add('hidden');
            respuesta.classList.add('hidden');
            // mensaje4 no se muestra aquí, para evitar que aparezca después de "continuar"
        });
    });
});

function showGreeting() {
    const escrito = document.getElementById('escribir').value.trim();
    if (escrito === '') {
        alert('¡No ingresaste un valor válido!');
    } else {
        const greeting = `¡Siii, ${escrito}, es realmente una tecnología muy interesante!`;
        document.getElementById('respuesta-escrita').textContent = greeting;
        escribir.classList.add('hidden');
        enviar.classList.add('hidden');
        mensaje4.classList.add('hidden');
        continuar.classList.remove('hidden');
        respuesta.classList.remove('hidden');  // Mostrar el mensaje capturado
    }
}

    // Evento para el botón 'Vue'
document.getElementById('btn-vue').addEventListener('click', () => {
    // Mostrar información de React y ocultar el paso 2
    
    if (step2 && step2) {
        step2.classList.add('hidden');
        descripcionVue.classList.remove('hidden');
        mensaje3Vue.classList.add('hidden');
        tecnologiaVue.classList.add('hidden');
        escribirVue.classList.add('hidden');
        enviarVue.classList.add('hidden');
        continuarVue.classList.add('hidden');
    }
        document.getElementById('boton1Vue').addEventListener('click', ()=> {
        
            if (boton1Vue && mensaje1Vue) {
                boton1Vue.classList.add('hidden');
                boton2Vue.classList.add('hidden');
                mensaje1Vue.classList.remove('hidden');
                vueDescription.classList.add('hidden');
                especialidadVue.classList.add('hidden');
                mensaje3Vue.classList.remove('hidden');
            } 
        });
        
        document.getElementById('boton2Vue').addEventListener('click', ()=> {
            if (boton2Vue && mensaje2Vue) {
                boton1Vue.classList.add('hidden');
                boton2Vue.classList.add('hidden');
                mensaje2Vue.classList.remove('hidden');
                vueDescription.classList.add('hidden');
                especialidadVue.classList.add('hidden');
                mensaje3Vue.classList.remove('hidden');
            }
        });
        
        document.getElementById('boton-siVue').addEventListener('click', () => {
            if (botonSiVue && tecnologiaVue) {
                boton1Vue.classList.add('hidden');
                boton2Vue.classList.add('hidden');
                mensaje1Vue.classList.add('hidden');
                mensaje2Vue.classList.add('hidden');
                vueDescription.classList.add('hidden');
                especialidadVue.classList.add('hidden');
                mensaje3Vue.classList.add('hidden');
                escribirVue.classList.remove('hidden');
                enviarVue.classList.remove('hidden');
                mensaje4Vue.classList.remove('hidden'); // Mostrar mensaje4 solo después de presionar boton-si
            }
        });
        
        document.getElementById('boton-noVue').addEventListener('click', () => {
            const mensajeVue = "Muy bien, esto llegó a su fin, pero no te des por vencido 💪 y sigue investigando 📚 y aprendiendo nuevos lenguajes 🚀 para convertirte en el programador que quieres ser🤓. ✨¡ÉXITOS!✨";
            document.getElementById('respuesta-escritaVue').textContent = mensajeVue;
            respuestaVue.classList.remove('hidden');
            mensaje1Vue.classList.add('hidden');
            mensaje3Vue.classList.add('hidden');
            mensaje2Vue.classList.add('hidden');
            especialidadVue.classList.add('hidden');
        });
        
        document.getElementById('continuarVue').addEventListener('click', () => {
            mensaje3Vue.classList.remove('hidden');
            escribirVue.classList.add('hidden');
            escribirVue.value = '';  // Limpiar el input
            continuarVue.classList.add('hidden');
            respuestaVue.classList.add('hidden');
            // mensaje4 no se muestra aquí, para evitar que aparezca después de "continuar"
        });
});

function showGreeting2() {
    const escritoVue = document.getElementById('escribirVue').value.trim();
    if (escritoVue === '') {
        alert('¡No ingresaste un valor válido!');
    } else {
        const greetingVue = `¡Siii, ${escritoVue}, es realmente una tecnología muy interesante!`;
        document.getElementById('respuesta-escritaVue').textContent = greetingVue;
        escribirVue.classList.add('hidden');
        enviarVue.classList.add('hidden');
        mensaje4Vue.classList.add('hidden');
        continuarVue.classList.remove('hidden');
        respuestaVue.classList.remove('hidden');  // Mostrar el mensaje capturado
    }
}

// BACK
// Evento para el botón 'Back-End'
document.getElementById('boton-back').addEventListener('click', () => {
    // Mostrar el paso 2 y ocultar el paso 1
    
        if (step1 && step2) {
            step1.classList.add('hidden');
            step2.classList.remove('hidden');
            continuarC.classList.add('hidden');
            especialidadC.classList.remove('hidden');
            btnReact.classList.add('hidden');
            btnVue.classList.add('hidden');
        }
    // Evento para el botón 'C#'
    document.getElementById('btn-c').addEventListener('click', () => {
        // Mostrar información de C# y ocultar el paso 2
    
        if (step2 && descripcionc) {
            step2.classList.add('hidden');
            descripcionc.classList.remove('hidden');
            mensaje3C.classList.add('hidden');
            tecnologiaC.classList.add('hidden');
            escribirC.classList.add('hidden');
            enviarC.classList.add('hidden');
            continuarC.classList.add('hidden');
        }
    });

    document.getElementById('boton1C').addEventListener('click', () => {
        if (boton1C && mensaje1C) {
            boton1C.classList.add('hidden');
            boton2C.classList.add('hidden');
            mensaje1C.classList.remove('hidden');
            cDescription.classList.add('hidden');
            especialidadC.classList.add('hidden');
            mensaje3C.classList.remove('hidden');
        }
    });

    document.getElementById('boton2C').addEventListener('click', () => {
        if (boton2C && mensaje2C) {
            boton1C.classList.add('hidden');
            boton2C.classList.add('hidden');
            mensaje2C.classList.remove('hidden');
            cDescription.classList.add('hidden');
            especialidadC.classList.add('hidden');
            mensaje3C.classList.remove('hidden');
        }
    });

    document.getElementById('boton-siC').addEventListener('click', () => {
        if (botonSiC && tecnologiaC) {
            boton1C.classList.add('hidden');
            boton2C.classList.add('hidden');
            mensaje1C.classList.add('hidden');
            mensaje2C.classList.add('hidden');
            cDescription.classList.add('hidden');
            especialidadC.classList.add('hidden');
            mensaje3C.classList.add('hidden');
            escribirC.classList.remove('hidden');
            enviarC.classList.remove('hidden');
            mensaje4C.classList.remove('hidden'); // Mostrar mensaje4 solo después de presionar boton-si
        }
    });

    document.getElementById('boton-noC').addEventListener('click', () => {
        const mensajeC = "Muy bien, esto llegó a su fin, pero no te des por vencido 💪 y sigue investigando 📚 y aprendiendo nuevos lenguajes 🚀 para convertirte en el programador que quieres ser🤓. ✨¡ÉXITOS!✨";
        respuestaC.textContent = mensajeC;
        respuestaC.classList.remove('hidden');
        mensaje1C.classList.add('hidden');
        mensaje3C.classList.add('hidden');
        mensaje2C.classList.add('hidden');
        especialidadC.classList.add('hidden');
    });

    document.getElementById('continuarC').addEventListener('click', () => {
        mensaje3C.classList.remove('hidden');
        escribirC.classList.add('hidden');
        escribirC.value = '';  // Limpiar el input
        continuarC.classList.add('hidden');
        respuestaC.classList.add('hidden');
        // mensaje4 no se muestra aquí, para evitar que aparezca después de "continuar"
    });
});

function showGreeting3() {
    const escritoC = document.getElementById('escribirC').value.trim();
    if (escritoC === '') {
        alert('¡No ingresaste un valor válido!');
    } else {
        const greetingC = `¡Siii, ${escritoC}, es realmente una tecnología muy interesante!`;
        document.getElementById('respuesta-escritaC').textContent = greetingC;
        escribirC.classList.add('hidden');
        enviarC.classList.add('hidden');
        mensaje4C.classList.add('hidden');
        continuarC.classList.remove('hidden');
        respuestaC.classList.remove('hidden');  // Mostrar el mensaje capturado
    }
}

//Evento para el botón 'back'
document.getElementById('boton-back').addEventListener('click', () => {
    // Mostrar el paso 2 y ocultar el paso 1
    
        if (step1 && step2) {
            step1.classList.add('hidden');
            step2.classList.remove('hidden');
            continuarJava.classList.add('hidden');
            especialidadJava.classList.remove('hidden');
            btnReact.classList.add('hidden');
            btnVue.classList.add('hidden');
        }
    // Evento para el botón 'Java'
    document.getElementById('btn-java').addEventListener('click', () => {
        // Mostrar información de C# y ocultar el paso 2
    
        if (step2 && descripcionjava) {
            step2.classList.add('hidden');
            descripcionjava.classList.remove('hidden');
            mensaje3Java.classList.add('hidden');
            tecnologiaJava.classList.add('hidden');
            escribirJava.classList.add('hidden');
            enviarJava.classList.add('hidden');
            continuarJava.classList.add('hidden');
        }
    });

    document.getElementById('boton1Java').addEventListener('click', () => {
        if (boton1Java && mensaje1Java) {
            boton1Java.classList.add('hidden');
            boton2Java.classList.add('hidden');
            mensaje1Java.classList.remove('hidden');
            javaDescription.classList.add('hidden');
            especialidadJava.classList.add('hidden');
            mensaje3Java.classList.remove('hidden');
        }
    });

    document.getElementById('boton2Java').addEventListener('click', () => {
        if (boton2Java && mensaje2Java) {
            boton1Java.classList.add('hidden');
            boton2Java.classList.add('hidden');
            mensaje2Java.classList.remove('hidden');
            javaDescription.classList.add('hidden');
            especialidadJava.classList.add('hidden');
            mensaje3Java.classList.remove('hidden');
        }
    });

    document.getElementById('boton-siJava').addEventListener('click', () => {
        if (botonSiJava && tecnologiaJava) {
            boton1Java.classList.add('hidden');
            boton2Java.classList.add('hidden');
            mensaje1Java.classList.add('hidden');
            mensaje2Java.classList.add('hidden');
            javaDescription.classList.add('hidden');
            especialidadJava.classList.add('hidden');
            mensaje3Java.classList.add('hidden');
            escribirJava.classList.remove('hidden');
            enviarJava.classList.remove('hidden');
            mensaje4Java.classList.remove('hidden'); // Mostrar mensaje4 solo después de presionar boton-si
        }
    });

    document.getElementById('boton-noJava').addEventListener('click', () => {
        const mensajeJava = "Muy bien, esto llegó a su fin, pero no te des por vencido 💪 y sigue investigando 📚 y aprendiendo nuevos lenguajes 🚀 para convertirte en el programador que quieres ser🤓. ✨¡ÉXITOS!✨";
        respuestaJava.textContent = mensajeJava;
        respuestaJava.classList.remove('hidden');
        mensaje1Java.classList.add('hidden');
        mensaje3Java.classList.add('hidden');
        mensaje2Java.classList.add('hidden');
        especialidadJava.classList.add('hidden');
    });

    document.getElementById('continuarJava').addEventListener('click', () => {
        mensaje3Java.classList.remove('hidden');
        escribirJava.classList.add('hidden');
        escribirJava.value = '';  // Limpiar el input
        continuarJava.classList.add('hidden');
        respuestaJava.classList.add('hidden');
        // mensaje4 no se muestra aquí, para evitar que aparezca después de "continuar"
    });
});

function showGreeting4() {
    const escritoJava = document.getElementById('escribirJava').value.trim();
    if (escritoJava === '') {
        alert('¡No ingresaste un valor válido!');
    } else {
        const greetingJava = `¡Siii, ${escritoJava}, es realmente una tecnología muy interesante!`;
        document.getElementById('respuesta-escritaJava').textContent = greetingJava;
        escribirJava.classList.add('hidden');
        enviarJava.classList.add('hidden');
        mensaje4Java.classList.add('hidden');
        continuarJava.classList.remove('hidden');
        respuestaJava.classList.remove('hidden');  // Mostrar el mensaje capturado
    }
}