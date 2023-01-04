import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <footer className='w-full mt-5'>
             <div className='bg-green-900 w-full p-5 text-white text-center flex flex-col items-center'>
                <div className="center md:flex justify-center">
                    <Link to='/' className="block tracking-wide"><b>PlantStation</b></Link>
                    <small className='md:border-l-[1px] md:pl-2 md:ml-2'>&copy; 2022 TodsDotDev</small>
                </div>
                <small className='block'>All rights reserved.</small>
            </div>
        </footer>
    )
}