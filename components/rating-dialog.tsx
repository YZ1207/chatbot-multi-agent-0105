import React from 'react';
import { Star, StarOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface RatingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (rating: number) => void;
}

export function RatingDialog({ open, onOpenChange, onSubmit }: RatingDialogProps) {
  const [rating, setRating] = React.useState(0);

  const handleSubmit = () => {
    onSubmit(rating);
    setRating(0);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            您对本次随访体验满意度怎么样？
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 py-4">
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className="hover:scale-110 transition-transform"
              >
                {star <= rating ? (
                  <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ) : (
                  <StarOff className="w-8 h-8 text-gray-300" />
                )}
              </button>
            ))}
          </div>
          <Button 
            onClick={handleSubmit}
            disabled={rating === 0}
            className="w-full"
          >
            提交
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 