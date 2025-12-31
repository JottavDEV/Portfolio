import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Divisor } from '../components/Divisor';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Divisor direction="left-to-right" />
      <Skills />
      <Divisor direction="right-to-left" />
      <Projects />
    </>
  );
}


