import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@metafam/ds';
import React from 'react';

import { Listen } from './LatestContentTabs/Listen';
import { Read } from './LatestContentTabs/Read';
import { Watch } from './LatestContentTabs/Watch';

export const LatestContent: React.FC = () => (
  <Tabs mt={5} size="lg" variant="line" colorScheme="gray.600" isFitted>
    <TabList borderBottomWidth={0}>
      <Tab
        color="gray.600"
        _selected={{ color: 'white', borderColor: 'white' }}
      >
        Read
      </Tab>
      <Tab
        color="gray.600"
        _selected={{ color: 'white', borderColor: 'white' }}
      >
        Listen
      </Tab>
      <Tab
        color="gray.600"
        _selected={{ color: 'white', borderColor: 'white' }}
      >
        Watch
      </Tab>
    </TabList>

    <TabPanels>
      <TabPanel className="chakra-tabs__tab-panel--read">
        <Read />
      </TabPanel>
      <TabPanel className="chakra-tabs__tab-panel--listen">
        <Listen />
      </TabPanel>
      <TabPanel className="chakra-tabs__tab-panel--watch">
        <Watch />
      </TabPanel>
    </TabPanels>
  </Tabs>
);
