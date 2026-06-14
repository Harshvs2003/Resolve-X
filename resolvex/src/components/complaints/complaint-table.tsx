import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

import { Complaint } from "@/types/complaint";

import StatusBadge from "./status-badge";
import PriorityBadge from "./priority-badge";

interface Props {
  data: Complaint[];
}

export default function ComplaintTable({ data }: Props) {
  return (
    <div className="rounded-xl border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created By</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((complaint) => (
            <TableRow key={complaint.id}>
              <TableCell>{complaint.id}</TableCell>

              <TableCell>
                <Link
                  href={`/dashboard/complaints/${complaint.id}`}
                  className=" text-grey-600 hover:underline font-medium">
                  {complaint.title}
                </Link>
              </TableCell>

              <TableCell>{complaint.location}</TableCell>

              <TableCell>
                <PriorityBadge priority={complaint.priority} />
              </TableCell>

              <TableCell>
                <StatusBadge status={complaint.status} />
              </TableCell>

              <TableCell>{complaint.createdBy}</TableCell>

              <TableCell>{complaint.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
