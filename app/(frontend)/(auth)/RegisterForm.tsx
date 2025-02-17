"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormInput from "@/components/FormInput";
import MyButton from "@/components/MyButton";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { loginUser, registerUser } from "@/actions/auth";
import { redirect } from "next/navigation";
// import { registerUser } from "@/actions/auth";

const schema = z
  .object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    phone: z.string().min(10, "Enter a valid phone number"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    companyName: z.string().optional(),
    address: z.string().min(5, "Address is required"),
    postalCode: z.string().min(4, "Postal code is required"),
    city: z.string().min(2, "City is required"),
    state: z.string().min(2, "State is required"),
    country: z.string().min(2, "Country is required"),
    agreeMarketingEmails: z
      .boolean()
      // .refine((val) => val, "You must agree to continue")
      .optional(),
    terms: z.boolean({ required_error: "You must accept the terms" }),
    // .refine((val) => val, "You must accept the terms"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

const RegisterForm = () => {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      agreeMarketingEmails: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setError("");
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, String(value));
    });

    console.log("form data", data);
    const result = await registerUser(formData);

    if (result?.error) {
      setError(result.error);
      return;
    }

    if (result?.success) {
      alert("Account created successfully");
      console.log("succeful registaration");
      redirect("/");
    }
  };
  return (
    <div className=" h-auto    w-full bg-stone-300 rounded-t-xl overflow-hidden ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-[#333333] uppercase text-white text-[28px] px-[15px] py-[10px]  ">
          register
        </div>
        <div className="p-1 ">
          <div className="bg-white p-[15px] pt-[30px]">
            {/* inputs */}

            <div className="space-y-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <FormInput
                  label="First Name"
                  name="firstName"
                  register={register}
                  isMust
                  className="w-full lg:w-1/2"
                />
                <FormInput
                  label="Last Name"
                  name="lastName"
                  register={register}
                  isMust
                  className="w-full lg:w-1/2"
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-6">
                <FormInput
                  label="Phone"
                  name="phone"
                  register={register}
                  isMust
                  className="w-full lg:w-1/2"
                />
                <FormInput
                  label="Email ID"
                  name="email"
                  register={register}
                  isMust
                  className="w-full lg:w-1/2"
                />
              </div>

              <div className="flex flex-col lg:flex-row gap-6">
                <FormInput
                  label="Password"
                  name="password"
                  register={register}
                  // type="password"
                  // isMust
                  className="w-full lg:w-1/2"
                />
                <FormInput
                  label="Confirm Password"
                  name="confirmPassword"
                  register={register}
                  isMust
                  className="w-full lg:w-1/2"
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-6">
                <FormInput
                  label="Company Name"
                  name="companyName"
                  register={register}
                  // isMust
                  className="w-full lg:w-1/2"
                />
                <FormInput
                  label="Address"
                  name="address"
                  register={register}
                  isMust
                  className="w-full lg:w-1/2"
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-6">
                <FormInput
                  label="Postal Code"
                  name="postalCode"
                  register={register}
                  isMust
                  className="w-full lg:w-1/2"
                />
                <FormInput
                  label="Town / City"
                  name="city"
                  register={register}
                  isMust
                  className="w-full lg:w-1/2"
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-6">
                <FormInput
                  label="State"
                  name="state"
                  register={register}
                  isMust
                  className="w-full lg:w-1/2"
                />
                <FormInput
                  label="Country"
                  name="country"
                  register={register}
                  isMust
                  className="w-full lg:w-1/2"
                />
              </div>
            </div>
            <div className="text-[13px] space-y-5 mt-8">
              <div>
                <p>
                  I agree to receive marketing emails from Saisa Motors Limited
                </p>
                <RadioGroup
                  onValueChange={(value) => {
                    if (value === "agree") {
                      setValue("agreeMarketingEmails", true);
                    } else {
                      setValue("agreeMarketingEmails", false);
                    }
                  }}
                  className="flex items-center font-semibold gap-8"
                  defaultValue="disagree"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="agree" id="r1" />
                    <Label htmlFor="r1" className="font-semibold text-[13px]">
                      I agree
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="disagree" id="r2" className=" " />
                    <Label htmlFor="r2" className="font-semibold text-[13px]">
                      I disagree
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <p className="font-medium">
                Kindly note that these email include but are not limited to
                newsletters, promotional offers and announcements from MotorHub.
                Each email you receive from us provides a one-click method to
                unsubscribe from the distribution list.
              </p>

              <div className="flex items-center space-x-2">
                <Checkbox
                  onCheckedChange={(value: boolean) => setValue("terms", value)}
                  className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-none"
                  id="terms"
                />
                <label
                  htmlFor="terms"
                  className="text-[12px] font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I have read and agree to MotorHub'{" "}
                  <span className="text-primary">
                    Privacy Policy & Terms Of Use.
                  </span>
                </label>
              </div>
            </div>

            <div className="flex mb-4 mt-6 justify-center items-center">
              <MyButton
                text="register"
                className={cn(
                  "px-9 py-2 hover:bg-black",
                  isSubmitting && "border-4 border-red-300"
                )}
                type="submit"
              />
            </div>
            {/* // errors */}
            {error && (
              <div className=" text-sm  font-light  text-center bg-primary text-white p-5 opacity-30">
                <p>{error}</p>
              </div>
            )}
            {Object.keys(errors).length > 0 && (
              <div className=" text-sm  font-light mb-6  text-center bg-primary text-white p-5 opacity-30">
                {Object.entries(errors).map(([key, value]) => (
                  <p className="" key={key}>
                    {value?.message?.toString()}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
