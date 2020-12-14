# Notes Land
To enter the notes land, click [here](http://notes-land.glitch.me/).

## Introduction

Explore and pass on the little notes. Enjoy!

|![Pj Preview](https://github.com/mollyhe0523/abc-student-repo/raw/master/projects/pj%20C/demo1.gif)|
|:--:|
| *Writing on one paper* |

|![Pj Preview2](https://github.com/mollyhe0523/abc-student-repo/raw/master/projects/pj%20C/demo2.gif)|
|:--:|
| *Adding other papers* |

Concept: The notes land is designed to be a trial on anonymity. The inspiration comes from the experience of sneakily passing on little notes in class in one's teenager years. This experience is brought to a broader realm with paper thrown on grass.


### Prototype

[link to prototype](https://github.com/mollyhe0523/abc-student-repo/blob/master/projects/pj%20C/Project%20C%20Prototype.pdf)


## Technical Explanation

1. Add new paper
![Technical Diagram 1](https://github.com/mollyhe0523/abc-student-repo/raw/master/projects/pj%20C/technical.jpeg)

2. Write on the paper
![Technical Diagram 2](https://github.com/mollyhe0523/abc-student-repo/raw/master/projects/pj%20C/technical2.jpeg)


### Technologies Used

- express.js
- socket.io
- Firebase realtime database



### Task Breakdown

__Molly:__

1. Add new paper

  - Server side

    - Get the count of existing paper in the database, update it, and push the information in the paper list.
    ```javascript
    paperListRef.once('value').then((snapshot)=>{
      let paperCount = snapshot.val().count;
      paperCount++;
      let paperName = "p"+paperCount;
      paperListRef.update({
        count: paperCount,
      })
      paperListRef.push({paperName:paperName, active: "y"})
    ```

  - Client side

    - Append paper to the grass with all its required identity, animation, and event listener.


2. Write on the paper

  - Server side

    - Push the message in the message list.

  - Client side

    - Send message to the database and clear the scene (remove the original text area, add event listener of creating new text area and reset config).

    - Append message on the designated paper with all its identity acquired from the database.
    ```javascript
    socket.on("message-to-all",(data)=>{
      let paper = data.paper;
      let width = data.width;
      let height = data.height;
      let positionX = data.positionX;
      let positionY = data.positionY;
      let color = data.color;
      let font = data.font;
      let size = data.size;
      let message = data.message;
      if (state == paper){
        appendMessage(width,height,positionX,positionY,color,font,size,message);
      }
    })
    function appendMessage(width,height,left,top,valueColor,valueFont,valueSize,message) {
      let textboxFromServer = document.createElement("textarea");
      textboxFromServer.value = message;
      textboxFromServer.style.cssText = "position: absolute; top: "+top+"vh; left: "+left +"vw; cursor: auto; color:"+valueColor+"; background-color: transparent; border: none; padding: 5px; width: "+(width-8)+"px; height:"+(height-8)+"px; resize: none; overflow: hidden; font-size: "+valueSize+"px; font-family: "+valueFont+";"
      textboxFromServer.readOnly = true;
      paper.appendChild(textboxFromServer);
    }
    ```





2. To show the different papers’ content

   I clear the paper once user hits the close button. When the user clicks on one specific paper, fetch the paper content from the database by filtering its paper name and append it on paper.

__Yuhang:__
1. How to Tame A Textarea Tag


- How to Make Textarea Draggable
- How to Make Textarea Draggable While Resizable
- How to Limit the Textarea within the Boundaries the Paper

### Shortcomings & Compromises

Compromises: Delete paper

Shortcomings:
1. Not responsive on mobile phone
2. Paper position not fixed on the front page every time user refreshes
