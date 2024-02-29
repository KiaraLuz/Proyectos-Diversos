import "./App.css";
import { Accordian } from "./components/accordian";
import { Tabs } from "./components/custom-tabs/tabs";
import { TabTest } from "./components/custom-tabs/tab-test";
import { ImagenSlider } from "./components/image-slider";
import { LightDarkMode } from "./components/light-dark-mode";
import { LoadMore } from "./components/load-more";
import { QrGenerator } from "./components/qr-generator";
import { RandomColor } from "./components/random-color";
import { StarRating } from "./components/star-rating";
import { TreeView } from "./components/tree-view";
import menus from "./components/tree-view/data";
import { ModalTest } from "./components/custom-modal/modal-test";
import { GitHubProfile } from "./components/github-profile";
import { SearchAutomplete } from "./components/search-autocomplete";
import { TicTacToe } from "./components/tic-tac-toe";

function App() {
  return (
    <div className="App">
      <Accordian />
      <RandomColor />
      <StarRating />
      <ImagenSlider />
      <LoadMore />
      <TreeView menus={menus} />
      <QrGenerator />
      <LightDarkMode />
      <TabTest />
      <ModalTest />
      <GitHubProfile />
      <SearchAutomplete />
      <TicTacToe />
    </div>
  );
}

export default App;
