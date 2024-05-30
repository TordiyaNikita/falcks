import { Block1 } from './components/Blocks/Kurs/Block1/Block1.jsx';
import { Block2 } from './components/Blocks/Kurs/Block2/Block2.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { Header } from './components/Header/Header.jsx';

export function Kurs() {
  return (
    <div>
      <div className='block__container margin'>
        <Header />
        <Block1></Block1>
        <Block2></Block2>
      </div>
      <Footer />
    </div>
  );
}
