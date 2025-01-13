import "./App.css";
import { Button } from "./components/button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
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
  );
}

export default App;
