import Image from "next/image"

const data=[
    {
        id:1,
        image:"https://img.icons8.com/pastel-glyph/452/nft-node--v2.png",
        name:"Buy and sell your NFTs",
    },
    {
        id:2,
        image:"https://img.icons8.com/external-sbts2018-outline-sbts2018/452/external-discover-basic-ui-elements-2.5-sbts2018-outline-sbts2018.png",
        name:"Discover top artists & creators",
    },
    {
        id:3,
        image:"https://img.icons8.com/ios/452/wallet--v1.png",
        name:"Earn money by trading NFTs",
    }
]


const styles={
    card: `h-auto md:h-[20rem] w-auto md:w-auto rounded-xl border border-slate-300 px-5 py-5 my-5 md:my-0 bg-gray-200 md:mb-[5rem] flex-wrap justify-center items-center`,
}

const Mint=()=>{
    return(
        <div className="mx-2  md:mx-16  mt-5">
            <h1 className="text-xl md:text-3xl font-bold text-center">Mint buy and sell</h1>
            <h1 className="text-xl md:text-3xl font-bold text-center">or just launch your own NFT Store</h1>
            <div className="flex flex-col md:flex-row items-center justify-between mt-10">
                {
                    data.map((el)=>(
                        <div className={styles.card} key={el.id}>
                            <div className="flex justify-center items-center w-[5rem] h-[5rem] bg-blue-100 rounded-full my-10 mx-24">
                                <Image height={"40"} width={"40"} src={el.image} alt="symbol" className="h-10 w-10 text-gray-600"/>
                            </div>
                            <h5 className="font-semibold my-5 mx-14 text-center text-gray-800">{el.name}</h5>
                            
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Mint