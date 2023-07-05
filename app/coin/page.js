"use client"
import { useState } from "react"
import Image from "next/image"

export default function Home() {
  const data = [
    {
      ammount: '70',
      price: 'IDR 11,900'
    },
    {
      ammount: '350',
      price: 'IDR 59,500'
    },
    {
      ammount: '700',
      price: 'IDR 119,000'
    },
    {
      ammount: '1,400',
      price: 'IDR 238,000'
    },
    {
      ammount: '3,500',
      price: 'IDR 595,000'
    },
    {
      ammount: '7,000',
      price: 'IDR 1,190,000'
    },
    {
      ammount: '17,500',
      price: 'IDR 2,975,000'
    },
    {
      ammount: 'Custom',
      price: 'Large amount supported'
    }
  ]

  const [selected, setSelected] = useState()

  const handleSelect = (item) => {
    setSelected(item)
  }

  return (
    <main>
      <div className="w-96 lg:w-full h-16 flex justify-around items-center shadow-[0_1px_1px_rgba(0,0,0,0.12)] top-0 fixed bg-white">
        <div className="w-96 lg:w-full h-full flex justify-between items-center max-w-6xl px-6">
          <div>
            <Image src="/tiktok-logo.png" alt="logo" width={118} height={42} />
          </div>
          <div>
            <form className="flex items-center py-3 px-4 rounded-[92px] bg-simple-gray">
              <input type="text" placeholder="Search" className="w-[431px] bg-transparent">
              </input>
              {/* <span className="w-[1px] h-[28px] bg-simple-gray"></span> */}
            </form>
          </div>
          <div className="flex items-center">
            <div>
              <Image src={"/upload.png"} alt="upload" width={116} height={36} />
            </div>
            <div className="ml-4">
              <Image src={"/send.png"} alt="send" width={32} height={32} />
            </div>
            <div className="mt-[7px] ml-4">
              <Image src={"/message.png"} alt="send" width={32} height={32} />
            </div>
            <div className="ml-4">
              
            </div>
          </div>
        </div>
      </div>
      <div className="w-96 lg:w-full flex flex-col pt-6 justify-center items-center mt-16">
        <div className="w-96 lg:w-[1140px]">
          <div className="flex justify-between items-center mb-5">
            <h1 className="font-bold text-2xl tracking-[1px]">Recharge</h1>
            <h1 className="font-bold text-md tracking-[1px]">View transaction history</h1>
          </div>
          <div className="mb-7">
            <form className="flex items-center py-3 px-4 rounded-[12px] w-[200px] bg-simple-gray">
              <input type="text" placeholder="Enter username" className="w-[200px] bg-transparent outline-none">
              </input>
              {/* <span className="w-[1px] h-[28px] bg-simple-gray"></span> */}
            </form>
          </div>
          <div>
            <div className="grid gap-6 grid-cols-4">
              {data.map((item) => {
                return (
                  <div 
                    key={item.ammount} 
                    onClick={() => handleSelect(item)} 
                    className={`h-[96px] w-[219px] py-6 rounded flex flex-col items-center justify-center ${selected?.ammount === item.ammount ? 'border-2 border-simple-yellow' : 'border border-simple-gray-3'}`}
                  >
                    <div className="flex items-center justify-center">
                      <div>
                        <Image src={"/tiktok-coin.png"} alt="coin" width={32} height={32} />
                      </div>
                      <div>
                        <p className="text-2xl font-bold ml-2">
                          {item.ammount}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-simple-gray-2">
                        {item.price}
                      </p>
                    </div>
                  </div> 
                )
              })}
            </div>
          </div>
          <div className="mt-3 flex items-center">
            <p className="tracking-[1px] mr-3">Payment method</p>
            <Image src={"/payment.png"} alt="payment" width={66} height={14} />
          </div>
          <div className="mt-2">
            <p className="tracking-[1px]">Total <span className="font-bold tracking-normal">{selected?.price}</span></p>
          </div>
          <div className="mt-4">
            <button
              className="w-[200px] h-[46px] flex justify-center items-center border-none bg-pink-btn text-white rounded"
            >
              Recharge
            </button>
            <Image src={"/loader.gif"} alt="loader" width={100} height={100} />
          </div>
        </div>
      </div>
    </main>
  )
}
