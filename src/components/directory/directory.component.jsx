import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.component.styles.scss';
import SECTIONS from './directory.data';

export default class Directory extends Component {
  constructor() {
    super();
    this.state = {
      SECTIONS
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.SECTIONS.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
