import React from 'react';
import './Header.css';
import history from '../../navigation/history';

export class Header extends React.Component {
  public render() {
    return (
      <div className="App-header">
        <div className="topContainer">
          <ul>
            <li>
              <button type="button" onClick={this.navigatePopular}>
                Popular
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  private navigatePopular = () => {
    history.push('/popular');
  }
}