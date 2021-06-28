import CONFIG from "../globals/config";

const CacheHelper = {
    async cachingAppShell(request) {
        const cache = await this._openCache();
        cache.addAll(request);
    },

    async deleteOldCache() {
        const cacheNames = await caches.keys();
        cacheNames
            .filter((name) => name !== CONFIG.CACHE_NAME)
            .map((filteredName) => caches.delete(filteredName));
    },

    async revalidateCache(request) {
        const response = await caches.match(request);
        if (response) {
            this._fetchRequest(request);
            return response;
        }

        return this._fetchRequest(request);
    },

    async _openCache() {
        return caches.open(CONFIG.CACHE_NAME);
    },

    async _fetchRequest(request) {
        const respons = await fetch(request);
        if (!respons || respons.status !== 200) {
            return respons;
        }
        await this._addCache(request);
        return respons;
    },

    async _addCache(request) {
        const cache = await this._openCache();
        cache.add(request);
    },
};

export default CacheHelper;