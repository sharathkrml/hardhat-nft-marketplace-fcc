import { run } from "hardhat"

const verify = async (contractAddress: string, args: any[]) => {
    console.log("Verifying contract...")
    console.log("args:", args)
    try {
        console.log("trying to verify...")
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
            contract: "contracts/OurToken.sol:OurToken", // added due to same bytecode error
        })
    } catch (e: any) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already verified!")
        } else {
            console.log(e)
        }
    }
}

export default verify
