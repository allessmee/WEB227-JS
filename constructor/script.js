function User(pName , pAge, pJob){
    this.name = pName;
    this.age = pAge;
    this.job = pJob;
    this.who = function(){
      document.write("Я " + this.name + ", мне " + this.age + " лет." + "Я работаю " + this.job + "</br>" + "</br>");
    }
  }
  let dm = new User("Дмитрий", 26, "Дизайнером.");
  dm.who();
  
  let st = new User("Станислав", 29, "Программистом.");
  st.who(); 
  
  let sg = new User("Сергей", 35, "Менеджером.");
  sg.who();
  