import React from "react";
import SectionHeader from "../SectionHeader";
import LoginForm from "../LoginForm";
import AuthSeparator from "../AuthSeparator";
import RegisterForm from "../RegisterForm";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SectionHeader />

      <div className="w-full  border-2 border-red-700  mx-auto p-4 lg:p-0 lg:max-w-6xl inline-flex flex-col lg:flex-row justify-evenly lg:justify-between gap-8  ">
        <div className="w-full lg:w-1/2">
          <LoginForm />
        </div>
        <AuthSeparator />

        <div className="w-full lg:w-1/2">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default page;
