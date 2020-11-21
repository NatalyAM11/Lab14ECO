const database= firebase.database();
const auth=firebase.auth();

const nombreC= document.getElementById('nombreC');
const telefonoC= document.getElementById('telefonoC');
const bAgregar= document.getElementById('bAgregar');
var idCDef;

auth.onAuthStateChanged(
    (user)=>{

        if(user!=null){
            console.log(user.uid);
            idCDef=user.uid;
        }else{
            window.location.href='login.html';
        }
        
        
});


bAgregar.addEventListener('click',()=>{

    if(nombreC.value=== '' || telefonoC.value===''){
        alert ("Hay un espacio vacio");
        return;
    }

    auth.onAuthStateChanged(
        (user)=>{
            console.log(user.uid);

            //Creo el contacto con el id del usuario
            objetoContacto={
                id:idCDef,
                nombre:nombreC.value,
                telefono:telefonoC.value
            }

            //Envio el objeto
            database.ref('contactos/'+user.uid).push().set(objetoContacto).then(
                ()=>{
                    window.location.href='index.html';
                }    
            );

        
            //Despues de que agregue el contacto, los inputs quedan vacios
             nombreC.value=' ';
            telefonoC.value=' ';
    });

});