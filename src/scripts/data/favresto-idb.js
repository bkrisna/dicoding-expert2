import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DB_NAME, DB_VER, OBJ_STORE_NAME } = CONFIG;

const dbPromise = openDB(DB_NAME, DB_VER, {
    upgrade(database) {
        database.createObjectStore(OBJ_STORE_NAME, { keyPath: 'id'});
    },
});

const FavRestoIdb = {
    async getResto(id) {
        return (await dbPromise).get(OBJ_STORE_NAME, id);
    },

    async getAllRestos() {
        return (await dbPromise).getAll(OBJ_STORE_NAME);
    },

    async putResto(resto) {
        return (await dbPromise).put(OBJ_STORE_NAME, resto);
    },

    async deleteResto(id) {
        return (await dbPromise).delete(OBJ_STORE_NAME, id);
    }
}

export default FavRestoIdb;