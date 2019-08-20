import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSecretWord } from './actions';
import './App.css';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';

export class UnconnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    const { success, guessedWords } = this.props;
    return (
      <div className="container" data-test="component-app">
        <h1>Jotto!</h1>
        <Congrats success={success} />
        <Input />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = ({ secretWord, success, guessedWords }) => ({
  secretWord,
  success,
  guessedWords,
});

export default connect(
  mapStateToProps,
  { getSecretWord }
)(UnconnectedApp);
