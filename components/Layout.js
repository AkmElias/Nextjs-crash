import Head from 'next/head'
import Nav from './Nav'

const Layout  = (props) =>(
   <div>
       <Head>
           <title>BitzPrice</title>
           <link rel='stylesheet'
            href='https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/cerulean/bootstrap.min.css'
           >
           </link>
       </Head>
       <Nav/>
       <div className='container'>
         {props.children} 
       </div>
      
   </div>
)

export default Layout;