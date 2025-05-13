import { infocards } from '@/components/data_cards/infocards';
import PingPongCard from '@/components/PingPongCard';

const PingPongList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto w-full">
      {infocards.map(card => (
        <PingPongCard
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          buttonText={card.buttonText}
        />
      ))}
    </div>
  );
};

export default PingPongList;
