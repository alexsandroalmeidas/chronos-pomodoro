import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <div className='container-fluid'>
        <div className='container'>
          <div className='content'>
            <section>LOGO</section>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='container'>
          <div className='content'>
            <section>MENU</section>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='container'>
          <div className='content'>
            <section>FORMULÁRIO</section>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='container'>
          <div className='content'>
            <section>FOOTER</section>
          </div>
        </div>
      </div>
    </>
  );
}
