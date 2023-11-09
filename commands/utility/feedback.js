const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

// dotenv
const dotenv = require("dotenv");
dotenv.config();
const { FORM_URL } = process.env;

const exampleEmbed = {
  color: 0x8c52ff,
  title: "Formulário de Feedback",
  url: FORM_URL,
  author: {
    name: "BrawlZone Development Team",
    icon_url: "https://i.imgur.com/AfFp7pu.png",
  },
  description: "Link direcionando para o formulário de feedback",
  thumbnail: {
    url: "https://i.imgur.com/NgbTlSQ.png",
  },
  timestamp: new Date().toISOString(),
};

module.exports = {
  data: new SlashCommandBuilder()
    .setName("feedback")
    .setDescription("Link to give feedback to devs"),
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed] });
  },
};
