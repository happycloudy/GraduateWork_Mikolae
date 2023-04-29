export const fetchGeoDecode = async (position: GeolocationPosition) => {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
    // const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${55.85867427052914}&lon=${37.41583062050809}`

    const res = await fetch(url)

    return res.json()
}
