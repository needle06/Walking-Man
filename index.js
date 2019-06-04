class Room {
  constructor() {
    this.state = {
        size: 7,
        width:700,
        height: 700,
        x: 0,
        y: 0,
        direction: 'down',
    }
    this.container = document.querySelector('.container')
    this.container.width = this.state.width;
    this.container.height = this.state.height;
    this.container.style.border = '3px solid black';

   document.addEventListener("keydown", (event) => {
        if (event.keyCode == 38) {
          this.moveUp();
        };
           
        if (event.keyCode == 39) {
          this.moveRight()
        };

        if (event.keyCode == 40) {
          this.moveDown()
        };
        
        if (event.keyCode == 37){
           this.moveLeft() 
        };
      });
  }


  moveUp() {
    if(this.state.y > 0) {
      this.state.y--;
    };
    this.state.direction = 'up';
    this.render();
  };

  moveDown() {
    if(this.state.y < this.state.size) {
      this.state.y++;
    };

    this.state.direction = 'down';
    this.render();
  };

  moveLeft() {
    if (this.state.x > 0) {
      this.state.x--;
      }
    this.state.direction = 'left';
    this.render();
  };

  moveRight() {
    if (this.state.x < this.state.size) {
      this.state.x++;
    };
    this.state.direction = 'right';
    this.render();
  };

  render() {
      this.container.innerHTML = '';
      this.createGrid();
      let cell = this.container.children[this.state.y].children[this.state.x];
      switch (this.state.direction) {
        case 'down': 
            cell.style.backgroundImage = 'url("images/1.png")';
            cell.style.backgroundRepeat = 'no-repeat';
        break;
        case 'up': 
            cell.style.backgroundImage = 'url("images/1.png")';
            cell.style.backgroundRepeat = 'no-repeat';
        break;
        case 'left': 
            cell.style.backgroundImage = 'url("images/2.png")';
            cell.style.backgroundRepeat = 'no-repeat';
            cell.style.transform = 'scaleX(-1)';
        break;
        case 'right': 
            cell.style.backgroundImage = 'url("images/2.png")';
            cell.style.backgroundRepeat = 'no-repeat';
        default: 
          console.log('incorrect direction');
      };
  };
    
  createRow() {
      let row = document.createElement('div');
      row.className = "row";
      this.container.appendChild(row);
      for (let i = 0; i <= this.state.size; i++) {
        this.createCell(row);
      }
    }
    
  createGrid() {
    for (let i = 0; i <= this.state.size; i++) {
      this.createRow();
    };
  };

 createCell(parent) {
      let cell = document.createElement('div');
      cell.classList.add("cell");
      parent.appendChild(cell);
    };
};

let room = new Room();
room.render();
