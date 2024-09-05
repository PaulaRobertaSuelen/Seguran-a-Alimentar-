const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = class authController {
    static async userLogin(request, response) {
        console.log(request)
        try {
            const { email, senha } = request.body

            const user = await User.findOne({
                where: {email}
            })

            const validadePassword = await bcrypt.compare(senha, user.senha)

            if (!validadePassword) {
                return response.status(422).json({ message: 'Email ou senha inválido.' })
            }
            console.log('tipo', user.tipo_usuario)
        

            const token = jwt.sign({
                id: user.id,
                type: user.tipo_usuario
            }, process.env.JWT_SECRET)
            const tipoUsuario = user.tipo_usuario

            return response.status(201).json({ token, tipoUsuario })

        } catch (error) {
            console.log(error)
            return response.status(500).json({ message: 'erro de servidor', error})
        }
    }
}