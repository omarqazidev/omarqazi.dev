import { links } from '../data/socials';
import Card from './Components/Card';

function App() {
    return (
        <div className="flex h-screen">
            <Card links={links} />
        </div>
    );
}

export default App;
