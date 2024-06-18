import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const Perfil = () => {
    return (
        <View>
            <Text style={styles.titulo}>
                Perfil
            </Text>
            <View >
                <TouchableOpacity style={styles.boton}>
                    <Image source={require("../../../assets/editar_perfil.png")} />
                    <Text style={{ textAlign: "center", color: "#fff", fontSize: 16,top: 5, }}>
                        Editar Perfil</Text>
                    <Image style={{top: 3, left: 120,}} source={require("../../../assets/flecha_derecha.png")} />
                </TouchableOpacity>
                <Text></Text>
                
                <TouchableOpacity style={styles.boton}>
                <Image source={require("../../../assets/politicas_privacidad.png")}/>
                    <Text style={{ textAlign: "center", color: "#fff", fontSize: 16,top: 5, }}>
                        Politicas de Pivacidad</Text>
                    <Image style={{top: 3, left: 40,}} source={require("../../../assets/flecha_derecha.png")} />
                </TouchableOpacity>

                <Text style={styles.copi}>
                    Desarrollado en ©2024
                </Text>

                <View style={styles.redes}>
                    <TouchableOpacity style={styles.buttom}>
                        <Image source={require("../../../assets/whatsapp.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttom}>
                        <Image source={require("../../../assets/insta.png")} />

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttom}>
                        <Image source={require("../../../assets/facebook.png")} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 28,
        padding: "3%",
        color: "#f48c06",
        textAlign: "center"
    },
    boton: {
        backgroundColor: "#219ebc",
        flexDirection: 'row',
        padding: "3%",
        width: "90%",
        borderRadius: 10,
        left: 15,
        top: 50,
        gap: 15,
    },
    copi: {
        color: "#f48c06",
        fontSize: 16,
        textAlign: "center",
        top: 80,
    },
    redes: {
        flexDirection: 'row',
        textAlign: "center",
        justifyContent: "center",
    },
    buttom: {
        marginHorizontal: 27,
        top: 120,

    }
})

export default Perfil;
