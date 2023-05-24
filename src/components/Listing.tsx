import React from 'react'
import { Lists } from './data'

interface Props {
  lists: Lists
}

export function Listing ({lists}: Props) {
  return (
    <>
      {Lists.map((element) => (
        <div className="item" key={element.listing_id}>
          <div className="item-image">
            <a href={element.url}>
              <img
                src={element.MainImage?.url_570xN}>
              </img>
            </a>
          </div>
          <div className="item-details">
          <p className="item-title"> {element.title?.substring(0, 50) + '...'}</p>
            <p className="item-price"> {(() => {
              if (element.currency_code === 'USD') return ('$');
              if (element.currency_code === 'EUR') return ('€');
              else return ('GBP')
            })()} {element.price}</p>
            <div className="item-quantity">
              {(() => {
                if (element.quantity <= 10) return (<p className='level-low'>{element.quantity} left</p>);
                if (element.quantity <= 20) return (<p className='level-low'>{element.quantity} left</p>);
                if (element.quantity > 20) return (<p className='level-low'>{element.quantity} left</p>)
              })()}</div>
          </div>
        </div>
      )
      )
      }
    </>
  )
}
