import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Image from "next/image"
import { Cross2Icon } from '@radix-ui/react-icons';

const DialogDemo = ({ open, handleOpen, username, valueCoin, total }) => {
  const [status, setStatus] = useState('summary');

  const submitPay = () => {
    setStatus('process')
    setTimeout(() => {
      setStatus('finish')
    }, 5000);
  }

  const finishPayment = () => {
    handleOpen()
    setStatus('summary')
  }
  console.log(status);

  return (
    <Dialog.Root open={open}>
      <Dialog.Trigger asChild>
        <button className="w-[200px] h-[46px] flex justify-center items-center border-none bg-pink-btn text-white rounded" onClick={handleOpen}>
          Recharge
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          {status === 'summary' && (
            <Dialog.Title className="text-mauve12 m-0 text-[17px] font-bold text-center">
              Order Summary
            </Dialog.Title>
          )}
          {status === 'process' && (
            <>
              <Dialog.Title className="text-mauve12 m-0 text-[17px] font-bold text-center">
                Processing your payment
              </Dialog.Title>
              <Dialog.Title className="text-mauve12 mt-[20px] text-[17px] text-center">
                This could take a few seconds
              </Dialog.Title>
          </>
          )}
          {status === 'finish' && (
            <Dialog.Title className="text-mauve12 m-0 text-[17px] font-bold text-center">
              Payment completed
            </Dialog.Title>
          )}
          
          {status === 'summary' && (
            <>
              <div style={{ borderBottom: "0.5px solid rgba(22, 24, 35, 0.2)" }} className="flex justify-between items-center py-5">
                <div>
                  <h1 className='font-bold'>
                    Account
                  </h1>
                </div>
                <div>
                  <h1 className='font-bold'>
                    {username}
                  </h1>
                </div>
              </div>
              <div style={{ borderBottom: "0.5px solid rgba(22, 24, 35, 0.2)" }} className="flex justify-between items-center py-5">
                  <div>
                    <h1 className='font-bold'>
                      {valueCoin} Coins
                    </h1>
                  </div>
                  <div>
                    <h1 className='font-bold'>
                      IDR {total}
                    </h1>
                  </div>
                </div>
                <div style={{ borderBottom: "0.5px solid rgba(22, 24, 35, 0.2)" }} className="py-5">
                  <div>
                    <h1>
                      Select a payment method
                    </h1>
                    <div className={`h-[58px] w-full py-2 px-2 mt-[8px] rounded flex items-center border border-simple-gray-3`}>
                      <Image src={"/visa.png"} alt='visa' width={32} height={20} />
                      <p className='mt-[4px] ml-[8px]'>**** **** **** 3356</p>
                    </div>
                  </div>
                </div>
                <div style={{ borderBottom: "0.5px solid rgba(22, 24, 35, 0.2)" }} className="flex justify-between items-center">

                </div>
                <div className="mt-[25px] flex justify-end">
                  <Dialog.Close asChild>
                    <button
                      className="w-[200px] h-[46px] flex justify-center items-center border-none bg-pink-btn text-white rounded"
                      onClick={submitPay}
                    >
                      Pay now
                    </button>
                  </Dialog.Close>
                </div>
                <Dialog.Close asChild>
                  <button
                    className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                    aria-label="Close"
                    onClick={() => handleOpen()}
                  >
                    <Cross2Icon />
                  </button>
                </Dialog.Close>
              </>
          )}

          {status === 'finish' && (
            <Dialog.Close asChild>
            <button
              className="w-full h-[46px] mt-[20px] flex justify-center items-center border-none bg-pink-btn text-white rounded"
              onClick={finishPayment}
            >
              Go back
            </button>
          </Dialog.Close>
          )}
          
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
};

export default DialogDemo;