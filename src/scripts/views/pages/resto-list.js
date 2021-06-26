import RestoApiSource from "../../data/restoapi-source";

const RestoList = {
    async render() {
        /*console.log('render /list');*/
        return '<h2>Daftar Restaurant</h2>';
    },

    async afterRender() {
        const restos = await RestoApiSource.restoList();
        console.log(restos);
    }
};

export default RestoList;