interface Customer {
    name: string,
    email: string,
    password: string
}

interface Order {
    custumerId: string,
    productId: string,
    quantity: number
}

interface Product {
    productId: string,
    title: string,
    price: number
}

class OnlineShop {
    private orders: Order[];
    private offeredProducts: Product[];
    private custumers: Customer[];

    public addProduct(title: string, price: number) { };

    public updateProduct(product: Product) { };

    public removeProduct(productId: string) { };

    public getAvailableItems(productId: string) { };

    public restockProduct(productId: string) { };

    public createCustomer(email: string, password: string) { };

    public loginCustomer(custumer: Customer) { };

    public makePurchase(custumerId: string, productId: string) { };

    public addOrder(order: Order) { }

    public refund(orderId: string) { };

    public updateCustomerProfile(custumerId: string, name: string) { };
}
