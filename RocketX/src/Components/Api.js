import axios from "axios";

const api_key = "0f3f4e2a-8192-4ccd-bce4-38fb30ac153b";

export const fetchSwapData = async () => {
    try {
        const response = await axios.get(
            `https://api.rocketx.exchange/v1/tokens`,
            {
                params: {
                    chainId: "0x1",
                },
                headers: {
                    'x-api-key': api_key,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        );
        return response;
    } catch (err) {
        console.error("Failed to fetch tokens", err);
    }
}

export const getConfig = async () => {
    try {
        const response = await axios.get(
            `https://api.rocketx.exchange/v1/configs`,
            {
                headers: {
                    'x-api-key': api_key,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        );
        return response;
    } catch (err) {
        console.error("Failed to fetch config", err);
    }
}