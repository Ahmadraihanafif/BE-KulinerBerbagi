import express from "express";
import { createConnection } from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const connection = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kulinerBerbagi",
});

app.post("/signup"),
  (req, res) => {
    const sql = "INSERT INTO tb_user (`nama`,`email`,`kata_sandi`) Values (?)";
    const values = [req.body.nama, req.body.email, req.body.password];
    db.query(sql, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  };

app.listen(8081, () => {
  console.log("coba......sss");
});
