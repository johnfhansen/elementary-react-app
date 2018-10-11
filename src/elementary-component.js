import React, {Component} from 'react';

export class ElementaryComponent extends Component {
  render() {
    return (
      <h1>This elementary component's name is  
        {this.props.name &&
            ' ' + this.props.name
        }
      </h1>
    )
  }
}
