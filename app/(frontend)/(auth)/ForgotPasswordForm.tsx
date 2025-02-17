"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormInput from "@/components/FormInput";
import MyButton from "@/components/MyButton";
import Link from "next/link";
import { loginUser } from "@/actions/auth";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";

const schema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email format"),
});

type FormData = z.infer<typeof schema>;

const ForgotPasswordForm = () => {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setError("");
    const formData = new FormData();
    formData.append("email", data.email);

    // const res = await loginUser(formData);
    // if (res?.error) setError(res.error);

    // if (res?.success) {
    //   alert("Log in successful");
    //   redirect("/");
    // }
  };

  return (
    <div className="h-auto    w-full bg-stone-300 rounded-t-xl overflow-hidden ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-[#333333] flex justify-between  text-white text-[28px] px-[15px] py-[10px]  ">
          <div className="uppercase">Forgot password?</div>
          <Link
            href="/login"
            className="text-[20px] text-nowrap flex justify-end items-end "
          >
            Sign In
          </Link>
        </div>
        <div className="p-1 ">
          <div className="bg-white p-[15px] pt-[30px]">
            {/* // errors */}
            {error && (
              <div className=" text-sm  font-light mb-6  text-center bg-primary text-white p-5 opacity-30">
                <p>{error}</p>
              </div>
            )}
            {Object.keys(errors).length > 0 && (
              <div className=" text-sm  font-light mb-6  text-center bg-primary text-white p-5 opacity-30">
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
            </div>

            <div className="flex mt-6 justify-between items-center">
              <MyButton
                text="submit"
                className={cn(
                  "px-9 py-2 hover:bg-black",
                  isSubmitting && "border-4 border-red-300"
                )}
                type="submit"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
