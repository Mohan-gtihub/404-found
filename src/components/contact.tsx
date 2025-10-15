'use client';

import { useActionState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/app/actions';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits.'),
  service: z.enum(['web-development', 'iot-automation', 'both']),
  message: z.string().min(5, 'Message must be at least 5 characters.'),
  additionalNotes: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [state, formAction] = useActionState(submitContactForm, {});
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: 'web-development',
      message: '',
      additionalNotes: '',
    },
    context: state,
  });

  useEffect(() => {
    if (state?.success) {
      toast({
        title: 'Message Sent',
        description: 'We\'ll get back to you soon!',
      });
      form.reset();
    } else if (state?.message && !state.success) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
    }
  }, [state, toast, form]);

  return (
    <section id="contact" className="w-full bg-gray-950 py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Get in Touch / Request a Project
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Have a project in mind or just want to learn more? Fill out the
              form below and we'll be in touch shortly.
            </p>
          </div>

          <div className="mx-auto w-full max-w-2xl">
            <div className="rounded-xl border border-gray-800 bg-gray-900/80 backdrop-blur-sm">
              <div className="border-b border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-5 text-center">
                <h3 className="text-xl font-semibold text-white">Let's Work Together</h3>
                <p className="mt-1 text-sm text-gray-300">
                  Tell us about your project — we'll get back to you within 24 hours.
                </p>
              </div>

              <Form {...form}>
                <form
                  action={formAction}
                  className="space-y-6 p-6"
                  noValidate
                >
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Name */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Full Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              className="h-12 border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-red-400" />
                        </FormItem>
                      )}
                    />

                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your@email.com"
                              className="h-12 border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-red-400" />
                        </FormItem>
                      )}
                    />

                    {/* Phone */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Phone Number <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+1 (555) 000-0000"
                              className="h-12 border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-red-400" />
                        </FormItem>
                      )}
                    />

                    {/* Service */}
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Service</FormLabel>
                          <FormControl>
                            <select
                              {...field}
                              className="flex h-12 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                              <option value="web-development">Web Development</option>
                              <option value="iot-automation">IoT & Home Automation</option>
                              <option value="both">Both</option>
                            </select>
                          </FormControl>
                          <FormMessage className="text-xs text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Message */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project..."
                            className="min-h-[120px] border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />

                  {/* Additional Notes */}
                  <FormField
                    control={form.control}
                    name="additionalNotes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Additional Notes (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Any extra details you'd like to share..."
                            className="min-h-[80px] border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />

                  <div className="pt-2">
                    <Button
                      type="submit"
                      className="w-full h-12 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 disabled:opacity-50"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </div>

                  <p className="text-xs text-center text-gray-400">
                    We'll get back to you within 24 hours. Your information is secure and will never be shared.
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
