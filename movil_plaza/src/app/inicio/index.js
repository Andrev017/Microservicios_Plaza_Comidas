import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const Inicio = () => {
    return (
        <View style={styles.container} >

            <View style={styles.contabajo}>
                <View style={styles.redondo}>
                    <Image source={require("../../../assets/caja.png")} />
                </View>
                <Text style={styles.titulo}>
                    Plaza de Comidas
                </Text>
                <Text style={styles.texto}>
                    Disfruta de nuestros restaurantes, encuentra tu plato favorito
                </Text>
                <Text>
                    
                </Text>
                <TouchableOpacity style={styles.boton} onPress={() => router.push("/inicio/registro")}>
                    <Text style={{ textAlign: "center", color: "#fff", fontSize: 18 }}>
                        Registrarse
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push("/inicio/secion")}>
                    <Text style={styles.sesion}>
                        Iniciar Sesión
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#f48c06",
        position: "relative",
    },

    titulo: {
        textAlign: "center",
        fontSize: 26,
        width: "65%",
        color: "#faa307",
        padding: "8%",
    },
    contabajo: {
        backgroundColor: "#fff",
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "65%",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    redondo: {
        width: 80,
        height: 80,
        borderRadius: 100,
        backgroundColor: "#0002",
        justifyContent: "center",
        alignItems: "center",
    },
    texto:{
        textAlign: "center",
        width: "70%",
        color: "#e85d04",
        fontSize: 18,
    },
    boton: {
        backgroundColor: "#219ebc",
        padding: "3%",
        width: "90%",
        borderRadius: 10,
    },
    sesion: {
        padding: "5%",
        color: "#faa307",
        fontSize: 18,
    }
})


export default Inicio;
