import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import DataGrid, { Column, Button } from "devextreme-react/data-grid";

configure({ adapter: new Adapter() });

global.mount = mount;
describe("Grid", () => {
  let wrapper;
  let dataGrid;

  beforeAll(() => {
    wrapper = mount(<App />);
    const ref = wrapper.find(DataGrid);
    dataGrid = ref.instance();
    dataGrid.instance.option("loadingTimeout", undefined);
    dataGrid.instance.getDataSource().load();
  });

  it("renders", () => {
    expect(wrapper).toBeDefined();
  });

  it("open context menu", () => {
    const contextButton = wrapper.find(Column).at(2).find(Button); // How we can get the html element from this button component?
    const target = contextButton;
    console.log(target.debug()); // Debug log the component
    console.log(target.html()); // HTML print null
    contextButton.props().onClick({
      event: {
        target, // I need to pass Element here, it should be the 'a' tag
        stopPropagation: () => {}
      }
    });
    
  });
});
