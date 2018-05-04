const Discord = require('discord.js');
const settings = require('./settings.json');
const bot = new Discord.Client({disableEveryone: true});
bot.on('ready', async () => {
  console.log(`${bot.user.username} is Reporting for duty!`);
  bot.user.setActivity(`Use @colors to see all the colors you can change too!`)
  try {
      let link = await bot.generateInvite(["ADMINISTRATOR"]);
      console.log(link);
  } catch(e) {
      console.log(e.stack);
  }
});

bot.on('message', message => {
    if (message.channel.type === 'dm') return;
    if (message.content == "@colors") {
        message.reply("Available colors: red, blue, green, yellow, purple, gold, brown, orange, indigo, black, white and rose. Change colors with @<color>.");
        return;
    }
    if (message.content.charAt(0) == '@'){
        let cmd = message.content.split('@');
        var blue = message.guild.roles.find("name", "Blue");
        var red = message.guild.roles.find("name", "Red");
        var green = message.guild.roles.find("name", "Green");
        var yellow = message.guild.roles.find("name", "Yellow");
        var purple = message.guild.roles.find("name", "Purple");
        var gold = message.guild.roles.find("name", "Gold");
        var brown = message.guild.roles.find("name", "Brown");
        var orange = message.guild.roles.find("name", "Orange");
        var indigo = message.guild.roles.find("name", "Indigo");
        var black = message.guild.roles.find("name", "Black");
        var white = message.guild.roles.find("name", "White");
        var rose = message.guild.roles.find("name", "Rose");
        if(cmd[1] == "blue" || cmd[1] == "red" || cmd[1] == "green" || cmd[1] == "yellow" || cmd[1] == "purple" || cmd[1] == "gold" || cmd[1] == "brown" || cmd[1] == "orange" || cmd[1] == "indigo" || cmd[1] == "black" || cmd[1] == "white" || cmd[1] == "rose") {
            if(message.member.roles.has(message.guild.roles.find("name", "1").id)){
                message.reply("Contact an admin if you want to change colors!");
                message.delete();
                return;
            }
            if(message.member.roles.has(blue.id)) {
                message.guild.member(message.author).removeRole(blue);
            } else if (message.member.roles.has(red.id)) {
                message.guild.member(message.author).removeRole(red);
            } else if (message.member.roles.has(green.id)) {
                message.guild.member(message.author).removeRole(green);
            } else if (message.member.roles.has(yellow.id)) {
                message.guild.member(message.author).removeRole(yellow);
            } else if (message.member.roles.has(purple.id)) {
                message.guild.member(message.author).removeRole(purple);
            } else if (message.member.roles.has(gold.id)) {
                message.guild.member(message.author).removeRole(gold);
            } else if (message.member.roles.has(brown.id)) {
                message.guild.member(message.author).removeRole(brown);
            } else if (message.member.roles.has(orange.id)) {
                message.guild.member(message.author).removeRole(orange);
            } else if (message.member.roles.has(indigo.id)) {
                message.guild.member(message.author).removeRole(indigo);
            } else if (message.member.roles.has(black.id)) {
                message.guild.member(message.author).removeRole(black);
            } else if (message.member.roles.has(white.id)) {
                message.guild.member(message.author).removeRole(white);
            } else if (message.member.roles.has(rose.id)) {
                message.guild.member(message.author).removeRole(rose);
            }
        } else {
            return;
        }
        switch(cmd[1]) {
            case 'blue':
                message.guild.member(message.author).addRole(blue);
                message.delete();
                message.guild.member(message.author).addRole(message.guild.roles.find("name", "1"));
                return;
            case 'red':
                message.guild.member(message.author).addRole(red);
                message.delete();
                message.guild.member(message.author).addRole(message.guild.roles.find("name", "1"));
                return;
            case 'green':
                message.guild.member(message.author).addRole(green);
                message.delete();
                message.guild.member(message.author).addRole(message.guild.roles.find("name", "1"));
                return;
            case 'yellow':
                message.guild.member(message.author).addRole(yellow);
                message.delete();
                message.guild.member(message.author).addRole(message.guild.roles.find("name", "1"));
                return;
            case 'purple':
                message.guild.member(message.author).addRole(purple);
                message.delete();
                message.guild.member(message.author).addRole(message.guild.roles.find("name", "1"));
                return;
            case 'gold':
                message.guild.member(message.author).addRole(gold);
                message.delete();
                message.guild.member(message.author).addRole(message.guild.roles.find("name", "1"));
                return;
            case 'brown':
                message.guild.member(message.author).addRole(brown);
                message.delete();
                message.guild.member(message.author).addRole(message.guild.roles.find("name", "1"));
                return;
            case 'orange':
                message.guild.member(message.author).addRole(orange);
                message.delete();
                message.guild.member(message.author).addRole(message.guild.roles.find("name", "1"));
                return;
            case 'indigo':
                message.guild.member(message.author).addRole(indigo);
                message.delete();
                message.guild.member(message.author).addRole(message.guild.roles.find("name", "1"));
                return;
            case 'black':
                message.guild.member(message.author).addRole(black);
                message.delete();
                message.guild.member(message.author).addRole(message.guild.roles.find("name", "1"));
                return;
            case 'white':
                message.guild.member(message.author).addRole(white);
                message.delete();
                message.guild.member(message.author).addRole(message.guild.roles.find("name", "1"));
                return;
            case 'rose':
                message.guild.member(message.author).addRole(rose);
                message.delete();
                message.guild.member(message.author).addRole(message.guild.roles.find("name", "1"));
                return;
        }
    }
    return;
});
// login bot with token
bot.login(settings.secret.botToken);