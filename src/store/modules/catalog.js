import Vue from 'vue';
export default {
	namespaced: true,
	state: {
		products: [
            {
                id_product: 1,
                title: 'Delaire Graff Rose, 2015, Cabernet Franc, Stellenbosch',
                img: '../img/wine/wine1.jpg',
                price: 15.00,
                qt: 0
            },
            {
                id_product: 2,
                title: 'Wicked Lady White Zinfandel, California, USA, 2015',
                img: '../img/wine/wine2.jpg',
                price: 12.00,
                qt: 0
            },
            {
                id_product: 3,
                title: 'Bluebell Vineyards Estates, Hindleap Rose, Sussex, England, Rest of the World',
                img: '../img/wine/wine3.jpg',
                price: 39.00,
                qt: 0
            },
            {
                id_product: 4,
                title: 'Penfolds St. Henri 2010, (Half Bottle) Shiraz, South Australia',
                img: '../img/wine/wine4.jpg',
                price: 60.00,
                qt: 0
            },
            {
                id_product: 5,
                title: 'Le Serre Nuove Dell’Ornellaia, 2014, Bolgheri',
                img: '../img/wine/wine5.jpg',
                price: 56.00,
                qt: 0
            },
            {
                id_product: 6,
                title: 'Finca Sophenia Reserve MAGNUM 2014, Malbec, Mendoza',
                img: '../img/wine/wine6.jpg',
                price: 47.50,
                qt: 0
            },
            {
                id_product: 7,
                title: 'Litmus, Element 20, Chardonnay/Bacchus, Sussex, England',
                img: '../img/wine/wine7.jpg',
                price: 27.00,
                qt: 0
            },
            {
                id_product: 8,
                title: 'Bruno Giacosa, Roero Arneis, Piedmont, 2016, Italy',
                img: '../img/wine/wine8.jpg',
                price: 38.00,
                qt: 0
            },
        ]
        },
	getters: {
		products(state){
			return state.products;
		}
	}
};