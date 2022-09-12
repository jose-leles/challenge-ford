import React from 'react';
import { useColorScheme } from 'react-native';
import * as S from './style';

export const Home = () => {
  // Use Title and Wrapper like any other React component – except they're styled!
  return(
      <S.Header>
        <S.OpcaoText>
          Hello World!
        </S.OpcaoText>
      </S.Header>
  );
};

export default Home;