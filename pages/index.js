import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import Prices from '../components/Prices'

const Index = (props) =>(
    <Layout>
        <div>
            <h2>Welcome to bitzPrice</h2>
            {/* {props.time.updated} */}
            <p>Check current Bitcoin rate</p>
            <Prices bpi = {props.bpi.bpi} />
        </div>
     </Layout>
)

Index.getInitialProps = async function() {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
  
    return {
      bpi: data
    };
}

export default Index;