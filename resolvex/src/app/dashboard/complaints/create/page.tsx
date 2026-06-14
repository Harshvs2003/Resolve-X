import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

export default function CreateComplaintPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          Create Complaint
        </h1>

        <p className="text-slate-500">
          Report a new issue inside the organization
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            Complaint Information
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Title
            </label>

            <Input placeholder="AC not working" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Description
            </label>

            <Textarea
              placeholder="Describe the issue..."
              rows={6}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Location
            </label>

            <Input
              placeholder="Ward 3 / ICU / Room 204"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Priority
            </label>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Priority" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="LOW">
                  Low
                </SelectItem>

                <SelectItem value="MEDIUM">
                  Medium
                </SelectItem>

                <SelectItem value="HIGH">
                  High
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Upload Image
            </label>

            <Input type="file" />
          </div>

          <Button>
            Create Complaint
          </Button>

        </CardContent>
      </Card>
    </div>
  );
}