import { FiSearch } from "react-icons/Fi"

const data=[
    {
        id:1,
        name:"Home"
    },
    {
        id:2,
        name:"Explore"
    },
    {
        id:3,
        name:"Create"
    },
    {
        id:4,
        name:"Blog"
    },
    {
        id:5,
        name:"Contact"
    }
]


const styles = {
    

    icon: `h-10 w-10 rounded mx-2`,
}

const Navbar=()=>{
    return(
        <div className="flex-wrap md:flex items-center justify-between md:px-5 md:py-5 px-0">
           <div className="flex"> 
            <h3 className="font-extrabold md:text-sm text-sm px-7 md:px-2 py-2 text-gray-900">P2E Pro</h3>
            <div className="flex w-42 h-10 bg-gray-200 md:ml-10 ml-10 pl-5 pr-2 rounded-lg text-sm">
                <FiSearch className="mt-3"/>
                <input
                type="search"
                placeholder="Collection, item or user"
                className="h-10  bg-gray-200 text-center rounded-lg text-sm"
                />
            </div>
            </div>

            <div className="flex">
                <div className="mx-5 my-2">
                {
                    data.map((el)=>(
                        <a className="md:mx-5 mx-2 md:text-sm text-sm text-gray-900" key={el.id}>{el.name}</a>
                    ))
                }
                </div>

                <div>
                <img className={styles.icon} src="https://static-cse.canva.com/blob/931214/1600w-EW4cggXkgbc.jpg" alt="icon" />
                </div>
                <button type="submit" className="h-10 md:w-28 w-20 rounded-lg bg-blue-600 text-white text-sm text-bold">Login</button>

            </div>

        </div>
    )
}

export default Navbar