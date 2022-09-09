import React from 'react';
import { Button, SafeAreaView, StatusBar, Text, View, StyleSheet } from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import Secao from '../componentes/Secao';
import { TextoMock } from '../mock/textos';
import { UrlMock } from '../mock/urls';
import MockTextoService from '../servicos/MockTextoService';
import MockUrlService from '../servicos/MockUrlService';

type HomeParams = {
    navigation: any,
    mockTextoService: MockTextoService,
    mockUrlService: MockUrlService,
    useTextos: Function,
    useUrls: Function
}

export default function Home ({ navigation, mockTextoService, mockUrlService, useTextos, useUrls }: HomeParams) {

    const {titulo, secaoPrincipal, navegacao}: TextoMock = useTextos(mockTextoService, 'home');
    const {urlDetox}: UrlMock = useUrls(mockUrlService);
  
    const renderSection = () => {
      if (!titulo || !urlDetox) {
        return <Text>Carregando...</Text>;
      }
  
      return (
        <View>
          <Secao titulo={secaoPrincipal?.titulo}>
            <Text>{secaoPrincipal?.descricao}</Text>
            {'\n\n\n\n'}
            <Text>{secaoPrincipal?.maisInformacoes}</Text>
            {'\n'}
            <Text>{urlDetox}</Text>
          </Secao>
          <View style={styles.containerButton}>
            <Button 
                title={navegacao?.botaoSobre.texto}
                onPress={() => navigation.navigate(navegacao?.botaoSobre.acao)}
            />
          </View>
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

const styles = StyleSheet.create({
    containerButton: {
        margin: 20
    }
})