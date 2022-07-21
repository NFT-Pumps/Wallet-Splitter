const { expect } = require("chai");
const { ethers } = require("hardhat");


let currentToken;
let message1 = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';// '0x079f1BaC0025ad71Ab16253271ceCA92b222C614';
let message2 = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';

if (true == true)
    describe("NFT Pump Tests", function () {
        let buyer, owner, hashValue;

        // beforeEach(async function () {
        //     await hre.network.provider.send("hardhat_reset")
        //   })

        before(async () => {

            const [owner, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20] = await ethers.getSigners();
            console.log("Owner Address: " + owner.address);
            console.log("Owner Address: " + _1.address);
            let ethBalance = ethers.utils.formatEther(await ethers.provider.getBalance(owner.address));
            console.log("Start Balance: " + ethBalance);

            const currentContract = await ethers.getContractFactory("Splitter");
            currentToken = await currentContract.deploy(
                [
                    ethers.utils.getAddress('0x9C3f261e2cc4C88DfaC56A5B46cdbf767eE2f231'),
                    ethers.utils.getAddress('0x608328a456D3205fFBAcD2E00AaFE2eE2471dd17'),
                    ethers.utils.getAddress('0x9EF4c075E19ed467813aCA21A23c6aF309B6D236'),
                    ethers.utils.getAddress('0xf886B127d4E381E7619d2Af1617476fef0d04F8c'),
                    ethers.utils.getAddress('0x36Fa3E52D58A7401Be46353F50667FBf931e4F42'),
                    ethers.utils.getAddress('0x96353d42d88e8a9945cdc8308592f4853f39e114'),
                    ethers.utils.getAddress('0x109094D990aDbdfC97c5c9Ea5F5bcE54f4EB1BDB'),
                    ethers.utils.getAddress('0x4aC5d838Cc15686f45fB8BAF54e519B8388914f0'),
                    ethers.utils.getAddress('0x27a25E7d890F656cD508173A9E16369B5A29108C'),
                    ethers.utils.getAddress('0xC7b8822E1eEAd4Cd1Fb3ae33f34Daf694DBA6B23'),
                    ethers.utils.getAddress('0x317C315056fF37F9A74256Ff5345a95915673B88'),
                    ethers.utils.getAddress('0x5d2eCEDDc74D1675Ce6934AB364b01799F40F644')
                ],
                [
                    30,
                    25,
                    10,
                    7,
                    7,
                    3,
                    2,
                    3,
                    3,
                    1,
                    8,
                    1
                ]);

            console.log("Deploy");
            await currentToken.deployed();

            console.log("ToggleMint");
            await currentToken.togglePublicMint();

            ethBalance = ethers.utils.formatEther(await ethers.provider.getBalance(owner.address));
            console.log("After Deploy Balance" + ethBalance);

            // // Include process module
            // const process = require('process');

            // // Printing process.env property value
            // console.log(process.env);
        });

        if (true) {
            // it("Update Vault", async function () {
            //     await currentToken.setVaultAddress('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
            // }); 
        }
    })
