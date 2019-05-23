export default class BookstoreService {

    data = [
        {
            id: 1,
            title: 'Production-React Microservices',
            author: 'Susan J. Fowler',
            price: 32,
            coverImage: 'https://wordery.com/jackets/1a4750f4/m/production-ready-microservices-susan-fowler-9781491965979.jpg'
        }, {
            id: 2,
            title: 'Release It',
            author: 'Michael T. Nygard',
            price: 45,
            coverImage: 'https://wordery.com/jackets/d4fcb707/m/release-it-michael-t-nygard-9780978739218.jpg'
        }
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data);
            }, 700);
        });
    }
}
