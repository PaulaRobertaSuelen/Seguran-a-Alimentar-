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

    static async redefinirSenha(request, response) {
        try {
            const { email } = request.body

            const userExist = await User.findOne({
                where: {email}
            })

            if (!userExist) {
                return response.status(404).json({ message: 'Credencial inválida.' })
            }

            const randomCode = Math.floor(Math.random() * 100000) + 1
            userExist.codigo_recuperacao = randomCode
            await userExist.save()

            return response.status(201).json({ message: 'Código enviado para o email!' })

        } catch (error) {
            console.log(error)
            return response.status(500).json({ message: 'erro de servidor', error})
        }
    }


    // envio de código (teste)

    // static async enviarCodigo(request, response) {
    //     try {
    //         const { email } = request.body

    //         const emailExist = await User.findOne({
    //             where: {email}
    //         })

    //         if (!emailExist) {
    //             return response.status(404).json({ message: 'Usuário não encontrado.' })
    //         }

    //         const randomCode = Math.floor(Math.random() * 100000) + 1
    //         userExist.codigo_recuperacao = randomCode
    //         await userExist.save()

    //         return response.status(201).json({ message: 'Código enviado para o email!' })

    //     } catch (error) {
    //         console.log(error)
    //         return response.status(500).json({ message: 'erro de servidor', error})
    //     }
    // }

    
}

// function generateRandomCode(length) {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result = '';
//     const charactersLength = characters.length;

//     for (let i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }

//     return result;
// }

// console.log(generateRandomCode(8));