import SignoutButton from "@/components/signout";
import Link from "next/link";

export default function Feed() {
  return (
    <main className="flex flex-col gap-3 justify-center items-center h-full">
      <h1 className="text-4xl">Feed</h1>
      <Link href="profile">Profile</Link> 
      <SignoutButton />
    </main>
  );
}
