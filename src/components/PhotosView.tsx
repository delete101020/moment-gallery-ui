const photos = [
  { id: 1, emoji: "🍜", label: "Ramen lunch", amount: -15.50 },
  { id: 2, emoji: "☕", label: "Morning coffee", amount: -5.20 },
  { id: 3, emoji: "🛒", label: "Grocery run", amount: -85.00 },
  { id: 4, emoji: "🍔", label: "Burger dinner", amount: -22.00 },
  { id: 5, emoji: "🎮", label: "Game purchase", amount: -59.99 },
  { id: 6, emoji: "🍕", label: "Pizza night", amount: -28.00 },
  { id: 7, emoji: "💅", label: "Nail salon", amount: -45.00 },
  { id: 8, emoji: "📱", label: "Phone case", amount: -25.00 },
  { id: 9, emoji: "🍣", label: "Sushi dinner", amount: -65.00 },
];

const PhotosView = () => {
  return (
    <div className="px-4 py-2 animate-fade-in">
      <div className="grid grid-cols-3 gap-2">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className="aspect-square bg-card rounded-2xl flex flex-col items-center justify-center p-2 hover:bg-card/80 transition-all cursor-pointer animate-scale-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <span className="text-4xl mb-2">{photo.emoji}</span>
            <p className="text-xs text-muted-foreground text-center truncate w-full">
              {photo.label}
            </p>
            <p className="text-xs font-semibold text-expense">
              ${Math.abs(photo.amount).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotosView;
