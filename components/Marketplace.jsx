import Button from "./Button"
const Marketplace=()=>{
    return(
        <div className="mx-2  md:mx-16  mt-5">
            <h1 className="text-xl md:text-3xl font-bold text-center md:text-left">Marketplace</h1>
            <div className=" mt-5 flex-auto md:flex  justify-around items-center">
             <Button text="Trendings"/>
             <Button text="Art"/>
             <Button text="Music"/>
             <Button text="Video"/>
             <Button text="Sports"/>
             <Button text="Utility"/>
             <Button text="Photography"/>
             <Button text="Game"/>
             <Button text="See More"/>   
            </div>
        </div>
    )
}

export default Marketplace