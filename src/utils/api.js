const API_ENDPOINT = "https://shoppingproducts.herokuapp.com";

class Api {

    async getCatalogList(){
        try {
            const response = await fetch( `${API_ENDPOINT}/products` );
            const data = await response.json();
            return data;                
        } catch (error) {
            console.log( error );
        }
    }

    async getProduct( item ){
        try {
            const response = await fetch( `${API_ENDPOINT}/products/${item}` );
            const data = await response.json();
            return data;                
        } catch (error) {
            console.log( error );
        }
    }

}

export default new Api();