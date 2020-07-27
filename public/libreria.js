
    var database = firebase.database();

        window.addEventListener('load', function(){
            
            let nombre= document.querySelector('#txtnombre');
            let correo= document.querySelector('#txtcorreo');
            let cedula= document.querySelector('#txtcedula');
            let telefono= document.querySelector('#txttelefono');
            let fecha= document.querySelector('#txtfecha');
            let descripcion= document.querySelector('#txtdescripcion');
            let registrar= document.querySelector('#btnregistrar');
            //let consultar= document.querySelector('#btnconsultar');
            let listado= document.querySelector('#listado');

            registrar.addEventListener('click',function(){
                firebase.database().ref('CitasMedicas/'+ cedula.value ).set({
                nombre: nombre.value,
                correo: correo.value,
                
                cedula: cedula.value,
                telefono: telefono.value,
                fecha: fecha.value,
                descripcion: descripcion.value,
                })
            })
});