const Profile = require("../models/Profile"); // Ajuste o caminho conforme necessário
const User = require("../models/User"); // Ajuste o caminho conforme necessário

exports.getProfile = async (req, res) => {
  try {
    const { userId } = req.params;

    const profile = await Profile.findOne({
      where: { usuario_id: userId },
      include: User,
    });

    if (!profile) {
      return res.status(404).json({ message: "Perfil não encontrado." });
    }

    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar perfil.", error });
  }
};

exports.createProfile = async (req, res) => {
  try {
    const { userId } = req.body;
    const { sobre, contatos, anexos } = req.body;

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    const profile = await Profile.create({
      usuario_id: userId,
      sobre,
      contatos,
      anexos,
    });

    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar perfil.", error });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const { sobre, contatos, anexos } = req.body;

    const profile = await Profile.findOne({ where: { usuario_id: userId } });

    if (!profile) {
      return res.status(404).json({ message: "Perfil não encontrado." });
    }

    profile.sobre = sobre || profile.sobre;
    profile.contatos = contatos || profile.contatos;
    profile.anexos = anexos || profile.anexos;

    await profile.save();

    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar perfil.", error });
  }
};
