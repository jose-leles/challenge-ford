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

export const CarroHome = styled.Image`
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

export const MenuBottom = styled.View`
    position: absolute;
    bottom: 0px;
    display: flex;
    justify-content: space-around;
    justify-self: flex-end;
    flex-direction: row;
    height: 50px;
    width: 100%;
    background-color: #fff;
`;
interface MenuItemProps {
    selected?: boolean;
}

export const MenuItem = styled.TouchableOpacity<MenuItemProps>`
    display: flex;
    flex-direction: column;
    border-top-color: ${(props: MenuItemProps) =>
        props.selected ? '#444859' : '#fff'};
    border-top-width: ${(props: MenuItemProps) =>
        props.selected ? '2px' : '0px'};
    height: 100%;
    width: 55px;
    padding-top: 2px;
    padding-bottom: 10px;
`;

export const MenuIcon = styled.View<MenuItemProps>`
    width: 95%;
    align-items: center;
    justify-content: center;
    height: 65%;
`;

export const MenuText = styled.Text<MenuItemProps>`
    color: ${(props: MenuItemProps) =>
        props.selected ? '#444859' : '#737373'};
    font-size: 14px;
    width: 100%;
    text-align: center;
    font-family: 'Estated-Regular';
`;
