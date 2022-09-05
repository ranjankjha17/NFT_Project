import { FaDiscord, FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"


const data1=[
    {
        id:1,
        name:"Profile"
    },
    {
        id:2,
        name:"Maketplace"
    },
    {
        id:3,
        name:"Creators"
    },
    {
        id:4,
        name:"Activity"
    },
    {
        id:5,
        name:"Collections"
    }
]

const data2=[
    {
        id:1,
        name:"Upload"
    },
    {
        id:2,
        name:"Connect wallet"
    },
    {
        id:3,
        name:"Our blog"
    },
    {
        id:4,
        name:"item details"
    },
    {
        id:5,
        name:"Contact us"
    }
]




const Footer=()=>{
    return(
        <div className="flex flex-wrap flex-col-2 md:flex h-auto px-2 pt-[5rem]  md:px-16  mt-5 md:items-center md:justify-between items-center justify-evenly bg-gray-200">
            <div className="w-1/3">
           <div className="h-[2rem] w-[5rem] bg-white my-5 mt-[-1rem]">
                <h5 className="font-extrabold text-sm px-2 py-2">P2E Pro</h5>
           </div>
            <h5 className="font-medium text-sm my-5">P2E Pro NFT is shared liquidity NFT <br/> market smart contract</h5>
            <h5 className="font-semibold text-sm my-5">Language</h5>     
                

            <select name="cars" id="cars" className="w-32 h-10 rounded-full px-2 py-2 border-slate-300">
                <option value="volvo">English</option>
                <option value="saab">Hindi</option>
                <option value="mercedes">Pakistani</option>
                <option value="audi">Neplai</option>
            </select>

            </div>
            <div className="">
            <h5 className="font-bold text-base">Market place</h5>
                {
                    data1.map((el)=>(
                        <div className="text-sm my-3 text-slate-700" key={el.id}>{el.name}</div>
                        ))
                }
            </div>
            <div>
            <h5 className="font-bold text-base">Company</h5>
                {
                    data2.map((el)=>(
                        <div className="text-sm my-3 text-slate-700" key={el.id}>{el.name}</div>
                        ))
                }
            </div>
            <div className="mt-[-1rem]">
                <h5 className="font-bold text-base my-5 pt-12 md:pt-0">Join Newsletter</h5>
                <input type="email" className="h-10 w-30 text-sm px-5" placeholder="Your Email"/><button type="submit" className="my-5 h-10 w-24 rounded bg-blue-600 text-white text-sm text-bold">Subscribe</button>
                <div className="flex my-5 items-center justify-between">
                    <div className="w-10 h-10 bg-white px-3 py-3"><FaTwitter className="text-gray-600"/></div>
                    <div className="w-10 h-10 bg-white px-3 py-3"><FaInstagram className="text-gray-600"/></div>
                    <div className="w-10 h-10 bg-white px-3 py-3"><FaYoutube className="text-gray-600"/></div>
                    <div className="w-10 h-10 bg-white px-3 py-3"><FaGithub className="text-gray-600"/></div>
                    <div className="w-10 h-10 bg-white px-3 py-3"><FaDiscord className="text-gray-600"/></div>
                </div>
            </div>
            <div className="flex text-xs mt-10 mb-5 text-right md:ml-[30rem] text-slate-500">Copyright © 2022. Created with love by <p className="mx-1 text-blue-700">P2E Pro NFT</p></div>

        </div>
    )
}

export default Footer