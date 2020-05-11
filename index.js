require('dotenv').config({path: __dirname + '/.env'})
const discord = require("discord.js");
const client = new discord.Client();
const token = process.env.token;
const ytdl = require('ytdl-core');
const search = require('youtube-search');
const prefix = '/';
const yts = require( 'yt-search');

function searchYoutube(songName){yts( songName, function ( err, r ) {
    const videos = r.videos
    const playlists = r.playlists || r.lists
    const channels = r.channels || r.accounts
    console.log(JSON.stringify(videos[ 0 ].url));
    return JSON.stringify(videos[ 0 ].url);
  } )};
searchYoutube("fishyonme");
client.on('ready', () =>{
    console.log("KEV-J9 Active.");
})

client.on('message', async  message=>{
 let args = message.content.substring(prefix.length).split(" ");

 switch(args[0]){
    case 'ping':
        message.reply('pong!');
    break;
    case 'join':
        if (message.member.voice.channel) {
            const connection = message.member.voice.channel.join();
            break;

          } else {
            message.reply('You need to join a voice channel first!');
          }
          case 'leave':
            if (message.member.voice.channel) {
                const disconnect = message.member.voice.channel.leave();
                break;
              } else {
                message.reply('You need to join a voice channel first!');
              }
            case 'play':
                if(message.member.voice.channel){
                   const connection = message.member.voice.channel.join();
                    let songName = args[1];
                    let songsearch = searchYoutube(songName);
                    connection.play(ytdl(songsearch, {volume: 1,filter: 'audioonly'}));

                    //needs promise to consume data
                }
            }})
            client.login(token);
