'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you would send this data to a server
    console.log(values);
    toast({
      title: 'Message Sent!',
      description: 'Thank you for reaching out. I will get back to you soon.',
    });
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12 fade-in">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">
          Get in Touch
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Have a question, a project idea, or just want to connect? I'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2 space-y-8 fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-bold font-headline">Contact Information</h2>
            <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <a href="mailto:aman.antuley@example.com" className="hover:text-primary">aman.antuley@example.com</a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                        <h3 className="font-semibold text-foreground">Phone</h3>
                        <span>(123) 456-7890</span>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                        <h3 className="font-semibold text-foreground">Location</h3>
                        <span>Somewhere in the digital world</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="md:col-span-3 fade-in" style={{ animationDelay: '0.4s' }}>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Send a Message</CardTitle>
                    <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                            <Input placeholder="Your Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                            <Input placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                            <Textarea placeholder="Your message..." {...field} rows={6} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <Button type="submit">Send Message</Button>
                    </form>
                </Form>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
