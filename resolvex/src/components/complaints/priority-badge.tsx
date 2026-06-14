import { Badge } from "@/components/ui/badge";

interface Props {
  priority:
    | "LOW"
    | "MEDIUM"
    | "HIGH";
}

export default function PriorityBadge({
  priority,
}: Props) {
  const styles = {
    LOW: "bg-slate-100 text-slate-700 hover:bg-slate-100",
    MEDIUM:
      "bg-orange-100 text-orange-700 hover:bg-orange-100",
    HIGH:
      "bg-red-100 text-red-700 hover:bg-red-100",
  };

  return (
    <Badge className={styles[priority]}>
      {priority}
    </Badge>
  );
}