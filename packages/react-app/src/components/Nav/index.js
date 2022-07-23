import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Intro } from './../Intro';
import { Explore } from './../Explore';
import { MyTags } from './../MyTags';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function Nav() {
  const [value, setValue] = React.useState(3);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="app navigation tabs"
          centered
        >
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Trust Models" {...a11yProps(1)} />
          <Tab label="Explore" {...a11yProps(2)} />
          <Tab label="My Tags" {...a11yProps(3)} />
          <Tab label="Forge" {...a11yProps(4)} />
          <Tab label="Join" {...a11yProps(5)} />
          <Tab label="Web3" {...a11yProps(6)} />
          <Tab label="Web2" {...a11yProps(7)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Intro />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Intro />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Explore />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <MyTags />
      </TabPanel>
      <TabPanel value={value} index={4}>
        Forge
      </TabPanel>
      <TabPanel value={value} index={5}>
        Join
      </TabPanel>
      <TabPanel value={value} index={6}>
        Web3
      </TabPanel>
      <TabPanel value={value} index={7}>
        Web2
      </TabPanel>
    </Box>
  );
}
