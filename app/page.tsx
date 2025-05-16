import { Button } from "@/components/ui/button"
import {  
  RegisterLink,
  LoginLink
} from "@kinde-oss/kinde-auth-nextjs/components"

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-center">Bem vindo ao You Task</h1>

      <div className="flex gap-4 mt-6">
        <Button>
          <RegisterLink>Começar agora!</RegisterLink>
        </Button>

        <Button asChild variant={"outline"}>
          <LoginLink>Entrar</LoginLink>
        </Button>
      </div>
    </div>
  )
}

export default page
