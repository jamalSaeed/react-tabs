import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Form from './Form';
import CancelIcon from '@mui/icons-material/Cancel';
import DataContext from '../dataContext';
import { faIcons } from './Form';
import { Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const { data, addItem, deleteItem } = React.useContext(DataContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const deleteTab = (itemId) => {

    deleteItem(itemId);
    setValue(0)

  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Form" {...a11yProps(0)} />
          {
            data?.map((item) => (
              <Tab  iconPosition='right' label={<Stack direction="row" spacing={1} alignItems="center">
                  <FontAwesomeIcon icon={faIcons[item.icon]} /> {/* Use FontAwesomeIcon to render the icon */}
                  <Typography variant="body1">{item.name}</Typography>
                  <Box onClick={()=> deleteTab(item.id)}>

                  <CancelIcon />
                  </Box>

                </Stack>} {...a11yProps(item.id)} />
            ))
          }
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Form />
      </TabPanel>
      {
        data.map((item) => (
          <TabPanel value={value} index={item.id}>
            {item.name}
          </TabPanel>
        ))
      }

    </Box>
  );
}