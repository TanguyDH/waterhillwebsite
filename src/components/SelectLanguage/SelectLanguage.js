import React from 'react'
import './SelectLanguage.scss';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

export default () => {
  return (
      <div className="SelectLanguage">
      <ReactFlagsSelect
          defaultCountry="FR"
        countries={["GB", "BE", "FR", "NL"]}
        customLabels={{ "GB": "Anglais", "BE": "Français", "FR": "Français", "NL": "Nederlands" }}
          showSelectedLabel={false} />
      </div>
  )
}





