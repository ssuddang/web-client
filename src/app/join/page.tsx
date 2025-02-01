import Content from '@/components/JoinPage/Content';
import FAQ from '@/components/JoinPage/FAQ';
import Poster from '@/components/JoinPage/Poster';
import Schedule from '@/components/JoinPage/Schedule';
import Title from '@/components/JoinPage/Title';

function JoinPage() {
  return (
    <div>
      <Title />
      <Content />
      <Poster />
      <Schedule />
      <FAQ />
    </div>
  );
}

export default JoinPage;
