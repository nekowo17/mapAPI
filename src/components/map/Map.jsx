import { load } from '@2gis/mapgl'
import { MapWrapper } from "./MapWrapper" 
import React from "react";

export const Map = () => {
    React.useEffect(() => {
        let map;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('container', {
                center: [55.31878, 25.23584],
                zoom: 13,
                key: 'Your API access key',
            });
        });

        // Destroy the map on unmounted
        return () => map && map.destroy();
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <MapWrapper />
        </div>
        );
}; 
