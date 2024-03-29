class TypeWriter {
  constructor(txtElement, words, wait) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    //current word index
    const current = this.wordIndex % this.words.length;
    //Get full text of current word
    const fullTxt = this.words[current];

    //Check if word is deleting
    if (this.isDeleting) {
      //Remove Character
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      //Add Character
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //Insert txt into element
    this.txtElement.innerHTML = `<span class="txt"> ${this.txt} </span>`;

    //Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    //If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      //Pause at word completion
      typeSpeed = this.wait;

      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      //Move to next word
      this.wordIndex++;
      //Pause before typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

//Init on DOM Load
document.addEventListener("DOMContentLoaded", init);

//Init app

function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  //init Typewriter
  new TypeWriter(txtElement, words, wait);
}
