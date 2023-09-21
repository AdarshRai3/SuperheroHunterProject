// First, install crypto-js using npm
// npm install crypto-js

// Then, you can use the MD5 function from crypto-js as follows:
import MD5 from "crypto-js/md5.js";

// Your public and private keys
var public_key = "801ffb179c43e62422d9c6ac3f1203f0";
var private_key = "63d44a2ff474121a6c8cce8ea9fc3cc05aac4c74";

// A timestamp
var ts = new Date().getTime();

// Creating the hash
var hash = MD5(ts + private_key + public_key).toString();

export { ts, public_key, hash };
