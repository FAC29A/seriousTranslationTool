//API Sources
  const host = "api.funtranslations.com";
  const shakespeare = ("https://api.funtranslations.com/translate/shakespeare?=");

//HTML Elements
  const container1 = document.getElementById("result1Box");
  const container2 = document.getElementById("result2Box");
  const form = document.querySelector("form");

//Functions
  //Get User Input

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
     await pullFromAPI(shakespeare, "POST", "application/JSON", formData, container1);
  })

  //Get Stuff from API
    async function pullFromAPI(api, method, contentType, requestBody, targetDiv) {
      const formDataObject = Object.fromEntries(requestBody.entries());
      const url = api;
      const queryString = new URLSearchParams(formDataObject).toString();
      const fullURL = url + "?" + queryString;

      console.log(fullURL);

      const translatedText = fetch(url, {
        method: method,
        headers: {
          "Content-Type": contentType,
          "Host": host,
        },
        body: JSON.stringify(formDataObject)
      })
      .then((response) => {
        if (!response.ok) {
          const error = new Error(response.status);
          throw error;
        }
        return response.JSON;
      })
      // .then((responseJSON) => JSON.parse(responseJSON)) -- commented out as now happening further up
      .then((responseObject) => responseObject.contents.translated)
      .catch(console.error)

      await pushToPage(translatedText, targetDiv);
    }

  //Put Stuff on Page
    async function pushToPage(content, box) {
      const resultParagraph = document.createElement("p");
      resultParagraph.className = "dummyClass";
      
      resultParagraph.textContent = content;
      
      box.append(resultParagraph);
    }

//Testbed: Function Calls
  //Shakespeare in Container 1
    
    
    // pushToPage(shakespeareA, container1);
  //Shakespeare in Container 2
    // pullFromAPI(shakespeare, "POST", "application/JSON", "Aren't you glad that there's more example text?", container2);