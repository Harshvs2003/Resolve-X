import { Card, CardContent }
from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div>
      <h1
        className="
        text-3xl
        font-bold
        mb-6
        "
      >
        Dashboard
      </h1>

      <div
        className="
        grid
        grid-cols-4
        gap-4
        "
      >
        <Card>
          <CardContent className="p-6">
            <h3>Open</h3>

            <p className="text-3xl font-bold">
              14
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3>In Progress</h3>

            <p className="text-3xl font-bold">
              6
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3>Resolved</h3>

            <p className="text-3xl font-bold">
              22
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3>Verified</h3>

            <p className="text-3xl font-bold">
              30
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}