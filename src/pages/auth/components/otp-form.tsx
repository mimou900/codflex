import { HTMLAttributes, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@/components/custom/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { PinInput, PinInputField } from '@/components/custom/pin-input'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

interface OtpFormProps extends HTMLAttributes<HTMLDivElement> {}

const formSchema = z.object({
  otp: z.string().min(1, { message: 'Please enter your OTP code.' }),
})

export function OtpForm({ className, ...props }: OtpFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [disabledBtn, setDisabledBtn] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()
  
  // Retrieve user data from state
  const { username, email, phone, password } = location.state || {}

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { otp: '' },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      // Send registration request
      const response = await axios.post('https://saas-api-q0de.onrender.com/api/auth/register', {
        username,
        email,
        phone,
        password,
        otp: data.otp,
      })

      console.log('Registration Successful', response.data)
      navigate('/sign-in-2') // Redirect to orders page on success
    } catch (error) {
      console.error('Error during registration', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='grid gap-2'>
            <FormField
              control={form.control}
              name='otp'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormControl>
                    <PinInput
                      {...field}
                      className='flex h-10 justify-between'
                      onComplete={() => setDisabledBtn(false)}
                      onIncomplete={() => setDisabledBtn(true)}
                    >
                      {Array.from({ length: 7 }, (_, i) => {
                        if (i === 3) return <Separator key={i} orientation='vertical' />
                        return (
                          <PinInputField
                            key={i}
                            component={Input}
                            className={`${form.getFieldState('otp').invalid ? 'border-red-500' : ''}`}
                          />
                        )
                      })}
                    </PinInput>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className='mt-2' disabled={disabledBtn} loading={isLoading}>
              Verify
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
