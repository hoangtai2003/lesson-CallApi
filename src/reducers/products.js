var initialState = [
    {
        id: 1, 
        name: "Iphone 6 plus",
        price: 500,
        status: true
    },
    {
        id: 2, 
        name: "Iphone 14 pro",
        price: 700,
        status: false
    },
    {
        id: 3, 
        name: "Iphone 15 pro max",
        price: 500,
        status: true
    },
];
const products = (state = initialState, action) => {
    switch(action.type){
        default: return [...state]
    }
}
export default products;