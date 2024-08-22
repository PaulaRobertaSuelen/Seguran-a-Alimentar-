const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const pool = require("./connection");
// const transporter = require("./connection");

const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});

// Rota de login
app.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ error: "Preencha todos os campos" });
  }

  try {
    const [results] = await pool.query(
      "SELECT * FROM usuario WHERE email = ?",
      [email]
    );

    if (results.length === 0) {
      return res.status(400).json({ error: "Email ou senha inválidos" });
    }

    const match = await bcrypt.compare(senha, results[0].senha);

    if (match) {
      res.status(200).json({
        message: "Login realizado com sucesso",
        data: {
          id: results[0].id,
          email: results[0].email,
          nome: results[0].nome,
        },
      });
    } else {
      res.status(400).json({ error: "Email ou senha inválidos" });
    }
  } catch (error) {
    console.error("Erro ao realizar login:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// Rota de registro
app.post("/register", async (req, res) => {
  const { email, senha, nome } = req.body;

  if (!email || !senha || !nome) {
    return res.status(400).json({ error: "Preencha todos os campos" });
  }

  try {
    const hash = await bcrypt.hash(senha, saltRounds);

    const [results] = await pool.query(
      "INSERT INTO usuario (email, senha, nome) VALUES (?, ?, ?)",
      [email, hash, nome]
    );

    res.status(201).json({ message: "Usuário criado com sucesso" });
  } catch (error) {
    console.error("Erro ao realizar registro:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.get("/user/:email", async (req, res) => {
  const email = req.params.email;

  try {
    const [results] = await pool.query(
      "SELECT * FROM usuario WHERE email = ?",
      [email]
    );

    if (!results[0]) {
      return res.status(404).json({ error: "O email solicitado não existe." });
    }

    return res.status(200).json({
      message: "Email encontrado com sucesso!",
      data: {
        id: results[0].id,
        email: results[0].email,
        nome: results[0].nome,
      },
    });
  } catch (error) {
    console.error("Erro ao realizar registro:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});
