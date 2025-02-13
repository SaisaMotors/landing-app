"use client";
import React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormInput from "@/components/FormInput";
import MyButton from "@/components/MyButton";
import Link from "next/link";

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email format"),
  password: z.string().min(8),
});

type FormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="border w-full lg:w-1/2 bg-stone-300 rounded-t-xl overflow-hidden ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-[#333333] uppercase text-white text-[28px] px-[15px] py-[10px]  ">
          sign in
        </div>
        <div className="p-1 ">
          <div className="bg-white p-[15px] pt-[30px]">
            {/* // errors */}

            {Object.keys(errors).length > 0 && (
              <div className="space-y-2 text-sm  font-light mb-6  text-center bg-primary text-white p-5 opacity-30">
                {Object.entries(errors).map(([key, value]) => (
                  <p className="" key={key}>
                    {value.message?.toString()}
                  </p>
                ))}
              </div>
            )}

            {/* inputs */}
            <div className="space-y-5">
              <FormInput
                label="Email"
                name="email"
                register={register}
                // error={errors.name}
              />

              <FormInput
                label="Password"
                name="password"
                register={register}
                // error={errors.name}
              />
            </div>

            <div className="flex mt-6 justify-between items-center">
              <MyButton
                text="login"
                className="px-9 py-2 hover:bg-black"
                type="submit"
              />
              {/* <button
                type="submit"
                className="bg-primary p-1 uppercase text-md "
              >
                login
              </button> */}

              <Link href={""} className="text-primary text-[14px]">
                Forgot Password
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
