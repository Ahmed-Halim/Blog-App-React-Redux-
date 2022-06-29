import React, { useState, memo } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postsSlice";
import { toggleForm } from "./formSlice";

function PostForm() {
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.form);
  console.log("formState ", formState);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [body, setBody] = useState("");
  const Categories = [
    "Social Media",
    "Gaming",
    "Education",
    "Technology",
    "Health",
    "Food",
    "Travel",
    "News",
  ];
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

  return !formState ? (
    <Button
      fullWidth
      style={{ padding: "15px", marginBottom: "20px" }}
      onClick={() => dispatch(toggleForm())}
      variant="contained"
      size="large"
      startIcon={<AddCircleIcon />}
    >
      New Post
    </Button>
  ) : (
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
              {Categories.map((category) => {
                return (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <TextField
        multiline={true}
        rows={4}
        style={{ marginBottom: "20px" }}
        id="outlined-basic"
        label="Body"
        variant="outlined"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></TextField>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            fullWidth
            style={{ padding: "15px", marginBottom: "20px" }}
            onClick={() => dispatch(toggleForm())}
            variant="outlined"
            size="large"
          >
            Close
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            fullWidth
            style={{ padding: "15px", marginBottom: "20px" }}
            onClick={handleSubmit}
            variant="contained"
            size="large"
            endIcon={<SendIcon />}
          >
            Share
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default memo(PostForm);
