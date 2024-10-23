
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction} from "@solana/web3.js";
function Sendsol() {
    const wallet = useWallet();
    const {connection} = useConnection();
    const sendTokens = async ()=>{
       try {
        const to = document.getElementById("to").value;
        const amount = document.getElementById("amount").value;
       
        if (!connection) {
            throw new Error('No wallet connection');
        }
        if (!to) {
            throw new Error('To address is required');
        }
        if (!amount || isNaN(amount)) {
            throw new Error('Amount must be a number');
        }
        const transaction = new Transaction();

        transaction.add(
            SystemProgram.transfer({
                fromPubkey: wallet.publicKey,
                toPubkey: new PublicKey(to),
                lamports: amount * LAMPORTS_PER_SOL
            })
        );
        await wallet.sendTransaction(transaction, connection);
        alert("Transfer successful ");
        alert(`amount: ${amount} is send to ${to}`)
        
       } catch (error) {
        console.log(error);
       }
        
    }
  return (
<>
        <input id="to" type="text" placeholder="To" />
        <input id="amount" type="number" placeholder="Ammount" />
        <button onClick={sendTokens}>Send</button>

</>
  )
}

export default Sendsol



