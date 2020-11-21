const database= firebase.database();
const auth=firebase.auth();

const correo= document.getElementById('correo');
const contraseña= document.getElementById('contraseña');
const bLogin= document.getElementById('bLogin');
const noCuenta= document.getElementById('noCuenta');



//Verificamos si ya hizo login, para enviarlo al index
auth.onAuthStateChanged(
  (user)=>{

    if(user!==null){
      window.location.href='index.html';
    }

  });



//Login
bLogin.addEventListener('click', ()=>{
    
  auth.signInWithEmailAndPassword(correo.value, contraseña.value).then(

    (data)=>{
        window.location.href='index.html';
    }

//Si los datos no son correctos, muestra un alert
 ).catch(
    (error)=>{
        alert('Los datos que ingreso son incorrectos');
        console.log(error)
    }
  );

});


//Si no tiene cuenta, lo enviamos a signup
noCuenta.addEventListener('click', ()=>{

  window.location.href='signup.html';
});