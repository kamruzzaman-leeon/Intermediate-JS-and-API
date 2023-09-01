const user = {id:1, name: 'Gorib Aamir', job: 'actor'};
//Javascript Object Notation(JSON)
const stringfied =JSON.stringify(user);

console.log(user);
console.log(stringfied);

/*
{ id: 1, name: 'Gorib Aamir', job: 'actor' }
{"id":1,"name":"Gorib Aamir","job":"actor"}
*/

const shop = {
    owner: 'alia',
    address:{
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        country:'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpend:true,
    isNew:false
};

console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

const shopObj = JSON.parse(shopJSON);
console.log(shopObj);