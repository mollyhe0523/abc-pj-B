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

![Technical Diagram 1](https://github.com/mollyhe0523/abc-student-repo/raw/master/projects/pj%20C/technical.jpeg)



![Technical Diagram 2](https://github.com/mollyhe0523/abc-student-repo/raw/master/projects/pj%20C/technical2.jpeg)


### Technologies Used

- express.js
- socket.io
- Firebase realtime database



### Task Breakdown

__Molly:__
1. To show the different papers’ content

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
