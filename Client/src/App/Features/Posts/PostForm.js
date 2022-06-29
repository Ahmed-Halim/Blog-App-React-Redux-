import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { addPost } from "./postsSclice";

export default function PostForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [body, setBody] = useState("");

  const ResetForm = () => {
    setTitle("");
    setCategory("");
    setBody("");
  };

  const handleSubmit = () => {
    if (title && category && body) {
      dispatch(addPost({ title, category, body }));
      ResetForm();
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            style={{ marginBottom: "20px" }}
            id="outlined-basic"
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl style={{ marginBottom: "20px" }} fullWidth>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category"
              id="category"
              label="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="Education">Education</MenuItem>
              <MenuItem value="Sport">Sport</MenuItem>
              <MenuItem value="Food">Food</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <TextField
        multiline={true}
        rows={3}
        style={{ marginBottom: "20px" }}
        id="outlined-basic"
        label="Body"
        variant="outlined"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></TextField>
      <Button
        fullWidth
        style={{ padding: "15px", marginBottom: "20px" }}
        onClick={handleSubmit}
        variant="contained"
        size="large"
        endIcon={<SaveIcon />}
      >
        Save
      </Button>
    </Box>
  );
}
