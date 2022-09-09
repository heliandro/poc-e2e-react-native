import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import Secao from '../componentes/Secao';
import { TextoMock } from '../mock/textos';
import { UrlMock } from '../mock/urls';
import MockTextoService from '../servicos/MockTextoService';
import MockUrlService from '../servicos/MockUrlService';

type HomeParams = {
    mockTextoService: MockTextoService,
    mockUrlService: MockUrlService,
    useTextos: Function,
    useUrls: Function
}

export default function Home ({ mockTextoService, mockUrlService, useTextos, useUrls }: HomeParams) {

    const {titulo, boasVindas, secaoPrincipal}: TextoMock = useTextos(mockTextoService, 'home');
    const {urlDetox}: UrlMock = useUrls(mockUrlService);
  
    const renderSection = () => {
      if (!titulo || !urlDetox) {
        return <Text>Carregando...</Text>;
      }
  
      return (
        <View>
          <Secao titulo={titulo}>
            <Text>{boasVindas} Heliandro!</Text>
            {'\n\n'}
            <Text>{secaoPrincipal?.descricao}</Text>
            {'\n\n'}
            <Text>{secaoPrincipal?.maisInformacoes}</Text>
            {'\n'}
            <Text>{urlDetox}</Text>
          </Secao>
        </View>
      );
    };
  
    return (
      <SafeAreaView>
        <StatusBar barStyle={'light-content'} />
  
        <Header />
        <View style={{backgroundColor: Colors.white}}>{renderSection()}</View>
      </SafeAreaView>
    );
}