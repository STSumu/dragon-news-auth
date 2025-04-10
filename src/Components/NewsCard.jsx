import { FaStar, FaEye, FaBookmark, FaShareAlt } from 'react-icons/fa';

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    image_url,
    total_view,
    rating,
    details,
  } = news;

  return (
    <div className="card p-0 w-full bg-base-100 border-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-[#F3F3F3] mb-4">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 h-10 rounded-full">
              <img src={author.img} alt="author" />
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{author.published_date?.split(" ")[0]}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-lg">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 font-bold text-lg leading-snug text-[#403F3F]">
        {title}
      </div>

      {/* Image */}
      <figure className="px-4 pt-4">
        <img src={image_url} alt="news" className="rounded-lg w-full" />
      </figure>

      {/* Description */}
      <div className="text-start px-4 pt-4 text-xs text-[#706F6F]">
        {details.length > 300 ? `${details.slice(0, 300)}...` : details}
        <span className="block text-orange-500 font-semibold cursor-pointer">Read More</span>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mx-4 py-4 border-t text-sm text-gray-600 border-[#E7E7E7]">
        <div className="flex items-center gap-2 text-orange-500">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar key={i} className={`text-sm ${i < Math.round(rating.number) ? 'text-orange-500' : 'text-gray-300'}`} />
          ))}
          <span className="text-black ml-1">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
