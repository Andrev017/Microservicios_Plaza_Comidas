import React, { useState } from 'react';
import { router } from 'expo-router';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import apiService from '../services/conexion_api';


const Registro = () => {
    const datos = {
        nombre_usuario: "",
        apellido_usuario: "",
        contra_usuario: "",
        rol_usuarios: "cliente",
        celular_usuarios: "",
    }
    const [data, setData] = useState(datos);

    const sentData = async () => {
        console.log (data)
        const celular = Number(data.celular_usuarios)
        const resepcion = await apiService.fetchData(
            "POST",
            "usuarios",
            {...data, celular_usuarios: celular },
            undefined
        );

        console.log(resepcion);
    };


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Registrate
            </Text>
            <View style={styles.divabajo}>

                <Text style={styles.nom_input}>Nombre</Text>
                <TextInput
                    style={styles.input}
                    value={data.nombre_usuario}
                    onChangeText={(text) =>
                        setData((old) => ({ ...old, nombre_usuario: text }))}
                ></TextInput>

                <Text style={styles.nom_input}>Apellido</Text>
                <TextInput
                    style={styles.input}
                    value={data.apellido_usuario}
                    onChangeText={(text) =>
                        setData((old) => ({ ...old, apellido_usuario: text }))}
                ></TextInput>

                <Text style={styles.nom_input}>Contraseña</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    value={data.contra_usuario}
                    onChangeText={(text) =>
                        setData((old) => ({ ...old, contra_usuario: text }))}
                ></TextInput>

                <Text style={styles.nom_input}>Numero de Celula</Text>
                <TextInput 
                style={styles.input}
                value={data.celular_usuarios}
                    onChangeText={(text) =>
                        setData((old) => ({ ...old, celular_usuarios: text }))}
                ></TextInput>
                <Text>


                </Text>
                <TouchableOpacity style={styles.boton} onPress={() => sentData()}>
                    <Text style={{ textAlign: "center", color: "#fff", fontSize: 18 }}>
                        Registrarse
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
    titulo: {
        fontSize: 28,
        color: "#fff",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        padding: "30%",

    },
    boton: {
        backgroundColor: "#219ebc",
        padding: "3%",
        width: "90%",
        borderRadius: 10,
    },
    nom_input: {
        padding: "2%",
        color: "#faa307",
        fontSize: 16,
    },
    input: {
        backgroundColor: "#0001",
        padding: "2%",
        width: "90%",
        borderRadius: 20,
        color: "#faa307",
    },
    sesion: {
        padding: "3%",
        color: "#faa307",
        fontSize: 18,
    }
})


export default Registro;
