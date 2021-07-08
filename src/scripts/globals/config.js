const CONFIG = {
    KEY: '12345',
    BASE_URL: 'https://restaurant-api.dicoding.dev',
    BASE_IMG_URL: 'https://restaurant-api.dicoding.dev/images',
    CACHE_NAME: 'MyRestoCatalogue-v1',
    DB_NAME: 'resto-catalogue-database',
    DB_VER: 1,
    OBJ_STORE_NAME: 'restos',
    IMG : {
        IMG_SMALL: (picid) => `${CONFIG.BASE_IMG_URL}/small/${picid}`,
        IMG_MEDIUM: (picid) => `${CONFIG.BASE_IMG_URL}/medium/${picid}`,
        IMG_LARGE: (picid) => `${CONFIG.BASE_IMG_URL}/large/${picid}`
    }
};

export default CONFIG;