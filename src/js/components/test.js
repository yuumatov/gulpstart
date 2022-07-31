for (let i = 0; i < window.localStorage.length; i++) {
    const element = window.localStorage.getItem(localStorage.key(i));
    console.log(element);
}