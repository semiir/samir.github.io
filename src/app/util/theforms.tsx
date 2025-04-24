"use Client"

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

const formSchema = z.object({
    username: z.string().min(3),
    emailAddress: z.string().email(),
    message: z.string().min(5),
    });



export default function theForms() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        username: "",
        emailAddress: "",
        message: "",
        }
  });

  return (
    <FormProvider {...form}>
      <form 
      className="w-full max-w-md border rounded-md mx-auto px-4 md:px-6 py-7 space-y-4"
      onSubmit={form.handleSubmit((data) => {
        console.log(data);
      })}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel> User Name</FormLabel>
              <FormControl>
                <Input placeholder="Your username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                <Input placeholder="example@example.com" {...field} />
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
                <Textarea placeholder="Your message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />




        <Button type="submit" 
        className="w-full max-w-md">Submit
        </Button>
      </form>
    </FormProvider>
  );



    // <>
 
    //     <FormField
    //     control={form.control}
    //     name="username"
    //     render={({ field }) => (
    //         <FormItem>
    //         <FormLabel>Username</FormLabel>
    //         <FormControl>
    //             <Input placeholder="shadcn" {...field} />
    //         </FormControl>
    //         <FormDescription>This is your public display name.</FormDescription>
    //         <FormMessage />
    //         </FormItem>
    //     )}
    //     />
    // </>

}
