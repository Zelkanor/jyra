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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useRegister } from "../api/use-register";
import { signUpSchema } from "../schemas";

const SignUpCard = () => {
  const { mutate, isPending } = useRegister();

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof signUpSchema>) => {
    mutate({ json: data });
  };
  return (
    <div>
      <Card className="w-full h-full md:w-[487px] border-none shadow-none">
        <CardHeader className="flex flex-col items-center justify-center text-center p-7">
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>
            By signing up, you agree to our{" "}
            <Link href="/privacy">
              <span className="text-blue-700">Privacy Policy</span>
            </Link>{" "}
            and{" "}
            <Link href="/terms">
              <span className="text-blue-700">Terms of Service</span>
            </Link>
          </CardDescription>
        </CardHeader>
        <div className="px-7">
          <DottedSeperator />
        </div>
        <CardContent className="p-7">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                name="name"
                defaultValue=""
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="name"
                        placeholder="Enter your name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                Register
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
        <CardContent className="p-7 flex items-center justify-center">
          <p>
            Already have an account?
            <Link href="/sign-in" className="text-blue-700">
              &nbsp;Sign In
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpCard;
