import React from 'react'
import './products.css';

function products() {
    return (
      <div className='cards'>
    <div className='card'>
      <div className='body'>
        <img className='img' src="https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/15-3520/media-gallery/peripherals_latop_latitude_3520_gallery_3.psd?fmt=png-alpha&pscan=auto&scl=1&wid=3339&hei=2291&qlt=100,0&resMode=sharp2&size=3339,2291" alt=''/>
        <h2 className='title'>Latitude 3520 Laptop</h2>
        <p  className='description'>Processor
11th Gen Intel® Core™ i5-1135G7 (8 MB cache, 4 cores, 8 threads, 2.40 GHz to 4.20 GHz Turbo)</p>
      </div>
      <a className='btn' href='https://www.dell.com/en-us/work/shop/dell-laptops-and-notebooks/latitude-3520-laptop/spd/latitude-15-3520-laptop/s058l3520us'>View Product</a>
    </div>
    <div className='card'>
    <div className='body'>
      <img className='img' src="https://i.dell.com/is/image/DellContent/content/dam/ss2/products/desktops-and-all-in-ones/optiplex/3000-micro/media-gallery/optiplex-3000micro-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,0&resMode=sharp2&size=402,402" alt=''/>
      <h2 className='title'>OptiPlex 3000 Micro</h2>
      <p className='description'>Processor
11th Gen Intel® Core™ i5-1135G7 (8 MB cache, 4 cores, 8 threads, 2.40 GHz to 4.20 GHz Turbo)</p>
    </div>
    <a className='btn'  href='https://www.dell.com/en-us/work/shop/desktops-all-in-one-pcs/optiplex-3000-micro/spd/optiplex-3000-micro/s012do3000mffus'>View Product</a>
  </div>
  <div className='card'>
    <div className='body'>
      <img className='img' src=" https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/workstations/mobile-workstations/precision/15-5570/media-gallery/workstation-precision-15-5570-gallery-4.psd?fmt=png-alpha&pscan=auto&scl=1&wid=4438&hei=2717&qlt=100,0&resMode=sharp2&size=4438,2717" alt=''/>
      <h2 className='title'>Precision 5570 Workstation</h2>
      <p className='description'>15" workstation with 4-sided InfinityEdge display, Dell Optimizer for Precision and up to 12th Gen Intel® Core™ i9, Windows 11 Pro. </p>
    </div>
    <a className='btn' href='https://www.dell.com/en-us/work/shop/workstations-isv-certified/precision-5570-workstation/spd/precision-15-5570-laptop/xctop5570usvp'>View Product</a>
  </div>
  <div className='card'>
    <div className='body'>
      <img className='img' src=" https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/peripherals/input-devices/dell/keyboards/aw510k/gray/ng/keyboard-alienware-aw510k-campaign-hero-504x350-ng.psd?fmt=jpg" alt=''/>
      <h2 className='title'>ALIENWARE LOW PROFILE RGB MECHANICAL GAMING KEYBOARD</h2>
      <p className='description'>A beautifully designed, full-featured gaming keyboard offering programmable keys and dedicated volume control. Made for ultimate performance.</p>
    </div>
    <a className='btn' href='https://www.dell.com/en-us/shop/alienware-low-profile-rgb-mechanical-gaming-keyboard-aw510k-dark-side-of-the-moon/apd/580-aimp/pc-accessories'>View Product</a>
  </div>
  <div className='card'>
    <div className='body'>
      <img className='img' src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/peripherals/alienware/peripherals/alienware-trimode-920h-wireless-headset/media-gallery/headphone-alienware-aw920h-wh-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=290&qlt=100,0&resMode=sharp2&size=290,402" alt=''/>
      <h2 className='title'>ALIENWARE TRI-MODE WIRELESS GAMING HEADSET AW920H </h2>
      <p className='description'>Hear every step and relay every command with a gaming headset that supports Dolby Atmos®, Active Noise Cancelling and versatile connection options</p>
    </div>
    <a className='btn' href='https://www.dell.com/en-us/shop/alienware-tri-mode-wireless-gaming-headset-aw920h-lunar-light/apd/520-aavf/audio'>View Product</a>
  </div>
  </div>
  )
};
export default products
