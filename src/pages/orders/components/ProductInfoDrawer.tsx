import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer';
import { Phone } from 'lucide-react';

interface Product {
  id: string;
  clientName: string;
  clientWilaya: string;
  clientVille: string;
  productName: string;
  productCategory: string;
  orderDate: string;
  deliveryCompanyName: string;
  status: string;
}

interface ProductInfoDrawerProps {
  product: Product;
  statuses: { label: string; value: string; icon?: React.ElementType }[];
  deliveryCompanies: { label: string; logoUrl: string }[];
}

export function ProductInfoDrawer({
  product,
  statuses,
  deliveryCompanies,
}: ProductInfoDrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button >Modify</Button>
      </DrawerTrigger>
      <DrawerContent
      
      className="fixed inset-0 w-full h-full transition-transform transform 
      translate-y-full sm:translate-y-0 sm:translate-x-full sm:right-0 sm:top-0">
      
        <div className=" mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Product Information</DrawerTitle>
            <DrawerDescription>Modify the product details.</DrawerDescription>
          </DrawerHeader>
          <Card className="w-[350px]">
            
            <CardContent className="pt-4 max-h-96 overflow-y-auto">
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="clientName">Client Name</Label>
                    <Input
                      id="clientName"
                      defaultValue={product.clientName}
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="phone">Client Phone</Label>
                    <Button>
                      <Phone className="mr-2 h-4 w-4" /> +213541678551
                    </Button>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="productName">Product Name</Label>
                    <Input
                      id="productName"
                      defaultValue={product.productName}
                      readOnly
                    />
                  </div>
                  
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="deliveryCompany">Delivery Company</Label>
                    <div>
                      <Select defaultValue={product.deliveryCompanyName}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {deliveryCompanies.map((company) => (
                            <SelectItem key={company.label} value={company.label}>
                              <div className="flex items-center">
                                <img
                                  src={company.logoUrl}
                                  alt={company.label}
                                  className="h-6 w-6 mr-2"
                                />
                                {company.label}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="status">Status</Label>
                    <div>
                      <Select defaultValue={product.status}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {statuses.map((status) => (
                            <SelectItem key={status.value} value={status.value}>
                              <div className="flex items-center">
                                {status.icon && (
                                  <status.icon className="mr-2 h-4 w-4" />
                                )}
                                {status.label}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
