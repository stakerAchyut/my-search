import React from 'react';
import withStyles from 'react-jss';
import './App.css';

const styles = {
  head: {
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid #08192d',
    backgroundColor: '#08192d'
  },
  headName: {
    color: '#fc0254',
    marginLeft: '20%',
    textAlign: 'left',
    width: '100%'
  },
  contentName: {
    color: 'white',
    alignItems: 'center',
    marginLeft: '10%',
    marginTop: '30px',
    cursor: 'pointer',
    '&:hover': {
      color: '#fc0254'
    }
  },
  body: {
    backgroundColor: '#0a183d',
    height: '522px',
    overflow: 'hidden'
  },
  typo: {
    // border: '1px solid red',
    height: '300px',
    width: '500px',
    marginLeft: '80px',
    marginTop: '50px'
  },
  buttonLayout: {
    height: '120px',
    width: '500px',
    marginTop: '45px',
    marginLeft: '80px',
    display: 'flex'
  },
  button: {
    height: '65px',
    width: '200px',
    marginTop: '20px',
    borderRadius: '50px',
    textAlign: 'center',
    cursor: 'pointer'
  },
  buttonTypo: {
    color: 'white'
  }
};

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.head}>
          <div style={{ flex: 1 }}>
            <h1 className={classes.headName}>YouTube</h1>
          </div>
          <div style={{ flex: 2, display: 'flex' }}>
            <h3 className={classes.contentName}>Home</h3>
            <h3 className={classes.contentName}>About</h3>
            <h3 className={classes.contentName}>Pages</h3>
            <h3 className={classes.contentName}>News</h3>
            <h3 className={classes.contentName}>Contact</h3>
            <p
              style={{
                color: '#fc0254',
                marginTop: '32px',
                marginLeft: '90px',
                cursor: 'pointer'
              }}
            >
              Login
            </p>
          </div>
        </div>
        <div scroll="no" className={classes.body}>
          <div className={classes.typo}>
            <span
              style={{
                fontSize: '60px',
                color: '#fc0254',
                marginTop: '-20px',
                fontWeight: 'bold'
              }}
            >
              Music
            </span>
            <span
              style={{
                fontSize: '60px',
                color: 'white',
                marginTop: '-20px',
                fontWeight: 'bold'
              }}
            >
              {' '}
              for Everyone!
            </span>
            <p
              style={{
                fontSize: '20px',
                color: 'white'
              }}
            >
              Try the new YouTube Music ad-free for 3 months on us. It's all
              here. Albums, videos and more. A reimagined mobile app. A new web
              player. Watch or listen. Types: Official Songs, Full Albums, Music
              Videos, Playlists, Remixes, Covers, Live Performances.
            </p>
          </div>
          <div className={classes.buttonLayout}>
            <div
              style={{ backgroundColor: '#fc0254' }}
              className={classes.button}
            >
              <h3 className={classes.buttonTypo}>Click</h3>
            </div>
            <div
              style={{ backgroundColor: '#383b70', marginLeft: '20px' }}
              className={classes.button}
            >
              <h3 className={classes.buttonTypo}>Login</h3>
            </div>
          </div>
          <div style={{ marginLeft: '640px' }}>
            <img
              src="https://colorlib.com/preview/theme/solmusic/img/hero-bg.png"
              style={{ marginTop: '-460px', position: 'absolute' }}
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
