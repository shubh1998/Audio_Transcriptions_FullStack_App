// =============== Local Storage Helper Functions (START) ===================
export const setItemInLocalStorage = (key, value) => {
  localStorage.setItem(key, value)
}

export const getItemFromLocalStorage = (key) => {
  return localStorage.getItem(key)
}

export const clearLocalStorage = () => {
  localStorage.clear()
}

export const removeItemFromLocalStorage = (key) => {
  localStorage.removeItem(key)
}
// =============== Local Storage Helper Functions (END) ===================
