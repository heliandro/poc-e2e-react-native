import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Secao(props: any) {
    return (
        <View style={styles.sectionContainer}>
            <Text style={[
                styles.sectionTitle,
                {
                    color: Colors.black,
                },
            ]} testID="titulo">{props.titulo}</Text>
            <Text style={[
                styles.sectionDescription,
                {
                    color: Colors.black,
                },
            ]}>{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });