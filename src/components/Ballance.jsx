import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import React, {  useState } from 'react'
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

function Ballance() {
  const [sol, setSol] = useState(0);
  const wallet = useWallet();
  const { connection } = useConnection();
  if (!connection) {
    return null;
  }
  const ballance = async () => {
    const info = await connection.getBalance(wallet.publicKey)
    const ballance = info /LAMPORTS_PER_SOL 
    setSol(ballance)
  }

  ballance()
  return (
    <>
      Sol:{sol}
    </>
  )
}

export default Ballance