import React from 'react';
import DataGrid from "devextreme-react/data-grid";
import { Column, Button } from "devextreme-react/data-grid";
import { trigger } from "devextreme/events";

const customers = [{
  'ID': 1,
  'CompanyName': 'Super Mart of the West',
  'Address': '702 SW 8th Street',
  'City': 'Bentonville',
  'State': 'Arkansas',
  'Zipcode': 72716,
  'Phone': '(800) 555-2797',
  'Fax': '(800) 555-2171',
  'Website': 'http://www.nowebsitesupermart.com'
}, {
  'ID': 2,
  'CompanyName': 'Electronics Depot',
  'Address': '2455 Paces Ferry Road NW',
  'City': 'Atlanta',
  'State': 'Georgia',
  'Zipcode': 30339,
  'Phone': '(800) 595-3232',
  'Fax': '(800) 595-3231',
  'Website': 'http://www.nowebsitedepot.com'
}, {
  'ID': 3,
  'CompanyName': 'K&S Music',
  'Address': '1000 Nicllet Mall',
  'City': 'Minneapolis',
  'State': 'Minnesota',
  'Zipcode': 55403,
  'Phone': '(612) 304-6073',
  'Fax': '(612) 304-6074',
  'Website': 'http://www.nowebsitemusic.com'
}, {
  'ID': 4,
  'CompanyName': "Tom's Club",
  'Address': '999 Lake Drive',
  'City': 'Issaquah',
  'State': 'Washington',
  'Zipcode': 98027,
  'Phone': '(800) 955-2292',
  'Fax': '(800) 955-2293',
  'Website': 'http://www.nowebsitetomsclub.com'
}, {
  'ID': 5,
  'CompanyName': 'E-Mart',
  'Address': '3333 Beverly Rd',
  'City': 'Hoffman Estates',
  'State': 'Illinois',
  'Zipcode': 60179,
  'Phone': '(847) 286-2500',
  'Fax': '(847) 286-2501',
  'Website': 'http://www.nowebsiteemart.com'
}, {
  'ID': 6,
  'CompanyName': 'Walters',
  'Address': '200 Wilmot Rd',
  'City': 'Deerfield',
  'State': 'Illinois',
  'Zipcode': 60015,
  'Phone': '(847) 940-2500',
  'Fax': '(847) 940-2501',
  'Website': 'http://www.nowebsitewalters.com'
}, {
  'ID': 7,
  'CompanyName': 'StereoShack',
  'Address': '400 Commerce S',
  'City': 'Fort Worth',
  'State': 'Texas',
  'Zipcode': 76102,
  'Phone': '(817) 820-0741',
  'Fax': '(817) 820-0742',
  'Website': 'http://www.nowebsiteshack.com'
}, {
  'ID': 8,
  'CompanyName': 'Circuit Town',
  'Address': '2200 Kensington Court',
  'City': 'Oak Brook',
  'State': 'Illinois',
  'Zipcode': 60523,
  'Phone': '(800) 955-2929',
  'Fax': '(800) 955-9392',
  'Website': 'http://www.nowebsitecircuittown.com'
}, {
  'ID': 9,
  'CompanyName': 'Premier Buy',
  'Address': '7601 Penn Avenue South',
  'City': 'Richfield',
  'State': 'Minnesota',
  'Zipcode': 55423,
  'Phone': '(612) 291-1000',
  'Fax': '(612) 291-2001',
  'Website': 'http://www.nowebsitepremierbuy.com'
}, {
  'ID': 10,
  'CompanyName': 'ElectrixMax',
  'Address': '263 Shuman Blvd',
  'City': 'Naperville',
  'State': 'Illinois',
  'Zipcode': 60563,
  'Phone': '(630) 438-7800',
  'Fax': '(630) 438-7801',
  'Website': 'http://www.nowebsiteelectrixmax.com'
}, {
  'ID': 11,
  'CompanyName': 'Video Emporium',
  'Address': '1201 Elm Street',
  'City': 'Dallas',
  'State': 'Texas',
  'Zipcode': 75270,
  'Phone': '(214) 854-3000',
  'Fax': '(214) 854-3001',
  'Website': 'http://www.nowebsitevideoemporium.com'
}, {
  'ID': 12,
  'CompanyName': 'Screen Shop',
  'Address': '1000 Lowes Blvd',
  'City': 'Mooresville',
  'State': 'North Carolina',
  'Zipcode': 28117,
  'Phone': '(800) 445-6937',
  'Fax': '(800) 445-6938',
  'Website': 'http://www.nowebsitescreenshop.com'
}];

const App = () => {
  // create context menu items
  const handleContextMenu = (e) => {
    if (e.row.rowType === "data") {
      e.items = [
        {
          text: "edit",
          onItemClick: function () {
            e.component.editRow(e.row.rowIndex);
          }
        },
        {
          text: "insert",
          onItemClick: function () {
            e.component.addRow();
          }
        },
        {
          text: "delete",
          onItemClick: function () {
            e.component.deleteRow(e.row.rowIndex);
          }
        }
      ];
    }
  };

  // Should trigger the event which open the Context menu
  const subMenuIconClick = (e) => {
    console.log('e.target', e.event.target)
    const newEvent = { ...e.event, type: "dxcontextmenu" };
    e.event.stopPropagation();
    trigger(e.event.target, newEvent);
  };

  return (
    <DataGrid
      dataSource={customers}
      keyExpr="ID"
      showBorders={true}
      onContextMenuPreparing={(e) => handleContextMenu(e)}
    >
      <Column dataField="CompanyName" caption="CompanyName" dataType="string" />
      <Column dataField="City" caption="City" dataType="string" />
      <Column dataType="string" width="25px" type="buttons">
        <Button hint="Submenu" onClick={subMenuIconClick} icon="overflow" />
      </Column>
    </DataGrid>
  );
}

export default App;
