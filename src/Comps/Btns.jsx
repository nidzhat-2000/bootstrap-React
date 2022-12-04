import { useState } from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

function ButtonsExample() {
  const [count, setCount] = useState(1);

  const [open, setOpen] = useState(true);

  return (
    <Stack gap={2} className="col-md-5 mx-auto">
      {open && (
        <section>
          <Button variant="success" onClick={() => setCount((c) => c + 1)}>
            +
          </Button>
          <h1 style={{ margin: "auto" }}>{count}</h1>
          <Button variant="success" onClick={() => setCount((c) => c - 1)}>
            -
          </Button>
        </section>
      )}
      {!open && <h2>{count}</h2>}
      <Button variant="secondary" onClick={() => setOpen(false)}>
        Save changes
      </Button>
      <Button variant="outline-secondary" onClick={() => setOpen(true)}>
        Cancel
      </Button>
    </Stack>
  );
}

export default ButtonsExample;
