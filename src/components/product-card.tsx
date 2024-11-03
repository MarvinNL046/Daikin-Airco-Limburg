import { ArrowRight } from "lucide-react";
import { ProductImage } from "@/config/images";

interface ProductCardProps {
  product: ProductImage;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
      <div className="aspect-[4/3] relative">
        <img
          src={product.src}
          alt={product.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-600">{product.description}</p>
        <a
          href="#contact"
          className="mt-4 inline-flex items-center text-primary hover:text-primary-dark"
        >
          Meer informatie
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
}