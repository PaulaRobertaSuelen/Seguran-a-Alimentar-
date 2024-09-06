const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = class userController {
    static async createUser(request, response) {
        try {
            const { nome, email, telefone, senha, tipo_usuario, profissao, especialidade, crn } = request.body

            const salt = await bcrypt.genSalt(12);
            const encryptPass = await bcrypt.hash(senha, parseInt(salt));

            const user = await User.create({
                nome, email, telefone, senha: encryptPass, tipo_usuario, profissao, especialidade, crn
            })

            return response.status(201).json({ user })

        } catch (error) {
            console.log(error)
            return response.status(500).json({ error })
        }

    }

    static async findUserByEmail(req, res) {
        const email = req.params.email;
    
        try {
            const user = await User.findOne({
                where: { email }
            });
    
            if (!user) {
                return res.status(404).json({ error: "O email solicitado não existe." });
            }
    
            return res.status(200).json({
                message: "Email encontrado com sucesso!",
                data: {
                    id: user.id,
                    email: user.email,
                    nome: user.nome,
                },
            });
        } catch (error) {
            console.error("Erro ao buscar o usuário:", error);
            return res.status(500).json({ error: "Erro interno do servidor." });
        }
    }

    

    // EM DESENVOLVIMENTO

    static async passwordReset(req, res) {           
        
            try {
                const email = req.params;
                const user = await User.findOne({
                    where: { email: email }
                })
        
            if (email !== user.email) {
                return res.status(404).json({ error: "O email solicitado não existe." });
            }
        
            return res.status(200).json({
                message: "Email encontrado com sucesso!",
                user
            });
            } catch (error) {
            console.error("Erro ao realizar registro:", error);
            res.status(500).json({ error: "Erro interno do servidor" });
            }
        }

}
