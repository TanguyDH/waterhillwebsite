import React from 'react'
import './FaqHeader.scss';
import { IoIosSearch} from 'react-icons/io';


export default (props) => {
  return (
      <div className="FaqHeader">
          <h2>Foire aux questions</h2>
          <h3>Besoin d'aide ?</h3>

          <form>
              <div>
                  <IoIosSearch />
              </div>
              <input
                  onChange={props.onTextChange}
                  value={props.text}
                  type="text"
                  placeholder="Search ..."
              />
          </form>
      </div>
  )
}
