const deleteCookie = (name) => {
  const cookieVal = Cookies.get(name);
  if (cookieVal === undefined) {
    alert("No Cookie Found!");
    return;
  }
  localStorage.setItem(name, cookieVal);
  Cookies.remove(name, { path: "", domain: "127.0.0.1" });
};
const addCookie = (name) => {
  const cookieVal = localStorage.getItem(name);
  if (cookieVal === null) {
    alert("No Data Found!");
    return;
  }
  localStorage.removeItem(name);
  Cookies.set(name, cookieVal, { expires: 7, path: "" });
};

const inputElem = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
  const cookieName = inputElem.value;
  addCookie(cookieName);
});
const deleteBtn = document.getElementById("deleteBtn");
deleteBtn.addEventListener("click", () => {
  const cookieName = inputElem.value;
  deleteCookie(cookieName);
});
