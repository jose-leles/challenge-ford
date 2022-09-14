// eslint-disable-next-line @typescript-eslint/ban-ts-comment

import {Image} from 'react-native';
// @ts-ignore
import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
`;

export const Header = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center; //flex-start;
    align-items: center;
    //background-color: red;
    height: 54px;
    width: 100%;
`;

export const VoltarSeta = styled.TouchableOpacity`
    position: absolute;
    left: 10px;
`;

export const CaixaSelecao = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const OpcaoText = styled.Text`
    padding: 4px;
    font-size: 18px;
    color: #000;
    font-family: 'Estedad-Medium';
`;

export const OpcaoSeta = styled.Text`
    padding: 4px;
`;

export const CarroHome: Image = styled.Image`
    height: 160px;
    margin-bottom: 10px;
`;

export const BoxAtualizacao = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AtualizarButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
`;

export const AtualizarIcon = styled.View`
    border: 1px #212121;
    border-radius: 50px;
    padding: 2px;
    margin-right: 5px;
`;

export const AtualizarText = styled.Text`
    color: #000;
    font-size: 16px;
`;

export const StatusAtualizado = styled.Text`
    color: #0276b3;
    font-family: 'Estedad-SemiBold';
    font-size: 15px;
`;

export const AcoesPrincipaisBox = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 20px 0px;
    padding: 0px 25px;
`;

export const CirculoMenor = styled.TouchableOpacity`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    height: 80px;
    background-color: #fff;
    width: 80px;
    padding: 2px;
    margin-right: 5px;
`;

export const CirculoMaior = styled.TouchableOpacity`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    background-color: #fff;
    width: 100px;
    border-radius: 50px;
    padding: 2px;
    margin-right: 5px;
`;
export const LigarText = styled.Text`
    font-size: 16;
    color: #213a69;
`;

export const TitleNotifications = styled.Text`
    font-size: 23px;
    align-self: flex-start;
    color: #4a4a4a;
    margin-left: 15px;
`;

export const NotificationContainer = styled.FlatList`
    width: 100%;
    /* flex-direction: 'row'; */
`;

export const NotificationBox = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 8px;
    background-color: #fff;
    max-height: 130px;
    width: 130px;
    margin: 10px 0px;
    margin-left: 15px;
`;

export const NotificationTop = styled.View`
    height: 5px;
    width: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: red;
`;

export const NotificationBody = styled.View`
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10px;
    height: 100%;
`;

export const NotificationTitle = styled.Text`
    font-size: 17px;
    font-family: 'Estated-Regular';
    color: #000;
`;

export const NotificationTime = styled.Text`
    font-size: 13px;
    font-family: 'Estated-Regular';
    color: #00000081;
`;

export const NotificationMessage = styled.Text`
    font-size: 13px;
    font-family: 'Estated-Regular';
    color: #000;
`;

export const MenuBottom = styled.View`
    justify-self: flex-end;
    height: 50px;
    width: 100%;
    background-color: aqua;
`;
