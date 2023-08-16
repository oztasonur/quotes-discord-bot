const { SlashCommandBuilder } = require("discord.js");
const api = require("../../api/AxiosConfig");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("quote")
    .setDescription("Replies with a random quote"),
  async execute(interaction) {
    const res = await api.get("/quotes?random=1");
    const quote = res.data.data[0];
    const randQuote = `***"${quote.name}"***     |    -**${quote.author}**`;
    // interaction.guild is the object representing the Guild in which the command was run
    await interaction.reply(randQuote);
  },
};
