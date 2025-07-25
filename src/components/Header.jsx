import React from 'react';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-6 md:p-8">
      
      {/* Synclyft Logo */}
      <div className="flex items-center space-x-4">
        <h2 className="sr-only">SyncLyft</h2>
        <a href="/"  className="opacity-70 hover:opacity-100 transition-opacity flex items-center justify-center">
          <p className='font-semibold text-xl'>SyncLyft</p>
        </a>
      </div>

      {/* Synclyft Icon - centered below "SyncLyft" text, but since we are laying out as flex, we will position this differently or integrate into layout */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="36" viewBox="0 0 55.4 48" className="absolute left-1/2 -translate-x-1/2 top-8 opacity-40">
        <g fill="currentColor">
          <path d="M0 24c0 1.1.3 2.1.8 3l9.7 16.8c1 1.7 2.5 3.1 4.4 3.7 3.6 1.2 7.5-.3 9.4-3.5l2.3-4.1-9.2-16L27.2 7l2.3-4c.7-1.2 1.6-2.2 2.7-3h-15c-2.6 0-5.1 1.4-6.4 3.7L.8 21c-.5.9-.8 1.9-.8 3z"></path>
          <path d="M55.4 24c0-1.1-.3-2.1-.8-3L44.8 4C42.9.7 39-.7 35.4.5c-1.9.6-3.4 2-4.4 3.7L28.7 8 38 24l-9.8 16.9-2.3 4.1c-.7 1.2-1.6 2.2-2.7 3h15.1c2.6 0 5.1-1.4 6.4-3.7l10-17.3c.4-.9.7-1.9.7-3z"></path>
        </g>
      </svg> */}

      {/* Right section: GitHub and Get Started buttons */}
      {/* <div className="flex items-center justify-center space-x-4">
        <a className="flex items-center justify-center glowing-button w-9 p-0 " href="#" target="_blank" rel="noopener noreferrer">
          <span className="glowing-button-effect"></span>
          <span className="glowing-button-text">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.4756 2C5.97315 2 2.33331 5.66667 2.33331 10.2028C2.33331 13.8288 4.66548 16.8982 7.90081 17.9845C8.30531 18.0662 8.45348 17.808 8.45348 17.5908C8.45348 17.4007 8.44015 16.7488 8.44015 16.0697C6.17515 16.5587 5.70348 15.0918 5.70348 15.0918C5.33948 14.1412 4.80015 13.8968 4.80015 13.8968C4.05881 13.3943 4.85415 13.3943 4.85415 13.3943C5.67648 13.4487 6.10798 14.2363 6.10798 14.2363C6.83581 15.4857 8.00865 15.1327 8.48048 14.9153C8.54781 14.3857 8.76365 14.019 8.99281 13.8153C7.18631 13.6252 5.28565 12.919 5.28565 9.76817C5.28565 8.87183 5.60898 8.1385 6.12131 7.56817C6.04048 7.3645 5.75731 6.52233 6.20231 5.39517C6.20231 5.39517 6.88981 5.17783 8.43998 6.23717C9.10366 6.05761 9.78811 5.96627 10.4756 5.9655C11.1631 5.9655 11.864 6.06067 12.5111 6.23717C14.0615 5.17783 14.749 5.39517 14.749 5.39517C15.194 6.52233 14.9106 7.3645 14.8298 7.56817C15.3556 8.1385 15.6656 8.87183 15.6656 9.76817C15.6656 12.919 13.765 13.6115 11.945 13.8153C12.2416 14.0733 12.4976 14.5622 12.4976 15.3363C12.4976 16.4363 12.4843 17.3192 12.4843 17.5907C12.4843 17.808 12.6326 18.0662 13.037 17.9847C16.2723 16.898 18.6045 13.8288 18.6045 10.2028C18.6178 5.66667 14.9646 2 10.4756 2Z" fill="currentColor"></path>
            </svg>
          </span>
        </a>
        <a className="glowing-button" href="#" target="_blank" rel="noopener noreferrer">
          <span className="glowing-button-effect"></span>
          <span className="glowing-button-text">Get started</span>
        </a>
      </div> */}
      
    </header>
  );
};

export default Header;