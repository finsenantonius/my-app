"use client";
import { useState } from "react";
import Image from "next/image";
import DialogDemo from "@/components/Dialog";

export default function Home() {
  const data = [
    {
      ammount: "70",
      price: "IDR 11,900",
    },
    {
      ammount: "350",
      price: "IDR 59,500",
    },
    {
      ammount: "700",
      price: "IDR 119,000",
    },
    {
      ammount: "1,400",
      price: "IDR 238,000",
    },
    {
      ammount: "3,500",
      price: "IDR 595,000",
    },
    {
      ammount: "7,000",
      price: "IDR 1,190,000",
    },
    {
      ammount: "17,500",
      price: "IDR 2,975,000",
    },
    {
      ammount: "Custom",
      price: "Large amount supported",
    },
  ];

  const [username, setUsername] = useState("");
  const [selected, setSelected] = useState();
  const [open, setOpen] = useState(false);
  const [valueCoin, setValueCoin] = useState("");
  const [total, setTotal] = useState("");

  const handleSelect = (item) => {
    setSelected(item);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleChange = (event) => {
    const { value } = event.target;

    // Remove any existing commas from the input
    const sanitizedValue = value.replace(/,/g, "");

    const totale = sanitizedValue * 170;
    // Format the number with commas
    const formattedValue = Number(sanitizedValue).toLocaleString();
    const formattedTotal = Number(totale).toLocaleString();

    console.log(value);
    console.log(totale);
    setValueCoin(formattedValue);
    setTotal(formattedTotal);
  };

  return (
    <main>
      <div className="w-full h-16 flex justify-around items-center shadow-[0_1px_1px_rgba(0,0,0,0.12)] top-0 fixed bg-white">
        <div className="w-[500px] h-full flex justify-between items-center max-w-6xl px-6">
          <div>
            <Image src="/tiktok-logo.png" alt="logo" width={118} height={42} />
          </div>
          {/* <div>
            <form className="flex items-center py-3 px-4 rounded-[92px] bg-simple-gray">
              <input type="text" placeholder="Search" className="w-[431px] bg-transparent">
              </input>
              <span className="w-[1px] h-[28px] bg-simple-gray"></span>
            </form>
          </div> */}
          <div className="flex items-center">
            <div>
              {/* <Image src={"/upload.png"} alt="upload" width={116} height={36} /> */}
            </div>
            <div className="ml-4">
              <Image src={"/send.png"} alt="send" width={32} height={32} />
            </div>
            <div className="mt-[7px] ml-4">
              <Image src={"/message.png"} alt="send" width={32} height={32} />
            </div>
            <div className="ml-4"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-6 justify-center items-center mt-16">
        <div className="w-[500px]">
          <div className="flex justify-between items-center mb-5">
            <h1 className="font-bold text-2xl tracking-[1px]">Recharge</h1>
            <h1 className="font-bold text-md tracking-[1px]">
              View transaction history
            </h1>
          </div>
          <div className="mb-7">
            <form className="flex items-center py-3 px-4 rounded-[12px] w-[200px] bg-simple-gray">
              <input
                type="text"
                placeholder="Enter username"
                className="w-[200px] bg-transparent outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              {/* <span className="w-[1px] h-[28px] bg-simple-gray"></span> */}
            </form>
          </div>
          <div>
            <div className="grid gap-6 grid-cols-1">
              {data.map((item) => {
                return item.ammount === "Custom" &&
                  selected?.ammount === "Custom" ? (
                  <div
                    key={item.ammount}
                    onClick={() => handleSelect(item)}
                    className={`h-[96px] py-6 rounded flex flex-col items-center justify-center ${
                      selected?.ammount === item.ammount
                        ? "border-2 border-simple-yellow"
                        : "border border-simple-gray-3"
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      <div>
                        <Image
                          src={"/tiktok-coin.png"}
                          alt="coin"
                          width={32}
                          height={32}
                        />
                      </div>
                      <div>
                        {/* <p className="text-2xl font-bold ml-2">
                          {item.ammount}
                        </p> */}
                        {/* <fieldset className="mb-[15px] mt-[24px] flex items-center gap-5"> */}
                        <input
                          className="text-2xl ml-2 inline-flex h-[35px] w-[125px] flex-1 items-center justify-center rounded-[4px] px-[10px] leading-none outline-none border-b-2 border-black text-center"
                          id="name"
                          defaultValue="Pedro Duarte"
                          onChange={handleChange}
                          value={valueCoin}
                        />
                        {/* </fieldset> */}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-simple-gray-2">
                        30-2,500,000
                      </p>
                    </div>
                  </div>
                ) : (
                  <div
                    key={item.ammount}
                    onClick={() => handleSelect(item)}
                    className={`h-[96px] py-6 rounded flex flex-col items-center justify-center ${
                      selected?.ammount === item.ammount
                        ? "border-2 border-simple-yellow"
                        : "border border-simple-gray-3"
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      <div>
                        <Image
                          src={"/tiktok-coin.png"}
                          alt="coin"
                          width={32}
                          height={32}
                        />
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
                );
              })}
            </div>
          </div>
          <div className="mt-3 flex items-center">
            <p className="tracking-[1px] mr-3">Payment method</p>
            <Image src={"/payment.png"} alt="payment" width={66} height={14} />
          </div>
          {selected?.ammount === "Custom" ? (
            <div className="mt-2">
              <p className="tracking-[1px]">
                Total{" "}
                <span className="font-bold tracking-normal">IDR {total}</span>
              </p>
            </div>
          ) : (
            <div className="mt-2">
              <p className="tracking-[1px]">
                Total{" "}
                <span className="font-bold tracking-normal">
                  {selected?.price}
                </span>
              </p>
            </div>
          )}

          <div className="mt-4">
            {/* <Image src={"/loader.gif"} alt="loader" width={100} height={100} /> */}
            <DialogDemo
              open={open}
              handleOpen={handleOpen}
              username={username}
              valueCoin={valueCoin}
              total={total}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
