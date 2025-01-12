import "./App.css";
import { Button } from "./components/button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
      <Button
        title={"Share"}
        size="lg"
        startIcon={<PlusIcon size={"lg"} />}
        endIcon={<ShareIcon size={"lg"} />}
        variant={"primary"}
      ></Button>

      <Button
        variant={"secondary"}
        startIcon={<PlusIcon size={"lg"} />}
        endIcon={<ShareIcon size={"lg"} />}
        size="lg"
        title={"Share"}
      ></Button>

      <Button
        variant={"primary"}
        startIcon={<PlusIcon size={"sm"} />}
        endIcon={<ShareIcon size={"sm"} />}
        size="sm"
        title={"Share"}
      ></Button>
    </>
  );
}

export default App;
