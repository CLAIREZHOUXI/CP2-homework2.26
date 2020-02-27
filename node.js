import React, { Component } from "react";

import "./styles.css";

var pages = {
  start: {
    text: "Welcome, traveler! How would you like to get to your destination?",
    image:
      "https://www.publicdomainpictures.net/pictures/270000/nahled/map-travel-travel-mapexplore-ca.jpg",
    leftLabel: "Train",
    rightLabel: "Ship",
    leftPage: "onthetrain",
    rightPage: "ontheship"
  },

  onthetrain: {
    text:
      "Welcome aboard the choo-choo train! Please make your way to your seat. What's the number?",
    image:
      "https://media.nbcwashington.com/2019/09/shutterstock_292259453.jpg?resize=850%2C478",
    leftLabel: "12A",
    rightLabel: "13F",
    leftPage: "death",
    rightPage: "life"
  },

  ontheship: {
    text: "Why you are taking the ship? Take train!",
    image:
      "https://thenypost.files.wordpress.com/2020/02/coronavirus-cruise-33.jpg?quality=80&strip=all&w=618&h=410&crop=1",
    leftLabel: "Okay, I guess I will take train",
    rightLabel: "No, I just want to take ship",
    leftPage: "onthetrain",
    rightPage: "ontheship2"
  },

  ontheship2: {
    text: "Ship sank just now. Now you can only take train : )",
    image:
      "https://www.maritime-executive.com/media/images/article/Photos/Wreckage_Salvage/american-glory-sinking.8702d6.png",
    leftLabel: "Fine, I will just take train",
    rightLabel: "Okay, whatever",
    leftPage: "onthetrain",
    rightPage: "onthetrain"
  },

  death: {
    text: "You see everything turns red. What happended...",
    image:
      "https://dg.imgix.net/sin-is-worse-than-hell-en/landscape/sin-is-worse-than-hell-8b8457cb2ad6bf71cd46c41cbf8b52f7.jpg?ts=1513795819&ixlib=rails-4.0.0&auto=format%2Ccompress&fit=min&w=800&h=450",
    leftLabel: "I want to leave here",
    rightLabel: "Pretend nothing happended",
    leftPage: "leavehere",
    rightPage: "sleep"
  },

  leavehere: {
    text:
      "You look at the window, and think about whether to broke the window. But, you hear someone is trying to break the window from the outside at the same time.",
    image: "https://ak5.picdn.net/shutterstock/videos/20964895/thumb/6.jpg",
    leftLabel: "Hide!",
    rightLabel: "Okay, let me kill myself",
    leftPage: "hide",
    rightPage: "TBD"
  },

  hide: {
    text: "You look around. There are two places you can hide.",
    image:
      "https://www.tynker.com/projects/screenshot/5cf9602eff13b74cb9506680/super-crazy-mind-trick.png",
    leftLabel: "Hide under my seat",
    rightLabel: "Hide in the big black box in my carriage",
    leftPage: "TBD",
    rightPage: "TBD"
  },

  sleep: {
    text:
      "You fall asleep. In your dream, you are on the same train, and everything looks so real.",
    image:
      "https://media.nbcwashington.com/2019/09/shutterstock_292259453.jpg?resize=850%2C478",
    leftLabel: "Wake up",
    rightLabel: "continue the dream",
    leftPage: "TBD",
    rightPage: "TBD"
  },

  life: {
    text:
      "You fall asleep for a while... and when you wake up, you realized that the train is so quiet. Everyone disappeared.",
    image:
      "https://actshousing.org/wp-content/uploads/2016/02/Scared-300x217.jpg",
    leftLabel: "Break the window and escape",
    rightLabel: "check out other carriages",
    leftPage: "TBD",
    rightPage: "TBD"
  },

  TBD: {
    text:
      "To be continued ;) contact creator - Claire Zhou at xzhou@cca.edu to contribute your ideas!"
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start"
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  render() {
    var pageData = pages[this.state.page];

    var imageElement = "";
    if (pageData.image) {
      imageElement = <img src={pageData.image} width="400" />;
    }

    return (
      <div className="App">
        <p>{pageData.text}</p>
        <p>{imageElement}</p>
        <button onClick={() => this.goToPage(pageData.leftPage)}>
          {pageData.leftLabel}
        </button>
        <button onClick={() => this.goToPage(pageData.rightPage)}>
          {pageData.rightLabel}
        </button>
      </div>
    );
  }
}

export default App;
