import "./App.css";
import { Button } from "./components/button";
import { PlusIcon } from "./icons/plusIcon";

function App() {
  return (
    <div>
      <Button startIcon={<PlusIcon />} size="sm" variant="primary" />
      <Button size="md" variant="secondary" text="Add Content" />
      <Button size="lg" variant="secondary" text="Add Content" />
    </div>
  );
}

export default App;
