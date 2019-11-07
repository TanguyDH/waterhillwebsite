import React from 'react'
import './SelectLanguage.scss';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

export default () => {
  return (
      <div className="SelectLanguage">
      <ReactFlagsSelect
          defaultCountry="FR"
          countries={["GB", "FR", 'NL']}
          customLabels={{ "GB": "EN", "FR": "FR", "NL": 'NL' }}
          showSelectedLabel={false} />
      </div>
  )
}





