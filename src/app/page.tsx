import { auth } from "@/auth"
import LoginButton from "@/app/login-btn"
import LogoutButton from '@/app/logout-btn';

export default async function Home() {
  const session = await auth()
  console.log('session : ', session);
  if (!session) {
    return (
	 <div>
	   Non connecté
	   <LoginButton />
	 </div>
    )
  }

  return (
    <div>
	 Connecté en tant que {session.user?.name || session.user?.email}
	 <LogoutButton />
    </div>
  )
}