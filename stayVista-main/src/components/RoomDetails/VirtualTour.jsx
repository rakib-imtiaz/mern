import { Pannellum } from 'pannellum-react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import defaultPanorama from '../../assets/images/pannellum_1.jpg';

const VirtualTour = ({ isOpen, onClose, tourImage }) => {
    const [imageError, setImageError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    if (!isOpen) return null;

    const handleImageError = () => {
        console.log('360 image failed to load');
        setImageError(true);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative w-full h-full max-w-4xl max-h-[80vh] mx-4">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div className="w-full h-full">
                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500"></div>
                        </div>
                    )}
                    {imageError ? (
                        <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">
                            <p className="text-gray-500 text-center">
                                360° view not available.<br />
                                Please try again later.
                            </p>
                        </div>
                    ) : (
                        <Pannellum
                            width="100%"
                            height="100%"
                            image={tourImage || defaultPanorama}
                            pitch={10}
                            yaw={180}
                            hfov={110}
                            autoLoad
                            onLoad={() => {
                                console.log('panorama loaded successfully');
                                setIsLoading(false);
                                setImageError(false);
                            }}
                            onError={handleImageError}
                            hotspotDebug={false}
                        />
                    )}
                </div>
            </div>
            {/* Instructions Overlay */}
            {!imageError && !isLoading && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 px-4 py-2 rounded-lg shadow-lg text-sm text-gray-700">
                    Drag to look around • Scroll to zoom
                </div>
            )}
        </div>
    );
};

VirtualTour.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    tourImage: PropTypes.string
};

export default VirtualTour; 