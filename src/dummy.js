import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import {Link} from 'react-router-dom';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

const dummy = () => (
  <div>
    <Paper style={style}>
      <Menu>
        <MenuItem primaryText="Maps" containerElement= {<Link to ='/dashboard'/>}/>
        <MenuItem primaryText="Books" />
        <MenuItem primaryText="Flights" />
        <MenuItem primaryText="Apps" />
      </Menu>
    </Paper>
  </div>
);

export default dummy;
