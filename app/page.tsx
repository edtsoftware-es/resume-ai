import { LoginDialog } from '@/components/login-dialog';
import { ForesightLink } from '@/components/ui/foresight-link';
import { getUser } from '@/lib/user';

export default async function HomePage() {
  const user = await getUser();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="mx-auto w-full max-w-md p-8">
        <div className="space-y-8 text-center">
          <div className="space-y-2">
            <h1 className="font-bold text-4xl text-slate-900">Resume AI</h1>
            <p className="text-slate-600">
              Encuentra a tu candidato perfecto con inteligencia artificial
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {user ? (
              <div className="flex flex-col gap-4">
                <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                  <p className="text-green-800 text-sm">
                    ¡Bienvenido de vuelta! 👋
                  </p>
                </div>
                <ForesightLink
                  className="rounded-md bg-black p-3 text-white"
                  href="/dashboard"
                  name="dashboard"
                >
                  Ir al dashboard
                </ForesightLink>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                  <p className="text-blue-800 text-sm">
                    Inicia sesión para comenzar a analizar currículums
                  </p>
                </div>
                <LoginDialog />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
