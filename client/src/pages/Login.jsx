import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      // Logic for actual API call would go here
      // const response = await api.post('/auth/login', data);

      // Mock login for demonstration
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch(login({ name: "User", email: data.email }));
      toast.success("Successfully logged in!");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.error || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email Address"
        placeholder="Enter your email"
        {...register("email")}
        error={errors.email}
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        {...register("password")}
        error={errors.password}
      />
      <Button type="submit" className="w-full mt-4" isLoading={isSubmitting}>
        Sign In
      </Button>
    </form>
  );
};

export default Login;
