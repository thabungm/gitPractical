import express from "express";
import bodyParser from "body-parser";
import { connect } from "./mongo";
import { create, get, getOne, remove, updateOne } from "./controller/product";
import { getUser, login, register } from "./controller/auth";
import cors from "cors";
import { auth } from "./middleware/authMiddleware";
import multer from "multer";

const upload = multer({
  dest: "uploads/",
  fileFilter: function (req, file, cb) {
    const fileTypes = /jpeg|jpg|png/;
    const mimeTypeValid = fileTypes.test(file.mimetype);
    console.log(`mimeTypeValid ${mimeTypeValid}`);
    if (mimeTypeValid) {
      return cb(null, true);
    }

    req.fileError = "Supports only images";
    cb(null);
  },
});
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use("/public", express.static("uploads"));
app.use(
  cors({
    origin: "*",
  })
);

app.post("/upload-file", upload.single("file"), async (req, res) => {
  try {
    if (req.fileError) {
      res.status(400).json({ message: req.fileError });
    } else {
      return res.json({
        message: "success",
        fileName: req.file.filename,
        url: `http://localhost:3000/public/${req.file.filename}`,
      });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

app.post("/register", async (req, res) => {
  try {
    const result = await register(req.body);
    return res.json(result);
  } catch ({ message }) {
    res.status(400).send({ message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const result = await login(req.body);
    return res.json(result);
  } catch ({ message }) {
    res.status(400).send({ message });
  }
});

app.post("/products", async (req, res) => {
  try {
    const data = await create(req.body);
    return res.json({ data });
  } catch (error) {
    return res.status(400).json(error);
  }
});

app.get("/products", async (req, res) => {
  try {
    const data = await get(req.query);

    return res.json({ data });
  } catch (error) {
    return res.status(400).json(error);
  }
});

//localhost:3000/products/2aejsldxabsc3
app.get("/products/:productId", async (req, res) => {
  try {
    const data = await getOne(req.params.productId);
    return res.json({ data });
  } catch (error) {
    return res.status(400).json(error);
  }
});
//   http://localhost:3000/products/23
app.delete("/products/:productId", async (req, res) => {
  try {
    const data = await remove(req.params.productId);
    return res.json({ data });
  } catch (error) {
    return res.status(400).json(error);
  }
});

app.get("/profile", auth, async (req, res) => {
  try {
    const data = await getUser(req.userId);
    return res.json(data);
  } catch (error) {}
});

app.put("/products/:productId", async (req, res) => {
  try {
    const data = await updateOne(req.params.productId, req.body);
    return res.json({ data });
  } catch (error) {
    res.status(400).send(error);
  }
});

connect();

app.listen(PORT, () => {
  console.log(`App listening at ${PORT}`);
});
