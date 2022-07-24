import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Intro } from './../Intro';
import { Workings } from './../Workings';
import { Explore } from './../Explore';
import { MyTags } from './../MyTags';
import { SocialProfile } from './../SocialProfile';
import { Misinformation } from './../Misinformation';
import { Xmtp } from './../Xmtp';
import { CovalentJit } from './../CovalentJit';
import { Roadmap } from './../Roadmap';

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
  const [value, setValue] = React.useState(0);

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
          <Tab label="Workings" {...a11yProps(1)} />
          <Tab label="Explore" {...a11yProps(2)} />
          <Tab label="My Tags" {...a11yProps(3)} />
          <Tab label="Case: Social Profile" {...a11yProps(4)} />
          <Tab label="Case: Misinformation" {...a11yProps(5)} />
          <Tab label="Case: XMTP" {...a11yProps(6)} />
          <Tab label="Covalent JIT" {...a11yProps(7)} />
          <Tab label="Roadmap" {...a11yProps(8)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Intro />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Workings />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Explore />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <MyTags />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <SocialProfile />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Misinformation />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Xmtp />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <CovalentJit />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <Roadmap />
      </TabPanel>
    </Box>
  );
}
