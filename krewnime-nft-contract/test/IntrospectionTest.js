const { expect } = require("chai");
const { ethers } = require("hardhat");
const utils = require("../scripts/lib/utils");
const constants = require("./util/constants");
const deploy = require("./util/deploy");

describe.skip("KrewnimeNFT: Introspection (ERC-165)", function () {		  
	let nft;				//contracts
	let owner, addr1; 		//accounts
	
	beforeEach(async function () {
		[owner, addr1,...addrs] = await ethers.getSigners();
        
        //contract
		nft = await deploy.deployNFT();
	});

	describe("Supports Interfaces", function () {
		it("supports correct interfaces: IERC721", async function () {
            expect(await nft.supportsInterface(constants.interfaceIds.IERC721)).to.equal(true); 
		});
        
		it("supports correct interfaces: IERC165", async function () {
            expect(await nft.supportsInterface(constants.interfaceIds.IERC165)).to.equal(true); 
		});
        
		it("supports correct interfaces: IAccessControl", async function () {
            expect(await nft.supportsInterface(constants.interfaceIds.IAccessControl)).to.equal(true); 
		});
        
		it("supports correct interfaces: IERC721Enumerable", async function () {
            expect(await nft.supportsInterface(constants.interfaceIds.IERC721Enumerable)).to.equal(true); 
		});
        
		it("supports correct interfaces: IERC2981", async function () {
            expect(await nft.supportsInterface(constants.interfaceIds.IERC2981)).to.equal(true); 
		});
        
		it("doesn't support incorrect interfaces", async function () {
            expect(await nft.supportsInterface("0x00000000")).to.equal(false); 
            expect(await nft.supportsInterface(constants.interfaceIds.IERC20)).to.equal(false); 
            expect(await nft.supportsInterface(constants.interfaceIds.IERC777)).to.equal(false); 
		});
    });  
});