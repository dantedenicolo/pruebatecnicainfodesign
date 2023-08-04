const Tabs = () => {
  // const [activeTab, setActiveTab] = useState(0);

  // const handleTabChange = (event, newValue) => {
  //   setActiveTab(newValue);
  // };

  return (
    <div className="fixed top-64 w-70% mx-auto bg-white p-4 shadow  dark:bg-indigo-600 dark:text-white">
      {/* <AppBar position="static">
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
        </Tabs>
      </AppBar>
      {activeTab === 0 && <TabPanel>Tab 1 content</TabPanel>}
      {activeTab === 1 && <TabPanel>Tab 2 content</TabPanel>}
      {activeTab === 2 && <TabPanel>Tab 3 content</TabPanel>} */}

      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-white">
        <li className="mr-2">
          <a
            href="#"
            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-yellow-500 dark:hover:bg-yellow-500 dark:hover:text-gray-700"
          >
            Profile
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-yellow-500 dark:hover:bg-yellow-500 dark:hover:text-gray-700"
          >
            Dashboard
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-yellow-500 dark:hover:bg-yellow-500 dark:hover:text-gray-700"
          >
            Settings
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-yellow-500 dark:hover:bg-yellow-500 dark:hover:text-gray-700"
          >
            Contacts
          </a>
        </li>
        <li>
          <a
            href="#"
            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-yellow-500 dark:hover:bg-yellow-500 dark:hover:text-gray-700"
          >
            Disabled
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Tabs;