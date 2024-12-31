const UserList = [
    {
        id: 1,
        name: "Rahul", 
        age: 23,
        nationality: "AUSTRALIA",
        username: "Rohit"
    },
    {
        id: 2,
        name: "Rohit", 
        age: 23,
        nationality: "INDIAN",
        username: "sonam",
        friends: [
            {
                id: 1,
                name: "Rahul", 
                age: 23,
                nationality: "AUSTRALIA",
                username: "Rohit"
            },
            {
                id: 3,
                name: "Virat", 
                age: 23,
                nationality: "BHUTAN",
                username: "wangchuk"
            },


        ]
    },
    {
        id: 3,
        name: "Virat", 
        age: 23,
        nationality: "BHUTAN",
        username: "wangchuk"
    },
    {
        id: 4,
        name: "Rohit", 
        age: 23,
        nationality: "SINGAPORE",
        username: "kamil",
        friends: [
            {
                id: 5,
                name: "Rohit", 
                age: 23,
                nationality: "GERMANY",
                username: "namgay"
            }

        ]
    },
    {
        id: 5,
        name: "Rohit", 
        age: 23,
        nationality: "GERMANY",
        username: "namgay"
    },
    {
        id: 6,
        name: "Rohit", 
        age: 23,
        nationality: "USA",
        username: "sonam"
    },
    {
        id: 7,
        name: "Rohit", 
        age: 23,
        nationality: "HUNGRY",
        username: "kapoor",
        friends: [
            {
                id: 6,
                name: "Rohit", 
                age: 23,
                nationality: "USA",
                username: "sonam"
            },

        ]
    }
];

const MovieList = [
    {
    id: 1,
    name:"john carter",
    yearOfPublication:2019,
    isInTheater: true,
    },
    {
    id: 2,
    name:"Triple X",
    yearOfPublication:2020,
    isInTheater: false
    },
    {
    id: 3,
    name:"avatar",
    yearOfPublication:2024,
    isInTheater: true
    },
     {
    id: 4,
    name:"Bhahubali",
    yearOfPublication:2004,
    isInTheater: true
    },
    {
    id: 5,
    name:"blue sea",
    yearOfPublication:2016,
    isInTheater: false
    
    

    },
    {
    id: 6,
    name:"my bnt super",
    yearOfPublication:2000,
    isInTheater: true
     },
   {
    id: 7,
    name: "my super man ",
    yearOfPublication:2008,
    isInTheater: true
   }



]


module.exports = {UserList,MovieList}