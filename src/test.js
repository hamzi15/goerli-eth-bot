const web3 = require('web3');
const hex = '0x22895118000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000012016d50bc4caa3c8fadd8d37cfcfcf25d69f73b4324ce54c99c7635b19922a5a400000000000000000000000000000000000000000000000000000000000000030b4de6a58cb0585a52e12b2ecba4a6784934819188ff4c2bce1dd705a0f8c530883dbf507e6dd83cafa0df3555e0b5ee7000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020008494155aba626d93e24a1de2c983e5376ab9e3507fe2b2b671337b1e30d8dd0000000000000000000000000000000000000000000000000000000000000060aff68160310f4fa9975bf5841f2312eaaea73d35bdaa737ed888e368f2215d4bcbf31bff74c4e2626d2845820f25032b129b2f022b6df86c26e8896f016ad17880c215ebf1ecdba693c56f5aae4437154bd7c108b8fc4c32a08fedd1d1e9bcf2'
const { Pool } = require('pg');

let pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'test',
    port: 5432,
})
pool.connect();

// console.log(web3.utils.isHexStrict(hex))
// let ascii = web3.eth.abi.decodeParameter(Object, '0x22895118000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000012016d50bc4caa3c8fadd8d37cfcfcf25d69f73b4324ce54c99c7635b19922a5a400000000000000000000000000000000000000000000000000000000000000030b4de6a58cb0585a52e12b2ecba4a6784934819188ff4c2bce1dd705a0f8c530883dbf507e6dd83cafa0df3555e0b5ee7000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020008494155aba626d93e24a1de2c983e5376ab9e3507fe2b2b671337b1e30d8dd0000000000000000000000000000000000000000000000000000000000000060aff68160310f4fa9975bf5841f2312eaaea73d35bdaa737ed888e368f2215d4bcbf31bff74c4e2626d2845820f25032b129b2f022b6df86c26e8896f016ad17880c215ebf1ecdba693c56f5aae4437154bd7c108b8fc4c32a08fedd1d1e9bcf2')
// console.log(ascii)

async function checkAddressExists(id){
    const select = `select address from discordidaddress where discordid = $1`;
    const value = [id]
    let result = await pool.query(select, value);
    return result.rows[0]

}

result = checkAddressExists(123).then(result => {
    return result.rows
});

console.log(result)
