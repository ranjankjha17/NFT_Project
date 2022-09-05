import Image from "next/image"

const data=[
    {
        id:1,
        image1:"https://i.seadn.io/gcs/files/cac391bf2b5cb18c244c955bd2dd0920.jpg?auto=format&dpr=1&w=500",
        image2:"https://lh3.googleusercontent.com/sx7IZO7us06pwnsqrwlMsn9miiJJcnSevPjmzs11ufFXAX-3X3GdQa4pbG9ek9X9re2I3G-yfZLYlPLjKzSn4Qs7RyvDwIechzJ62w=w302",
        image3:"https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg",
        image4:"https://lh3.googleusercontent.com/h3J54UnIZH6SN880BaQ_NIDYLuhOoXDLq3HBWyKNrBlRSopOXYMNwZQB2tPVNUP96vtDgFI6KE_ZMt3CZAybunBSvHiQwEXs5kam=w302",
        name1:"Sound OF Silence",
        name2:"235 in collection"

    },
    {
        id:2,
        image1:"https://lh3.googleusercontent.com/w62pnUlmErfFAz_TlEjTpw0wkLgqfOw4ihEB_VZlAoCeHNPPNEduWxirrvLYvMyw4PH6sAXyo7GBqgDAstkcQVjmYiRBOaJeebkZ=h400",
        image2:"https://lh3.googleusercontent.com/P6aiPMCLhoY5w8X9TpeaKDywb56ed_xyzxpk7LuwlL0KwtCooNq-gSOnTkcVoFCS7xyazMbb8wiGCcW6s5P76A_Rn1CiUJ1WDN6rNDA=h400",
        image3:"https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg",
        image4:"https://lh3.googleusercontent.com/hxTqb1NDgFVbvXCmDyIPvD8GewrCgBiFcvmoyXgBxZttWnWU6v2Dp7_WmMOcErBU-4ecSLQ_st9gEfYe1dOgBQwT3yzWoEQfHO7UpA=w302",
        name1:"Modern Art Collection",
        name2:"450 in collection"

    },
    {
        id:3,
        image1:"https://lh3.googleusercontent.com/JQ2xagOTuraxqfjWA7VozOS5IOUrLdCNWMs6msrtfDDa3ZyWRptVeaQCKy20G_Z9I9duFL1bRj1VPnDPNDVUd_01Tldt2YRt9OYi6A=h400",
        image2:"https://lh3.googleusercontent.com/ozsdtadqWhFswbgMReMCMmOksixr9gELXBwunGYlqpgCJ03lUkEnriujRePMooiKir9hTkIFEUtp3Gh-shqy_XRmfifdDZTqUqLyZA=h400",
        image3:"https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?k=20&m=1309328823&s=612x612&w=0&h=RqA2lYygvOxisNPp6UwFjz7bCw_rYITJMqFTMSrhpis=",
        image4:"https://i.seadn.io/gcs/files/653520128b7e63d3d733bb4e07e60fbe.png?auto=format&dpr=1&w=500",
        name1:"Art of Today",
        name2:"335 in  collection"

    },
]

const styles={
    card: `h-auto w-auto md:w-auto border border-slate-300 px-5 py-5 my-5 md:my-0 bg-gray-200 md:mb-[5rem] text-center rounded-lg`,
}


const HotCollections=()=>{
    return(
        <div className="mx-2  md:mx-16  mt-5">
        <h1 className="text-xl md:text-3xl font-bold text-center md:text-left">Hot Collections</h1>
        <div className="flex flex-col md:flex-row items-center justify-between mt-10">
            {
                data.map((el)=>(
                   <div key={el.id} className={styles.card}>
                    <div className="w-full h-[15rem]">
                        <Image height={"275"} width={"300"} className="w-full h-full rounded-lg" src={el.image1} alt="coolection"/>
                    </div>
                    <div className="flex items-center justify-between mt-12">
                        <Image height={"80"} width={"100"} className="w-[8rem] h-[5rem] rounded-lg" src={el.image2} alt="left_photo"/>
                        <Image height={"80"} width={"80"} className="w-[5rem] h-[5rem] mx-2 rounded-full bg-no-repeat bg-cover" src={el.image3} alt="middle_photo"/>
                        <Image height={"80"} width={"100"} className="w-[8rem] h-[5rem] rounded-lg" src={el.image4} alt="right_photo"/>
                        
                    </div>    
                    <h5 className="text-lg font-semibold text-gray-900 mt-2">{el.name1}</h5>
                    <h5 className="text-sm text-gray-500">{el.name2}</h5>
                   </div>
                ))
            }

        </div>
        </div>
    )
}

export default HotCollections