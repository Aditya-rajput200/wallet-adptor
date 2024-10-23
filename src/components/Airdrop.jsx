
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
function Airdrop() {
     const {connection}  = useConnection();
     
   

    const wallet = useWallet();
    const airdropSol = async ()=>{
        const amount = document.getElementById("publicKey").value;
      await connection.requestAirdrop(wallet.publicKey,amount*1000000000) 
      alert("Airdrop successful");
    }
  return (
    <>
  <div>
    <h1>Airdrop</h1>

    <input id="publicKey" type="number" placeholder="Enter amount" />
    <button  onClick={airdropSol}>Airdrop</button>
   
  </div>


    </>
  )
}

export default Airdrop