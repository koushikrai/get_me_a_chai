import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex justify-center items-center flex-col gap-4 text-white h-[40vh]">
      <div className="font-bold flex gap-3 text-5xl justify-center items-center ">Buy me a chai <span><img src="" alt="img" width={88}></img></span></div>
      <div>
        <p>this is a crowd funding website for creators...Start Now!</p>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Now</button>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read Me</button>
        
      </div>
      
    </div>
    <div className="bg-white h-1 opacity-10"></div>

    <div className="text-white container mx-auto">
      <h1 className="text-2xl font-bold text-center my-4">Buy me a chai</h1>
      <div className="flex gap-5 justify-around">
        <div className="item">
          <img className="bg-slate-100 rounded-full p-2 text-black" width={88} src="/" alt="img" />
          <p className="font-bold">Fans want help</p>
          <p className="text-center">Your fans are available to help u</p>
          
          </div>
          <div className="item">
          <img className="bg-slate-100 rounded-full p-2 text-black" width={88} src="/" alt="img" />
          <p className="font-bold">Fans want help</p>
          <p className="text-center">Your fans are available to help u</p>
          </div>
          <div className="item">
          <img className="bg-slate-100 rounded-full p-2 text-black" width={88} src="/" alt="img" />
          <p className="font-bold">Fans want help</p>
          <p className="text-center">Your fans are available to help u</p>
          </div>
      </div>

    </div>
     </>
  );
}
