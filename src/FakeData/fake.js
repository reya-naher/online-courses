const data = [
  {
    "id": 1,
    "name": "Full Stack Web Developer",
    "instructor": "Maximilian Schwarzmüller",
    "img":"https://i.imgur.com/Gs5d6cs.jpg",
    "alt":"../../images/1.jpg",
    "price": 1338.99,
    "student":93338,
    "badge": "",
    "level": "Beginner",
    "time": "4 months 10hours/week",
    "rating":"4.9",
    "related":{
      "topic1":"Developer",
      "topic2":"fullstack"
    },
    "category":"web"
  },
  {
    "id": 2,
    "name": "The Complete JavaScript",
    "instructor": "Jonas Schmedtman",
    "img":"https://img.techpowerup.org/200827/2903.png",
    "alt":"../../images/2.png",
    "price": 134.99,
    "student":81256,
    "badge": "Bestseller",
    "level": "Beginner",
    "time": "3 months 10hours/week",
    "rating":"4.6",
    "related":{
      "topic1":"javascript",
      "topic2":"web"
    },
    "category":"web"
  },
  {
    "id": 3,
    "name": "Python Programming",
    "instructor": "Jean-Paul Roberts",
    "img":"https://img.techpowerup.org/200827/3783.jpg",
    "alt":"../../images/3.jpg",
    "price": 134.99,
    "student":55628,
    "badge": "Bestseller",
    "level": "Beginner",
    "time": "2 months 8hours/week",
    "rating":"4.5",
    "related":{
      "topic1":"python",
      "topic2":"programming"
    },
    "category":"programming"
  },
  {
    "id": 4,
    "name": "React with Redux",
    "instructor": "Stephen Grider",
    "img":"https://img.techpowerup.org/200827/4697.jpg",
    "alt":"../../images/4.jpg",
    "price": 135.99,
    "student":9378,
    "badge": "",
    "level": "Intermediate",
    "time": "2 months 10hours/week",
    "rating":"4.6",
    "related":{
      "topic1":"react",
      "topic2":"redux"
    },
    "category":"library"
  },  
  {
    "id": 5,
    "name": "Node.js Developer",
    "instructor": "Rob Percival",
    "img":"https://img.techpowerup.org/200827/5780.jpg",
    "alt":"../../images/5.jpg",
    "price": 86.99,
    "student":5638,
    "badge": "Bestseller",
    "level": "Beginner",
    "time": "2 months 10hours/week",
    "rating":"4.2",
    "related":{
      "topic1":"node.js",
      "topic2":"developer"
    },
    "category":"node"
  },  
  {
    "id": 6,
    "name": "Artificial Intelligence",
    "instructor": "Kiril Eremenko",
    "img":"https://img.techpowerup.org/200827/6603.png",
    "alt":"../../images/6.png",
    "price": 136.99,
    "student":9338,
    "badge": "Bestseller",
    "level": "Advanced",
    "time": "4 months 10hours/week",
    "rating":"4.5",
    "related":{
      "topic1":"artificial",
      "topic2":"intelligence"
    },
    "category":"artificial"
  },  
  {
    "id": 7,
    "name": "Machine Learning",
    "instructor": "Frank Kane",
    "img":"https://img.techpowerup.org/200827/7.jpg",
    "alt":"../../images/7.jpg",
    "price": 137.99,
    "student":22134,
    "badge": "",
    "level": "Intermediate",
    "time": "3 months 10hours/week",
    "rating":"4.1",
    "related":{
      "topic1":"machine",
      "topic2":"learning"
    },
    "category":"artificial"
  },  
  {
    "id": 8,
    "name": "Angular & Node.js",
    "instructor": "Maximilian Schwarzmüller",
    "img":"https://img.techpowerup.org/200827/8.jpg",
    "alt":"../../images/8.jpg",
    "price": 134.99,
    "student":33123,
    "badge": "Bestseller",
    "level": "Beginner",
    "time": "4 months 10hours/week",
    "rating":"4.7",
    "related":{
      "topic1":"angular",
      "topic2":"node.js"
    },
    "category":"node"
  },  
  {
    "id": 9,
    "name": "ASP.NET MVC 5 Course",
    "instructor": "Mosh Hamedani",
    "img":"https://img.techpowerup.org/200827/9.jpg",
    "alt":"../../images/9.jpg",
    "price": 167.99,
    "student":23987,
    "badge": "Bestseller",
    "level": "Advanced",
    "time": "2 months 10hours/week",
    "rating":"4.9",
    "related":{
      "topic1":"developer",
      "topic2":"asp.net"
    },
    "category":"artificialBasic"
  },  
  {
    "id": 10,
    "name": "Ruby on Rails",
    "instructor": "Rob Percival",
    "img":"https://img.techpowerup.org/200827/10.jpg",
    "alt":"../../images/10.jpg",
    "price": 122.99,
    "student":12346,
    "badge": "",
    "level": "Advanced",
    "time": "2 months 10hours/week",
    "rating":"4.0",
    "related":{
      "topic1":"developer",
      "topic2":"ruby"
    },
    "category":"library"
  },  
  {
    "id": 11,
    "name": "Android N Developer",
    "instructor": "Marc Stock",
    "img":"https://img.techpowerup.org/200827/11.jpg",
    "alt":"../../images/11.jpg",
    "price": 133.99,
    "student":26532,
    "badge": "Bestseller",
    "level": "Beginner",
    "time": "4 months 10hours/week",
    "rating":"4.4",
    "related":{
      "topic1":"android",
      "topic2":"developer"
    },
    "category":"android"
  },  
  {
    "id": 12,
    "name": "Docker and Kubernetes",
    "instructor": "Stephen Grider",
    "img":"https://img.techpowerup.org/200827/12612.jpg",
    "alt":"../../images/12.jpg",
    "price": 99.99,
    "student":30987,
    "badge": "",
    "level": "Intermediate",
    "time": "3 months 10hours/week",
    "rating":"4.3",
    "related":{
      "topic1":"docker",
      "topic2":"intelligence"
    },
    "category":"artificialBasic"
  },  
  {
    "id": 13,
    "name": "Advanced css and Sass",
    "instructor": "Jonas Schmedtmann",
    "img":"https://img.techpowerup.org/200827/13.jpg",
    "alt":"../../images/13.jpg",
    "price": 130.98,
    "student":23456,
    "badge": "",
    "level": "Advanced",
    "time": "1 months 13hours/week",
    "rating":"4.2",
    "related":{
      "topic1":"advanced",
      "topic2":"intelligence"
    },
    "category":"css"
  },  
  {
    "id": 14,
    "name": "Flutter & Dart",
    "instructor": "Kiril Eremenko",
    "img":"https://img.techpowerup.org/200827/15.jpg",
    "alt":"../../images/14.jpg",
    "price": 134.99,
    "student":45987,
    "badge": "Bestseller",
    "level": "Beginner",
    "time": "4 months 10hours/week",
    "rating":"4.9",
    "related":{
      "topic1":"flutter",
      "topic2":"dart"
  },
  "category":"android"
},  
  {
    "id": 15,
    "name": "PHP for Beginners",
    "instructor": "Maximilian Schwarzmüller",
    "img":"https://img.techpowerup.org/200827/14.jpg",
    "alt":"../../images/15.jpg",
    "price": 131.99,
    "student":19338,
    "badge": "",
    "level": "Beginner",
    "time": "4 months 10hours/week",
    "rating":"4.0",
    "related":{
      "topic1":"php",
      "topic2":"backend"
    },
    "category":"programming"
  },
  {
    "id": 16,
    "name": "Css Zero to Hero",
    "instructor": "Jonas Schmedtmann",
    "img":"https://i.imgur.com/NdaLa1m.jpg",
    "alt":"../../images/13.jpg",
    "price": 130.98,
    "student":23456,
    "badge": "",
    "level": "Beginner",
    "time": "1 months 13hours/week",
    "rating":"4.2",
    "related":{
      "topic1":"css ",
      "topic2":" scss"
    },
    "category":"css"
  }
]
export default data;