
import React from 'react';
import { Star } from 'lucide-react';
import { Avatar } from "@/components/ui/avatar";
import { UserRound } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  date: string;
  avatarLetter: string;
  avatarColor: string;
  text: string;
  rating: number;
}

const ReviewCard = ({ name, date, avatarLetter, avatarColor, text, rating }: ReviewCardProps) => {
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 md:p-6 h-full flex flex-col m-2">
      <div className="flex items-start justify-between mb-2 md:mb-3">
        <div className="flex items-center">
          <Avatar className={`h-8 w-8 md:h-10 md:w-10 ${avatarColor} text-white mr-2 md:mr-3 flex items-center justify-center`}>
            <UserRound className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </Avatar>
          <div>
            <h4 className="font-medium text-gray-900 text-sm md:text-base">{name}</h4>
            <div className="flex items-center text-[10px] md:text-xs text-gray-500">
              <span>{formatDate(date)}</span>
              <img 
                src="/lovable-uploads/e47a9fc3-24d7-4786-9aa0-dc4ebd772182.png" 
                alt="Google" 
                className="h-3 md:h-4 ml-1"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex mb-2 md:mb-3">
        {Array(rating).fill(0).map((_, starIndex) => (
          <Star key={starIndex} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
        ))}
      </div>
      
      <p className="text-gray-700 text-xs md:text-sm flex-grow line-clamp-6 md:line-clamp-none">{text}</p>
      
      <div className="mt-3 md:mt-4 text-[10px] md:text-xs text-gray-400 border-t pt-1 md:pt-2">
        Esconder
      </div>
    </div>
  );
};

export default ReviewCard;
