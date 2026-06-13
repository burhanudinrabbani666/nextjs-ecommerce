import { Product } from "@/mocks";
import Image from "next/image";

/**
 * Image components was mean to be reduce bandwith
 * The Next.js Image component extends the HTML <img> element for automatic image optimization.
 * fill: The Next.js Image component extends the HTML <img> element for automatic image optimization.
 *
 */
export function ProductCart({ product }: { product: Product }) {
    return (
        <div className="border border-green-200 rounded-lg p-4">
            <div className="relative aspect-video">
                <Image
                    quality={100}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={product.image}
                    alt={product.name}
                    className="object-cover"
                />
            </div>
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">
                ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-500">${product.description}</p>
        </div>
    );
}
