import CONFIG from './config';

const API_IMAGE_ENDPOINT = {
    IMG_SMALL: (picid) => `${CONFIG.BASE_IMG_URL}/small/${picid}`,
    IMG_MEDIUM: (picid) => `${CONFIG.BASE_IMG_URL}/medium/:${picid}`,
    IMG_LARGE: (picid) => `${CONFIG.BASE_IMG_URL}/large/:${picid}`
};

export default API_IMAGE_ENDPOINT;