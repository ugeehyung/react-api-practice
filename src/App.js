import React from "react";
import axios from "axios";

class App extends React.Component {

  state = {
    isLoading: true,
    music: [],
  };
  
  getMusic = async () => {
    const {
      data : {
        data : { music },
      },
    } = await axios.get("https://ws.audioscrobbler.com/2.0/?method=track.search&track=&api_key=cc0c40005535fde9039f0a38b2631bf0&format=json");
    this.setState({ music });
  }

  componentDidMount() {
    this.getMusic();
  }

  render() {  
    const { isLoading } = this.state;
    return <div>{ isLoading ? 'Loading...' : 'Start...' }</div>;
  }
}

export default App;
