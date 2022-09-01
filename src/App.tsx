/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { useColorScheme } from 'react-native';
import styled from 'styled-components/native'


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  // Create a Title component that'll render an <h1> tag with some styles
  const Title = styled.Text`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  // Create a Wrapper component that'll render a <section> tag with some styles
  const Wrapper = styled.View`
    padding: 4em;
    background: papayawhip;
  `;

  // Use Title and Wrapper like any other React component – except they're styled!
  return(
    <Wrapper>
      <Title>
        Hello World!
      </Title>
    </Wrapper>
  );
};

export default App;
