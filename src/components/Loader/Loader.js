import { Circles } from 'react-loader-spinner';
import '../../components/styles.scss'

const Loader =()=> (
  <Circles className='Spiner'
    height="500"
    width="500"
    color="#4fa94d"
    ariaLabel="circles-loading"
    wrapperStyle={{}}
    wrapperClass="Spiner"
    visible={true}
  />
);

export default Loader;
