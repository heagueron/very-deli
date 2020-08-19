import React, { useState } from 'react';

// Models and providers
import DepartmentsContext, { DepartmentsContextModel, Department, DepartmentType } from './departments-context';
import { Product } from './product-context';
import { KartRow } from './cart-context';

const DepartmentsContextProvider: React.FC = ( props ) => {

    // BUILD SAMPLE DEPARMENTS
    const [departments, setDepartments] = useState<Department[]>([
        {
            id: '001',
            title: 'DESSERTS',
            description: 'Delicious desserts, cakes, ice-creams, pies and more.',
            departmentType: 'desserts',
            imageUrl: '/assets/images/departments/Desserts/dessert-table.png',
            isActive: true,
        },

        {
            id: '003',
            title: 'MEATS',
            description: 'Your proteins are here, red meats, fish, chicken, pork and more.',
            departmentType: 'meats',
            imageUrl: '/assets/images/departments/Meats/meat.png',
            isActive: true,
        },

        {
            id: '005',
            title: 'BAKERY',
            description: 'Traditional bakery, bread, integral products, burger and sandwich bread and more.',
            departmentType: 'bakery',
            imageUrl: '/assets/images/departments/Bakery/bread.png',
            isActive: true,
        },

    ]);

    // BUILD SAMPLE PRODUCTS
    const [products, setProducts] = useState<Product[]>([
        {
            id: Math.random().toString(),
            brand: 'Efe',
            title: 'Cheesecake',
            description: 'A real Very Deli dessert',
            price: '10',
            departmentId: '001',
            imageUrl: '/assets/images/departments/Desserts/Cheesecake.png',
            stock: '4',
        }, 
        {
            id: Math.random().toString(),
            brand: 'Efe',
            title: 'Chocolate',
            description: 'A real Very Deli dessert',
            price: '12',
            departmentId: '001',
            imageUrl: '/assets/images/departments/Desserts/Chocolate.png',
            stock: '4',
        },
        {
            id: Math.random().toString(),
            brand: 'Argentina',
            title: 'Eggs',
            description: 'A real Very Deli dessert',
            price: '15',
            departmentId: '001',
            imageUrl: '/assets/images/departments/Desserts/Eggs.png',
            stock: '50',
        },
        {
            id: Math.random().toString(),
            brand: 'Efe',
            title: 'Icecreams',
            description: 'A real Very Deli dessert',
            price: '10',
            departmentId: '001',
            imageUrl: '/assets/images/departments/Desserts/Icecreams.png',
            stock: '50',
        },
        {
            id: Math.random().toString(),
            brand: 'Jeffrey',
            title: 'Panquecas',
            description: 'A real Very Deli dessert',
            price: '10',
            departmentId: '001',
            imageUrl: '/assets/images/departments/Desserts/Panquecas.png',
            stock: '50',
        },
        {
            id: Math.random().toString(),
            brand: 'Efe',
            title: 'Strawberries',
            description: 'A real Very Deli dessert',
            price: '17',
            departmentId: '001',
            imageUrl: '/assets/images/departments/Desserts/Strawberries.png',
            stock: '50',
        },
        {
            id: Math.random().toString(),
            brand: 'La Francesa',
            title: 'Barbecue',
            description: 'A real Very Deli fat-free meat',
            price: '10',
            departmentId: '003',
            imageUrl: '/assets/images/departments/Meats/Barbecue.png',
            stock: '3',
        }, 
        {
            id: Math.random().toString(),
            brand: 'Enne',
            title: 'Burger',
            description: 'A real Very Deli fat-free meat',
            price: '15',
            departmentId: '003',
            imageUrl: '/assets/images/departments/Meats/Burger.png',
            stock: '50',
        },
        {
            id: Math.random().toString(),
            brand: 'EL Paso',
            title: 'Chicken',
            description: 'A real Very Deli fat-free meat',
            price: '10',
            departmentId: '003',
            imageUrl: '/assets/images/departments/Meats/Chicken.png',
            stock: '50',
        },
        {
            id: Math.random().toString(),
            brand: 'Periferico',
            title: 'Pork',
            description: 'A real Very Deli fat-free meat',
            price: '10',
            departmentId: '003',
            imageUrl: '/assets/images/departments/Meats/Pork.png',
            stock: '50',
        },
        {
            id: Math.random().toString(),
            brand: 'Enne',
            title: 'Ribs',
            description: 'A real Very Deli fat-free meat',
            price: '20',
            departmentId: '003',
            imageUrl: '/assets/images/departments/Meats/Ribs.png',
            stock: '50',
        },
        {
            id: Math.random().toString(),
            brand: 'Pescamara',
            title: 'Sea-food',
            description: 'A real Very Deli fat-free meat',
            price: '10',
            departmentId: '003',
            imageUrl: '/assets/images/departments/Meats/Sea-food.png',
            stock: '50',
        },
        {
            id: Math.random().toString(),
            brand: 'California',
            title: 'Country-bread',
            description: 'A real Very Deli and tasty bread',
            price: '12',
            departmentId: '005',
            imageUrl: '/assets/images/departments/Bakery/Country-bread.png',
            stock: '5',
        },
        {
            id: Math.random().toString(),
            brand: 'Sagres',
            title: 'Integral',
            description: 'A real Very Deli and tasty bread',
            price: '10',
            departmentId: '005',
            imageUrl: '/assets/images/departments/Bakery/Integral.png',
            stock: '50',
        },
        {
            id: Math.random().toString(),
            brand: 'La Estrella',
            title: 'Sicilian',
            description: 'A real Very Deli and tasty bread',
            price: '15',
            departmentId: '005',
            imageUrl: '/assets/images/departments/Bakery/Sicilian.png',
            stock: '50',
        },
        {
            id: Math.random().toString(),
            brand: 'Tasty Bite',
            title: 'Tasty',
            description: 'Delicious oreo and milk cream',
            price: '15',
            departmentId: '001',
            imageUrl: '/assets/images/departments/Desserts/Tasty.png',
            stock: '3',
        },
    ]);

    // BUILD KART
    const [kart, setKart] = useState<KartRow[]>([]);

    // setSelectedDepartmentId
    const setSelectedDepartmentId = (newDepId: string) => {
        setDepartments(currDepartments => {

            const updatedDepartments = {...currDepartments, selectedDepartmentId: newDepId};

            return updatedDepartments;
        });
    };

    // INITIALIZE departments for context
    const deparmentsContext: DepartmentsContextModel = {
        departments,
        products,
        kart,
        selectedDepartmentId: '1',
        setSelectedDepartmentId
    };

    return (
        <DepartmentsContext.Provider value={deparmentsContext}>
            {props.children}
        </DepartmentsContext.Provider>
    );

}

export default DepartmentsContextProvider;