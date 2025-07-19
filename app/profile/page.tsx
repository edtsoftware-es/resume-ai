import { Suspense } from "react";
import { CreateJobOffer } from "@/components/create-job-offer";
import { JobOffersList } from "@/components/job-offers-list";

export default function ProfilePage() {
  return (
    <div>
      <h1>profile page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <JobOffersList />
      </Suspense>
      <CreateJobOffer />
    </div>
  );
}
