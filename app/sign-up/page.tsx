'use client'

import { signUp } from "@/server/users";
import Link from "next/link";

export default function SignUp() {
  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const target = e.target as unknown as {
      email: { value: string };
      password: { value: string };
      name: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
    const name = target.name.value

    await signUp(email, password, name);
  }

  return (
    <main className="flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl">Sign Up</h1>
        <form className="flex flex-col gap-3" method="post" onSubmit={handleSubmit}>
          <input
            className="bg-stone-500"
            type="text"
            placeholder="email"
            name="email"
          />
          <input
            className="bg-stone-500"
            type="text"
            placeholder="name"
            name="name"
          />
          <input
            className="bg-stone-500"
            type="password"
            placeholder=""
            name="password"
          />
          <button type="submit">Sign Up</button>
          <Link href="/sign-in">Sign in</Link>
        </form>
    </main>
  );
}
