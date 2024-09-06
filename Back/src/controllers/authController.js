const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = class authController {
  static async userLogin(req, res) {
    try {
      const { email, senha } = req.body;

      if (!email || !senha) {
        return res
          .status(400)
          .json({ message: "Email e senha são obrigatórios." });
      }

      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(422).json({ message: "Email ou senha inválido." });
      }

      const isValidPassword = await bcrypt.compare(senha, user.senha);
      if (!isValidPassword) {
        return res.status(422).json({ message: "Email ou senha inválido." });
      }

      const token = jwt.sign(
        {
          id: user.id,
          type: user.tipo_usuario,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      return res.status(200).json({
        token,
        tipoUsuario: user.tipo_usuario,
      });
    } catch (error) {
      console.error("Erro no login:", error);
      return res
        .status(500)
        .json({ message: "Erro interno no servidor.", error });
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

  static async redefinirSenha(request, response) {
    try {
      const { email } = request.body;

      const userExist = await User.findOne({
        where: { email },
      });

      if (!userExist) {
        return response.status(404).json({ message: "Credencial inválida." });
      }

      const randomCode = Math.floor(Math.random() * 100000) + 1;
      userExist.codigo_recuperacao = randomCode;
      await userExist.save();

      return response
        .status(201)
        .json({ message: "Código enviado para o email!" });
    } catch (error) {
      console.log(error);
      return response.status(500).json({ message: "erro de servidor", error });
    }
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
