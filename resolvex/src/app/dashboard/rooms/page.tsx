import { roomService } from "@/services/room-service";

import RoomCard from "@/components/rooms/room-card";

import PageHeader from "@/components/shared/page-header";

import { Button } from "@/components/ui/button";

export default async function RoomsPage() {
  const rooms = await roomService.getRooms();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Rooms"
        description="Manage locations and rooms"
        action={<Button>Add Room</Button>}
      />

      <div
        className="
        grid
        grid-cols-4
        gap-4
        "
      >
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}
