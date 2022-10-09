// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import React, {useState, useEffect} from 'react';
import {
    useColorScheme,
    FlatList,
    Image,
    ScrollView,
    View,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
} from 'react-native';

// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';
// @ts-ignore
// import Video from 'react-native-video';
import {WebView} from 'react-native-webview';
import * as S from './style';

import imagemCarro from '../../assets/images/carro.png';

export const Vehicle = (props: any) => {
    const [ipCamera, setipCamera] = useState<string>('192.168.43.46');
    const [showInput, setShowInput] = useState<boolean>(false);

    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <body style="heigth:100%; width:100%;flex: 1">
        <img style="heigth:100%; width:100%; flex: 1" src="http://${ipCamera}:81/stream" />
    </body>
    </html>
    `;

    return (
        <S.Container>
            <S.Header>
                <S.VoltarSeta
                    onPress={() => {
                        props.navigation.pop();
                    }}>
                    <Icon name="chevron-left" size={20} color="#000"></Icon>
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

            <View style={{marginTop: 15, width: '90%', height: '32%'}}>
                <WebView
                    source={{html}}
                    onError={err => console.log(err)}
                    style={{
                        backgroundColor: '#000',
                        borderColor: '#000',
                        borderWidth: 1,
                    }}
                />
            </View>
            <View
                style={{
                    height: 50,
                    width: '100%',
                }}>
                {showInput ? (
                    <TextInput
                        style={{height: '100%', width: '100%'}}
                        onChangeText={text => setipCamera(text)}
                        onBlur={() => setShowInput(false)}
                    />
                ) : (
                    <TouchableOpacity
                        style={{
                            height: '100%',
                            width: '100%',
                            backgroundColor: '#fff0',
                        }}
                        onPress={() => setShowInput(!showInput)}
                    />
                )}
            </View>

            <S.MenuBottom>
                <S.MenuItem selected={false} onPress={() => {}}>
                    <S.MenuIcon>
                        <Icon
                            name="home"
                            size={27}
                            color={false ? '#444859' : '#737373'}
                        />
                    </S.MenuIcon>
                    <S.MenuText>Home</S.MenuText>
                </S.MenuItem>
                <S.MenuItem selected={true} onPress={() => {}}>
                    <S.MenuIcon>
                        <Icon
                            name="car"
                            size={23}
                            color={true ? '#444859' : '#737373'}
                        />
                    </S.MenuIcon>
                    <S.MenuText>Veículo</S.MenuText>
                </S.MenuItem>
                <S.MenuItem selected={false} onPress={() => {}}>
                    <S.MenuIcon>
                        <Icon
                            name="wrench"
                            size={25}
                            color={false ? '#444859' : '#737373'}
                        />
                    </S.MenuIcon>
                    <S.MenuText>Serviços</S.MenuText>
                </S.MenuItem>
                <S.MenuItem selected={false} onPress={() => {}}>
                    <S.MenuIcon>
                        <Icon
                            name="map"
                            size={20}
                            color={false ? '#444859' : '#737373'}
                        />
                    </S.MenuIcon>
                    <S.MenuText>Mapa</S.MenuText>
                </S.MenuItem>
            </S.MenuBottom>
        </S.Container>
    );
};

export default Vehicle;
