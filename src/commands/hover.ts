import { getConfig } from "../helpers/fileconfig";


export const activeFilename = () => {
    return setHover();
}

const setHover = async () => {
    try {
        const res = getConfig();
        console.log(res);
    } catch (error) {
        console.error(error);
    }
}
