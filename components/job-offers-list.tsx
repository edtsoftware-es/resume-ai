import { ForesightLink } from '@/components/ui/foresight-link';
import { createClient } from '@/lib/supabase/server';

export async function JobOffersList() {
    const supabase = await createClient();
    const { data: user } = await supabase.auth.getUser();
    const { data: jobOffers } = await supabase
        .from('job_offers')
        .select('*')
        .eq('user_id', user?.user?.id ?? '');

    return (
        <ul className="flex flex-col gap-4">
            {jobOffers?.map((jobOffer) => (
                <ForesightLink
                    className="text-blue-500 hover:underline"
                    href={`/profile/jobs/${jobOffer.id}`}
                    key={jobOffer.id}
                    name={`job-${jobOffer.id}`}
                >
                    {jobOffer.title}
                </ForesightLink>
            ))}
        </ul>
    );
}
