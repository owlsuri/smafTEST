import '../styles/globals.css'
import "antd/dist/antd.css";
import "../styles/globals.css";
import 'react-calendar/dist/Calendar.css';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {
  return (
  <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
  )
}

export default MyApp
