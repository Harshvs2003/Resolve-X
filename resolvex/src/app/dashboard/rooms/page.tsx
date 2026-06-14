import { roomService }
from "@/services/room-service";

import RoomCard
from "@/components/rooms/room-card";

import { Button }
from "@/components/ui/button";

export default async function RoomsPage() {

  const rooms =
    await roomService.getRooms();

  return (
    <div className="space-y-6">

      <div
        className="
        flex
        justify-between
        items-center
        "
      >
        <div>

          <h1
            className="
            text-3xl
            font-bold
            "
          >
            Rooms
          </h1>

          <p className="text-slate-500">
            Manage locations and rooms
          </p>

        </div>

        <Button>
          Add Room
        </Button>

      </div>

      <div
        className="
        grid
        grid-cols-4
        gap-4
        "
      >
        {rooms.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
          />
        ))}
      </div>

    </div>
  );
}