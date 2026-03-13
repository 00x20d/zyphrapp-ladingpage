"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { contactFormSchema, ContactFormValues } from "@/lib/contact-schema";
import { submitContactForm } from "@/app/contact/actions";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      title: "",
      email: "",
      content: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
      const result = await submitContactForm(data);

      if (result.success) {
        toast.success(result.message);
        form.reset();
      } else {
        toast.error(result.message);
        if (result.errors) {
          Object.keys(result.errors).forEach((key) => {
            const field = key as keyof ContactFormValues;
            form.setError(field, {
              type: "server",
              message: (result.errors as any)[field]?.[0],
            });
          });
        }
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className='w-full max-w-xl mx-auto p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-white/80'>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder='your@email.com'
                    {...field}
                    className='bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#701dff] focus:ring-[#701dff]/20 rounded-xl'
                  />
                </FormControl>
                <FormMessage className='text-red-400' />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-white/80'>Subject</FormLabel>
                <FormControl>
                  <Input
                    placeholder='How can we help you?'
                    {...field}
                    className='bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#701dff] focus:ring-[#701dff]/20 rounded-xl'
                  />
                </FormControl>
                <FormMessage className='text-red-400' />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='content'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-white/80'>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Write your message here...'
                    {...field}
                    className='bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#701dff] focus:ring-[#701dff]/20 rounded-xl min-h-[150px] resize-none'
                  />
                </FormControl>
                <FormMessage className='text-red-400' />
              </FormItem>
            )}
          />

          <Button
            type='submit'
            disabled={isSubmitting}
            className='w-full bg-[#701dff] hover:bg-[#701dff]/90 text-white font-semibold py-6 rounded-xl shadow-[0_0_20px_-5px_#701dff] transition-all duration-200'
          >
            {isSubmitting ? (
              <>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
