//----------------users-------------
export const setCurrentUser = (user) => {
    return { type: 'SET_CURRENT_USER', payload: user }
}

export const addUser = (user) => {
    return { type: 'ADD_USER', payload: user }
}

export const updateUsers = (users, index) => {
    return { type: 'update_Users', payload: {users, index} }
}

//----------------typeCar-------------
export const addTypeCar = (typeCar) => {
    return { type: 'add_TypeCar', payload: typeCar }
}

export const updateTypeCar = (typeCar, index) => {
    return { type: 'update_TypeCar', payload: {typeCar, index} }
}


export const removeTypeCar = (typeCar) => {
    return { type: 'remove_TypeCar', payload: typeCar }
}

//----------------car-------------
export const addCar = (car) => {
    return { type: 'ADD_CAR', payload: car }
}

export const setCar = (car,index) => {
    return { type: 'SET_CAR', payload: {car, index} }
}

export const setType = (typeToDrive,index) => {
    return { type: 'SET_TYPE', payload: {typeToDrive, index} }
}

export const removeCar = (index) => {
    return { type: 'REMOVE_CAR', payload: index }
}

//----------------rent-------------
export const addRent = (rent) => {
    return { type: 'add_Rent', payload: rent }
}

export const updateRent = (rent, index) => {
    return { type: 'update_Rent', payload: {rent, index} }
}

//----------------back-------------
export const addBack = (back) => {
    return { type: 'ADD_BACK', payload: back }
}

export const addDegem = (degem) => {
    return { type: 'ADD_DEGEM', payload: degem }
}
