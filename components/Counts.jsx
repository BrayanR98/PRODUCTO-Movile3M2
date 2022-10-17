import { View } from "react-native";
import { listas,styles } from "../assets/style/style";
import FormProfile from "./FormProfile";
import User from "./User";
let u = new User()
let arr= u.lista()
export default function Counts(){
    
    return(
        <>
            {
                arr.map(d =>{
                    return(
                        <View style={listas.container}>
                            <View style={{display:'flex',flexDirection:'row'}}>
                                <FormProfile
                                 label='Nombre cliente: '
                                 dato={d.fullname}
                                />
                                <FormProfile
                                 label='Cedula: '
                                 dato={d.identity}
                                />

                            </View>
                            <FormProfile
                             label='Apertura'
                             dato={d.fecha}/>
                             <FormProfile
                             label='Numero de cuenta'
                             dato={d.nroCuenta}
                             />
                             <FormProfile
                             label='Saldo'
                             dato={d.Saldo}
                             />

                        </View>
                    )
                }

                )
            }
        </>
    )
    
}