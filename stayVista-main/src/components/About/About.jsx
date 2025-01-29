import { FaHotel, FaUsers, FaStar } from 'react-icons/fa'
import Container from '../Shared/Container'
import Heading from '../Shared/Heading'

const About = () => {
    return (
        <div className='py-16 bg-gray-50'>
            <Container>
                <Heading
                    title='About StayVista'
                    subtitle='Your Trusted Partner in Finding the Perfect Stay in Bangladesh'
                    center={true}
                />

                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-12'>
                    {/* Left side - Image */}
                    <div className='relative'>
                        <img
                            src='https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3'
                            alt='Beautiful Bangladesh'
                            className='rounded-2xl w-full h-[400px] object-cover'
                        />
                        <div className='absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block'>
                            <div className='flex items-center gap-4'>
                                <FaStar className='text-4xl text-yellow-500' />
                                <div>
                                    <p className='text-2xl font-bold'>4.9/5</p>
                                    <p className='text-gray-600'>Customer Rating</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className='space-y-6'>
                        <h3 className='text-2xl font-bold'>Discover Your Perfect Stay in Bangladesh</h3>
                        <p className='text-gray-600'>
                            At StayVista, we're passionate about connecting travelers with unique and comfortable accommodations across Bangladesh. From serene beaches to historic landmarks, we offer a curated selection of properties that showcase the best of Bangladeshi hospitality.
                        </p>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8'>
                            <div className='flex items-center gap-4'>
                                <div className='p-4 bg-rose-100 rounded-full'>
                                    <FaHotel className='text-2xl text-rose-600' />
                                </div>
                                <div>
                                    <h4 className='font-bold'>500+ Properties</h4>
                                    <p className='text-gray-600'>Across Bangladesh</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-4'>
                                <div className='p-4 bg-blue-100 rounded-full'>
                                    <FaUsers className='text-2xl text-blue-600' />
                                </div>
                                <div>
                                    <h4 className='font-bold'>10,000+ Guests</h4>
                                    <p className='text-gray-600'>Happy Customers</p>
                                </div>
                            </div>
                        </div>

                        <div className='mt-8'>
                            <h4 className='font-bold mb-4'>Our Commitment</h4>
                            <ul className='space-y-3 text-gray-600'>
                                <li>✓ Carefully vetted properties</li>
                                <li>✓ 24/7 customer support</li>
                                <li>✓ Best price guarantee</li>
                                <li>✓ Secure booking process</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About 