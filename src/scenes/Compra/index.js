import React, { Component } from 'react';

import { View} from 'react-native';
import ItemCompra from './componentes/item-compra';


class Compra extends Component {

    constructor(props){
        super(props);
        this.state={
            compra: {}
        };
    }

    componentDidMount= ()=>{
        const compra = 
            {
                name: 'Iphone X',
                price: `${this.props.navigation.getParam('detalle').price}`,
                product: this.props.navigation.getParam('detalle').image,
                iva: '$576.000',              
                envio: '$50.000',
                total: '$3.650.000'
            };

        this.setState({
            compra
        });
    };

    static navigationOptions = {
        title: 'Compra',
    }
    
    render() {
        return (
            <View>               
                <ItemCompra compra={this.state.compra} navigation={ this.props.navigation } /> 
            </View>
        );
    }
}

export default Compra;