import { Suspense } from 'react';
import { CandidatesRanking } from '@/components/candidates-ranking';
import { getOffer } from '@/lib/offers';

export default async function JobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = await getOffer(id)

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
