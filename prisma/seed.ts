import "dotenv/config";

import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";
import slugify from "slugify";
import { mockProducts } from "@/lib/mocks";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    for (const productCategory of mockProducts) {
        const slug = slugify(productCategory.category, {
            lower: true,
        });

        const category = await prisma.category.upsert({
            where: { slug },
            update: { name: productCategory.category },
            create: { name: productCategory.category, slug },
        });

        console.log(`${category.name} Success add to database`);
    }

    for (const product of mockProducts) {
        const slug = slugify(product.name, { lower: true });
        const slugCategory = slugify(product.category, {
            lower: true,
        });

        const result = await prisma.product.upsert({
            where: { slug },
            update: {
                name: product.name,
                description: product.description,
                price: product.price,
                image: product.image,
            },
            create: {
                slug,
                name: product.name,
                description: product.description,
                price: product.price,
                image: product.image,
                category: { connect: { slug: slugCategory } },
            },
        });

        console.log(`${result.name} Success add to database`);
    }
}

main()
    .then(async () => {
        console.log("Seeding Complete 🥳");
        await prisma.$disconnect();
        await pool.end();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        await pool.end();
        process.exit(1);
    });
