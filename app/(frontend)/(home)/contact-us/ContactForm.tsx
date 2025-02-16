"use client";
import FormInput from "@/components/FormInput";
import MyButton from "@/components/MyButton";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import MyTextArea from "./MyTextArea";

const schema = z.object({
  name: z
    .string({ required_error: "Please Enter your name." })
    .min(2, "Please Enter your name."),
  email: z
    .string({ required_error: "Please Enter Email ID" })
    .email("Invalid email address"),
  phone: z
    .string({ required_error: "Please Enter your phone." })
    .min(10, "Enter a valid phone number"),

  message: z
    .string({ required_error: "Please Enter Message" })
    .min(2, "Please Enter message."),
});

type FormData = z.infer<typeof schema>;
const ContactForm = () => {
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
    console.log("form data", data);
    alert("Request submitted successfully");
    //   const formData = new FormData();
    //   formData.append("email", data.email);
    //   formData.append("password", data.password);

    //   const res = await loginUser(formData);
    //   if (res?.error) setError(res.error);

    //   if (res?.success) {
    //     alert("Log in successful");
    //     redirect("/");
    //   }
  };

  // Get the first error message
  const firstErrorMessage = Object.values(errors)[0]?.message as string;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#4B4B4B] p-12 px-8 text-white"
    >
      <div className="px-2">
        <h3 className="text-xl font-semibold">Get In touch with Us</h3>
        <p className="mt-3 text-sm">
          Fill the below form.We will get back to you soon.
        </p>
      </div>

      {/* form fields */}
      <div className="space-y-6 mt-4">
        <FormInput
          label="Name"
          name="name"
          register={register}
          className="w-full  "
          inputClass="text-white"
          labelClass="text-[18px]"
        />
        <FormInput
          label="Email"
          name="email"
          register={register}
          className="w-full "
          inputClass="text-white"
          labelClass="text-[18px]"
        />
        <FormInput
          label="Phone Number"
          name="phone"
          register={register}
          className="w-full "
          inputClass="text-white"
          labelClass="text-[18px]"
        />
        <MyTextArea
          label="Message"
          name="message"
          register={register}
          className="w-full"
          inputClass="text-white"
          labelClass="text-[18px]"
        />
      </div>
      <MyButton
        text="submit"
        className="hover:bg-black text-lg p-7 mt-3"
        type="submit"
      />
      {firstErrorMessage && (
        <p className="text-primary text-sm mt-2">{firstErrorMessage}</p>
      )}
    </form>
  );
};

export default ContactForm;
