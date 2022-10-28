import { useStore } from 'store/store';


const API_SERVER = 'http://localhost:8080';

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    longDescription: string;
}

export interface LineaDetalle {
    LineaDetalle: {
        NumeroLinea: number; //1;
        Codigo: number; //8313200009900;
        CodigoComercial: {
            Tipo: number; //4;
            Codigo: number; //1;
        };
        Cantidad: number; //1;
        UnidadMedida: string; //'Unid';
        Detalle: string; //'OTROS SERVICIOS DE SOPORTE EN TECNOLOGÍAS DE INFORMACIÓN';
        PrecioUnitario: number; //26549;
        MontoTotal: number; //26549;
        SubTotal: number; //26549;
        Impuesto: {
            Codigo: number; //1;
            CodigoTarifa: number; //8;
            Tarifa: number; //13;
            Monto: number; //3451.37;
        };
        MontoTotalLinea: number; //30000.37;
    };
}

export const getProducts = (): Promise<Product[]> => {
    const { sales } = useStore();
    return sales.products.items;
};

//fetch(`${API_SERVER}/products`).then((res) => res.json());

export const getProductById = (id: string): Promise<Product> =>
    fetch(`${API_SERVER}/products/${id}`).then((res) => res.json());

export const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});


 
  
