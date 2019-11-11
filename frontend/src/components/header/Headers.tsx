import React from 'react';
import './Header.css';
import history from '../../navigation/history';
import AuthStorage from '../auth/AuthStorage';
import { observer } from 'mobx-react';

const navigatePopular = () => {
  history.push('/popular');
}

@observer
export class Header extends React.Component {
  public render() {
    return (
      <div className="App-header">
        <div className="topContainer">
          {(AuthStorage.bearer_token) ?
            (<button className={'Header-button'} type="button" onClick={navigatePopular}>
              Popular
            </button>)
            : (null)
          }
        </div>
      </div>
    );
  }
}