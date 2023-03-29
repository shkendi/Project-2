# Project-2 Readme link


Project – 2 ReadMe

Description

Criptoapp

Project-2 consists in creating a single-page app using React and a public API. To deploy, we had to use Netlify. I often wondered why people are attracted to virtual coins, wanting to make money in an easy way, and came up with the idea of building my own crypto app. Only then I realised the endless number of virtual coins that were available on the internet.




 



Deployment link:

https://criptoapp-project-2.netlify.app



Getting Started/Code Installation

Set up the project-2 repo 
open Project-2 in my code editor
cd into the root directory
run 'npm i' to install the dependencies
run 'npm run build'
run 'npm run dev' to run the program



Timeframe & Working Team (Solo/Pair/Group)


This was a solo project. I completed it during week 12 of the General Assembly Flex Software Engineering Immersive, for a period of 9 days.





Technologies Used


React
TypeScript / JavaScript
React Router Dom (creating a single-page app)
Bulma (styling)
Git and GitHub (version control)
Netlify (deployment)
QuickDBD (planning)

Brief

For the second project, I had to build a React application that:

Consume a public API – this could be anything but it must make sense for your project.
The app should include a router - with several "pages".
Include wireframes - that you designed before building the app.
Have semantically clean HTML - you make sure you write HTML that makes structural sense rather than thinking about how it might look, which is the job of CSS.
Be deployed online and accessible to the public.


 
Planning


I used QuickDBD tables to plan ahead for the project. This platform was easy to use and straightforward when it came to the features I wanted to add to my project. It helped me stay focused and manage my time well.



I created table schemas and each one of them was representing a component. So based on my data I planned the interface I wanted to build. I had a navbar page with the home and all coins linked on it. When clicking on all coins, a card with all coins appears and if clicking on one coin it will take you to that single coin and its data. When typing in the search bar, a list of coins starting with a certain letter will appear so the user can click on the one they want. All pages are linked and communicate together. 


The first thing I did before starting the project was to do some research on public APIs and make sure I found the one that works without me needing to sign in for a free public API.
The second thing to do was decide on what to build and what data I needed to have when making the choice. I decided that I would concentrate on building a simple app that works with a single API, to make a few pages that work well. In the second stage, I would implement a second public API so I could add the calculator and the exchange features. The time was not enough for me to complete my stretch goals but I still got a single-page application that works well.

Build/Code Process
The Router
The first thing I did was install the React dependencies.

The router lives in the app.tsx component and it is where I first started to test with some dummy words like Hello world to see if my frontend was working fine: I just wrote Project 2 and it was working fine. After that, I started building the home component and imported it into the app.tsx. Into the navbar file where I first imported the link, I added each link separately for every single page.





I created the coin interface and built the coin card displaying the data I wanted to show, using the public API. To show the list of all coins, I fetched the data from API using React.useEffect.


 

After I created a search bar, I focused on the filter method to go through all coins to give me back the requested coin data. I did that using .toLowerCase() so it would work no matter if I was typing using lower or uppercase letters.



I used React Hooks, in this case, .useState() to get coins, destructure, and update them later into coins cards with chosen values. I did this by first sending a request using React promises, and getting back the data from the public API. I used .map() and .filter() methods to filter through the coins array and added a button search to display the coin card with the data I wanted. 






I made sure that I was getting the data back by console.log coins and inspecting in the browser regularly for any possible errors, I then updated the Navbar function. Added the link to the nav section and added the route path into the app.tsx so I could display the page on the screen. I did that for every single page I built.  
function Navbar() {
 return (
 <div>
 <header className="header">
   <section className="nav-section">
   <nav className="navbar-section is_black is_fullheight">
     <div className="section is_black">
       <div className="navbar-brand">
         <Link to="/" className="navbar-item">
           <strong className="main">Home</strong>
         </Link>
         <Link to="/coins" className="search-bar">
           </Link>
         <Link to="/coins" className="navbar-item">
           <strong className="main">All Coins</strong>
         </Link>
         {/* <Link to="/coins" className="navbar-item">
           <strong>My Coin</strong>
         </Link> */}
       </div>
     </div>
   </nav>
   </section>
 </header>
 </div>
 )



To style my project this time, I used Bulma and that was my first time ever using it. I found it less time-consuming than basic CSS but at the same time, I didn’t have too much time to spend practising it. As a result, I ended up having some styling bugs which I intend to fix at a later time. 




Challenges

There were a few challenges in this project. Firstly, it was a bit hard for me to understand JSX syntax and often had to go back to read docs and watch the lessons and labs before I wrote something. Secondly, as a beginner in TypeScript,  I faced its pros and cons but I really enjoyed applying it to my project, it really improved my code to another level.

Wins

My main objective was to have a single-page app that works and that has been met so far, which means that later I could add other features and add better styling too. I was happy that I could build a responsive app designed for mobile and desktop. The React  methods I applied were functional. I enjoyed building the search bar and adding the React arrow icon as an extra functionality to my app. 


Key Learnings/Takeaways


Through this project, I learned mapping and filtering data from the public API. I used this project to apply React, JSX and TypeScript which we were learning during that period of time in the SEI course with GA. It also was my first time ever using Bulma SCSS. Being my first time ever building a single-page app, I fully enjoyed every bit of code I built during this project and for me this was a great experience.



function Navbar() {
 return (
 <div>
 <header className="header">
   <section className="nav-section">
   <nav className="navbar-section is_black is_fullheight">
     <div className="section is_black">
       <div className="navbar-brand">
         <Link to="/" className="navbar-item">
           <strong className="main">Home</strong>
         </Link>
         <Link to="/coins" className="search-bar">
           </Link>
         <Link to="/coins" className="navbar-item">
           <strong className="main">All Coins</strong>
         </Link>
         {/* <Link to="/coins" className="navbar-item">
           <strong>My Coin</strong>
         </Link> */}
       </div>
     </div> 





Bugs

The right side of the app, where the All Coins link page is not positioned fully inside the Navbar and that’s lacking in both versions, mobile and desktop. I believe that is partly because it was the first time I tried Bulma and because I ran out of time.



Future Improvements

I had planned to implement a calculator and exchange page too but having no time I decided that these could be my next todos in the improvement list.

Styling. I would like to fix styling bugs, change the navbar background colour  and apply a few other styling features.
Adding a CurrentMarketValue that links the CoinsList with their value in other countries, for example, exchanging pounds into euros. 
Adding an exchange page with a calculator that is linked with the CoinsList and the current market value, so the user could enter a certain amount of money and calculate the value of it into another coin.


