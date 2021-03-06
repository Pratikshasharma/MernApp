import React from 'react';
import Assessment from 'material-ui-icons/Assessment';
import GridOn from 'material-ui-icons/GridOn';
import PermIdentity from 'material-ui-icons/PermIdentity';
import Web from 'material-ui-icons/Web';
// import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import ChevronRight from 'material-ui-icons/ChevronRight';

const product_names = "product 1, product 2, product 3, product 4 ";


const data = {
  // menus: [
  //   { text: 'DashBoard', icon: <Assessment/>, link: '/dashboard' },
  //   { text: 'Form Page', icon: <Web/>, link: '/form' },
  //   { text: 'Table Page', icon: <GridOn/>, link: '/table' },
  //   { text: 'Login Page', icon: <PermIdentity/>, link: '/login' }
  // ],

  menus: [
    { text: 'DashBoard', icon: <Assessment/>, link: '/dashboard' },
    { text: 'Ingredients', icon: <Web/>, link: '/form' },
    { text: 'Storage', icon: <GridOn/>, link: '/table' },
    { text: 'Vendors', icon: <PermIdentity/>, link: '/login' }
  ],


  tablePage: {
    // items: [
    //   {id: 1, name: 'Product 1', price: '$50.00', category: 'Category 1'},
    //   {id: 2, name: 'Product 2', price: '$150.00', category: 'Category 2'},
    //   {id: 3, name: 'Product 3', price: '$250.00', category: 'Category 3'},
    //   {id: 4, name: 'Product 4', price: '$70.00', category: 'Category 4'},
    //   {id: 5, name: 'Product 5', price: '$450.00', category: 'Category 5'},
    //   {id: 6, name: 'Product 6', price: '$950.00', category: 'Category 6'},
    //   {id: 7, name: 'Product 7', price: '$550.00', category: 'Category 7'},
    //   {id: 8, name: 'Product 8', price: '$750.00', category: 'Category 8'}
    // ]

    items: [
      {name: "pepper",pkg: "sack",temperature: "room", vendors: "vendor1/10, vendor2/20"},
      {name: "salt",pkg: "sack",temperature: "fridge", vendors: "vendor3/20, vendor4/30"},
      {name: "oil",pkg: "pail",temperature: "room", vendors: "target/35"},
    ]

  },
  dashBoardPage: {
    recentProducts: [
      {id: 1, title: 'Samsung TV', text: 'Samsung 32 1080p 60Hz LED Smart HDTV.'},
      {id: 2, title: 'Playstation 4', text: 'PlayStation 3 500 GB System'},
      {id: 3, title: 'Apple iPhone 6', text: 'Apple iPhone 6 Plus 16GB Factory Unlocked GSM 4G '},
      {id: 4, title: 'Apple MacBook', text: 'Apple MacBook Pro MD101LL/A 13.3-Inch Laptop'}
    ],
    monthlySales: [
      {name: 'Jan', uv: 3700},
      {name: 'Feb', uv: 3000},
      {name: 'Mar', uv: 2000},
      {name: 'Apr', uv: 2780},
      {name: 'May', uv: 2000},
      {name: 'Jun', uv: 1800},
      {name: 'Jul', uv: 2600},
      {name: 'Aug', uv: 2900},
      {name: 'Sep', uv: 3500},
      {name: 'Oct', uv: 3000},
      {name: 'Nov', uv: 2400},
      {name: 'Dec', uv: 2780}
    ],
    newOrders: [
      {pv: 2400},
      {pv: 1398},
      {pv: 9800},
      {pv: 3908},
      {pv: 4800},
      {pv: 3490},
      {pv: 4300}
    ]
    // browserUsage: [
    //   {name: 'Chrome', value: 800, color: cyan600, icon: <ExpandMore/>},
    //   {name: 'Firefox', value: 300, color: pink600, icon: <ChevronRight/>},
    //   {name: 'Safari', value: 300, color: purple600, icon: <ExpandLess/>}
    // ]
  }
};

export default data;
