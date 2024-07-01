'use client'
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession()
  console.log(data)

  return (
    <main className="text-white flex gap-5">
      <button className="p-4 bg-slate-400" onClick={() => signIn()}>Login</button>
      <button className="p-4 bg-slate-400" onClick={() => signOut()}>Logout</button>
    </main>
  );
}
