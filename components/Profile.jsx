import FormProfile from "./FormProfile"
import { User } from "./HomeTabs"
 
export default function Profile({navigation}){


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