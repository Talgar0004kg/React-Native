require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get("/todos", async (req, res) => {
  const result = await pool.query("SELECT * FROM todos");
  res.json(result.rows);
});

app.post("/todos", async (req, res) => {
  const { todo_text } = req.body;

  const result = await pool.query(
    "INSERT INTO todos (todo_text) VALUES ($1) RETURNING *",
    [todo_text],
  );

  res.json(result.rows[0]);
});

app.listen(process.env.PORT, () => {
  console.log("Server running on port 5000");
});
