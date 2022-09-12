import React from 'react';
import { Text, useColorScheme } from 'react-native';
// import Home from './pages/Home/Home';
import styled from 'styled-components/native'
import imagemCarro from './assets/images/carro.png'
const Container = styled.View`
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: center;
`;
const Header = styled.View`
  display:flex;
  flex-direction:row;
  justify-content: center; //flex-start;
  align-items: center;
  //background-color: red;
  height: 54px;
  width:100%;
`;

const CaixaSelecao = styled.View`
  display:flex;
  flex-direction:row;
  align-items: center;
`;
const VoltarSeta = styled.Text`
  position: absolute;
  left: 10px;
`;
const OpcaoText = styled.Text`
  padding: 4px;
  font-size: 18px;
  color: #000
  font-family: 'Estedad-Medium';
`;
const OpcaoSeta = styled.Text`
  padding: 4px;
`;

const CarroHome = styled.Image`

`
import Icon from 'react-native-vector-icons/FontAwesome';
const App = () => {
  // Use Title and Wrapper like any other React component – except they're styled!
  return(
    <Container>
      <Header>
        <VoltarSeta>
          <Icon
              name="chevron-left"
              size={20}
              color="#000"
              onPress={() => {}}>
            </Icon>
        </VoltarSeta>
        <CaixaSelecao>
          <OpcaoText>
            Minha Ranger
          </OpcaoText>
          <OpcaoSeta>
            <Icon
              name="chevron-down"
              size={20}
              color="#000"
              onPress={() => {}}>
            </Icon>
          </OpcaoSeta>
        </CaixaSelecao>
      </Header>
      <CarroHome source={imagemCarro}/>

    </Container>
  );
};

export default App;
