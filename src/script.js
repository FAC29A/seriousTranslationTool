//API Sources
  const rootURL = ("https://api.funtranslations.com/translate/");
  //* Think this was formatted incorrectly. By me.

//HTML Elements
  const container1 = document.getElementById("result1Box");
  const container2 = document.getElementById("result2Box");
  const form = document.querySelector("form");
  const loadingDiv = document.getElementById("loading-message");
  loadingDiv.style.display = "none";

//Event Listeners
  //Get User Input
    form.addEventListener("submit", async (event) => {

      event.preventDefault();
      loadingDiv.style.display = "block";

      const formData = new FormData(form);
      const formDataObject = Object.fromEntries(formData.entries());
      const queryString = formDataObject.originalTextInput.toString();
      const languageString1 = formDataObject.language1Input.toString();
      const languageString2 = formDataObject.language2Input.toString();

      if (
        formDataObject.originalTextInput.trim() === "" ||
        formDataObject.language1Input.trim() === "" ||
        formDataObject.language2Input.trim() === ""
      ) {
        loadingDiv.innerText = "Please fill in all fields!";
      } else {

      try {

      const translated1 = await pullFromAPI(languageString1, queryString);
      const translated2 = await pullFromAPI(languageString2, queryString);

      pushToPage(translated1, container1);
      pushToPage(translated2, container2);
      
    } catch (error) {

      if (error.message && error.message.includes("404")) {
        loadingDiv.innerText = "Whoops! Alright Professor, that's all your searches for now!"
      }
      else {
      loadingDiv.innerText = "Whoops! Error: " + error.message;
    }

    } finally {

      const hasError = loadingDiv.some(div => div.textContent.startsWith("Whoops"));
      if (!hasError) {
        loadingDiv.style.display = "none";
      }
      
    }

    }});



//Functions
  //Get Stuff from API
    async function pullFromAPI(languageString, queryString) {
      const url = `${rootURL}${languageString}.json?text=${queryString}`;
      let translated = await fetch(url)
      .then((response) => response.json())
      .then((responseObject) => responseObject.contents.translated)
      
      return translated;
    }

  //Put Stuff on Page
    async function pushToPage(content, box) {
      box.innerHTML = "";
      box.innerHTML = `<p class="dummyClass">${content}</p>`;
      loadingDiv.style.display = "none";

    }

//Testbed: Function Calls
  //Shakespeare in Container 1
    
    
    // pushToPage(shakespeareA, container1);
  //Shakespeare in Container 2
    // pullFromAPI(shakespeare, "POST", "application/JSON", "Aren't you glad that there's more example text?", container2);