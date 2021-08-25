const getdata = async () => {
  const schar = char("darshan", "one piece", (user) =>
    setTimeout(() => {
      console.log("I am " + user.yname);

      setTimeout(() => {
        console.log("And of coure My fav anime is :- " + user.fanime);
      }, 1500);
    }, 2000)
  )("test",  (data) => {
      setTimeout(() => {
          console.log(data);
      }, 1000);
  })
};

getdata();

function char(name, favanime, arc) {
  setTimeout(() => {
    console.log("Hey....! ");
    arc({ yname: name, fanime: favanime });
  }, 1500);

  function char1(_name, arc) {
      setTimeout(() => {

          console.log("I've watched so many animes", _name);
         arc(["onepiece", "demonslayer", "fairytail"]);
      }, 4000);
  }
  return char1;
}
 