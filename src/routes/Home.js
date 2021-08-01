import React from 'react';
import axios from 'axios';
import Music from '../components/Music';
import './Home.css';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      musics: [],
      artist : ''
    }
  }
  
  getMusics = async() => {
    this.state.artist = 'bts';
    const musics = await axios.get('https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=' + this.state.artist + '&api_key=cc0c40005535fde9039f0a38b2631bf0&format=json');
      console.log(musics);
      console.log(musics.data);
      console.log(musics.data.topalbums);
      console.log(musics.data.topalbums.album);
  }

  componentDidMount() {
    this.getMusics();
  }

  render() {  
    const { isLoading, musics, artist } = this.state;
    return (
      <section className="container">
        {isLoading ? (

          <div className = "loading_container">
            <span className = "loading_text">Loading...</span>
          </div>

          ) : (

          <div className = "musics">
            {musics.map(music => (
              <Music
                  photo = {music.photo}
                  name = {music.name}
                  artist = {music.artist}
              ></Music>
            ))}
          </div>

        )}
      </section>
    );
  }
}

export default Home;