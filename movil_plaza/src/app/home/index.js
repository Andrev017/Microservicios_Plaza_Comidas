import React from 'react';
import { router } from 'expo-router';

import { StyleSheet, View, Text,Image, TouchableOpacity } from 'react-native';

const Index = () => {
    return (
        <View>
            <Text style={styles.titulo}>
                Productos Recomendados
            </Text>

            
        </View>
    );
}

const styles = StyleSheet.create({
    titulo:{
        fontSize: 28,
        padding: "3%",
        color: "#f48c06",
    },
    
})

export default Index;
