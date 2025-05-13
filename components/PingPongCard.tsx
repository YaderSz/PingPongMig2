
interface CardProps {
  id: string;
  title: string;
  description: string;
  buttonText: string;
}

const PingPongCard: React.FC<CardProps> = ({ id, title, description, buttonText }) => {
  const image = `/img/CardImg/${id}.webp`;

  return (
    <div
      className="bg-white max-w-xl rounded-xl overflow-hidden shadow-md bg-white border border-gray-200 mt-4 transform transition duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(59,130,246,0.5),0_0_10px_rgba(255,255,255,0.3)]"
    >
      <img className="w-full h-96 object-cover" src={image} alt={title} />

      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-lg text-gray-600 mb-4">{description}</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PingPongCard;
