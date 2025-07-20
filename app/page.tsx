import { LoginDialog } from '@/components/login-dialog';
import { ForesightLink } from '@/components/ui/foresight-link';
import { getUser } from '@/lib/user';

export default async function HomePage() {
  const user = await getUser();

  return (
    <div>
      <h1>hello world</h1>
      {user ? (
        <ForesightLink href="/dashboard" name="profile">
          Go to dashboard
        </ForesightLink>
      ) : (
        <LoginDialog />
      )}
    </div>
  );
}
