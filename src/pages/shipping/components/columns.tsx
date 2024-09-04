import { ColumnDef } from '@tanstack/react-table'

import { DataTableColumnHeader } from './data-table-column-header'
 
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { deliveryCompanies, statuses } from '../data/data'
import { Task } from '../data/schema'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Checkbox } from '@/components/ui/checkbox'
import { ProductInfoDrawer } from './ProductInfoDrawer'

export const columns: ColumnDef<Task>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
        className='translate-y-[2px]'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='ID' />
    ),
    cell: ({ row }) => <div className='w-[80px]'>{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'clientName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Client' />
    ),
    cell: ({ row }) => (
      <div>
        <span className='font-bold'>{row.getValue('clientName')}</span>
        <br />
        <span className='text-sm text-muted-foreground'>
          {row.original.clientVille}, {row.original.clientWilaya}
        </span>
      </div>
    ),
  },
  {
    accessorKey: 'productName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Product' />
    ),
    cell: ({ row }) => (
      <div>
        <span>{row.getValue('productName')}</span>
        <br />
        <span className='text-sm text-muted-foreground'>
          {row.original.productCategory}
        </span>
      </div>
    ),
  },
  {
    accessorKey: 'orderDate',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Order Date' />
    ),
    cell: ({ row }) => <div>{row.getValue('orderDate')}</div>,
  },
  {
  accessorKey: 'deliveryCompanyName',
  header: ({ column }) => (
    <DataTableColumnHeader column={column} title='Delivery' />
  ),
  cell: ({ row }) => {
    const companyName = row.original.deliveryCompanyName;
    const company = deliveryCompanies.find(c => c.label === companyName);

    return (
      <div className='flex items-center'>
        {company ? (
          <>
            <Avatar>
              <AvatarImage src={company.logoUrl} alt={companyName} />
            </Avatar>
            <span className='pl-2'>{companyName}</span>
          </>
        ) : (
          
          <Button 
  variant="outline" 
  size="icon" 
  className="h-8 w-8 rounded-full p-0">
  <Plus className="h-4 w-4" />
</Button>

        )}
      </div>
    );
  },
},
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.label === row.getValue('status')
      )

      return (
        <div className='flex items-center'>
          {status?.icon && (
            <status.icon className='mr-2 h-4 w-4 text-muted-foreground' />
          )}
          {status?.label}
        </div>
      )
    },
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const product = row.original;
      return (
        <ProductInfoDrawer 
          product={product} 
          statuses={statuses} 
          deliveryCompanies={deliveryCompanies} 
        />
      );
    },
  },
  
]
