import {getPosition} from "./getPosition";
import {fetchGeoDecode} from "./fetchGeoDecode";

const osm_id = 2386979

export const isValidAddress = async () => {
    const position = await getPosition()
    const location = await fetchGeoDecode(position)
    return location.osm_id === osm_id
}