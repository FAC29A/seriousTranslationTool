const dummyContent = "stuff";
const shakespeareURL = ("https://api.funtranslations.com/translate/shakespeare.json")


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





async function retrieveResult (method, url, contentType, requestBody) {
  const response = await fetch(`${url}`, {
  method: `${method}`,
  headers: {
    // "Content-Type": `${contentType}`
    "Host": "api.funtranslations.com"
  },
  body: JSON.stringify(`${requestBody}`)
 })
  
 const resultObject = await response.json();
 const resultText = resultObject.contents.translated;
  // .then(response => response.json())
  // .then(let result = (response.contents.translated))
  return resultText;
}

pushToPage(retrieveResult("POST", shakespeareURL, "text", "this is an example translation"), result1Container);
pushToPage(dummyContent, result2Container);