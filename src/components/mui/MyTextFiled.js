import { Stack, TextField } from "@mui/material";
import React, { useState } from "react";

export default function MyTextFiled() {
  const [value, SetValue] = useState("");
  return (
    <div>
      <Stack spacing={4}>
        <Stack direction={"row"}>
          <TextField
            error={!value}
            label="name"
            helperText={!value ? "enter your name" : "dont share you name"}
            sx={{ width: "400px" }}
            onChange={(e) => SetValue(e.target.value)}
          />
        </Stack>
      </Stack>
    </div>
  );
}
