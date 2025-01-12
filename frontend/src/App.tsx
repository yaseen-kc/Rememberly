import "./App.css";
import { Button } from "./components/button";
import { PlusIcon } from "./icons/plusIcon";
import { ShareIcon } from "./icons/shareIcon";

function App() {
  return (
    <>
      <Button
        variant={"primary"}
        startIcon={<PlusIcon size={"lg"} />}
        endIcon={<ShareIcon size={"lg"} />}
        size="lg"
        title={"Share"}
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
