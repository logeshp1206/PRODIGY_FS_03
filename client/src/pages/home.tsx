import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/product-card";
import { CartDrawer } from "@/components/cart-drawer";
import { AuthDialog } from "@/components/auth-dialog";
import { PRODUCTS, CATEGORIES } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  ArrowRight,
  SlidersHorizontal,
  ArrowUpDown,
  Sprout,
  Star,
  ShoppingCart,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import heroBg from "@assets/generated_images/modern_local_general_store_interior_with_warm_lighting.png";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[500px] md:h-[600px] overflow-hidden flex items-center">
          <div className="absolute inset-0 z-0">
            {/* Simple gradient background instead of image */}
            <div className="w-full h-full bg-gradient-to-br from-emerald-700 via-emerald-500 to-amber-400" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-white">
            <div className="max-w-2xl space-y-6 animate-in slide-in-from-left duration-700 fade-in">
              <Badge className="bg-accent text-white hover:bg-accent/90 text-sm px-3 py-1 mb-4 border-none">
                New Harvest Arrivals
              </Badge>
              <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight">
                Fresh. Local.
                <br />
                <span className="text-accent">Handcrafted.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-lg leading-relaxed">
                Support your local community by shopping from independent
                artisans, bakers, and farmers. Delivered straight to your door.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="rounded-full h-12 px-8 text-lg bg-primary hover:bg-primary/90 text-white border-none">
                  Shop Now
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full h-12 px-8 text-lg bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                >
                  Our Story <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories & Filter Section */}
        <section className="py-12 bg-background sticky top-16 z-40 border-b shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                <div className="flex items-center gap-2 pr-4 border-r border-border mr-2">
                  <SlidersHorizontal className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium text-sm text-muted-foreground hidden sm:inline">
                    Filter:
                  </span>
                </div>
                {CATEGORIES.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full whitespace-nowrap ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "border-border hover:border-primary/50 text-muted-foreground"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                <div className="text-sm text-muted-foreground whitespace-nowrap">
                  {filteredProducts.length} results
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="rounded-full gap-2">
                      <ArrowUpDown className="w-4 h-4" />
                      Sort
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setSortBy("featured")}>
                      Featured
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy("price-asc")}>
                      Price: Low to High
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy("price-desc")}>
                      Price: High to Low
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy("rating")}>
                      Top Rated
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <div className="bg-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">
                  No products found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters or search terms.
                </p>
                <Button
                  variant="link"
                  onClick={() => setSelectedCategory("All")}
                  className="mt-4 text-primary"
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="space-y-4">
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  <Sprout className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold">100% Local</h3>
                <p className="text-white/80 leading-relaxed">
                  Every product is sourced from within 50 miles of our store,
                  supporting our local economy.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  <Badge className="w-8 h-8 bg-transparent" />
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold">
                  Artisan Quality
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Hand-picked goods that meet our strict standards for quality,
                  sustainability, and craftsmanship.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  <ShoppingCart className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold">
                  Same-Day Delivery
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Order by 2pm and receive your goods the same evening. Freshness
                  guaranteed.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CartDrawer />
      <AuthDialog />
    </div>
  );
}
