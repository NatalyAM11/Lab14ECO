const database= firebase.database();
const auth=firebase.auth();

const nombre=document.getElementById('nombre');
const telefono= document.getElementById('telefono');
const correo= document.getElementById('correo');
const contraseña= document.getElementById('contraseña');
const contraseña2= document.getElementById('contraseña2');
const bRegistro= document.getElementById('bRegistro');
const tieneCuenta= document.getElementById('tieneCuenta');

//Variable de control
var isSignUp=false;



//Verificamos si ya hizo login, para enviarlo al index
auth.onAuthStateChanged(
    (user)=>{
  
      if(user!==null){
          if(isSignUp){
              
            //Creamos el usuario
            let userDB={
                id:user.uid,
                nombre: nombre.value,
                telefono: telefono.value,
                correo: correo.value,
                contraseña: contraseña.value
            };

            database.ref('usuarios/'+ userDB.id).set(userDB).then(
                ()=>{
                    window.location.href='index.html';
                }
            );
          }else{
            window.location.href='index.html';
          }
        
      }
  
    });


bRegistro.addEventListener('click', ()=>{

  if(nombre.value=== '' || telefono.value===''|| correo.value===''
  || contraseña.value==='' || contraseña2.value===''){
    alert ("Hay un espacio vacio");
    return;
}

  if(contraseña.value!=contraseña2.value){
    alert('Las contraseñas no coinciden');
    return;
  }
    isSignUp=true;
    auth.createUserWithEmailAndPassword(correo.value, contraseña.value);

});

tieneCuenta.addEventListener('click', ()=>{
window.location.href='login.html';
});