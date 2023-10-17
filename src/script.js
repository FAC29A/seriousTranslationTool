//API Sources
  const host = "api.funtranslations.com";
  const shakespeare = ("https://api.funtranslations.com/translate/shakespeare?=");

//HTML Elements
  const container1 = document.getElementById("result1Box");
  const container2 = document.getElementById("result2Box");

//Functions
  //Get User Input

  //Get Stuff from API
    async function pullFromAPI(api, method, contentType, requestBody, targetDiv) {
      const url = api + requestBody;
      console.log(url);
      const translatedText = fetch((url), {
        method: method,
        headers: {
          "Content-Type": contentType,
          "Host": host,
        },
        body: JSON.stringify(requestBody)
      })
      .then((response) => {
        if (!response.ok) {
          const error = new Error(response.status);
          throw error;
        }
        response.JSON;
      })
      .then((responseJSON) => JSON.parse(responseJSON))
      .then((responseObject) => responseObject.contents.translated)
      .catch(console.error(error))

      await pushToPage(translatedText, targetDiv);
    }

  //Put Stuff on Page
    async function pushToPage(content, box) {
      const resultParagraph = document.createElement("p");
      resultParagraph.className = "dummyClass";
      
      resultParagraph.append(content);
      
      box.append(resultParagraph);
    }

//Testbed: Function Calls
  //Shakespeare in Container 1
    pullFromAPI(shakespeare, "POST", "application/JSON", "This is an example text that is ready for translation.", container1);
    
    // pushToPage(shakespeareA, container1);
  //Shakespeare in Container 2
    // pullFromAPI(shakespeare, "POST", "application/JSON", "Aren't you glad that there's more example text?", container2);