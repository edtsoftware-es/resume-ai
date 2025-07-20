import { createClient } from '@/lib/supabase/server';

export async function getOffer(id: string) {
  const supabase = await createClient();
  const { data: job } = await supabase
    .from('job_offers')
    .select('*')
    .eq('id', Number(id))
    .single();

  return job;
}

export async function getOffers() {
  const supabase = await createClient();
  const { data: user } = await supabase.auth.getUser();
  const { data: jobOffers } = await supabase
    .from('job_offers')
    .select('*')
    .eq('user_id', user?.user?.id ?? '');

  return jobOffers;
}
