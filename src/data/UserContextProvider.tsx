import React, { useState } from 'react';

// Models and providers
import UserContext, { UserContextModel } from './user-context';
import { Product } from './product-context';
import { KartRow } from './cart-context';


const UserContextProvider: React.FC = ( props ) => {

    // 1. kartRows
    const [ kartRows, setKartRows] = useState<KartRow[]>([]);

    // 2. addToKart
    const addNewProductToKart = ( product: Product ) => {
        const newKartRow = {
            id: Math.random().toString(),
            product,
            quantity: '1'
        };

        setKartRows( currentKartRows => {
            return [...currentKartRows, newKartRow]
        })

    }

    // 3. incrementInKart
    const incrementInKart = (productId: string) => {
        setKartRows( currentKartRows => {
            const updatedKartRows = currentKartRows;
            const selectedRowIndex = kartRows.findIndex( row => row.product.id === productId );
            const newQuantity =  Number( updatedKartRows[selectedRowIndex].quantity ) + 1;
            updatedKartRows[selectedRowIndex].quantity = newQuantity.toString();
            return updatedKartRows;
        })
    }

    // 4. removeFromKart
    const removeFromKart = (productId: string) => {
        setKartRows( currentKartRows => {
            const updatedKartRows = currentKartRows;
            const selectedRowIndex = kartRows.findIndex( row => row.product.id === productId );
            const newQuantity =  Number( updatedKartRows[selectedRowIndex].quantity ) - 1;
            updatedKartRows[selectedRowIndex].quantity = newQuantity.toString();
            return updatedKartRows;
        })
    }

    // 5. clearKart
    const clearKart = () => {
        setKartRows( [] );
    }

    // INITIALIZE user for context
    const userContext: UserContextModel = {
        kartRows,
        addNewProductToKart,
        incrementInKart,
        removeFromKart,
        clearKart
    };

    return (
        <UserContext.Provider value={userContext}>
            {props.children}
        </UserContext.Provider>
    );

}

export default UserContextProvider;