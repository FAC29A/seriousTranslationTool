//API Sources
  const host = "api.funtranslations.com";
  const shakespeare = ("https://api.funtranslations.com/translate/shakespeare.json?text=");
  const pirate = ("https://api.funtranslations.com/translate/pirate.json?text=");
  //* Think this was formatted incorrectly. By me.

//HTML Elements
  const container1 = document.getElementById("result1Box");
  const container2 = document.getElementById("result2Box");
  const form = document.querySelector("form");

//Event Listeners
  //Get User Input
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      await pullFromAPI(shakespeare, formData, container1);
      await pullFromAPI(pirate, formData, container2);

      // add in second api call
    })

//Functions
  //Get Stuff from API
    async function pullFromAPI(api, api, requestBody, targetDiv) {
      const formDataObject = Object.fromEntries(requestBody.entries());
      const queryString = formDataObject.originalTextInput.toString();
      
      const url = api + queryString;
      
      let translatedText = await fetch(url)
      .then((response) => response.json())
      .then((responseObject) => responseObject.contents.translated)
      
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