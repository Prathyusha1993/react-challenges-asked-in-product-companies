import React from 'react'
import DropdownEx from './DropdownEx';

const optionsItem = [
    {id:1, label:'United States', value:'us'},
    {id:2, label:'United Kingdom', value:'uk'},
    {id:3, label:'Australia', value:'au'},
    {id:4, label:'Canada', value:'ca'},
    {id:5, label:'India', value:'in'},
    {id:6, label:'Germany', value:'de'},
    {id:7, label:'France', value:'fr'},
    {id:8, label:'Japan', value:'jp'},
    {id:9, label:'Brazil', value:'br'},
];

function DropdownUsage() {

  const handleSelect = (item) => {
    console.log('selected item:', item);
  }

  return (
    <div>
        <h3>Dropdown Usage</h3>
        <DropdownEx items = {optionsItem} onSelect={handleSelect}/>
    </div>
  )
}

export default DropdownUsage;