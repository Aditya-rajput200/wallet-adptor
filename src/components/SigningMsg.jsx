import  { useState } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { ed25519 } from '@noble/curves/ed25519';
import bs58 from 'bs58';

function SigningMsg() {
 const {publicKey,signMessage } = useWallet()
 const [text, setText] = useState('');
 const handleSubmit = ()=>{
    try {
        if (!publicKey) throw new Error('Wallet not connected!');  
            if (!signMessage) throw new Error('Wallet does not support message signing!');
            
            const encodedMessage =  new TextEncoder().encode(text);
            const signature = signMessage(encodedMessage);
            // document.getElementById("msg").innerHTML = "Message: " +  encodedMessage

            if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error('Message signature invalid!');

           
            alert('success', `Message signature: ${bs58.encode(signature)}`);
        
    } catch (error) {
        console.log(error)
    }
 }
  return (
    <>
    
    <div className="heading">Signing the Message </div>
     
     <div className="message">
     <form onSubmit={handleSubmit}>
        <label htmlFor="message">Message:</label>
        <br />
        <textarea
          id="message"
          name="message"
          value={text} // Controlled input
          onChange={(e) => setText(e.target.value)} // Update state on change
          rows="4"
          cols="50"
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
     
     </div>
    {/* <div className="encodedmsg" id='msg'>
    Message:
    </div> */}
    </>
  )
}

export default SigningMsg