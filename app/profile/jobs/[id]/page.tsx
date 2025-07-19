import { Suspense } from 'react';
import { CandidatesRanking } from '@/components/candidates-ranking';
import { createClient } from '@/lib/supabase/server';

export default async function JobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: job } = await supabase
    .from('job_offers')
    .select('*')
    .eq('id', Number(id))
    .single();

  if (!job) {
    return <h1>Job not found</h1>;
  }


  return (
    <>
      <div>
        <h1>{job.title}</h1>
        <p>{job.description}</p>
        <p>{job.location}</p>
      </div>
      <div>
        <h2>Candidates</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <CandidatesRanking id={id} />
        </Suspense>
      </div>
    </>
  );
}
