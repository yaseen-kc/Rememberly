import { useState } from "react";
import "./App.css";

import { Button } from "./components/Button";
import { Card } from "./components/Card";

import { CreateContentModel } from "./components/CreateContentModel";
import { Sidebar } from "./components/Sidebar";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";
import Signup from "./pages/Signup";

function App() {
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
            varient="primary"
            text="Add content"
            startIcon={<PlusIcon />}
          ></Button>

          <Button
            varient="secondary"
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

export default App;
