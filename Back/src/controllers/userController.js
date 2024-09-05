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
}