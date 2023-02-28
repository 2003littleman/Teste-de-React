import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Text } from '@chakra-ui/react';
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChakraProvider>
          <Text as="h1">Zen Code</Text>
        </ChakraProvider>
      </header>
    </div>
  );
}

export default App; 

