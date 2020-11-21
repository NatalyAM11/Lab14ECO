class ListaContactos{

    constructor (contacto, keyU, keyC){
        this.contacto=contacto;
        this.keyU=keyU;
        this.keyC=keyC;
    }


    render=()=>{

        let component=document.createElement('div');
        component.className='listaContactos';

        let nombreCont=document.createElement('div');
        nombreCont.innerHTML=(this.contacto.nombre);

        let telefonoCont=document.createElement('div');
        telefonoCont.innerHTML=(this.contacto.telefono);

        let bBorrar=document.createElement('button');
        bBorrar.className='bBorrar';
        bBorrar.innerHTML=("Eliminar");



        
        //Eliminamos la tarea 
        let eliminar=()=>{
            
        //Primero busco por la rama que contiene todos los contactos del mismo usuario,
        // y despues busco al contacto que se va a eliminar
        database.ref('contactos/'+ this.keyU + "/"+ this.keyC).set(null);

        }

        bBorrar.addEventListener('click',eliminar);
        component.appendChild(nombreCont);
        component.appendChild(telefonoCont);
        component.appendChild(bBorrar);

        return component;

    }
}