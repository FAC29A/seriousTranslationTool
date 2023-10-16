//Dummy Variables
  const dummyContent = "stuff";

//API Sources
  const host = "api.funtranslations.com";
  const shakespeare = ("https://api.funtranslations.com/translate/shakespeare.json");

//HTML Elements
  const container1 = document.getElementById("result1Box");
  const container2 = document.getElementById("result2Box");

//Functions
  //Get User Input

  //Get Stuff from API
    async function pullFromAPI(api, method, contentType, requestBody, targetDiv) {
      const response = await fetch(`${api}`, {
        method: `${method}`,
        headers: {
          "Content-Type": `${contentType}`,
          "Host": `${host}`,
        },
        body: JSON.stringify(`${requestBody}`)
      })
    
      const resultObject = await response.json();
      const resultText = resultObject.contents.translated;

      // .then(response => response.json())
      // .then(let result = (response.contents.translated))
      pushToPage(resultText, targetDiv);
    }

  //Put Stuff on Page
    async function pushToPage(content, box) {
      //Original Version: const resultText = document.createElement(`p`);
      const resultParagraph = document.createElement("p");
      resultParagraph.className = "dummyClass";

      resultParagraph.append(content);
      
      box.append(resultParagraph);
    }

//Testbed
  //Function Calls
    //Shakespeare in Result 1
      pullFromAPI(shakespeare, "POST", "text", "this is an example translation", container1);
    
    //Dummy Content in Result 2
      pushToPage(dummyContent, container2);