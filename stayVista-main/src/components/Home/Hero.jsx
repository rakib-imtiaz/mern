import { Link } from 'react-router-dom';
import Container from '../Shared/Container';

const Hero = () => {
    return (
        <div className="bg-gradient-to-r from-rose-100 to-teal-100">
            <Container>
                <div className="flex flex-col-reverse md:flex-row items-center justify-between py-20 gap-8">
                    {/* Text Content */}
                    <div className="md:w-1/2 space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                            Find Your Perfect <span className="text-rose-600">Vacation</span> Home
                        </h1>
                        <p className="text-gray-600 text-lg md:pr-8">
                            Discover and book unique accommodations around the world. From cozy apartments to luxury villas, find your perfect stay with StayVista.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                to="/signup"
                                className="bg-rose-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-rose-700 transition duration-300"
                            >
                                Get Started
                            </Link>
                            <Link
                                to="/about"
                                className="border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-800 hover:text-white transition duration-300"
                            >
                                Learn More
                            </Link>
                        </div>
                        <div className="flex gap-6 pt-4">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">1M+</h3>
                                <p className="text-gray-600">Happy Guests</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">50K+</h3>
                                <p className="text-gray-600">Properties</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">100+</h3>
                                <p className="text-gray-600">Countries</p>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="md:w-1/2">
                        <img
                            src="https://i.ibb.co/5RwmVxf/hero-image.jpg"
                            alt="Vacation Home"
                            className="rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Hero; 