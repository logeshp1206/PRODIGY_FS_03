import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useStore } from "@/lib/store";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

export function CartDrawer() {
  const { 
    cart, 
    isCartOpen, 
    toggleCart, 
    removeFromCart, 
    updateQuantity, 
    total,
    clearCart 
  } = useStore();
  
  const { toast } = useToast();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate processing
    setTimeout(() => {
      setIsCheckingOut(false);
      clearCart();
      toggleCart();
      toast({
        title: "Order Placed Successfully!",
        description: "Thank you for your purchase. Your order has been received.",
        duration: 3000,
      });
    }, 1500);
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={toggleCart}>
      <SheetContent className="w-full sm:w-[400px] flex flex-col p-0 gap-0">
        <SheetHeader className="p-6 border-b bg-secondary/10">
          <SheetTitle className="font-heading text-2xl flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-primary" />
            Your Cart
          </SheetTitle>
          <SheetDescription>
            {cart.length === 0 ? "Your cart is currently empty." : `You have ${cart.length} items in your cart.`}
          </SheetDescription>
        </SheetHeader>

        {cart.length > 0 ? (
          <>
            <ScrollArea className="flex-1 p-6">
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="h-20 w-20 rounded-lg overflow-hidden bg-secondary/20 flex-shrink-0 border border-border">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-heading font-semibold text-foreground line-clamp-1">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">₹{item.price.toLocaleString('en-IN')}</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border rounded-md h-8 bg-background">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 rounded-none hover:bg-secondary/50"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 rounded-none hover:bg-secondary/50"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 text-destructive hover:text-destructive/80 hover:bg-destructive/10"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="p-6 bg-secondary/10 border-t mt-auto">
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{total().toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="font-heading font-bold text-lg">Total</span>
                  <span className="font-heading font-bold text-xl text-primary">₹{total().toLocaleString('en-IN')}</span>
                </div>
                <Button 
                  className="w-full h-12 text-lg rounded-full font-heading" 
                  size="lg"
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                >
                  {isCheckingOut ? "Processing..." : "Buy Now"}
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Secure checkout powered by MockPay
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-4">
            <div className="h-24 w-24 rounded-full bg-secondary/30 flex items-center justify-center mb-4">
              <ShoppingBag className="h-12 w-12 text-muted-foreground/50" />
            </div>
            <h3 className="font-heading text-xl font-bold">Cart is Empty</h3>
            <p className="text-muted-foreground max-w-[250px]">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Button variant="outline" onClick={toggleCart} className="mt-4">
              Start Shopping
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
