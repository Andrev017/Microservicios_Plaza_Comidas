import React from 'react';
import { router } from 'expo-router';

import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const FooterApp = () => {
    return (
        <View style={styles.footer}>


            <View style={styles.nav}>
                <TouchableOpacity style={styles.boton} onPress={() => router.replace("/home")}>
                    <Image source={require("#")} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.boton} onPress={() => router.replace("/home/regalos")}>
                    <Image source={require("#")} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.boton} onPress={() => router.replace("/home/perfil")}>
                    <Image source={require("#")} />
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "#ffff",
        height: "10%",
        borderColor: '#ccc',
        borderWidth: 2,
        textAlign: "center",
        justifyContent: "center",

    },
    nav: {
        flexDirection: 'row',
        textAlign: "center",
        justifyContent: "center",

    },
    boton: {
        marginHorizontal: 30,
    },
})

export default FooterApp;
