import Beebread from '../assets/products/beebread.png';
import Candle from '../assets/products/candle.png';
import Gift from '../assets/products/gift.png';
import Honey from '../assets/products/honey.png';

const data = {
    products:[
        {
            _id: '1',
            name: 'Bičių duonelė',
            image: Beebread,
            size: ['S', 'M', 'L'],
            price: '4.00',
            description: 'Sveika bičių duonelė',
        },
        {
            _id: '2',
            name: 'Bičių vaško žvakė',
            image: Candle,
            size: ['S', 'M', 'L'],
            price: '3.00',
            description: 'Graži žvakė',
        },
        {
            _id: '3',
            name: 'Dovanėlė',
            image: Gift,
            size: ['S', 'M', 'L'],
            price: '10.00',
            description: 'Graži dovanėlė',
        },
        {
            _id: '4',
            name: 'Medus',
            image: Honey,
            size: ['S', 'M', 'L'],
            price: '6.00',
            description: 'Sveikas medus',
        },
    ]
}

export default data;