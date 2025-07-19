import { createClient } from "@/lib/supabase/server";

export default async function JobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: job } = await supabase
    .from("job_offers")
    .select("*")
    .eq("id", Number(id))
    .single();
  if (!job) {
    return <h1>Job not found</h1>;
  }
  return <div>{JSON.stringify(job)}</div>;
}
