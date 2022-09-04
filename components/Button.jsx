import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Button=({text})=>{
    return (
        <button className="w-[13rem] h-[2.5rem] mx-2 my-2 text-sm md:text-base bg-gray-200 rounded-3xl font-semibold text-gray-600">
            <div className='mt-2 ml-3'>
            <div className=''>{text}</div>
            </div>
        </button>
    )
}
export default Button