import React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

const ItemDetalle = (props) => (

    <View style={styles.container}>
        <View>
            <Image
                style={styles.image}
                source={{ uri: props.detalle.image }}
            />
        </View>
        <View style={styles.content}>
            <Text style={styles.contactName}>{props.detalle.name}</Text>
            <Text>${props.detalle.price}</Text>
        </View>
        <View style={styles.specifications}>
            <Text style={styles.contactName}>{props.detalle.titulo}</Text>
            <Text>{props.detalle.descripcion}</Text>
            <Button
                title="Añadir al Carrito"
                onPress={() => { props.navigation.navigate('CompraScreen', { detalle : props.detalle }) }}//No se utiliza this.props ya que es una función
            />
        </View>
    </View>

);
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    content: {
        paddingLeft: 10,
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 35,
        padding: 5,
        margin: 5
    },
    contactName: {
        fontSize: 24,
        fontWeight: '200',
    },
    specifications: {
        justifyContent: 'center',

    },

});
export default ItemDetalle;
