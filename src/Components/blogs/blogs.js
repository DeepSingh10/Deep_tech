import React from 'react'
import './blogs.css';

function blogs() {
    return (
        <>
        <div className='head'>
        <h1>Blogs</h1>
        </div>
      <div className='cards'>
    <div className='card'>
      <div className='body'>
        <img className='img' src="https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/774bf43187ab1a6354991955d8d36e7f.jpg" alt=''/>
        <h2 className='title'>ByThe Inventory Staff</h2>
        <p  className='description'>Best Deals of the Day: Microsoft Office Lifetime License, Puma, Beats Studio3 Headphones</p>
      </div>
      <a className='btn' href='https://theinventory.com/get-the-microsoft-office-professional-2021-for-windows-1849076144'>Continue Reading</a>
    </div>
    <div className='card'>
    <div className='body'>
      <img className='img' src="https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/eqjtty9vwvobzz0lclrq.jpg" alt=''/>
      <h2 className='title'>ByGeorge Dvorsky</h2>
      <p className='description'>Artemis 1 and the First Launch of NASA’s Megarocket: What to Know</p>
    </div>
    <a className='btn'  href='https://gizmodo.com/nasa-artemis-1-sls-launch-goals-timeline-what-to-know-1849391803'>Continue Reading</a>
  </div>
  <div className='card'>
    <div className='body'>
      <img className='img' src=" https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/26c303726ec2038b053a894424992578.jpg" alt=''/>
      <h2 className='title'>ByMack DeGeurin</h2>
      <p className='description'>Ethereum's Final Proof-of-Stake Test Deemed a 'Success' </p>
    </div>
    <a className='btn' href='https://gizmodo.com/ethereum-ether-crypto-proof-of-stake-crypto-mining-1849400656'>Continue Reading</a>
  </div>
  <div className='card'>
    <div className='body'>
      <img className='img' src="https://i.kinja-img.com/gawker-media/image/upload/7df79fb5dfb296531c62b878ab81894a.jpg" alt=''/>
      <h2 className='title'>By Kyle Barr</h2>
      <p className='description'>Google Realizes It Needs to Do More to Fight Misinformation in Searches</p>
    </div>
    <a className='btn' href='https://gizmodo.com/google-snippets-search-misinformation-1849400276'>Continue Reading</a>
  </div>
  </div>
  </>
    )
};
export default blogs

