import {Text, View } from "react-native"
import { listas } from "../assets/style/style"
import FormProfile from "./FormProfile"

export default function Movements(){
    const arr = [{
    "Saldo":"4000000",
    "fecha":"Sun Oct 16 2022",
    "fullname":"ñaokflvoelkv ldkf",
    "identity":"6413518",
    "nroCuenta":1637432,
    "password":"",
    "rol":"",
    "username": "ajjfnvejrfm"},
    {"Saldo":"4000000",
    "fecha":"Sun Oct 16 2022",
    "fullname":"ñaokflvoelkv ldkf",
    "identity":"6413518",
    "nroCuenta":1637432,
    "password":"",
    "rol":"",
    "username": "ajjfnvejrfm"},
    {"Saldo":"4000000",
    "fecha":"Sun Oct 16 2022",
    "fullname":"ñaokflvoelkv ldkf",
    "identity":"6413518",
    "nroCuenta":1637432,
    "password":"",
    "rol":"",
    "username": "ajjfnvejrfm"},]
    return(
        <View >
            {
                arr.map(movement => {
                   return(
                    <View style={listas.container}>
                        <View style={{display:'flex',flexDirection:'row'}}>
                            <FormProfile
                            label='Nombre: '
                            dato={movement.fullname}
                            />
                            
                            <FormProfile
                            label = 'Identificacion'
                            dato = {movement.identity}
                            />
                            
                        </View>
                            <FormProfile
                            label='Apertura de Cuenta: '
                            dato = {movement.fecha}
                            />
                        
                            <FormProfile
                            label='Numero de cuenta: '
                            dato = {movement.nroCuenta}
                            />
                
                    </View> 
                   )
                  
                })
            }
        </View>
    )
}