import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeTabs} from './components/HomeTabs';
import {HomeTabu} from './components/HomeTabu'
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Login"
      >
        <Stack.Screen name="Home" component={HomeTabs} options={{title:'App Banco'}}/> 
        <Stack.Screen name="Homeu" component={HomeTabu} options={{title:'App Banco'}}/> 
        <Stack.Screen name = "Login" component={Login}/>
        <Stack.Screen name = "Profile" component={Profile}/>
        <Stack.Screen name = "Register" component={Register} options={{title:'Registro de Usuario'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


