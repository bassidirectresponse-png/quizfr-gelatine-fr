interface OptionCardProps {
  label: string;
  icon?: string;
  selected?: boolean;
  onClick: () => void;
}

const OptionCard = ({ label, icon, selected, onClick }: OptionCardProps) => (
  <button
    onClick={onClick}
    className={`w-full p-4 rounded-[22px] border-2 text-left font-medium text-base transition-colors duration-150 active:scale-[0.97] ${
      selected
        ? "border-primary bg-primary/10 text-foreground"
        : "border-border bg-card text-foreground hover:border-primary/40"
    }`}
  >
    {icon && <span className="mr-2 text-xl">{icon}</span>}
    {label}
  </button>
);

export default OptionCard;
