import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/telas/Home';
import MockTextoService from './src/servicos/MockTextoService';
import MockUrlService from './src/servicos/MockUrlService';
import useTextos from './src/hooks/useTextos';
import useUrls from './src/hooks/useUrls';

const Stack = createNativeStackNavigator();

const App = () => {

  const mockTextoService = new MockTextoService();
  const mockUrlService = new MockUrlService();
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {() => <Home mockTextoService={mockTextoService} mockUrlService={mockUrlService}
          useTextos={useTextos} useUrls={useUrls}/>}
        </Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
