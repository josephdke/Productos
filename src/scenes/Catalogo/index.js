import React, { Component } from 'react';

import { View, Text, Button,FlatList} from 'react-native';
import ItemCatalogo from './componentes/item-catalogo';
import ItemSeparator from './componentes/item.separator';
import Api from './../../utils/api';

class Catalogo extends Component {

    constructor(props){
        super(props);
        this.state = {
            catalogoList: []
        };
    }

    componentDidMount= ()=>{
        this.invokeApiGetCatalogList();
    };

    async invokeApiGetCatalogList(){
        const data = await Api.getCatalogList();
        console.log( data );
        this.setState( { catalogoList: data } );
    }

    static navigationOptions = {
        title: 'Catalogo',
    }
    
    renderItem=({item}) => <ItemCatalogo navigation={this.props.navigation} catalogo={item}/>
    separatorComponent=()=> <ItemSeparator />
    emptyComponent=()=> <Text>No hay productos</Text> 
    keyExtractor=item => item._id

    render() {
        return (
            <View>               
                {/*Creaci+on de lista*/}
                <FlatList
                    data={this.state.catalogoList}
                    renderItem={this.renderItem}
                    ListItemComponent={this.emptyComponent}
                    ItemSeparatorComponent={this.separatorComponent}
                    keyExtractor={this.keyExtractor}
                />

            </View>
        );
    }
}

export default Catalogo;