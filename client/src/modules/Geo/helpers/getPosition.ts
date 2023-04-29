export const getPosition = () : Promise<GeolocationPosition> => new Promise(resolve => {
    {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                resolve(position)
            }, undefined, {
                enableHighAccuracy: true
            })
        }
    }
})