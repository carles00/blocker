"use client";

import { signOut } from "@/server/users";

export default function SignoutButton() {
  return (
    <button
      className="bg-neutral-700 text-white p-2 rounded-md"
      onClick={signOut}
    >
      Signout
    </button>
  );
}