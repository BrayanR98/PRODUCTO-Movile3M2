
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IoIosBody,IoIosListBox,IoLogoUsd} from "react-icons/io";
import { Text } from 'react-native';
import Profile from './Profile';
import Counts from './Counts'
import Movements from './Movements';
let User={}

 function HomeTabs({navigation,route}){
    const Tab = createBottomTabNavigator()
    
    // User={username:route.params.username,
    // fullname:route.params.fullname,
    // Saldo:route.params.Saldo,
    // nroCuenta:route.params.nroCuenta,
    // fecha:route.params.fecha,
    // identity:route.params.identity,
    // rol:route.params.rol,
    // }
     User ={fullname:"jivfdjknvek",username:"brestisres",password:"brestisres",nroCuenta:"213546416",identity:5165468,rol:true,fecha:'10/10/2022',Saldo:4000000}

    const t = () => {
            
    }

    return(
    <>
        <Tab.Navigator
            screenOptions={() => ({
                headerShown: false
            })}
            
        >
            
            <Tab.Screen name = "Profile" component={Profile} options={{
                title: "Cuenta",
                tabBarActiveTintColor: '#e91e63',
                 tabBarIcon:() => (
              
                     <IoIosBody fontSize={'big'} color={'#e91e63'}/>
                 )
             }} />
            
            <Tab.Screen name = "Counts" component={Counts} options={{
                title: "Cuentas",
                tabBarIcon:() => (
                     <IoLogoUsd fontSize={'big'}/>
                 )
             }}/>

            <Tab.Screen name = "Movements" component={Movements} options = {{
                title: "Movimientos",
                tabBarIcon:()=>(<IoIosListBox/>)
            }}  />
            </Tab.Navigator>
        </>
    )

}

export {HomeTabs,User}



