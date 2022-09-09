import React from 'react';

import Home from './src/telas/Home';
import MockTextoService from './src/servicos/MockTextoService';
import MockUrlService from './src/servicos/MockUrlService';
import useTextos from './src/hooks/useTextos';
import useUrls from './src/hooks/useUrls';

const App = () => {

  const mockTextoService = new MockTextoService();
  const mockUrlService = new MockUrlService();
 
  return (
    <>
      <Home 
        mockTextoService={mockTextoService} mockUrlService={mockUrlService}
        useTextos={useTextos} useUrls={useUrls}
      />
    </>
  );
};

export default App;
