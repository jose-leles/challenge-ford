// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import React, {useState} from 'react';
import {
    useColorScheme,
    FlatList,
    Image,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';

// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';
// @ts-ignore
import Video from 'react-native-video';
import * as S from './style';

import imagemCarro from '../../assets/images/carro.png';

export const Vehicle = (props: any) => {
    const [url, setUrl] = useState<string>('http://');
    const [urlVideo, setUrlVideo] = useState<string>(
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    );
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

            <Video
                source={{
                    uri: urlVideo,
                }}
                style={{
                    marginTop: 15,
                    width: '90%',
                    height: '35%',
                    borderColor: '',
                }}
                muted={false}
                repeat={true}
                resizeMode={'cover'}
                volume={1.0}
                rate={1.0}
                ignoreSilentSwitch={'obey'}
            />
            <S.InputHolder>
                <S.InputUrl
                    value={url}
                    onChange={(text: string) => setUrl(text)}></S.InputUrl>
                <S.ButtonUrl onPress={() => setUrlVideo(url)}>
                    <S.ButtonText>Ir</S.ButtonText>
                </S.ButtonUrl>
            </S.InputHolder>

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
