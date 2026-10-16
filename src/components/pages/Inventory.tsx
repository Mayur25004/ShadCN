import { Button } from "@/components/ui/button";
import { Package, Plus } from "lucide-react";
export function Inventory(){
    return (
        
        
       
       < div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                        Inventory
                    </h1>
                    <p className="mt-1 text-muted-foreground">
                        Manage your products and stock levels.
                    </p>
                </div>

                <Button className="text-center">
                    <Plus className="mr-2 size-4  " />
                    Add Product
                </Button>

            </div>
        </div>
    )
}

