import { Block1 } from './components/Blocks/Lending/Block1/Block1.jsx';
import { Block2 } from './components/Blocks/Lending/Block2/Block2.jsx';
import { Block3 } from './components/Blocks/Lending/Block3/Block3.jsx';
import { Block4 } from './components/Blocks/Lending/Block4/Block4.jsx';
import { Block5 } from './components/Blocks/Lending/Block5/Block5.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { Header } from './components/Header/Header.jsx';

export function Leading() {

  return (
    <div className='block'>
      <div className="block__container margin">
      <Header />
      <Block1 />
      <Block3 />
      <Block2 />
      <Block4 />
      <Block5 />
      </div>
      <Footer />
    </div>
  );
}
