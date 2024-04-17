class View {
  _parentEl = document.querySelector(".quote__data");
  _generateButton = document.querySelector('.quote__btn')
  _data;
  render(data) {
    this._data = data;
    const markUp = this._generateMarkup(this._data);

    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markUp);

  }
  _clear() {
    this._parentEl.innerHTML = "";
  }
  addHandlerClick(handler){
    this._generateButton.addEventListener("click", handler)    
  }
  renderSpinner() {
    const markUp = `
      <div class="spinner">
        <svg>
          <use href="css/icons.svg#icon-loader"></use>
        </svg>
      </div>
    `;
    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markUp);
  }
  // _generateMarkup(data) {
  //   this._clear()
  //   data.forEach(el => {
  //     const html =`
  //     <a href="#${el._id}" class="quote__item">
  //       <h1 class="quote__display--title">
  //         ${el.quoteText.slice(0, 50)}...
  //       </h1>
  //       <span class="quote__item--author"> ${el.quoteAuthor} </span>
  //     </a>
  //   `;
  //   this._parentEl.insertAdjacentHTML("afterbegin", html)
  //   return html
  //   })
   
  // }

  _generateMarkup(data) {
    console.log(data);
    return `
      <div class="quote__data">
        <div class="quote__message">
          ${data.quoteText}
        </div>
        <h2 class="quote__author">
          <span class="quote__author--info">Author:</span>
          <span class="quote__author--name">-${data.quoteAuthor}</span>
        </h2>
        <span class="quote__page">
          <span>Genre:</span>
          <p class="number__page">${data.quoteGenre}</p>
        </span>
        <div class="quote__reaction">
          <span class="quote__like">
            <ion-icon
              class="like__icon"
              name="heart-outline"
            ></ion-icon>
            <span>Like</span>
          </span>
          <span class="quote__save">
            <ion-icon class="save__icon" name="save-outline"></ion-icon>
            <span>Save</span>
          </span>
        </div>
      </div>
    `;
  }
}

export default new View();
