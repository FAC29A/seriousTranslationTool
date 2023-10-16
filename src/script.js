const dummyContent = "stuff";

const result1Container = document.getElementById("translation1Container");
const result2Container = document.getElementById("translation2Container");

function pullFromAPI(){
  
}

function pushToPage(content, container) {
  const resultText = document.createElement(`p`);
  resultText.className = "dummyClass";

  resultText.append(content);

  container.append(resultText);
}

pushToPage(dummyContent, result1Container);
pushToPage(dummyContent, result2Container);