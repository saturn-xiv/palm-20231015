document.onload = function () {
  const elements = document.getElementsByClassName("markdown-content");
  elements.forEach((item) => {
    const text = item.textContent;
    item.innerHTML = marked.parse(text);
  });
};
