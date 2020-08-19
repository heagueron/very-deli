import React from 'react';
import { Product } from './product-context';
import { KartRow } from './cart-context';

// Departments types may vary in the backend. They should be brought from backend.
export type DepartmentType = 'desserts' | 'cakes' | 'meats' | 'fruits' | 'bakery' | 'creams'

// Department interface should be built from department model from backend
export interface Department {
    id: string;
    title: string;
    description: string;
    departmentType: DepartmentType;
    imageUrl: string;
    isActive: boolean;
    //products: Product[];
}

export interface DepartmentsContextModel {
    departments: Department[];
    products: Product[];
    kart: KartRow[];
    selectedDepartmentId: string;
    setSelectedDepartmentId: ( newDepId: string) => void;
}

const DepartmentContext = React.createContext<DepartmentsContextModel>({
    departments: [],
    products: [],
    kart: [],
    selectedDepartmentId: '',
    setSelectedDepartmentId: () => {}
});

export default DepartmentContext;