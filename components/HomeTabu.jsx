import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IoIosBody,IoIosListBox,IoLogoUsd} from "react-icons/io";
import { Text } from 'react-native';
import Profile from './Profile';
import Movements from './Movements';
let Useru={}

 function HomeTabu({navigation,route}){
    const Tab = createBottomTabNavigator()
    
    // User={username:route.params.username,
    // fullname:route.params.fullname,
    // Saldo:route.params.Saldo,
    // nroCuenta:route.params.nroCuenta,
    // fecha:route.params.fecha,
    // identity:route.params.identity,
    // rol:route.params.rol,
    // }
    Useru ={fullname:"jivfdjknvek",username:"brestisres",password:"brestisres",nroCuenta:"213546416",identity:5165468,rol:true,fecha:'10/10/2022',Saldo:4000000}

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
                tabBarActiveTintColor:'green',
                 tabBarIcon:({focused}) => (
              
                     <IoIosBody fontSize={focused?40:25} color={focused?'green':''}/>
                 )
             }} />

            <Tab.Screen name = "Movements" component={Movements} options = {{
                title: "Movimientos",
                tabBarActiveTintColor:'green',
                tabBarIcon:({focused})=>(<IoIosListBox fontSize={focused?40:25} color={focused?'green':''}/>)
            }}  />
            </Tab.Navigator>
        </>
    )

}

export {HomeTabu,Useru}