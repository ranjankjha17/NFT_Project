
//linear-gradient(150deg, #53f 15%, #ffffff)

const styles={
    wrapper:`h-max-[10rem] flex flex-wrap
    bg-gradient-to-r from-white-400 md:from-white-200 items-center justify-evenly
    `,
    imageSize:`md:h-28 md:w-28`,
    primaryButton:`w-36 h-12 text-sm bg-yellow-400 border-solid border-black rounded-lg font-bold mr-5 md:mr-10`,
    secondaryButton:`w-36 h-12 text-sm bg-slate-200 border-solid border border-current rounded-lg font-bold`
}


const Banner=()=>{
return(
    <div className={styles.wrapper} style={{background: "linear-gradient(to right,#f7d6e0,#C5EDF4)"}} >
        <div className="pt-10 md:pt-18">
            <h1 className="text-6xl md:text-7xl my-5 text-[#FFC300] font-bold">NFT</h1>
            <h1 className="text-6xl md:text-7xl text-[#FFC300] font-bold">MARKETPLACE</h1>
            <h1 className="text-6xl md:text-7xl my-5 text-[#f400a1] font-bold">BASED ON</h1>
            <h1 className="text-6xl md:text-7xl text-[#f400a1] font-bold">KALPTANTRA</h1>
            <div className="flex flex-wrap pt-10 md:pt-32">
            <button className={styles.primaryButton}>Explore NFTs</button>
            <button className={styles.secondaryButton}>Create NFT</button>
            </div>

        </div>
        <div className="pt-14 md:pt-28 pb-10 mx-2 md:mx-0">
            <img className="md:h-auto md:w-auto h-[18rem] w-[18rem" src="/nft_photo.jpg" alt="nft image"/>
        </div>
    </div>
)
}

export default Banner