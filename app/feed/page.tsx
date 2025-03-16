import SignoutButton from "@/components/signout";

export default function Dashboard() {
  return (
    <main className="flex flex-col gap-3 justify-center items-center h-full">
      <h1 className="text-4xl">Dashboard</h1>
      <SignoutButton />
    </main>
  );
}
