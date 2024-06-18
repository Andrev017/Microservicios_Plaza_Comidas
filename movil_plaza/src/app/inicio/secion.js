import React from 'react';
import { router } from 'expo-router';

import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

const InicioSecion = () => {
    return (
        <View style={styles.container}>
            
            <View style={styles.divabajo}>

                <Text style={styles.titulo}>
                    Iniciar Sesión
                </Text>
            

                <Text style={styles.nom_input}>Numero de Celular</Text>
                <TextInput style={styles.input}></TextInput>

                <Text style={styles.nom_input}>Contraseña</Text>
                <TextInput style={styles.input} secureTextEntry={true}></TextInput>



                <Text></Text>
                <Text></Text>

                <TouchableOpacity style={styles.boton} onPress={() => router.replace("/home")}>
                        <Text style={{ textAlign: "center", color: "#fff", fontSize: 18 }}>
                            Iniciar Sesión
                        </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push("/inicio")}>
                    <Text style={styles.sesion}>
                        Volver
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
    divabajo: {
        backgroundColor: "#fff",
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "65%",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    titulo:{
        fontSize: 28,
        color: "#ffba08",
        padding: "5%",
    },
    boton:{
        backgroundColor: "#219ebc",
        padding: "3%",
        width: "90%",
        borderRadius: 10,
    },
    nom_input:{
        padding: "2%",
        color: "#faa307",
        fontSize: 16,
    },
    input:{
        backgroundColor: "#0001",
        padding: "2%",
        width: "90%",
        borderRadius: 20,
        color: "#faa307",
    },
    sesion: {
        padding: "7%",
        color: "#faa307",
        fontSize: 18,
    }
})

export default InicioSecion;
