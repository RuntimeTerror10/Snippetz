function changeLanguage(item) {
  let tempObj = { langId: item.id, langName: item.innerText };
  return tempObj;
}

export default changeLanguage;
