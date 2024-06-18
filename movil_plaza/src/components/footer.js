import React from 'react';
import { router } from 'expo-router';

import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const FooterApp = () => {
    return (
        <View >

            <View style={styles.footer}>
                <View style={styles.nav}>
                    <TouchableOpacity style={styles.boton} onPress={() => router.replace("/home")}>
                        <Image source={require("../../assets/home.png")} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boton} onPress={() => router.replace("/home/restaurantes")}>
                        <Image source={require("../../assets/cubiertos.png")} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boton} onPress={() => router.replace("/home/perfil")}>
                        <Image source={require("../../assets/perfil.png")} />
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.redondo} onPress={() => router.replace("/home/carrito")}>
                <View >
                    <Image style={styles.img} source={require("../../assets/carrito.png")} />
                </View>
            </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "#faa307",
        borderColor: '#ccc',
        height: 75,
        borderWidth: 2,
        textAlign: "center",
        justifyContent: "center",
        top: 53,

    },
    nav: {
        flexDirection: 'row',
        textAlign: "center",
        justifyContent: "center",

    },
    boton: {
        marginHorizontal: 30,
    },

    redondo: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: "#faa307",
        justifyContent: "center",
        left: 290,
        top: -90,
    },
    img: {
        left: 10,
    },
})

export default FooterApp;
