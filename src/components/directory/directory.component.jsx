import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.component.styles.scss';
import { sections } from './directory.data';

export default class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
