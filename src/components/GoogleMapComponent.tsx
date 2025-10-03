'use client';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '0.75rem',
};

const defaultCenter = {
    lat: 28.6139, // Delhi NSP
    lng: 77.2090,
};

interface GoogleMapProps {
    center?: { lat: number; lng: number };
    zoom?: number;
    className?: string;
}

export default function GoogleMapComponent({
    center = defaultCenter,
    zoom = 14,
    className = '',
}: GoogleMapProps) {
    return (
        <div className={`overflow-hidden rounded-xl ${className}`}>
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={zoom}
                    options={{
                        disableDefaultUI: true,
                        zoomControl: true,
                        styles: [
                            {
                                featureType: 'poi',
                                stylers: [{ visibility: 'off' }],
                            },
                        ],
                    }}
                >
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        </div>
    );
}
