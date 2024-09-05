const express = require('express');
const cors = require('cors');
const router = require('./routes/authRoutes');

const app = express();

// Middleware para permitir CORS e JSON parsing
app.use(cors());
app.use(express.json());

// Rotas
app.use(router)

// Define a porta em que o servidor irá rodar
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


// //buscar usuário pelo email
// app.get("/user/:email", async (req, res) => {
//     const email = req.params.email;
  
//     try {
//       const [results] = await pool.query(
//         "SELECT * FROM usuario WHERE email = ?",
//         [email]
//       );
  
//       if (!results[0]) {
//         return res.status(404).json({ error: "O email solicitado não existe." });
//       }
  
//       return res.status(200).json({
//         message: "Email encontrado com sucesso!",
//         data: {
//           id: results[0].id,
//           email: results[0].email,
//           nome: results[0].nome,
//         },
//       });
//     } catch (error) {
//       console.error("Erro ao realizar registro:", error);
//       res.status(500).json({ error: "Erro interno do servidor" });
//     }
//   });
  
//   //update usuário
//   app.patch("/user/:id", async (req, res) => {
//     const id = req.params.id;
//     const { nome, email, senha } = req.body;
  
//     try {
//       const [results] = await pool.query("SELECT * FROM usuario WHERE id = ?", [
//         id,
//       ]);
  
//       if (!results[0]) {
//         return res
//           .status(404)
//           .json({ error: "O usuário solicitado não existe." });
//       }
  
//       let updateFields = [];
//       let updateValues = [];
  
//       if (nome) {
//         updateFields.push("nome = ?");
//         updateValues.push(nome);
//       }
  
//       if (email) {
//         updateFields.push("email = ?");
//         updateValues.push(email);
//       }
  
//       if (senha) {
//         updateFields.push("senha = ?");
//         const hash = await bcrypt.hash(senha, saltRounds);
//         updateValues.push(hash);
//       }
  
//       if (updateFields.length === 0) {
//         return res.status(400).json({ error: "Nenhum campo para atualizar." });
//       }
  
//       updateValues.push(id);
  
//       const updateQuery = `
//         UPDATE usuario
//         SET  ${updateFields.join(", ")}
//         WHERE id = ?
//       `;
  
//       await pool.query(updateQuery, updateValues);
  
//       return res.json({ message: "Usuário atualizado com sucesso." });
//     } catch (error) {
//       console.error("Erro ao realizar registro:", error);
//       res.status(500).json({ error: "Erro interno do servidor" });
//     }
//   });
  
