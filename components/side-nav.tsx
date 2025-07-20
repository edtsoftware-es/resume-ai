import { JobOfferItem } from '@/components/job-offers-list';
import { createClient } from '@/lib/supabase/server';
import { Button } from './ui/button';

export async function SideNav() {
  const supabase = await createClient();
  const { data: user } = await supabase.auth.getUser();
  const { data: jobOffers } = await supabase
    .from('job_offers')
    .select('*')
    .eq('user_id', user?.user?.id ?? '');

  return (
    <nav className="h-full border-r-1">
      <ul className="flex h-full flex-col items-center gap-6">
        <li className="flex justify-center">
          <Button>Crear nueva oferta</Button>
        </li>
        <span className="h-[1px] w-[90%] bg-gray-300" />
        {jobOffers?.map((jobOffer) => (
          <li key={jobOffer.id}>
            <JobOfferItem jobOffer={jobOffer} key={jobOffer.id} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
