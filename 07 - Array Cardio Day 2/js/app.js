document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello World");

  // ## Array Cardio Day 2
  const people = [
    { name: "Wes", year: 1988 },
    { name: "Kait", year: 1986 },
    { name: "Irv", year: 1970 },
    { name: "Lux", year: 2015 }
  ];
  const comments = [
    { text: "Love this!", id: 523423 },
    { text: "Super good", id: 823423 },
    { text: "You are the best", id: 2039842 },
    { text: "Ramen is my fav food ever", id: 123523 },
    { text: "Nice Nice Nice!", id: 542328 }
  ];


  
  // Some and Every Checks
  // Array.prototype.some()  is at least one person 19 or older?

  const adult = people.some(person => {
    const currentYear = new Date();
    if (currentYear.getFullYear() - person.year >= 19) {
      return true;
    }
  });
  console.log({adult});

  
  // Array.prototype.every() // is everyone 19 or older?

  const everyAdult = people.some(person => {
    const currentYear = new Date();
    if (currentYear.getFullYear() - person.year == 19) {
      return true;
    }
  });
  console.log({everyAdult});


  // Array.prototype.find()
 // find the comment with the ID of 823423

  const currentComment = comments.find(comment => {
      if (comment.id == 823423){
          return true;
      } 
  });

  console.log(currentComment);
  
  
  // Array.prototype.findIndex()
  // delete the comment with the ID of 823423

  const nextComment = comments.findIndex((comment) => {
    if (comment.id == 823423){
        return comment.id
    };
  });
  console.log(nextComment);
  
  comments.splice(nextComment, 1);

  console.log(comments);
  
});
