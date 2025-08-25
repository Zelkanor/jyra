"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { z } from "zod";

import DottedSeperator from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useLogin } from "../api/use-login";
import { loginSchema } from "../schemas";

const SignInCard = () => {
  const { mutate, isPending } = useLogin();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    mutate({ json: data });
  };

  return (
    <div>
      <Card className="w-full h-full md:w-[487px] border-none shadow-none">
        <CardHeader className="flex items-center justify-center text-center p-7">
          <CardTitle className="text-2xl">Welcome back!</CardTitle>
        </CardHeader>
        <div className="px-7">
          <DottedSeperator />
        </div>
        <CardContent className="p-7">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Enter email address"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button disabled={isPending} size="lg" className="w-full">
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
        <div className="px-7">
          <DottedSeperator />
        </div>
        <CardContent className="p-7 flex flex-col gap-y-4">
          <Button
            disabled={isPending}
            variant="secondary"
            className="w-full"
            size="lg"
          >
            <FcGoogle className="mr-2 size-5" />
            Login with Google
          </Button>
          <Button
            disabled={isPending}
            variant="secondary"
            className="w-full"
            size="lg"
          >
            <FaGithub className="mr-2 size-5" />
            Login with GitHub
          </Button>
        </CardContent>
        <div className="px-7">
          <DottedSeperator />
        </div>
        <CardContent className="p-7 flex items-center justify-center">
          <p>
            Don&apos;t have an account?
            <Link href="/sign-up" className="text-blue-700">
              &nbsp;Sign Up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInCard;
