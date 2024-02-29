import MenuList from "./menu-list";
import "./styles.css";

export function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
}
