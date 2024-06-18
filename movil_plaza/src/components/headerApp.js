import React from 'react';
import { router } from 'expo-router';

import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const HeaderApp = () => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.boton} onPress={() => router.replace("/home")}>
                <Image source={require("../../assets/flecha.png")} />
            </TouchableOpacity>



        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: "3%",
    },
    
})

export default HeaderApp;
