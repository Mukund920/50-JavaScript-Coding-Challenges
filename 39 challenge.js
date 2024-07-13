// implement the caesar cypher
// The Caesar cipher is a simple substitution cipher where each letter in the plaintext is shifted a certain number of places down the alphabet.

// decrypt a message by inversing the key (rotate in other direction)
function decrypt(msg, key) {
  return encrypt(msg, key * -1);
}

// function will implment ceaser cipher to encrypt / decrypt the msg
// by shifting the letters of the message according to the key
function encrypt(msg, key) {
  var encMsg = "";

  for (var i = 0; i < msg.length; i++) {
    var code = msg.charCodeAt(i);

    // encrypt only letter in 'A' .... 'Z' interval
    if (code >= 65 && code <= 65 + 26 - 1) {
      code -= 65;
      code = mod(code + key, 26);
      code += 65;
    }

    encMsg += String.fromCharCode(code);
  }
  return encMsg;
}

// modelu function : n mod p
function mod(n, p) {
  if (n < 0) n = p - (Math.abs(n) % p);
  return n % p;
}

let text = "I LOVE JAVASCRIPT";
console.log(text);
let textEnc = encrypt(text, 13);
console.log(textEnc);
let textDec = decrypt(textEnc, 13);
console.log(textDec);
