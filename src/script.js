//API Sources
  const host = "api.funtranslations.com";
  const shakespeare = ("https://api.funtranslations.com/translate/shakespeare.json?text=");
  //* Think this was formatted incorrectly. By me.

//HTML Elements
  const container1 = document.getElementById("result1Box");
  console.log("Container 1 is: ", container1)
  const container2 = document.getElementById("result2Box");
  console.log("Container 2 is: ", container2)
  const form = document.querySelector("form");
  console.log("Form is: ", form)

//Functions
  //Get User Input

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    console.log("Form Data is: ", formData);
  
    // await pullFromAPI(shakespeare, "GET", "application/JSON", formData, container1);
      //* I changed POST to GET
      //* We were getting the forbidden response because the API doesn't accept POST
      //* Hold the phone, GET is default. We can omit it.
    await pullFromAPI(shakespeare, formData, container1);
  })

  //Get Stuff from API
    // async function pullFromAPI(api, method, contentType, requestBody, targetDiv) {
    async function pullFromAPI(api, requestBody, targetDiv) {
      
      // Turn form text input into string and create full URL
      const formDataObject = Object.fromEntries(requestBody.entries());
      console.log("formDataObject is: ", formDataObject);
    
      const url = api;

      //// const queryString = new URLSearchParams(formDataObject.originalTextInput).toString();
      //// console.log("queryString is: ", queryString);
      //! This is returning originalTextInput=Let%27s+try+this...
      //todo but we want Let%27s+try+this...
      
      // Several Minutes Later

      //* Okay so I think URLSearchParams is way more advanced than what we need, I think it's the basis for iterating through a shitload of big multi-value objects and extracting search terms from them
      //* SO let's try...
      const queryString = formDataObject.originalTextInput.toString();
      console.log("queryString is: ", queryString);

      //// const fullURL = url + "?" + queryString;
      //* That question mark is already present in the shakespeare CONST
      const fullURL = url + queryString;
      console.log("fullURL is: ", fullURL);

      const translatedText = fetch(fullURL) ////{
        //// method: method,
        //// headers: {
        //// "Content-Type": contentType,
        ////   "Host": host,
        //// },
        //// body: JSON.stringify(formDataObject)
      ////}
      .then((response) => {
        if(!response.ok) {
          const error = new Error(response.status);
          throw error;
        }
        console.log("Raw Response is: ", response);
        //* OKAY THIS CONSOLE LOG IS NOW SHOWING ME A SUCCESSFUL CALL!!!!

        //* Phoebe's Original
          //? console.log(response.JSON);
          //? return response.JSON;
          console.log("Response JSON is: ", response.json(  ));
          return response.json();
      })
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