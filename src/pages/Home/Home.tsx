// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import React from 'react';
import {useColorScheme, FlatList, Image} from 'react-native';

import imagemCarro from '../../assets/images/carro.png';
import imagemLigarCarro from '../../assets/images/io-icon.png';
import imagemTravarCarro from '../../assets/images/locked-icon.png';
import imagemDestravarCarro from '../../assets/images/unlocked-icon.png';

import Icon from 'react-native-vector-icons/FontAwesome';
// @ts-ignore
import DropShadow from 'react-native-drop-shadow';
import * as S from './style';
const shadowStyle = {
    shadowColor: '#000',
    shadowOffset: {
        width: 5,
        height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
};
const notificationShadowStyle = {
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
};
export const Home = () => {
    return (
        <S.Container>
            <S.Header>
                <S.VoltarSeta>
                    <Icon
                        name="chevron-left"
                        size={20}
                        color="#000"
                        onPress={() => {}}></Icon>
                </S.VoltarSeta>
                <S.CaixaSelecao>
                    <S.OpcaoText>Minha Ranger</S.OpcaoText>
                    <S.OpcaoSeta>
                        <Icon
                            name="chevron-down"
                            size={20}
                            color="#000"
                            onPress={() => {}}></Icon>
                    </S.OpcaoSeta>
                </S.CaixaSelecao>
            </S.Header>
            <S.CarroHome source={imagemCarro} style={{resizeMode: 'cover'}} />
            <S.BoxAtualizacao>
                <S.AtualizarButton>
                    <S.AtualizarIcon>
                        <Icon
                            name="rotate-right"
                            size={15}
                            color="#212121"
                            onPress={() => {}}></Icon>
                    </S.AtualizarIcon>
                    <S.AtualizarText>Clique para atualizar</S.AtualizarText>
                </S.AtualizarButton>
                <S.StatusAtualizado>
                    Atualizado 0 minutos atrás
                </S.StatusAtualizado>
            </S.BoxAtualizacao>
            <S.AcoesPrincipaisBox>
                <DropShadow style={shadowStyle}>
                    <S.CirculoMenor>
                        <Image source={imagemDestravarCarro} />
                    </S.CirculoMenor>
                </DropShadow>
                <DropShadow style={shadowStyle}>
                    <S.CirculoMaior>
                        <Image
                            style={{marginLeft: 3}}
                            source={imagemLigarCarro}
                        />
                        <S.LigarText>Ligar</S.LigarText>
                    </S.CirculoMaior>
                </DropShadow>
                <DropShadow style={shadowStyle}>
                    <S.CirculoMenor>
                        <Image source={imagemTravarCarro} />
                    </S.CirculoMenor>
                </DropShadow>
            </S.AcoesPrincipaisBox>
            <S.TitleNotifications>MINHAS NOTÍCIAS</S.TitleNotifications>
            <FlatList
                data={[{id: 1}, {id: 3}, {id: 2}]}
                style={{width: '100%'}}
                renderItem={({item}) => (
                    <DropShadow style={notificationShadowStyle}>
                        <S.NotificationBox>
                            <S.NotificationTop />
                            <S.NotificationBody>
                                <S.NotificationTitle>
                                    Alerta
                                </S.NotificationTitle>
                                <S.NotificationTime>
                                    20 de Jul
                                </S.NotificationTime>
                                <S.NotificationMessage>
                                    Alguém está tentando ligar seu carro
                                </S.NotificationMessage>
                            </S.NotificationBody>
                        </S.NotificationBox>
                    </DropShadow>
                )}
                horizontal={true}
            />
            <S.MenuBottom></S.MenuBottom>
        </S.Container>
    );
};

export default Home;
