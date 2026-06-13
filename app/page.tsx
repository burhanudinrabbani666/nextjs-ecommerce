import { ProductCart } from "@/components/product-cart";
import { mockProducts } from "@/lib/mocks";
import prisma from "@/lib/prisma";

export default async function HomePage() {
    const products = await prisma.product.findMany({
        include: { category: true },
    });

    return (
        <main className="container mx-auto p-4">
            <h1 className="mb-6 text-3xl font-bold">Home</h1>
            <p>Showing {mockProducts.length} products</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <ProductCart key={product.id} product={product} />
                ))}
            </div>
        </main>
    );
}
