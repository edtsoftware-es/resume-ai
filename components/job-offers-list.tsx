import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ForesightLink } from "@/components/ui/foresight-link";
import type { Tables } from "@/database.types";
import { createClient } from "@/lib/supabase/server";
import { CreateJobOffer } from "./create-job-offer";

interface JobOfferItem {
  jobOffer: Tables<"job_offers">;
}

function JobOfferItem({ jobOffer }: JobOfferItem) {
  return (
    <ForesightLink
      className="text-blue-500 hover:underline"
      href={`/profile/jobs/${jobOffer.id}`}
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

export async function JobOffersList() {
  const supabase = await createClient();
  const { data: user } = await supabase.auth.getUser();
  const { data: jobOffers } = await supabase
    .from("job_offers")
    .select("*")
    .eq("user_id", user?.user?.id ?? "");

  return (
    <ul className="grid grid-cols-4 gap-6">
      {jobOffers?.map((jobOffer) => (
        <JobOfferItem jobOffer={jobOffer} key={jobOffer.id} />
      ))}
      <CreateJobOffer />
    </ul>
  );
}
