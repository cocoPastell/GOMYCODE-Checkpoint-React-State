import React, { Component } from "react";
import HermineGrangerImage from "./assets/HermineGranger.jpeg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Hermine Jean Granger",
        bio: "Hermine is a Muggle-born Gryffindor, who becomes best friends with Harry Potter and Ron Weasley. She was nearly twelve when she first attended Hogwarts",
        imgSrc: HermineGrangerImage,
        profession:
          "Department for the Regulation and Control of Magical Creatures (formerly)",
      },
      show: false,
      mountTime: new Date(),
      elapsedTime: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: Math.floor((new Date() - prevState.mountTime) / 1000),
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { show, elapsedTime } = this.state;
    const { fullName, imgSrc, bio, profession } = this.state.person;

    return (
      <div>
        <button onClick={() => this.setState({ show: !show })}>
         click here
        </button>
        {show && (
          <div>
            <h2>{fullName}</h2>
            <img src={imgSrc} alt={fullName} />
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}
        <p>Component mounted {elapsedTime} seconds ago.</p>
      </div>
    );
  }
}

export default App;
