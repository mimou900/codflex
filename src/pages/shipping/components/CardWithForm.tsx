import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface Status {
    value: string;
    label: string;
  }
  
  interface DeliveryCompany {
    value: string;
    label: string;
  }
  
  interface Product {
    productName: string;
    productCategory: string;
    status: string;
    deliveryCompanyName: string;
  }
  
  interface CardWithFormProps {
    product: Product;
    statuses: Status[];
    deliveryCompanies: DeliveryCompany[];
    onStatusChange: (value: string) => void;
    onDeliveryCompanyChange: (value: string) => void;
  }
  
  export function CardWithForm({
    product,
    statuses,
    deliveryCompanies,
    onStatusChange,
    onDeliveryCompanyChange,
  }: CardWithFormProps) {
    return (
      <Card className="w-[350px] m-4">
        <CardHeader>
          <CardTitle>{product.productName}</CardTitle>
          <CardDescription>{product.productCategory}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            {/* Status Select */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="status">Status</Label>
              <Select
                value={product.status}
                onValueChange={(value) => onStatusChange(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      {status.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {/* Delivery Company Select */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="deliveryCompany">Delivery Company</Label>
              <Select
                value={product.deliveryCompanyName}
                onValueChange={(value) => onDeliveryCompanyChange(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Delivery Company" />
                </SelectTrigger>
                <SelectContent>
                  {deliveryCompanies.map((company) => (
                    <SelectItem key={company.value} value={company.value}>
                      {company.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </CardFooter>
      </Card>
    );
  }