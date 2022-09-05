import Image from "next/image"

const sellers = [
    {
        id: 1,
        name: "Jim_Sechen",
        price: "$1,954",
        image_url: "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 2,
        name: "Ravi_O'Leigh",
        price: "$2,008",
        image_url: "https://images.pexels.com/photos/1310474/pexels-photo-1310474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 3,
        name: "Sue_Shel07",
        price: "$7,009",
        image_url: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 4,
        name: "Jakson_Pot",
        price: "$5,365",
        image_url: "https://images.pexels.com/photos/2823975/pexels-photo-2823975.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        id: 5,
        name: "Jim_Sechen",
        price: "$1,809",
        image_url: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 6,
        name: "lda_Champman",
        price: "$3,647",
        image_url: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]


const styles = {
    heading: "text-xl md:text-3xl font-bold text-center md:text-left",
    card: "w-auto h-[auto] bg-gray-200 text-center py-5 mb-5 rounded-lg"
}

const TopSellers = () => {
    return (
        <div className="mx-2 md:mx-16  mt-5">
            <h1 className={styles.heading}>Our top Sellers</h1>
            <div className="flex flex-wrap flex-col-2 md:flex-row itecenms-center justify-between mt-10">
                {
                    sellers.map((el) => (

                        <div className={styles.card} key={el.id}>
                            <div className="w-[6rem] h-[6rem] bg-no-repeat bg-center bg-cover inline-block mx-10 my-5">
                                <Image height={100} width={100} className="rounded-full w-full h-full" src={el.image_url} alt="seller_pic" />
                            </div>
                            <h5 className="mx-10 text-md text-slate-700 font-bold">{el.name}</h5>
                            <div className="mx-10 text-sm text-gray-500">{el.price}</div>
                        </div>
                    ))

                }

            </div>

        </div>
    )

}


export default TopSellers