
import { produce } from 'immer'
import { createStore } from 'redux';


const initialState = {
    typeUser: [
        { id: '1', type: 'מנהל' },
        { id: '2', type: 'user' },
    ],

    users: [
        { id: '1', username: 'Chaim', tz: "000000000", phone: "0583241212", password: "1234", numCard: "1111222233334444", ex: "02/25", cvv: "123", typeUser: "1" },
        { id: '2', username: 'Azriel', tz: "111111111", phone: "0583249584", password: "5678", numCard: "2222111133334444", ex: "01/9", cvv: "596", typeUser: "2" },
        { id: '3', username: 'Avraham', tz: "222222222", phone: "0583240231", password: "9123", numCard: "3333111122224444", ex: "04/28", cvv: "154", typeUser: "2" },
        { id: '4', username: 'Yossi', tz: "333333333", phone: "0583246451", password: "4567", numCard: "4444111122223333", ex: "03/26", cvv: "756", typeUser: "2" }
    ],

    currentUser: {},

    typeCar: [
        { id: 1, teur: 'משפחתי' },
        { id: 2, teur: 'בימבה' },
        { id: 3, teur: 'פרטי' },
        { id: 4, teur: 'מנהלים' },
        { id: 5, teur: 'סטיישן' },
        { id: 6, teur: 'מסחרי' },
    ],
    degem: [
        { id: 1, company: 'Tayuta', model: 'אברכים', typeCar: 1 },
        { id: 2, company: 'Tesler', model: 'מרוד', typeCar: 2 },
        { id: 3, company: 'Kia', model: 'גביר', typeCar: 3 },
        { id: 3, company: 'Yundy', model: 'עני', typeCar: 4 },
        { id: 3, company: 'Masda', model: 'בינוני', typeCar: 5 },
        { id: 3, company: 'Mrtzedes', model: 'סטאנדרט', typeCar: 6 },

    ],

    typeToDrive: [
        { id: 1, type: 'petrull', price: 9 },
        { id: 2, type: 'baterry', price: 6 },
        { id: 3, type: 'gaz', price: 12 },
        { id: 4, type: 'electrisity', price: 8 },
        { id: 5, type: 'hibridy', price: 11 }
    ],


    car: [
        {
            id: 1, numLisens: '5934', degem: 1, numSits: '5', pic: 'pic1', year: '2020', typeToDrive: 1, priceForHaer: 20,
            needPerKm: '7', umountPetrul: '51', street: 'sorotzkin', city: 'בני ברק', uvadebul: false
        },
        {
            id: 2, numLisens: '9624', degem: 2, numSits: '7', pic: 'pic2', year: '2021', typeToDrive: 5, priceForHaer: 21,
            needPerKm: '9', umountPetrul: '22', street: 'Tzafririm', city: 'בני ברק', uvadebul: true
        },
        {
            id: 3, numLisens: '2645', degem: 3, numSits: '9', pic: 'pic3', year: '2018', typeToDrive: 3, priceForHaer: 17,
            needPerKm: '6', umountPetrul: '90', street: 'ungvard', city: 'jerusalem', uvadebul: false
        },
        {
            id: 4, numLisens: '6524', degem: 2, numSits: '5', pic: 'pic4', year: '2017', typeToDrive: 4, priceForHaer: 31,
            needPerKm: '8', umountPetrul: '72', street: 'rumama', city: 'צפת', uvadebul: true
        },
        {
            id: 5, numLisens: '9534', degem: 3, numSits: '14', pic: 'pic5', year: '2023', typeToDrive: 2, priceForHaer: 56,
            needPerKm: '12', umountPetrul: '90', street: 'shamgar', city: 'jerusalem', uvadebul: false
        },
        {
            id: 6, numLisens: '5934', degem: 1, numSits: '5', pic: 'pic1', year: '2020', typeToDrive: 1, priceForHaer: 20,
            needPerKm: '7', umountPetrul: '51', street: 'sorotzkin', city: 'בני ברק', uvadebul: true
        },
        {
            id: 7, numLisens: '9624', degem: 2, numSits: '7', pic: 'pic2', year: '2021', typeToDrive: 5, priceForHaer: 21,
            needPerKm: '9', umountPetrul: '22', street: 'Tzafririm', city: 'בני ברק', uvadebul: false
        },
        {
            id: 8, numLisens: '2645', degem: 3, numSits: '9', pic: 'pic3', year: '2018', typeToDrive: 3, priceForHaer: 17,
            needPerKm: '6', umountPetrul: '90', street: 'ungvard', city: 'jerusalem', uvadebul: true
        },
        {
            id: 9, numLisens: '6524', degem: 2, numSits: '5', pic: 'pic4', year: '2017', typeToDrive: 4, priceForHaer: 31,
            needPerKm: '8', umountPetrul: '72', street: 'rumama', city: 'צפת', uvadebul: false
        },
        {
            id: 10, numLisens: '9534', degem: 3, numSits: '14', pic: 'pic5', year: '2023', typeToDrive: 2, priceForHaer: 56,
            needPerKm: '12', umountPetrul: '90', street: 'shamgar', city: 'jerusalem', uvadebul: true
        },
        {
            id: 11, numLisens: '5934', degem: 1, numSits: '5', pic: 'pic1', year: '2020', typeToDrive: 1, priceForHaer: 20,
            needPerKm: '7', umountPetrul: '51', street: 'sorotzkin', city: 'בני ברק', uvadebul: false
        },
        {
            id: 12, numLisens: '9624', degem: 2, numSits: '7', pic: 'pic2', year: '2021', typeToDrive: 5, priceForHaer: 21,
            needPerKm: '9', umountPetrul: '22', street: 'Tzafririm', city: 'בני ברק', uvadebul: true
        },
        {
            id: 13, numLisens: '2645', degem: 3, numSits: '9', pic: 'pic3', year: '2018', typeToDrive: 3, priceForHaer: 17,
            needPerKm: '6', umountPetrul: '90', street: 'ungvard', city: 'jerusalem', uvadebul: false
        },
        {
            id: 14, numLisens: '6524', degem: 2, numSits: '5', pic: 'pic4', year: '2017', typeToDrive: 4, priceForHaer: 31,
            needPerKm: '8', umountPetrul: '72', street: 'rumama', city: 'צפת', uvadebul: true
        },
        {
            id: 15, numLisens: '9534', degem: 3, numSits: '14', pic: 'pic5', year: '2023', typeToDrive: 2, priceForHaer: 56,
            needPerKm: '12', umountPetrul: '90', street: 'shamgar', city: 'jerusalem', uvadebul: false
        },
        {
            id: 16, numLisens: '5934', degem: 1, numSits: '5', pic: 'pic1', year: '2020', typeToDrive: 1, priceForHaer: 20,
            needPerKm: '7', umountPetrul: '51', street: 'sorotzkin', city: 'בני ברק', uvadebul: true
        },
        {
            id: 17, numLisens: '9624', degem: 2, numSits: '7', pic: 'pic2', year: '2021', typeToDrive: 5, priceForHaer: 21,
            needPerKm: '9', umountPetrul: '22', street: 'Tzafririm', city: 'בני ברק', uvadebul: false
        },
        {
            id: 18, numLisens: '2645', degem: 3, numSits: '9', pic: 'pic3', year: '2018', typeToDrive: 3, priceForHaer: 17,
            needPerKm: '6', umountPetrul: '90', street: 'ungvard', city: 'jerusalem', uvadebul: true
        },
        {
            id: 19, numLisens: '6524', degem: 2, numSits: '5', pic: 'pic4', year: '2017', typeToDrive: 4, priceForHaer: 31,
            needPerKm: '8', umountPetrul: '72', street: 'rumama', city: 'צפת', uvadebul: false
        },
        {
            id: 20, numLisens: '9534', degem: 3, numSits: '14', pic: 'pic5', year: '2023', typeToDrive: 2, priceForHaer: 56,
            needPerKm: '12', umountPetrul: '90', street: 'shamgar', city: 'jerusalem', uvadebul: true
        },
        {
            id: 21, numLisens: '5934', degem: 1, numSits: '5', pic: 'pic1', year: '2020', typeToDrive: 1, priceForHaer: 20,
            needPerKm: '7', umountPetrul: '51', street: 'sorotzkin', city: 'בני ברק', uvadebul: false
        },
        {
            id: 22, numLisens: '9624', degem: 2, numSits: '7', pic: 'pic2', year: '2021', typeToDrive: 5, priceForHaer: 21,
            needPerKm: '9', umountPetrul: '22', street: 'Tzafririm', city: 'בני ברק', uvadebul: true
        },
        {
            id: 23, numLisens: '2645', degem: 3, numSits: '9', pic: 'pic3', year: '2018', typeToDrive: 3, priceForHaer: 17,
            needPerKm: '6', umountPetrul: '90', street: 'ungvard', city: 'jerusalem', uvadebul: false
        },
        {
            id: 24, numLisens: '6524', degem: 2, numSits: '5', pic: 'pic4', year: '2017', typeToDrive: 4, priceForHaer: 31,
            needPerKm: '8', umountPetrul: '72', street: 'rumama', city: 'צפת', uvadebul: true
        },
        {
            id: 25, numLisens: '9534', degem: 3, numSits: '14', pic: 'pic5', year: '2023', typeToDrive: 2, priceForHaer: 56,
            needPerKm: '12', umountPetrul: '90', street: 'shamgar', city: 'jerusalem', uvadebul: false
        }
    ],

    currentCar: {},
    
    rent: [
        { id: 4726, code: '1', codeCar: 1, date: '01/01/2023', time: "15:51" },
        { id: 4727, code: '2', codeCar: 3, date: '01/01/2023', time: "15:51" },
        { id: 4728, code: '3', codeCar: 5, date: '01/01/2023', time: "15:51" },
        { id: 4729, code: '1', codeCar: 7, date: '01/01/2023', time: "15:51" },
        { id: 4730, code: '2', codeCar: 9, date: '01/01/2023', time: "15:51" },
        { id: 4731, code: '3', codeCar: 11, date: '01/01/2023', time: "15:51" },
        { id: 4732, code: '1', codeCar: 13, date: '01/01/2023', time: "15:51" },
        { id: 4733, code: '2', codeCar: 15, date: '01/01/2023', time: "15:51" },
        { id: 4734, code: '3', codeCar: 17, date: '01/01/2023', time: "15:51" },
        { id: 4735, code: '1', codeCar: 19, date: '01/01/2023', time: "15:51" },
        { id: 4736, code: '2', codeCar: 21, date: '01/01/2023', time: "15:51" },
    ],

    back: [
        { id: '1111', codeRant: 5428, dateBack: '02/01/2023', timeBack: '10:34', left: '5', pay: '167', payed: true },
        { id: '2222', codeRant: 4726, dateBack: '22/06/2024', timeBack: '12:34', left: '15', pay: '260', payed: true },
        { id: '3333', codeRant: 8888, dateBack: '02/01/2023', timeBack: '11:34', left: '20', pay: '56', payed: true },
        { id: '4444', codeRant: 4727, dateBack: '10/09/2024', timeBack: '09:34', left: '18', pay: '200', payed: true },
        { id: '5555', codeRant: 4740, dateBack: '02/01/2024', timeBack: '05:34', left: '20', pay: '350', payed: true },
        { id: '6666', codeRant: 2222, dateBack: '02/03/2024', timeBack: '12:34', left: '17', pay: '190', payed: true },
        { id: '7777', codeRant: 4731, dateBack: '15/02/2023', timeBack: '10:34', left: '14', pay: '230', payed: true },
        { id: '8888', codeRant: 4748, dateBack: '17/01/2023', timeBack: '10:34', left: '27', pay: '16', payed: true },
    ]
}

const reducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            state.currentUser = action.payload
            break;
        case 'ADD_USER':
            state.users.push(action.payload);
            break;
        case 'update_Users':
            state.users[action.payloed.index] = action.payload.users
            return;
        case 'remove_Users':
            state.users.splice(action.payload, 1)
            return;
        case 'SET_CAR':
            state.car[action.payload.index] = action.payload.car
            break;
        case 'SET_TYPE':
            state.typeToDrive[action.payload.index] = action.payload.typeToDrive
            break;
        case 'REMOVE_CAR':
            state.car.splice(action.payload, 1)
            return;
        case 'add_Rent':
            state.rent.push(action.payload)
            return;
        case 'ADD_BACK':
            state.back.push(action.payload)
            return;
        case 'ADD_CAR':
            state.car.push(action.payload)
            return;
        case 'ADD_DEGEM':
            state.degem.push(action.payload)
            return;
        default:
            break;
    }
}, initialState)

const myStore = createStore(reducer)
window.store = myStore
export default myStore