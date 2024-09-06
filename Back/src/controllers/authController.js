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
        const { email } = request.body;

        const userExist = await User.findOne({
            where: { email }
        });

        if (!userExist) {
            return response.status(404).json({ message: 'Credencial inválida.' });
        }

        const randomCode = Math.floor(Math.random() * 100000) + 1;
        userExist.codigo_recuperacao = randomCode;
        await userExist.save();

        return response.status(201).json({ message: 'Código enviado para o email!' });

    } catch (error) {
        console.log(error);
        return response.status(500).json({ message: 'Erro de servidor', error });
    }
}

// trocar senha (EM DESENVOLVIMENTO)

    static async trocarSenha(request, response) {
        try {
            const { email, codigo_recuperacao, nova_senha } = request.body;
        const userExist = await User.findOne({
            where: { email }
        });

        if (!userExist) {
            return response.status(404).json({ message: 'Credencial inválida.' });
        }

        if (userExist.codigo_recuperacao === codigo_recuperacao){

            const salt = await bcrypt.genSalt(12);
            const encryptPass = await bcrypt.hash(nova_senha, parseInt(salt));
            await User.update(
                {senha: encryptPass, codigo_recuperacao: null}, {where: { email }}
            )
            return response.status(200).json({ message: 'Senha redefinida com sucesso.' });

        } else {
            return response.status(404).json({ message: 'Código de verificação inválido.' });
        }

        } catch (error) {
            console.log(error);
        return response.status(500).json({ message: 'Erro de servidor', error });
        }
    }

}
