// click on Fox Hollow button and all the information for that course will appear on the card



// click on Thanksgiving Point button and all the information for that course will appear on the card



// click on Spanish Oaks button and all the information for that course will appear on the card




//class CourseSearch {
  //constructor(name, id) {
    
  //}
  let api = fetch("https://golf-courses-api.herokuapp.com/courses/18300")
    .then (data => data.json().then(data => {
        console.log(data.data.status);
    }));
  