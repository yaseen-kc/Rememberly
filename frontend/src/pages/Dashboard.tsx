import { useState } from "react";
import Signup from "./Signup";
import { Sidebar } from "../components/Sidebar";
import { CreateContentModel } from "../components/CreateContentModel";
import { Button } from "../components/Button";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Card } from "../components/Card";

export function Dashboard() {
  const [modelOpen, setModelOpen] = useState(false);
  return (
    <div>
      <Signup />
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen bg-gray-100">
        <CreateContentModel
          open={modelOpen}
          onClose={() => {
            setModelOpen(false);
          }}
        />
        <div className=" flex justify-end gap-4">
          <Button
            onClick={() => {
              setModelOpen(true);
            }}
            variant="primary"
            text="Add content"
            startIcon={<PlusIcon />}
          ></Button>

          <Button
            variant="secondary"
            text="Share Brain"
            startIcon={<ShareIcon />}
          ></Button>
        </div>

        <div className="flex gap-4">
          <Card
            type="twitter"
            link="https://twitter.com/yaseeenkc/status/1861410120858771756"
            title="First tweet"
          />

          <Card
            type="youtube"
            link="https://www.youtube.com/watch?v=xYO6otF0xeM"
            title="First video"
          />
        </div>
      </div>
    </div>
  );
}
