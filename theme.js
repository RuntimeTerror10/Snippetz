function changeTheme(item) {
  let tempObj = { themeId: item.id, themeName: item.innerText };
  return tempObj;
}

export default changeTheme;
