class View{
  showNumber(num: number){
    let el = document.getElementById("showResult");
    el.innerHTML = String(num);//String
  }
}

class Model{
  view = new View();
  numb: number;
  calculate(x: number, y: number){
    this.numb = x+y;
    let result = this.numb;
    this.view.showNumber(result);
  }
}


class Controller{
  model = new Model();
  handleClick(){ //функція зворотнього
      this.model.calculate(45,5);
  }
}

class App{
  controller = new Controller();
  init(){
      this.event();
  }

  event(){
    let element = document.getElementById("calcButton");
    element.onclick = this.controller.handleClick;
  }
}


let app = new App();
app.init();