import { Button } from "@mui/material";
import { CreateModal } from "./create-modal";
import * as React from "react";

export const Title = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="flex flex-col gap-8 p-8">
      <h1 className="text-4xl font-semibold">Rooms</h1>
      <Button
        variant="contained"
        color="success"
        sx={{
          width: "160px",
          height: "42px",
          borderRadius: "4px",
        }}
        onClick={handleOpen}>
        Create
      </Button>
      <CreateModal
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </div>
  );
};
