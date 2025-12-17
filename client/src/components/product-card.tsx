import { Product } from "@/lib/mockData";
import { useStore } from "@/lib/store";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

import { useToast } from "@/hooks/use-toast";

export function ProductCard({ product }: ProductCardProps) {
  const addToCart = useStore((state) => state.addToCart);
  const toggleCart = useStore((state) => state.toggleCart);
  const { toast } = useToast();

  const handleBuyNow = () => {
    addToCart(product);
    // The cart automatically opens due to addToCart logic in store, 
    // but if we want to ensure it feels like "Buy Now", we can just let it open.
    // If we wanted to go straight to checkout logic, we'd need more state.
    // For now, "Buy Now" adds to cart and opens it, which is standard for quick buy.
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      layout
    >
      <Card className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 bg-card h-full flex flex-col">
        <div className="relative aspect-square overflow-hidden bg-secondary/20">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
              <Badge variant="destructive" className="text-lg px-4 py-2">Out of Stock</Badge>
            </div>
          )}
        </div>
        
        <CardHeader className="p-4 pb-0">
          <div className="flex justify-between items-start mb-2">
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
              {product.category}
            </Badge>
            <div className="flex items-center text-amber-500 text-sm font-medium">
              <Star className="w-4 h-4 fill-current mr-1" />
              {product.rating} <span className="text-muted-foreground ml-1 font-normal">({product.reviews})</span>
            </div>
          </div>
          <h3 className="font-heading text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </CardHeader>
        
        <CardContent className="p-4 pt-2 flex-grow">
          <p className="text-muted-foreground text-sm line-clamp-2">
            {product.description}
          </p>
        </CardContent>
        
        <CardFooter className="p-4 pt-0 flex items-center justify-between mt-auto">
          <span className="font-heading text-xl font-bold text-primary">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          <div className="flex gap-2">
            <Button 
              onClick={() => addToCart(product)} 
              disabled={!product.inStock}
              variant="outline"
              className="rounded-full shadow-sm hover:shadow-md transition-all active:scale-95 px-3"
              size="sm"
            >
              <ShoppingCart className="w-4 h-4" />
            </Button>
            <Button 
              onClick={handleBuyNow} 
              disabled={!product.inStock}
              className="rounded-full shadow-sm hover:shadow-md transition-all active:scale-95 flex-1"
              size="sm"
            >
              Buy Now
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
