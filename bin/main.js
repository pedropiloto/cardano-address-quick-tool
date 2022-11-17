const { bech32 } = require("bech32");
const CardanoWasm = require("@emurgo/cardano-serialization-lib-nodejs");
const interactor = require("../src/interactors/get-stake-address");
const Buffer = require("buffer").Buffer;

const start = (addr) => {
  const stakeAddress = interactor.call(addr);
  const stakeAddressDecoded = interactor.stakeAddressDecoded(addr);
  const hexAddress = Buffer.from(
    CardanoWasm.Address.from_bech32(addr).to_bytes(),
    "hex"
  ).toString("hex");

  console.log("----------Address Details----------");
  console.log(`Address => ${addr}`);
  console.log(`Address Hex => ${hexAddress}`);
  console.log(`Stake Address => ${stakeAddress}`);
  console.log(`Stake Address Decoded => ${stakeAddressDecoded}`);
};

const args = process.argv.slice(2);
start(args[0]);
