import { z } from 'zod'


export const taskSchema = z.object({
  id: z.string(),
  clientName: z.string(),
  clientWilaya: z.string(),
  clientVille: z.string(),
  productName: z.string(),
  productCategory: z.string(),
  orderDate: z.string(),
  deliveryCompanyName: z.string(),
  deliveryCompanyLogo: z.string(),
  status: z.string(),
})

export type Task = z.infer<typeof taskSchema>
