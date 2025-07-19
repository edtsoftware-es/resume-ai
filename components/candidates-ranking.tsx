import { createClient } from '@/lib/supabase/server';

export async function CandidatesRanking({ id }: { id: string }) {
    const supabase = await createClient();
    const { data: candidates } = await supabase
        .from('candidates')
        .select('*')
        .eq('job_offer_id', Number(id));

    return (
        <ul>
            {candidates
                ?.slice()
                .sort((a, b) => (b.ranking ?? 0) - (a.ranking ?? 0))
                .map((candidate) => (
                    <li key={candidate.id}>
                        {candidate.ranking} - {candidate.full_name} - {candidate.email}
                    </li>
                ))}
        </ul>
    )

}