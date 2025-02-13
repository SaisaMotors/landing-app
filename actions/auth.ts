"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginUser(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/users/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      }
    );

    if (!res.ok) {
      return { error: "Invalid credentials" };
    }

    const data = await res.json();
    (await cookies()).set("payload-token", data.token, {
      httpOnly: true,
      secure: true,
    });

    console.log("succeeded");
    redirect("/dashboard"); // Redirect on successful login
  } catch (error) {
    return { error: "Something went wrong. Please try again." };
  }
}

export async function logoutUser() {
  (await cookies()).delete("payload-token");
  redirect("/login");
}
