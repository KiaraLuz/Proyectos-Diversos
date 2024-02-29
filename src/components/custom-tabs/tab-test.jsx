import { Tabs } from "./tabs";
import "./styles.css";

function RandomComponent() {
  return <div>Some random content</div>;
}

export function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
    {
      label: "Tab 4",
      content: <div>This is content for Tab 4</div>,
    },
    {
      label: "Tab 5",
      content: <div>This is content for Tab 5</div>,
    },
  ];

  function handleChange(currentTabIndex) {}

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
