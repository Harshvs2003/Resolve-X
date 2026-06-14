import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Room } from "@/types/room";

interface Props {
  room: Room;
}

export default function RoomCard({
  room,
}: Props) {
  return (
    <Card className="hover:shadow-md transition">
      <CardContent className="p-5">
        <h3 className="font-semibold text-lg">
          {room.name}
        </h3>

        <p className="text-slate-500 mt-2">
          {room.building}
        </p>
      </CardContent>
    </Card>
  );
}