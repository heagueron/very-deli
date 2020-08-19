import React from 'react';

import { Product } from './product-context';


export interface KartRow {
    id: string;
    product: Product,
    quantity: string
}

export interface UserContextModel {
    kartRows: KartRow[];
    addNewProductToKart: (product: Product) => void;
    incrementInKart: ( productId: string ) => void;
    removeFromKart: (productId: string) => void;
    clearKart: () => void;
}

const UserContext = React.createContext<UserContextModel>({
    kartRows: [],
    addNewProductToKart: () => {},
    incrementInKart: () => {},
    removeFromKart: () => {},
    clearKart: () => {},

});

export default UserContext