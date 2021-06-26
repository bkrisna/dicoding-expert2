import API_ENDPOINT from '../globals/api-endpoint';

class RestoApiSource {
    static async restoList() {
        const response = await fetch(API_ENDPOINT.RESTO_LIST);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async detailResto(id) {
        const response = await fetch(API_ENDPOINT.RESTO_DETAIL(id));
        return response.json();
    }
}

export default RestoApiSource;