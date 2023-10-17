# Hyper-Useful API Exploiter

## Description

Text go in, other text go out

## Features

- Translate text into various other semi-legitimate sociolects 

## Technologies

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) 
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white) 

## README Checklist

> Courtesy of [DDBeck](https://github.com/ddbeck/readme-checklist)

### Help the reader identify the project 

- [ ] Name the file
  - *READMEs without markup:* Name the file `README` or `README.txt`. 
  - *READMEs with markup:* Name the file `README.extension`, where *extension* is a file extension that corresponds to your markup language (such as md for Markdown or rst for reStructuredText). 
- [ ] At the top of the file, **make sure the project's name is the first heading or plain text**. 
- [ ] Under the project name or linked from it, add a URL for the project (such as repository or homepage URL). 
- [ ] Under the project name, clearly identify the owner or author of the project (e.g., "By Author McAuthorface" or "Copyright Owner Name 2018"). 

### Help the reader evaluate the project 

- [ ] Describe the project in terms of what the project does or achieves, not what it's made out of.
  - Focus on why not what.
  - If the project is new or doesn't have an intended use, tell an origin story instead:
    - `One day I was _____.`
    - `I tried to _____ but _____.`
    - `Instead, I made <PROJECT NAME> to _____.`
    - Or you can try inverting the description, describing what your project is *not* good for.
  - Other Tips
    - Write to your reader in the second person (you) 
    - Use action verbs and avoid the passive voice (e.g., write `<PROJECT NAME> creates files` instead of `Files are created by <PROJECT NAME>`)
    - Avoid the verbs *to be*, *to have*, and (sometimes) *to get*
    - Avoid acronyms and initialisms 
  - Warning
    - You may be tempted to describe how the project is made— what languages, technologies, and tools—instead of what the project does.
    - That's sometimes useful information, but save it until after you've described how the project is supposed to help the reader. 
- [ ] Describe who may use the project and under what terms.
  - Open-source projects
    - Describe then name the license.
  - Closed-source projects
    - Describe who may use and distribute the project.
    - For publicly available projects, you may reference an EULA or other licensing document.
    - For private or internal projects, you may want to explicitly allow or deny public disclosure of the project.

### Help the reader use the project 

- [ ] If applicable, **list the project's prerequisites**. 
  - Your project may require things that are out of the scope of ordinary installation or usage instructions.
  - List these requirements before or at the beginning of such instructions.
- [ ] List the steps to install and use the project one time.
  - Help the reader go from having your project's files to using the project for the first time.
  - For a programming language, this might be installation followed by running a "hello world" program.
  - For a documentation project this might be building the site and opening the homepage in a web browser.
  - For a README-only project, this might be a preface or introduction.
  - No matter how your project runs, however, stop once the project works once. Extended usage instructions belong in dedicated documentation files, not your README. 
- [ ] Test your install and setup steps.
  - There's nothing to write down for this, but be sure what you've already written actually works. 

### Help the reader engage with the project 

- [ ] Tell your audience where to go for more project documentation.
  - Describe any additional documentation and where to find it.
  - This may include your project's: 
    - Website 
    - Documentation files 
    - Man page 
    - Help command(s) 
    - Top-level README companion files, such as:
      - `LICENSE`
      - `CONTRIBUTING`
      - `CODE_OF_CONDUCT`
      - `AUTHORS`
      - `CHANGELOG`
      - `BUGS` 
  - It's not enough to link to documents; briefly describe them too. 
- [ ] Tell your audience where to go for help.
  - This may include descriptions and links to mailing lists, issue trackers, forums, email addresses, or other support avenues (like Stack Overflow tags).
  - If the project is unsupported or support is only available for a fee, now would be a good time to mention that. 
- [ ] **Tell your audience how to help.** 
  - *Open-source projects*
    - Link to and summarize the project's contributor's guide, if one exists, or describe how and where you want contributors to add to your project (e.g., via GitHub pull requests or patches mailed to a specific address).
  - *Closed-source projects*
    - describe how and where bugs should be reported. 

### Final checks

- [ ] **If your README is long, add a table of contents** after your project description.
  - If your README is more than three or four screens long, make it easier to skim by adding a table of contents.
  - A list of section headings is enough.
- [ ] **If your README is very long, move content to other documents.** 
  - If your README is more than ten or twelve screens long, move stuff into separate documents.
  - Keep your README file short, or readers may become overwhelmed.
  - A comprehensive README is a bad README. 
- [ ] **Set a reminder to review your README and this checklist in a few weeks**.
- [ ] **Tell [ddbeck](https://github.com/ddbeck/) that you used this checklist.**
  - You can tweet at him or open an issue on ddbeck/readme-checklist.

---

## Jason's Think Hole

### Usage

#### Diagrams

##### Key

```mermaid
graph TB

userInput[/"User Input"\]:::userInput
userOutput[\"Displayed Output"/]:::userOutput
codeInput[["API Request"]]:::codeInput
codeFormat[("Back-End JavaScript")]:::codeFormat
codeOutput>"API Result"]:::codeOutput

userInput --- codeInput
codeInput --- codeFormat
codeFormat --- codeOutput
codeOutput --- userOutput

classDef userInput fill:#bfbfff
classDef userOutput fill:#bfbfff
classDef codeInput fill:#ffbfbf
classDef codeFormat fill:#ffffbf
classDef codeOutput fill:#bfffbf
```

##### Initial Ideas

###### Simultaneous

```mermaid
graph TB

inputA[/"User Does a Thing"\]:::userInput
requestA1[["Make a Request from API 1"]]:::codeInput
resultA1>"API 1 Returns Something"]:::codeOutput
requestA2[["Make a Request from API 2"]]:::codeInput
resultA2>"API 2 Returns Something"]:::codeOutput
mergeA[("Merge Results")]:::codeFormat
formatA[("Format Results")]:::codeFormat
outputA[\"Something is Displayed to the User"/]:::userOutput

inputA --> requestA1 & requestA2
requestA1 --> resultA1
requestA2 --> resultA2
resultA1 & resultA2 --> mergeA
mergeA --> formatA
formatA --> outputA

classDef userInput fill:#bfbfff
classDef userOutput fill:#bfbfff
classDef codeInput fill:#ffbfbf
classDef codeFormat fill:#ffffbf
classDef codeOutput fill:#bfffbf
```

###### Sequential

```mermaid
graph TB

inputB[/"User Does a Thing"\]:::userInput
requestB1[["Make a Request from API 1"]]:::codeInput
resultB1>"API 1 Returns Something"]:::codeOutput
generateB2[("Generate Request from Result")]:::codeFormat
requestB2[["Make a Request from API 2"]]:::codeInput
resultB2>"API 2 Returns Something"]:::codeOutput
formatB[("Format Results")]:::codeFormat
outputB[\"Something is Displayed to the User"/]:::userOutput

inputB --> requestB1
requestB1 --> resultB1
resultB1 --> generateB2
generateB2 --> requestB2
requestB2 --> resultB2
resultB2 --> formatB
formatB --> outputB

classDef userInput fill:#bfbfff
classDef userOutput fill:#bfbfff
classDef codeInput fill:#ffbfbf
classDef codeFormat fill:#ffffbf
classDef codeOutput fill:#bfffbf
```


---

##### Current

```mermaid
graph TB

subgraph html1["index.html"]
direction TB
input[/"User Writes Text"\]:::userInput
end

input --> encode1 & encode2

subgraph js1["script.js"]
direction TB
encode1[["Generate API Request"]]:::codeInput

encode2[["Generate API Request"]]:::codeInput
end

encode1 --> api1
encode2 --> api2

subgraph api1["API 1"]
direction TB
request1[["Send Text to API 1"]]:::codeInput

request1 --> result1

result1>"API 1 Returns JSON"]:::codeOutput
end

result1 --> format1

subgraph api2["API 2"]
direction TB
request2[["Send Text to API 1"]]:::codeInput

request2 --> result2

result2>"API 2 Returns JSON"]:::codeOutput
end

result2 --> format2

subgraph js2["script.js"]
direction TB
format1[("Format JSON")]:::codeFormat

format1 --> output1

output1[("Text Element Created")]:::userOutput

format2[("Format JSON")]:::codeFormat

format2 --> output2

output2[("Text Element Created")]:::userOutput
end

output1 & output2 --> html2

subgraph html2["index.html"]
direction TB
display[\"Display Results"/]:::userOutput
end

classDef userInput fill:#ffbfbf
classDef userOutput fill:#bfbfff
classDef codeInput fill:#ffbfbf
classDef codeFormat fill:#bfffbf
classDef codeOutput fill:#bfbfff
```

---

#### Input & Output

##### Input

> What Does the User Do?

- Press a button?
- Type a value that is sent to one API?
- Type a value that is sent to all APIs?
- Chooses a value from a list given by an API?

##### Output

> What does the app spit out?

- Relationship Between Data
- Display Format

---

### Theme Ideas

#### Ideas I Like

> Me Likey

- **Mythos**
- Which god you should worship based on your values/ethical beliefs
- **Language Bastards** _(Government Edition)_
- Correlations between...
	- minority first language speakers
	- socioeconomic outcomes
		- national/regional policies towards those languages
- **Language Bastards** _(Individual Edition)_
- Attitudes of people speaking a particular language towards speakers of other languages correlated with degree of relatedness between those languages
- Catalan, Castilian, Occitan, French & Basque would be a great test case
- **Dogwhistle Tracker**
- Last time a newspaper printed a given slur word without quotation marks.
- Maybe correlated with attitudes towards current social issues?
- **Historical Event Lifetime Extrapolator**
- Pick a historical event.
- Imagine an unnamed participant in that event.
- Define how old they were at the time
- App displays what other events they experienced in their lifetime
- **Word Expander**
- Apply pre-existing affixes to any word in order to convey new meaning
- Possibly separately input desired extra meaning not conveyed by root word
- Possibly can weight likelihood of older or newer affixes to convey sense of when word was coined
- e.g. adjectival form of politician, add connotation of "fool", skew towards Middle English affixes

#### Meh

> Ideas That Are... Fine?

- **Creative Insult Idomiser**
- Enter how you want to insult someone.
- Return an idiom translated from another language
- **Hometown Heritage**
- Who was the first recorded named person from your town
- Something to do with MBTI personality typology?
- **Pseudoscience Discoverer**
- Dodgiest research papers on a subject of your choice
- **North-South Hemisphere Holiday Translator**
- **Crap Pseudo-Science Aggregator**
- **Politician Dewaffler**
- **Podcast Discoverer**
- **Wat iz a Vaporwave?**
- Venn Diagram Generator of Obscure Musical Subgenres
- **Family Term Attitude Extrapolator**
- Kinship terms within a language correlated with expressed attitudes towards social norms
- Could go a little bit too Sapir-Whorf
- [Genderize](https://genderize.io/), [Nationalize](https://nationalize.io/) & [Agify](https://agify.io/) predict someone's gender, nationality & gender based on their name.
- We could serve someone the most polar opposite name possible...
- Or the most average name someone of their demographic could have?

#### WTF?

> Ideas I Should Never Have Thought Up

- ~~Quotes from religious texts to help you justify horrible shit you want to do~~ This seemed funny until fucking horror erupted
- Could Genghis Khan beat up a shark?
- Analyse the emotional tone & sentiment of text, but the analysis is really judgemental
- **Weird Shit Your Country Believes**

#### FFS

> This Isn't an Idea Jason, It's Just a Funny Sentence You Thought Of

- **Right Wing Catastrophism Analyser**
- **Awful Hot Take Generator**
- **Uncomfortable Recommendations**

---

### Interesting APIs

#### Utility

##### Generic

> APIs to Plug Into Other Ideas

- [ColorMind](http://colormind.io/api-access/): Colour Palette Generation & Editing
- [Deck of Cards](https://deckofcardsapi.com/)

##### Formatting

> APIs That Format Other Data

- [GitHub Contributions Chart Generator](https://github-contributions.vercel.app/)
- [ImageCharts](https://documentation.image-charts.com/): Present data in a variety of chart types
- [Kroki](https://kroki.io/): Generates diagrams from textual descriptions

---

#### Content
##### Actual Data

- [Teleport](https://developers.teleport.org/api/): Quality of Life Data
- [UK Police Data](https://data.police.uk/docs/)
- [Urban Observatory](https://newcastle.urbanobservatory.ac.uk/): UK Urban Data
- [Wikipedia](https://www.mediawiki.org/wiki/API)

##### Niche

- [BoardGameGeek](https://boardgamegeek.com/wiki/page/BGG_XML_API2?ref=apislist.com)
- [Cognosaurus](https://github.com/JohnLapis/cognosaurus): Find cognates
- [Dog API](https://dog.ceo/dog-api/)
- [Groundhogs](https://groundhog-day.com/?ref=apislist.com)
- [Morpheus](https://github.com/morpheusgraphql/mythology-api): Greek Mythology
- [PoetryDB](https://github.com/thundercomb/poetrydb)
- [Traitify](https://app.traitify.com/developer): Personality Tests

##### Silly

> Generators & the Like

- [Binary Jazz](https://binaryjazz.us/genrenator-api/): Music Genre Generator
- [Bored](https://www.boredapi.com/): Random Activities
- [Corporate Bullshit Generator](https://github.com/sameerkumar18/corporate-bs-generator-api)
- [RPS-101](https://rps101.pythonanywhere.com/api?ref=apislist.com): Rock, Paper, Scissors with 101 Objects

---
