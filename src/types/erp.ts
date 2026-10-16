export type StockStatus =  "In Stock" | "Low Stock" |  "Out of Stock";

export interface Product {
    id: number;
    name : String;
    sku: string;
    category: string;
    quantity: number;
    price: number;
    status: StockStatus;

}