import React from 'react';
import { View, Text } from 'react-native';
import MockTextoService from '../servicos/MockTextoService';
import { TextoMock } from '../mock/textos';
import Secao from '../componentes/Secao';

type SobreParams = {
    mockTextoService: MockTextoService,
    useTextos: Function,
}

export default function Sobre ({ mockTextoService, useTextos }: SobreParams) {

    const {titulo, secaoPrincipal}: TextoMock = useTextos(mockTextoService, 'sobre');

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 24 }}>{titulo}</Text>
          <Secao titulo={secaoPrincipal?.titulo}>
            <Text>{secaoPrincipal?.descricao}</Text>
            {'\n\n\n\n'}
          </Secao>
        </View>
    );
}