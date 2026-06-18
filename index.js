import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/user/:name", (req, res) => {
  res.render("user", { title: "User", name: req.params.name });
});

app.post("/submit", (req, res) => {
  console.log("Form data received:", req.body);
  res.send("Success");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
