import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/common/components/ui/dialog";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import { Button } from "~/common/components/ui/button";
import { Label } from "~/common/components/ui/label";
import { StarIcon } from "lucide-react";
import { useState } from "react";

export default function CreateReviewDialog() {
  const [rating, setRating] = useState<number>(0);
  const [hoveredStar, setHoveredStar] = useState<number>(0);

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-2xl">
          What do you think of this product?
        </DialogTitle>
        <DialogDescription>
          Share your thoughts and experiences with this product.
        </DialogDescription>
      </DialogHeader>
      <Form className="space-y-10">
        <div>
          <Label className="flex flex-col gap-1">
            Review
            <small className="text-muted-foreground">
              What would you rate this product?
            </small>
          </Label>
          <div className="flex gap-2 mt-5">
            {[1, 2, 3, 4, 5].map((star) => (
              <label
                key={star}
                className="relative"
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
              >
                <StarIcon
                  className="size-5 text-yellow-400"
                  fill={
                    hoveredStar >= star || rating >= star
                      ? "currentColor"
                      : "none"
                  }
                />
                <input
                  type="radio"
                  value="star"
                  name="rating"
                  required
                  className="opacity-0 h-px w-px absolute"
                  onChange={() => setRating(star)}
                />
              </label>
            ))}
          </div>
        </div>
        <InputPair
          textArea
          required
          label="Review"
          placeholder="Tell us more about your experience with this product"
          description="Maximum 1000 characters"
        />
        <DialogFooter>
          <Button type="submit">Submit review</Button>
        </DialogFooter>
      </Form>
    </DialogContent>
  );
}
