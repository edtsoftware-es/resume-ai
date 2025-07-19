import { LoginDialog } from '@/components/login-dialog';
import { ForesightLink } from '@/components/ui/foresight-link';
import { createClient } from '@/lib/supabase/server';

export default async function HomePage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <div>
      {JSON.stringify(data.user, null, 2)}
      <h1>hello world</h1>
      <LoginDialog />
      <ForesightLink href="/profile" name="profile">
        Go to profile
      </ForesightLink>
    </div>
  );
}
