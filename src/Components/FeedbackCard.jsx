import { Star, Quote } from "lucide-react";
import { ShowMore } from '@re-dev/react-truncate'


export const FeedbackCard = ({ name, review, rating }) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-2xl max-w-md mx-auto relative feedback-card">
      {/* Quotation Mark */}
      <Quote className="absolute top-4 mb-3 left-4 w-6 h-6 text-gray-300" />

      {/* Stars */}
      <div className="flex mb-3 justify-end">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Review text */}
      <ShowMore lines={3}><p className="text-gray-700 italic mb-3 leading-relaxed">"{review}"</p></ShowMore>

      {/* Reviewer */}
      <h4 className="font-semibold text-sm text-gray-900 mt-1.5 text-right">— {name}</h4>
    </div>
  );
};
