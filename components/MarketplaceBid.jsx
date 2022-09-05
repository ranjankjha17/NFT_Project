
import Image from "next/image"

const data = [
    {
        id: 1,
        username: "@GHARLIERA",
        icon_url: "https://img.seadn.io/files/317389a617e5af0750c732cd3caf32bf.png?fit=max&w=600",
        image_url: "https://img.seadn.io/files/258e68424165a02cbc800a48f143547c.png?auto=format&fit=max&w=384",
        tag_name: "Special Surprise",
        icon2_url: "https://img.seadn.io/files/9fcc643e73fe103db372dbe8067e0b0c.png?fit=max&w=600",
        heading: "Home of Heaven",
        bid_price: "80.88 ETH",
        time: "07h 34m 34s"

    },
    {
        id: 2,
        username: "@GLAMBACKET",
        icon_url: "https://img.seadn.io/files/317389a617e5af0750c732cd3caf32bf.png?fit=max&w=600",
        image_url: "https://img.seadn.io/files/6417fef23ba02e839f5b157d96d441b2.png?auto=format&fit=max&w=384",
        tag_name: "@kureja",
        icon2_url: "https://img.seadn.io/files/9fcc643e73fe103db372dbe8067e0b0c.png?fit=max&w=600",
        heading: "RATKALET",
        bid_price: "70.66 ETH",
        time: "07h 34m 34s"

    },
    {
        id: 3,
        username: "@hermippe",
        icon_url: "https://img.seadn.io/files/317389a617e5af0750c732cd3caf32bf.png?fit=max&w=600",
        image_url: "https://img.seadn.io/files/2672d0d15aefc828c725b1b97546bf3d.png?auto=format&fit=max&w=384",
        tag_name: "Special Surprise",
        icon2_url: "https://img.seadn.io/files/9fcc643e73fe103db372dbe8067e0b0c.png?fit=max&w=600",
        heading: "TIPELIGY",
        bid_price: "40 ETH",
        time: "07h 34m 34s"

    },
    {
        id: 4,
        username: "@GHARLIERA",
        icon_url: "https://img.seadn.io/files/317389a617e5af0750c732cd3caf32bf.png?fit=max&w=600",
        image_url: "https://img.seadn.io/files/66196dd65af5e25c2fac209b0e33bd8d.png?auto=format&fit=max&w=384",
        tag_name: "Armament",
        icon2_url: "https://img.seadn.io/files/9fcc643e73fe103db372dbe8067e0b0c.png?fit=max&w=600",
        heading: "Preety Mundane",
        bid_price: "90.99 ETH",
        time: "07h 34m 34s"

    },
    {
        id: 5,
        username: "@GHARLIERA",
        icon_url: "https://img.seadn.io/files/317389a617e5af0750c732cd3caf32bf.png?fit=max&w=600",
        image_url: "https://img.seadn.io/files/720bb93fb69a1c22463ed9c3adebb3e6.png?auto=format&fit=max&w=384",
        tag_name: "Special Surprise",
        icon2_url: "https://img.seadn.io/files/9fcc643e73fe103db372dbe8067e0b0c.png?fit=max&w=600",
        heading: "PLIGHTTHEF",
        bid_price: "77.77 ETH",
        time: "07h 34m 34s"

    },
    {
        id: 6,
        username: "@RiskyBisky",
        icon_url: "https://img.seadn.io/files/317389a617e5af0750c732cd3caf32bf.png?fit=max&w=600",
        image_url: "https://img.seadn.io/files/880c9a336ac250b44518a2a0ecede019.png?auto=format&fit=max&w=384",
        tag_name: "@kureja",
        icon2_url: "https://img.seadn.io/files/9fcc643e73fe103db372dbe8067e0b0c.png?fit=max&w=600",
        heading: "KILGHTITK",
        bid_price: "30.33 ETH",
        time: "07h 34m 34s"

    },
    {
        id: 7,
        username: "@Sound",
        icon_url: "https://img.seadn.io/files/317389a617e5af0750c732cd3caf32bf.png?fit=max&w=600",
        image_url: "https://img.seadn.io/files/3171ec1af11ad90ead67402b346be9cf.png?auto=format&fit=max&w=384",
        tag_name: "Special Surprise",
        icon2_url: "https://img.seadn.io/files/9fcc643e73fe103db372dbe8067e0b0c.png?fit=max&w=600",
        heading: "#025 - Man of Art",
        bid_price: "60.66 ETH",
        time: "07h 34m 34s"

    },
    {
        id: 8,
        username: "@GHARLIERA",
        icon_url: "https://img.seadn.io/files/317389a617e5af0750c732cd3caf32bf.png?fit=max&w=600",
        image_url: "https://img.seadn.io/files/aaf08971bc9740643ad2317b15735ca9.png?auto=format&fit=max&w=384",
        tag_name: "Armament",
        icon2_url: "https://img.seadn.io/files/9fcc643e73fe103db372dbe8067e0b0c.png?fit=max&w=600",
        heading: "The Life",
        bid_price: "55.55 ETH",
        time: "07h 34m 34s"

    }

]

const styles = {
    imageUrl: `w-auto h-auto`,
    card: `h-auto md:h-[10rem] w-[18rem] border border-slate-300 my-5 md:mb-[25rem]`,
    icon: `h-10 w-10 rounded`,
    h5Text:`text-sm text-gray-500`
}
const MarketplaceBid = () => {
    return (
        <div className="mx-2 md:mx-16 my-14">
            <div className="flex-auto md:flex md:flex-wrap items-center justify-around mt-10">

                {
                    data.map((el) => (
                        <div key={el.id} className={styles.card}>
                            <div className="flex items-start justify-around">
                                <Image height={"40"} width={"40"} className={styles.icon} src="https://static-cse.canva.com/blob/931214/1600w-EW4cggXkgbc.jpg" alt="icon" />
                                <h5 className={styles.h5Text} style={{marginTop:"0.5rem"}}>{el.username}</h5>
                                <div>...</div>
                            </div>
                            <Image  height="275" width="300" className={styles.imageUrl} src={el.image_url} alt="trending_image" />
                            <div className="flex items-start justify-evenly pt-3 ">
                                <div className="flex">
                                <Image height="30" width="35" className={styles.icon} src="https://cdn.dribbble.com/users/844597/screenshots/9008058/media/a8bfc3cd2e71a304a02d8729bcffa132.png?compress=1&resize=400x300" alt="icon2" />
                                <h5 className={styles.h5Text} style={{marginTop:"0.5rem"}}>{el.tag_name}</h5>
                                </div>
                                <Image  height="25" width="25" className="pt-2" src="https://i.pinimg.com/originals/59/cf/b1/59cfb142627bb4d8d0a75721b67d699f.png" alt="dill" />
                            </div>
                            <h3 className="text-xl font-bold px-5 py-3">{el.heading}</h3>
                            <div className="bg-gray-200 px-5 py-5">
                                <div className="flex items-center justify-between">
                                   
                                    <h5 className={styles.h5Text}>Current Bid</h5>
                                    
                                </div>
                                <div className="flex justify-between items-center">
                                    <>
                                    <Image  src="/eth.png" alt="Eth" height="25" width="25"/>
                                    <h5 className="">{el.bid_price}</h5>
                                    <button className="w-[8rem] h-[2rem] mx-2 my-2 text-sm md:text-sm bg-blue-700 rounded-3xl font-semibold text-white">Plae a bid </button>
                                    </>
                                    
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default MarketplaceBid