require('dotenv').config();
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
  console.log(`Bot aktif: ${client.user.tag}`);
  client.user.setPresence({
    activities: [{ name: 'hane sistemini', type: ActivityType.Watching }],
    status: 'online'
  });
});

client.on('interactionCreate', async (itx) => {
  try {
    if (!itx.isChatInputCommand()) return;

    console.log('Komut geldi:', itx.commandName);

    if (itx.commandName === 'ping') {
      await itx.reply('Pong 🏓');
    }
  } catch (e) {
    console.error('interaction hatası:', e);
    if (!itx.replied) {
      await itx.reply({ content: '❌ Komut çalışırken hata oluştu.', ephemeral: true }).catch(()=>{});
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
// trigger
// trigger deploy
