import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Menu from '../screens/Menu';
import TabRoutes from './tabs.routes';
import Traking from '../screens/Traking';
import Dashboard from '../screens/Dashboard';
import Galeria from '../screens/Galeria';
import Passometro from '../screens/Passometro';
import Camera from '../screens/Camera';
import Graficos from '../screens/Graficos';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen name="Tabs" component={TabRoutes} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Traking" component={Traking} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Passometro" component={Passometro} />
        <Stack.Screen name="Galeria" component={Galeria} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Graficos" component={Graficos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
