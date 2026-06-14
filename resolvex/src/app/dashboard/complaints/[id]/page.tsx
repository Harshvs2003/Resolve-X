import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import StatusBadge
from "@/components/complaints/status-badge";

import PriorityBadge
from "@/components/complaints/priority-badge";

export default async function ComplaintDetailsPage() {

  const complaint = {
    id: "CMP-001",
    title: "AC not working",
    description:
      "Ward 3 AC is not cooling properly and requires maintenance.",
    location: "Ward 3",
    priority: "HIGH" as const,
    status: "OPEN" as const,
    createdBy: "Raj Sharma",
    createdAt: "2026-08-01",
  };

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-start">

        <div>
          <h1 className="text-3xl font-bold">
            {complaint.title}
          </h1>

          <p className="text-slate-500 mt-2">
            Complaint ID: {complaint.id}
          </p>
        </div>

        <div className="flex gap-3">
          <StatusBadge
            status={complaint.status}
          />

          <PriorityBadge
            priority={complaint.priority}
          />
        </div>

      </div>

      <div className="grid grid-cols-3 gap-6">

        <div className="col-span-2 space-y-6">

          <Card>
            <CardHeader>
              <CardTitle>
                Complaint Details
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p>
                {complaint.description}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                Comments
              </CardTitle>
            </CardHeader>

            <CardContent>

              <div className="space-y-4">

                <div className="border rounded-lg p-4">
                  <p className="font-medium">
                    Amit Kumar
                  </p>

                  <p className="text-sm text-slate-500">
                    Spare part ordered.
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <p className="font-medium">
                    Raj Sharma
                  </p>

                  <p className="text-sm text-slate-500">
                    Awaiting maintenance.
                  </p>
                </div>

              </div>

            </CardContent>
          </Card>

        </div>

        <div>

          <Card>

            <CardHeader>
              <CardTitle>
                Information
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">

              <div>
                <p className="text-sm text-slate-500">
                  Location
                </p>

                <p>{complaint.location}</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Created By
                </p>

                <p>{complaint.createdBy}</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Created At
                </p>

                <p>{complaint.createdAt}</p>
              </div>

            </CardContent>

          </Card>

          <Card className="mt-6">

            <CardHeader>
              <CardTitle>
                Activity Timeline
              </CardTitle>
            </CardHeader>

            <CardContent>

              <div className="space-y-4">

                <div>
                  <p className="font-medium">
                    Complaint Created
                  </p>

                  <p className="text-sm text-slate-500">
                    Aug 1, 2026
                  </p>
                </div>

                <div>
                  <p className="font-medium">
                    Comment Added
                  </p>

                  <p className="text-sm text-slate-500">
                    Aug 2, 2026
                  </p>
                </div>

              </div>

            </CardContent>

          </Card>

        </div>

      </div>

    </div>
  );
}