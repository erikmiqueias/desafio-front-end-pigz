interface CardSectionProps {
  cardTitle: string;
  cardSubtitle: string;
  src: string;
}

const CardSection = ({ cardTitle, cardSubtitle, src }: CardSectionProps) => {
  return (
    <div className="transition-all flex flex-col items-center justify-center w-[270px] h-[243px] bg-[#fafafa] rounded-[64px] hover:border-2 mb-5">
      <img className="w-[72px] mb-8" src={src} />
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-[20px] font-semibold">{cardTitle}</h2>
        <p className="font-normal">{cardSubtitle}</p>
      </div>
    </div>
  );
};

export default CardSection;
