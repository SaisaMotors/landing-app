"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3000";
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
      const errorData = await res.json();
      return { error: errorData.message || "Invalid credentials" };
    }

    const data = await res.json();
    (await cookies()).set("payload-token", data.token, {
      httpOnly: true,
      secure: true,
    });
    const { user, token } = data;
    console.log("succeeded");
    return { success: true, user };
    // redirect("/dashboard"); // Redirect on successful login
  } catch (error) {
    return { error: "Something went wrong. Please try again." };
  }
}

export async function logoutUser() {
  (await cookies()).delete("payload-token");
  redirect("/");
}

export async function registerUser(formData: FormData) {
  try {
    const data = Object.fromEntries(formData.entries());

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/users`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return { error: errorData.message || "Signup failed" };
    } else {
      const loginData = new FormData();
      loginData.append("email", data.email);
      loginData.append("password", data.password);

      const loginRes = await loginUser(loginData);
      console.log("authenticated user--", loginRes);

      if (loginRes.success) {
        return { success: true, user: loginRes.user };
      }
    }
  } catch (error) {
    console.error("Error registering user:", error);
    return { error: error instanceof Error ? error.message : "Signup error" };
  }
}

export async function getUser() {
  const token = (await cookies()).get("payload-token")?.value;

  if (!token) return null;

  const res = await fetch(`${API_URL}/api/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
  });

  if (!res.ok) return null;

  return res.json();
}
