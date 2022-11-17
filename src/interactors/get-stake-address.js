const { bech32 } = require("bech32");

const call = (baseAddr) => {
  const addressWords = bech32.decode(baseAddr, 1000);
  const payload = bech32.fromWords(addressWords.words);
  const addressDecoded = toHexString(payload);
  const stakeAddressDecoded =
    "e1" + addressDecoded.substr(addressDecoded.length - 56);
  const stakeAddress = bech32.encode(
    "stake",
    bech32.toWords(hexStringToByte(stakeAddressDecoded)),
    1000
  );
  return stakeAddress;
};
const stakeAddressDecoded = (baseAddr) => {
  const addressWords = bech32.decode(baseAddr, 1000);
  const payload = bech32.fromWords(addressWords.words);
  const addressDecoded = toHexString(payload);
  const stakeAddressDecoded =
    "e1" + addressDecoded.substr(addressDecoded.length - 56);
  return stakeAddressDecoded;
};

const toHexString = (byteArray) => {
  return Array.from(byteArray, function (byte) {
    return ("0" + (byte & 0xff).toString(16)).slice(-2);
  }).join("");
};

const hexStringToByte = (str) => {
  if (!str) {
    return new Uint8Array();
  }

  var a = [];
  for (var i = 0, len = str.length; i < len; i += 2) {
    a.push(parseInt(str.substr(i, 2), 16));
  }

  return new Uint8Array(a);
};

module.exports = { call, stakeAddressDecoded };
