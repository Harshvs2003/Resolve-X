import { Badge } from "@/components/ui/badge";

interface Props {
  status:
    | "OPEN"
    | "IN_PROGRESS"
    | "RESOLVED"
    | "VERIFIED";
}

export default function StatusBadge({
  status,
}: Props) {
  const styles = {
    OPEN: "bg-red-100 text-red-700 hover:bg-red-100",
    IN_PROGRESS:
      "bg-yellow-100 text-yellow-700 hover:bg-yellow-100",
    RESOLVED:
      "bg-blue-100 text-blue-700 hover:bg-blue-100",
    VERIFIED:
      "bg-green-100 text-green-700 hover:bg-green-100",
  };

  return (
    <Badge className={styles[status]}>
      {status.replace("_", " ")}
    </Badge>
  );
}