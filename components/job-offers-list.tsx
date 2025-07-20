import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ForesightLink } from '@/components/ui/foresight-link';
import type { Tables } from '@/database.types';
import { CreateJobOffer } from './create-job-offer';

type JobOffer = Tables<'job_offers'>;

export function JobOffersList({ jobOffers }: { jobOffers: JobOffer[] }) {
  return (
    <ul className="grid grid-cols-4 gap-6">
      {jobOffers?.map((job) => (
        <JobOfferItem jobOffer={job} key={job.id} />
      ))}
      <CreateJobOffer />
    </ul>
  );
}

export function JobOfferItem({ jobOffer }: { jobOffer: JobOffer }) {
  return (
    <ForesightLink
      className="text-blue-500 hover:underline"
      href={`/dashboard/${jobOffer.id}`}
      name={`job-${jobOffer.id}`}
    >
      <Card>
        <CardHeader>
          <CardTitle>{jobOffer.title}</CardTitle>
          <p>{jobOffer.company}</p>
        </CardHeader>
        <CardContent>
          <p>{jobOffer.salary_range}</p>
        </CardContent>
        <CardFooter>
          <p>{jobOffer.status}</p>
        </CardFooter>
      </Card>
    </ForesightLink>
  );
}
