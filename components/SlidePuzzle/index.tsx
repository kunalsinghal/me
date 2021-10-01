import Image from 'next/image'

interface SlidePuzzleProps {
  imageURL: string;
}

export const SlidePuzzle = ({ imageURL }: SlidePuzzleProps) => {
  return (
    <div>
      <Image src={imageURL} layout="fill" />
    </div>
  );
};
