const database= firebase.database();
const auth=firebase.auth();

const nombreU= document.getElementById('nombreU');
const bAñadirC= document.getElementById('bAñadirC');
const contactosCont= document.getElementById('contactosCont');
const bCerrarS= document.getElementById('bCerrarS');



auth.onAuthStateChanged(
    (user)=>{

    //busco al usuario con su id para pintar su nombre
        if(user!=null){
            console.log(user.uid);
            database.ref('usuarios/'+user.uid).once(
                'value',
    
                (data)=>{
                    let userDB= data.val();
                    nombreU.innerHTML=userDB.nombre;
                }
            );
        }else{
            window.location.href='login.html';
        }

        database.ref('contactos/'+ user.uid).on('value',
        function (data){

        contactosCont.innerHTML= '';


        data.forEach(
            //Le doy los datos de los contactos del usuario loggeado para 
            //crear los componentes
            contacto=>{
             let valor= contacto.val();

                //Le envio a la clase lista el id del usuario y el id del contacto para que pueda
                //realizar la busqueda respectiva
                    let lista= new ListaContactos(valor,user.uid,contacto.key);

                     contactosCont.appendChild(lista.render());
    
                    });

                });
});


bAñadirC.addEventListener('click', ()=>{
    window.location.href='añadirC.html';

});

bCerrarS.addEventListener('click', ()=>{

    auth.signOut().then(
        ()=>{
            window.location.href='login.html';
        }
    ).catch(
        (error)=>{
            alert(error.message);
        }
    );

});


