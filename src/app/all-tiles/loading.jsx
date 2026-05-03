
import { GridLoader } from 'react-spinners';

const loading = () => {
    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <GridLoader size={15} color="#D4AF37" />
        </div>
    );
};

export default loading;