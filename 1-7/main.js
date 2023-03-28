

class Taiyaki {

 constructor(name, tool ) {
     this.name = name;
     this.tool = tool;
 }

 nakami() {
    console.log(`中身は${this.name}です。`);
 }
}

let anko  = new Taiyaki('あんこ');
anko.nakami();

let cream = new Taiyaki('クリーム');
cream.nakami();

let cheese = new Taiyaki('チーズ');
cheese.nakami();