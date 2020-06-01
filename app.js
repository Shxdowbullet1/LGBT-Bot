const Discord = require("discord.js");
const bot = new Discord.Client();

const config = require("./config.json")

bot.on('ready', () => {
  bot.user.setActivity('Prefix is: >>');
  console.log(`LGBT Bot initilized.`);
});

function doMagic8BallVoodoo() {
    var rand = [':8ball: Absolutly.', ':8ball: Absolutly not.', ':8ball: It is true.', ':8ball: Impossible.', ':8ball: Of course.', ':8ball: I do not think so.', ':8ball: It is true.', ':8ball: It is not true.', ':8ball: I am very undoubtful of that.', ':8ball: I am very doubtful of that.', ':8ball: Sources point to no.', ':8ball: Theories prove it.', ':8ball: Reply hazy try again', ':8ball: Ask again later', ':8ball: Better not tell you now', ':8ball: Cannot predict now', ':8ball: Concentrate and ask again'];

    return rand[Math.floor(Math.random()*rand.length)];
}

function coinToss() {
    var rand = ['You flipped the coin, it lands on tails.', 'I flipped the coin, it lands on tails.', 'You flipped the coin, it lands on heads.', 'I flipped the coin, it lands on heads.'];
    return rand[Math.floor(Math.random()*rand.length)];
}

bot.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(config.prefix)) return;

  let command = msg.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  console.log(command);

  let args = msg.content.split(" ").slice(1);

  if (command === "calculateadd") {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);

    msg.channel.send(total).catch(console.error);
  }

  if (command === "say") {
     msg.delete();
     msg.channel.send(args.join(" "));
  }

  if (command === "ping") {
    msg.channel.send("Pong! (hold on, processing latency...)").then(m => m.edit(`Pong! (Current latency is ${m.createdTimestamp - msg.createdTimestamp}ms, while the API Latency is ${Math.round(bot.ping)}ms)`) );
  }

  if (command === "pong") {
     msg.channel.send("Ping! (hold on, processing latency...)").then(m => m.edit(`Ping! (Current latency is ${m.createdTimestamp - msg.createdTimestamp}ms, while the API Latency is ${Math.round(bot.ping)}ms)`) );

  }
  
  if (command === "objection") {
    msg.channel.send(`http://i.imgur.com/19WEQFO.gif ${args.join(" ")}`);
  }

  if (command === "holdit") {
    msg.channel.send(`http://i.imgur.com/6kg9dtc.png ${args.join(" ")}`);
  }

  if (command === "takethat") {
    msg.channel.send(`http://i.imgur.com/S45Dsnb.png ${args.join(" ")}`);
  }

  if (command === "avatar") {
    msg.reply(msg.author.avatarURL);
  }

  if (command === "8ball") {
    msg.channel.send(doMagic8BallVoodoo())
  }

  if (command === "invite") {
    msg.reply("It seems you want to invite me to your server. Check your DMs. ")
    msg.author.send("https://discord.com/api/oauth2/authorize?client_id=717081268952760321&permissions=8&scope=bot")
  }

  if (command === "cointoss") {
    msg.channel.send(coinToss())
  }

});

bot.login(config.token);
