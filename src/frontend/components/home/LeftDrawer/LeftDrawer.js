import React from 'react';
import Drawer from 'material-ui/Drawer';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import styles from './styles';

// import dummyAvatarImageLink = "http://www.material-ui.com/images/uxceo-128.jpg";

const LeftDrawer = (props) => {
  let { navDrawerOpen } = props;


  return (
    <Drawer
      docked={true}
      open={navDrawerOpen}>
        <div style={styles.logo}>
          Real Providers
        </div>
        <div style={styles.avatar.div}>
          <Avatar src={styles.avatar.img.dummyImageLink}
                  size={styles.avatar.img.size}
                  style={styles.avatar.icon}/>
          <span style={styles.avatar.span}>{props.username}</span>
        </div>
        <div>
          {props.menus.map((menu, index) =>
            <MenuItem
              key={index}
              style={styles.menuItem}
              primaryText={menu.text}
              leftIcon={menu.icon}
              containerElement={<Link to={menu.link}/>}
            />
          )}
        </div>
    </Drawer>
  );
};

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool,
  menus: PropTypes.array,
  username: PropTypes.string,
};

export default LeftDrawer;
