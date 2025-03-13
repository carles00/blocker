"use client";

import { signIn } from "@/server/users";
import Link from "next/link";

export default function SignIn() {
  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const target = e.target as unknown as {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;

    await signIn(email, password)
  }

  return (
    <main className="flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl">Sign In</h1>
        <form className="flex flex-col gap-3" method="post" onSubmit={handleSubmit}>
          <input
            className="bg-stone-500"
            type="text"
            placeholder="email"
            name="email"
          />
          <input
            className="bg-stone-500"
            type="password"
            placeholder="aaaaa"
            name="password"
          />
          <button type="submit">Sign In</button>
          <Link href="/sign-up">Sign up</Link>
        </form>
    </main>
  );
}
