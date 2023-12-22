const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "919947121619"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'asia/Colombo'
global.gurl = 'https://instagram.com/_mr.fro_ud_' // add your username
global.sudo = process.env.SUDO || '919947121619' 
global.devs = '919947121619 ';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+919947121619 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/62227648c11c9e2555483.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUx1NmNVSVN2RnZtVzlPcUNRekJHOWtTenprdmx3djllaUY0b1Q5cWtXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlhySm5Kc0I2eUhac1VnRHZ0eWFkWkZrTFMyWWJnVDIxTGJ2T0VHOEJXZz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TmtjOUZ2TzFndDlvbHFTSXk5cDR2ZGdXRE44S2RqQ2d2b0UybjMydlZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpdWZYL0RrZTFaSjRJRkhvcEdWUE9zcXhFR28zeCthY0I3RHh3am44NjE4PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFLcDZLMk1mR00xVWZMNWJlZi9IQnByeXAzZFpVS3liTlorWmJMN3BMbTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijk3Q3BGcXBWSjJNcTd4cUpud1ZvUllZWE0wOXRWeE9FQW9EL2NsSEFRWEk9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmaHJOS1FTOFJRVkxoSEM1ZEIrV0ZtUDBmWUtHTC9Udk5HazBzMXVYczJqYkdvai9yV1dJc2ZmN0ZTcGZoSVRQYWdoSnRuY01NZGZ1NXh6R1ByUVREQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEzNywiYWR2U2VjcmV0S2V5IjoiRVlCcE00VzVWUWdBelRMYUpjd0pZZW5qaFNMalNDUW85QjJ5S0ZaNXBSVT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZENvcnJoVGdRd3FhRXhmaGRkc1VKQSIsInBob25lSWQiOiIxZDQwZmJjMC1kNGY3LTQyYzItYWMwOC02ZTY4NzFiYzBhZGEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNDJUQWw0cUU2bWI5cW40MjdHMkJvT2ZCUDJFPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6WEJCb1hrTkFMZzhQZ2dobVZsMmlWcGh1ZVU9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNJSHNoY3NDRUxXeGxxd0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJMVFFkejJDNHZFOGJUQ3RFZ2JYYyszNTJvZENxenhyRFJhRUo2V0lGMzFZPSIsImFjY291bnRTaWduYXR1cmUiOiJWYWdhRVdpY2hKV3J2d1M5enZDNFBXaE5MclkwUDY0akZ2Y0p4M0VTTFlGdGY3VnJncm9zaHlWTXVKeFBIR2d2Nzk5akJ3TTJFWE5yeUN3TGl6RmRBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiV2xWc1RiVVlCcDVLY3FUdUJzTXZYWmhaa0xRMW9qRmIvMnlRVDRqaEpTZm9tUUVNalV6M3pvUUZrLzV4eG9lczg5SGlQU0hQdnQ5RWIrVlBwL1A1Q0E9PSJ9LCJtZSI6eyJpZCI6IjkxOTk0NzEyMTYxOTo0NEBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTk5NDcxMjE2MTk6NDRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUzAwSGM5Z3VMeFBHMHdyUklHMTNQdCtkcUhRcXM4YXcwV2hDZWxpQmQ5VyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMzI1NDIwMH0=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'SYAM_SER',
  packname:  process.env.PACK_NAME || 'SYAM-SER',
   
  botname:   process.env.BOT_NAME === undefined ? "SYAM-SER" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'SYAM_SER' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
