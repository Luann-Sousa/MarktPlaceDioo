import React from 'react';

import {NavigationContainer} from '@react-navigation/native';//cara que vamos dizer o pai de todos ele sempre tem que ficar por volta das rotas
import {createStackNavigator} from '@react-navigation/stack';//aqui tipo de navegacao que estamos usando  STACK

//components
import Header from './components/Header';
//nosas pages
import Catalogo from './pages/Catalogo';


export default function Router(){
  const Stack = createStackNavigator();//jogando minha navegaçao em uma const para simplicfica as coisas kjkj
  return(
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Catalogo"
        screenOptions={{
          headerShown:true,
          cardStyle:{
            backgroundColor: "#313746"
          }
        }}
      >
        <Stack.Screen
          name="Catalogo"
          component={Catalogo}
          options={{
            title: "Catálogo",
            headerTransparent:true,
            headerTitle: () => <Header />

          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
