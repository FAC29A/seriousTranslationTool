//API Sources
  const host = "api.funtranslations.com";
  const shakespeare = ("https://api.funtranslations.com/translate/shakespeare.json?text=");
  //* Think this was formatted incorrectly. By me.

//HTML Elements
  const container1 = document.getElementById("result1Box");
  // console.log("Container 1 is: ", container1)
  const container2 = document.getElementById("result2Box");
  // console.log("Container 2 is: ", container2)
  const form = document.querySelector("form");
  console.log("Form is: ", form)

//Functions
  //Get User Input

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    // console.log("Form Data is: ", formData);
  
    // await pullFromAPI(shakespeare, "POST", "application/JSON", formData, container1);
      //* I changed POST to GET
      //* We were getting the forbidden response because the API doesn't accept POST
      //* Hold the phone, GET is default. We can omit it.
    await pullFromAPI(shakespeare, formData, container1);
  })

  //Get Stuff from API
    async function pullFromAPI(api, requestBody, targetDiv) {
      
      // Turn form text input into string and create full URL
      const formDataObject = Object.fromEntries(requestBody.entries());
    
      const url = api;

      const queryString = formDataObject.originalTextInput.toString();
      
      const fullURL = url + queryString;
      let translatedText = "";
      
      translatedText = fetch(fullURL)
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