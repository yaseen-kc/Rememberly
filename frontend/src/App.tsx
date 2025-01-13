import "./App.css";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <div className="p-4">
      <div>
        <Button
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
  );
}

export default App;
