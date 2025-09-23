"use client"

import { signOut, useSession } from "next-auth/react"

export default function LogoutButton() {
  const { data: session } = useSession()

  if (!session) {
    return null // Ne rien afficher si pas connecté
  }

  return (
    <button
	 onClick={() => signOut({
	   callbackUrl: '/',
	   redirect: true
	 })}
	 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
	 Se déconnecter
    </button>
  )
}