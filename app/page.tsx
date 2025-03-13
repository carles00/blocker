import SignoutButton from "@/components/signout";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <main className="flex flex-col gap-3 items-center justify-center p-10">
      <div className="flex gap-3">
        <Link href="/sign-in">Sign In</Link>
      </div>
      <p>{!session ? "Not authenticated" : session.user.name}</p>
    </main>
  )
}