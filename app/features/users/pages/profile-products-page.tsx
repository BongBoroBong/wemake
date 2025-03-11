import { ProductCard } from "~/features/products/components/product-card";
import type { Route } from "./+types/profile-products-page";

export function meta(meta: Route.MetaFunction) {
  return [{ title: "Products | Profile | wemake" }];
}

export default function ProfileProductsPage() {
  return (
    <div className="flex flex-col gap-5">
      {Array.from({ length: 5 }).map((_, index) => (
        <ProductCard
          key={`productId-${index}`}
          id={`productId-${index}`}
          name={`Product ${index + 1}`}
          description={`Product ${index + 1} description`}
          commentsCount={index + 1}
          viewsCount={index + 1}
          votesCount={index + 1}
        />
      ))}
    </div>
  );
}
