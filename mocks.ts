export type Product = {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
};

export const mockProducts: Product[] = [
    {
        id: "1",
        name: "Wireless Headphones",
        description:
            "Premium noise-cancelling wireless headphones with long battery life.",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        category: "Electronics",
    },
    {
        id: "2",
        name: "Smart Watch",
        description:
            "Fitness tracker with heart rate monitoring and sleep analysis.",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        category: "Electronics",
    },
    {
        id: "3",
        name: "Espresso Machine",
        description:
            "Compact espresso machine for rich and creamy coffee at home.",
        price: 249.99,
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
        category: "Home Appliances",
    },
    {
        id: "4",
        name: "Yoga Mat",
        description:
            "Eco-friendly non-slip yoga mat with extra cushioning for comfort.",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1637157216470-d92cd2edb2e8",
        category: "Fitness",
    },
    {
        id: "5",
        name: "Bluetooth Speaker",
        description:
            "Portable Bluetooth speaker with deep bass and 12-hour battery life.",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1529359744902-86b2ab9edaea",
        category: "Electronics",
    },
];
