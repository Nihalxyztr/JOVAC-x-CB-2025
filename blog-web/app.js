const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://Nihal:NihalTripathi123@cluster0.lxvknrj.mongodb.net/blogDB?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log(" MongoDB connected"))
  .catch(err => console.log(" MongoDB error:", err));

const blogSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Blog = mongoose.model("Blog", blogSchema);

app.get("/", async (req, res) => {
  const posts = await Blog.find().sort({ _id: -1 });
  res.render("index", { posts });
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

app.post("/compose", async (req, res) => {
  const newPost = new Blog({
    title: req.body.title,
    content: req.body.content
  });
  await newPost.save();
  res.redirect("/");
});

app.get("/post/:id", async (req, res) => {
  const post = await Blog.findById(req.params.id);
  if (!post) return res.send("Post not found");
  res.render("post", { title: post.title, content: post.content });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
