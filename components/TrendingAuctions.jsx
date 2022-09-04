
//https://opensea.io/assets/ethereum/0xe6270165bd2d78d6f3ce609092a0aa6acdc67748/970

const data = [
    {
        id: 1,
        username: "@GHARLIERA",
        icon_url: "https://img.seadn.io/files/317389a617e5af0750c732cd3caf32bf.png?fit=max&w=600",
        image_url: "https://lh3.googleusercontent.com/XQUqWPEN1UP0P09i91T5VFQLMqlw7oBcp8a4_0Eku_FfuaxyW0JCE4VFsBOxY3wTB9cvG87i-uhAvqP9NYJqcx-EF4zCYFph4kxL=w600",
        tag_name: "Special Surprise",
        icon2_url: "https://img.seadn.io/files/9fcc643e73fe103db372dbe8067e0b0c.png?fit=max&w=600",
        heading: "Way Back Home",
        bid_price: "0.40 ETH",
        time: "07h 34m 34s"

    },
    {
        id: 2,
        username: "@GLAMBACKET",
        icon_url: "https://img.seadn.io/files/317389a617e5af0750c732cd3caf32bf.png?fit=max&w=600",
        image_url: "https://lh3.googleusercontent.com/a6zyC_YIDxFmms0w8pma4PIOeWTGyPkE3GnumhBfxN1z7MYhelxeOADniNa49joHEWyb0yTau0hJvp7F8UL7MVE8fnYCJK-LPxjbCQ=w600",
        tag_name: "@kureja",
        icon2_url: "https://img.seadn.io/files/9fcc643e73fe103db372dbe8067e0b0c.png?fit=max&w=600",
        heading: "Way Back Home",
        bid_price: "0.40 ETH",
        time: "07h 34m 34s"

    },
    {
        id: 3,
        username: "@hermippe",
        icon_url: "https://img.seadn.io/files/317389a617e5af0750c732cd3caf32bf.png?fit=max&w=600",
        image_url: "https://lh3.googleusercontent.com/zvyzPvFGwYtdcg1LPdOGCyVqnBPLqbn61IbfiQrxlMoDwiD9AOKQjF4L1NFDp5sxrpXak4Twv7HesZaW-1PQfesKtHlflb6ED_lh-Mk=w600",
        tag_name: "Special Surprise",
        icon2_url: "https://img.seadn.io/files/9fcc643e73fe103db372dbe8067e0b0c.png?fit=max&w=600",
        heading: "#025 - Cowboy",
        bid_price: "0.40 ETH",
        time: "07h 34m 34s"

    },
    {
        id: 4,
        username: "@GHARLIERA",
        icon_url: "https://img.seadn.io/files/317389a617e5af0750c732cd3caf32bf.png?fit=max&w=600",
        image_url: "https://lh3.googleusercontent.com/TKcFVjE-Nwpps9QRY-ujCntRhIeedUnDS2aHXviCy98uZG3eX4g9p4GNlcO-Q_6NdJyULglwl4DnQaY8K4rCr9ytkBA3-sIlYpWgJWU=w600",
        tag_name: "Armament",
        icon2_url: "https://img.seadn.io/files/9fcc643e73fe103db372dbe8067e0b0c.png?fit=max&w=600",
        heading: "Preety Mundane",
        bid_price: "0.40 ETH",
        time: "07h 34m 34s"

    }

]

const styles = {
    imageUrl: `w-auto h-auto`,
    card: `h-auto md:h-[10rem] w-[18rem] border border-slate-300 my-5 md:my-0`,
    icon: `h-10 w-10 rounded`,
    h5Text:`text-sm text-gray-500`
}
const TrendingAuctions = () => {
    return (
        <div className="mx-2 md:mx-16 my-14">
            <h1 className="text-xl md:text-3xl font-bold text-center md:text-left">Trending Auctions</h1>
            <div className="flex flex-col md:flex-row items-center justify-between mt-10">

                {
                    data.map((el) => (
                        <div key={el.id} className={styles.card}>
                            <div className="flex items-start justify-around">
                                <img className={styles.icon} src="https://static-cse.canva.com/blob/931214/1600w-EW4cggXkgbc.jpg" alt="icon" />
                                <h5 className={styles.h5Text} style={{marginTop:"0.5rem"}}>{el.username}</h5>
                                <img className="w-5 h-5 mt-3" src="https://i.pinimg.com/originals/59/cf/b1/59cfb142627bb4d8d0a75721b67d699f.png" alt="dill" />
                            </div>
                            <img className={styles.imageUrl} src={el.image_url} alt="trending_image" />
                            <div className="flex items-start justify-start pt-3 px-5">
                                <img className={styles.icon} src="https://cdn.dribbble.com/users/844597/screenshots/9008058/media/a8bfc3cd2e71a304a02d8729bcffa132.png?compress=1&resize=400x300" alt="icon2" />
                                <h5 className={styles.h5Text} style={{marginTop:"0.5rem"}}>{el.tag_name}</h5>
                            </div>
                            <h3 className="text-xl font-bold px-5 py-3">{el.heading}</h3>
                            <div className="bg-gray-200 px-5 py-5">
                                <div className="flex items-center justify-between">
                                   
                                    <h5 className={styles.h5Text}>Current Bid</h5>
                                    <h5 className={styles.h5Text}>Ending In</h5>
                                </div>
                                <div className="flex items-center justify-between">
                                    <>
                                    <img  src="/eth.png" alt="Eth" height="25" width="25"/>
                                    <h5 className="ml-[-4rem]">{el.bid_price}</h5>
                                    </>
                                    <h5 className="">{el.time}</h5>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default TrendingAuctions