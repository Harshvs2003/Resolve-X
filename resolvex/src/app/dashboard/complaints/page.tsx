import { Input } from "@/components/ui/input";

import ComplaintTable from "@/components/complaints/complaint-table";

import { complaintService } from "@/services/complaint-service";

export default async function ComplaintsPage() {
  const complaints =
    await complaintService.getComplaints();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Complaints
          </h1>

          <p className="text-slate-500">
            Manage organization complaints
          </p>
        </div>

        <Input
          placeholder="Search complaints..."
          className="max-w-sm"
        />
      </div>

      <ComplaintTable
        data={complaints}
      />
    </div>
  );
}