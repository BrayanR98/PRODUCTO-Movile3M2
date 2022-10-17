import FormProfile from "./FormProfile"
import { Usera } from "./HomeTabs"
import { Useru } from "./HomeTabu"
 let User={}
export default function Profile({navigation}){ 
    if(Usera.rol){
       User=Usera
    }else {
        User=Useru 
    }
    console.log(Useru)

    return(
        <>
            
            <FormProfile
            label="Usuario:"
            dato={User.username}
            />
            <FormProfile
            label="Nombre: "
            dato={User.fullname}
            />
            <FormProfile
            label="Identificacion: "
            dato={User.identity}
            />
            <FormProfile
            label = "Apertura de cuenta: "
            dato = {User.fecha}
            />
            <FormProfile
            label = "Numero de cuenta: "
            dato = {User.nroCuenta}
            />
            <FormProfile
            label = "Numero de cuenta: "
            dato = {User.Saldo}
            />
        
        </>
    )
    
}