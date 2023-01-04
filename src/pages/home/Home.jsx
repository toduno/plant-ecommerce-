import { Link } from 'react-router-dom';

import { Products } from '../../products'
import Product from '../shop/Product'

import { RiCustomerService2Line } from 'react-icons/ri'
import { GiPlantWatering } from 'react-icons/gi'
import { TbShovel } from 'react-icons/tb'
import { TbPlant2 } from 'react-icons/tb'


const Home = () => {
    const h2Style = 'max-w-[60vw] md:max-w-full m-auto text-center my-10 md:my-14 text-xl md:text-2xl'

    const containerStyle = 'w-full flex flex-col md:flex-row flex-wrap gap-y-7 md:gap-y-14 gap-x-10 md:items-center justify-center'
    const divStyle = 'flex md:flex-col lg:flex-row md:w-[40%] justify-center gap-x-4'
    const numStyle = 'md:mb-3 flex items-center justify-center text-white text-xl md:text-2xl lg:text-3xl bg-green-800 rounded-full w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 font-semibold'
    const divH4PStyle = 'max-w-xs'
    const h4Style = 'tracking-wide font-semibold uppercase'
    const divLineStyle = 'bg-black w-5 md:w-7 h-[1.5px] mt-1 mb-4'
    
    const products = Products.slice(0, 3)

    const iconStyle = 'w-16 h-16'
    const iconDivStyle = 'flex items-center justify-center  bg-green-300 rounded-full w-32 h-32 mb-3'
    const iconContainerStyle = 'text-center md:w-[40%] flex flex-col gap-y-2 md:gap-y-3 items-center'

    const telephone = '123456789'

  return (
    <div>
        <div className='bgImage h-[40vh] bg-cover md:bg-auto'>
            <div className='text-white ml-4 py-7 lg:py-10 flex flex-col items-start justify-center gap-y-6'>
                <h1 className='text-3xl md:text-4xl max-w-xs md:max-w-full'><b>Refresh Your Home, Start Planting!</b></h1>
                <p className='tracking-wide max-w-xs lg:max-w-sm'>At PlantStation, we care for your plant needs. Shop and enjoy nature in your home or office.</p>
                <Link to='/shop' className='border-2 border-green-600 rounded-full px-6 py-[7px] hover:bg-green-700 hover:border-green-700 font-semibold'>Shop Now</Link>
            </div>
        </div>

        <div className='pl-2'>
            <h2 className={h2Style}>Why You Should Keep <span className='text-green-900'><b>Indoor Plants</b></span></h2>
            
            <div className={containerStyle}>
                <div className={divStyle}>
                    <div className={numStyle}>1</div>
                    <div className={divH4PStyle}>
                        <h4 className={h4Style}>Breath of fresh air</h4>
                        <div className={divLineStyle}></div>
                        <p>The roots and soil of houseplants can reduce airborne volatile organic compounds (VOCs) significantly</p>
                    </div>
                </div>

                <div className={divStyle}>
                    <div className={numStyle}>2</div>
                    <div className={divH4PStyle}>
                        <h4 className={h4Style}>Boost Your Productivity</h4>
                        <div className={divLineStyle}></div>
                        <p>Multiple studies have found that plants in a workspace increase both productivity and creativity</p>
                    </div>
                </div>

                <div className={divStyle}>
                    <div className={numStyle}>3</div>
                    <div className={divH4PStyle}>
                        <h4 className={h4Style}>Help Reduce Stress Levels</h4>
                        <div className={divLineStyle}></div>
                        <p>Plants in your home or office can make you feel more comfortable, soothed and natural</p>
                    </div>
                </div>

                <div className={divStyle}>
                    <div className={numStyle}>4</div>
                    <div className={divH4PStyle}>
                        <h4 className={h4Style}>Therapeutic</h4>
                        <div className={divLineStyle}></div>
                        <p>Indoor gardening can be helpful for people experiencing the symptoms of mental illness </p>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <h2 className={h2Style}>Buy The Best</h2>
            <div className='flex flex-col md:flex-row md:flex-wrap justify-center gap-y-7 md:gap-y-10 md:gap-x-2'>
                {products.map((product) => 
                    <Product product={product} />
                )}
            </div>
        </div>

        <div className='mb-8 md:mb-12 flex flex-col items-center'>
            <h2 className={h2Style}>Don't Know Where To Start? <span className='text-green-900'><b>We've Got You!</b></span></h2>
           
            <div className={containerStyle}>
                <div className={iconContainerStyle}>
                    <div className={iconDivStyle}><RiCustomerService2Line className={iconStyle} /></div>
                    <h4 className={h4Style}>Consultation</h4>
                    <p>We'll Help You Find The Right Plants For Your House</p>
                </div>

                <div className={iconContainerStyle}>
                    <div className={iconDivStyle}><GiPlantWatering className={iconStyle}  /></div>
                    <h4 className={h4Style}>Planting</h4>
                    <p>We'll Guide You Through How To Correctly Plant It</p>
                </div>

                <div className={iconContainerStyle}>
                    <div className={iconDivStyle}><TbPlant2 className={iconStyle} /></div>
                    <h4 className={h4Style}>Happy Plants</h4>
                    <p>Enjoy The Decor And Positivity Of Your New Plants</p>
                </div>

                <div className={iconContainerStyle}>
                    <div className={iconDivStyle}><TbShovel className={iconStyle} /></div>
                    <h4 className={h4Style}>Maintenance</h4>
                    <p>We Also Help With Keeping The Plant Healthy</p>
                </div>
            </div>

            <Link id='contact' >
                <a href={`tel: ${telephone}`}>
                    <button className='border-2 border-green-900 bg-white rounded-full px-5 py-1 hover:text-white hover:bg-green-900 m-auto mt-10 md:mt-14'>Schedule A Call</button>
                </a>
            </Link>
        </div>
    </div>
  )
}

export default Home