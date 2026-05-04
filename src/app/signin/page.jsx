"use client";
import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";
import { Check } from "@gravity-ui/icons";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

export default function SignINPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/home",
    });

    if (error) {
      toast.error(error.message || "Invalid email or password");
      return;
    }

    if (data) {
      toast.success("Login successful!");
      router.push("/home");
    }
  };

  const handleGoogleSignIn = async () => {
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/home",
    });

    if (error) {
      toast.error(error.message || "Google login failed");
      return;
    }

    toast.success("Google login successful!");
  };

  return (
    <>
      <Toaster position="top-right" />

      {/* FIXED HERE */}
      <Card className="border mx-auto w-full max-w-md py-10 mt-5 px-4">
        <h1 className="text-center text-2xl font-bold">Sign In</h1>

        {/* FIXED HERE */}
        <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="flex gap-2">
            <Button type="submit">
              <Check />
              Submit
            </Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
        </Form>

        <p className="text-center mt-3">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-blue-500 underline">
            Register
          </Link>
        </p>

        <p className="text-center">Or</p>

        <div className="flex justify-center items-center">
          <Button onClick={handleGoogleSignIn} className="bg-black">
            <FcGoogle size={20} /> Sign in with Google
          </Button>
        </div>
      </Card>
    </>
  );
}