import React from "react";
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
 
const TickerNav = () => (
  <TradingViewWidget
    symbol="NASDAQ:AAPL"
    theme={Themes.DARK}
    locale="fr"
    autosize
  />
);

  export default TickerNav;