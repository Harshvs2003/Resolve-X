import { Input } from "@/components/ui/input";

import ComplaintTable from "@/components/complaints/complaint-table";

import { complaintService } from "@/services/complaint-service";
import Link from "next/link";

import PageHeader from "@/components/shared/page-header";

import { Button } from "@/components/ui/button";

export default async function ComplaintsPage() {
  const complaints = await complaintService.getComplaints();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Complaints"
        description="Manage organization complaints"
        action={
          <div className="flex gap-3">
            <Input placeholder="Search complaints..." className="w-72" />

            <Link href="/dashboard/complaints/create">
              <Button>Create Complaint</Button>
            </Link>
          </div>
        }
      />

      <ComplaintTable data={complaints} />
    </div>
  );
}
