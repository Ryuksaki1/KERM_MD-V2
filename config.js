//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "237656696306";
global.owner = process.env.OWNER_NUMBER || "237692950628";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-v2-session.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUN1bTBqZjM0SmprRVZpSFVJcklYdFgvQ0huVnRTTy9obUVnNU1PK0hHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNi9sTWtTSFk1TjV4MU1NU0tNVXFSWXVxNVg5WEdqMlhqc2huSmdnRTZUWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TWt6UFNGNUNSMC9lMmUvQ0hBdXpPaEowbDRTc2ZyMmRGb0pHMEtFZ0Y4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtOHYyNzR5bXNXOVI2Y285Tmk3bUYwSnl6ejhXT0thSGROWEoreXVhczNnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVFUmRoT2lUeVlVQVlQcnNtc3hvYW9zQ2NoaDdrK2sweUdhUUtnS2JCR2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImE5OXRBRWpUcmQ5ZndGZDEwR2ZoZFdJT2lzWmsybHlEWm1jaDlSSDZ1WFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0NmWjc2dGdQTW9kQWxsOFlUUVZTSExLSHUydEhWZzVLRXJBYkhReDJGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidlZhaFIxVHpiZkpNb2w2Z0pzU0lRa3NtTXhCT1NQYUpEcGRGK3Myd2lUYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZENTB3dmZGQStwRDA1K0t2WEJtV2lRekpxakl4Ulp5S096ek9qU01NdExQRWVvT09PbjJCYko4WUVoNjZaUHVkUDQ0UjVQYXhyMjVVdTVyZGNhUUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMxLCJhZHZTZWNyZXRLZXkiOiIyLzAyaC9rUFZzNjBQOTJKaVNoMldYTk5LWFBWaldOMXdWOTVwQVM5dWVNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNzY5Mjk1MDYyOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1MzA1RDAyMjg4QTk0QTNFMTY1RjVGMzlDODNBN0RERCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIzMjI5MDM2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzc2OTI5NTA2MjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTk2MjM2NzQ3MDUwQjFCNDM2MTU4QzI4NzBCQjkzQTEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzIyOTAzNn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiYnVuY3VGczVTM0tyeGNVSjFBNXk1QSIsInBob25lSWQiOiI5N2NiMWZiZS03MjEyLTRjMzctYWMxMi00ZjI5ODAxNzBhODYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU04ZW8za0RTTWdzK1NESWVxMmxTWHdjbzZRPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik12S2pTbEhETzVPZnZLZUJSQmJuWC9mNG9Tdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJUQkNIRFpRVyIsIm1lIjp7ImlkIjoiMjM3NjkyOTUwNjI4OjdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVGF5cm9u8J+YgSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkxWd3ZzRkVOdkcyYlVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVVhKN2VYZkI0MmFzbnVUR2cvQnFkNWozUU5Ia1JqVk1LamVJRzlJY0htMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUlUzaTJ1MEYxL1RVNDU4L2syVVZkYkcwNzlHVUU2ZVJKaGNaWEltcTdvc2FNMGtNMkNMcUNYVnV5ay8zcFUybXFUQ1VnaS9obnEzNmJUbWtDaXFjQUE9PSIsImRldmljZVNpZ25hdHVyZSI6ImdBbkZhc2lBc3Z5WGwxQ1V6aHVnbmxDU2NYNWlwc1pjK1hPd3hQckphRzdaTU8wTVJzOG5RbmtvVlh4RkdDUW84UmlzblpHRjFPT1hlaURQN0V3MkRnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjkyOTUwNjI4OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVkZ5ZTNsM3dlTm1ySjdreG9Qd2FuZVk5MERSNUVZMVRDbzNpQnZTSEI1dCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzIyOTAzMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNVjMifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Kerm-md-v2").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
