import expense1 from "@/assets/expense-1.jpg";
import expense2 from "@/assets/expense-2.jpg";
import expense3 from "@/assets/expense-3.jpg";
import expense4 from "@/assets/expense-4.jpg";
import expense5 from "@/assets/expense-5.jpg";
import expense6 from "@/assets/expense-6.jpg";
import expense7 from "@/assets/expense-7.jpg";
import expense8 from "@/assets/expense-8.jpg";
import expense9 from "@/assets/expense-9.jpg";

const photos = [
  { id: 1, image: expense1, label: "Pho lunch", amount: 150000 },
  { id: 2, image: expense2, label: "Coffee", amount: 52000 },
  { id: 3, image: expense3, label: "Shopping", amount: 850000 },
  { id: 4, image: expense4, label: "Burger", amount: 220000 },
  { id: 5, image: expense5, label: "Sushi", amount: 599000 },
  { id: 6, image: expense6, label: "Pizza", amount: 280000 },
  { id: 7, image: expense7, label: "Nail salon", amount: 450000 },
  { id: 8, image: expense8, label: "Tech", amount: 2500000 },
  { id: 9, image: expense9, label: "Banh mi", amount: 35000 },
];

const PhotosView = () => {
  return (
    <div className="px-4 py-2 animate-fade-in">
      <div className="grid grid-cols-3 gap-2">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className="aspect-square rounded-2xl overflow-hidden relative group cursor-pointer animate-scale-in hover:scale-105 transition-transform"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <img 
              src={photo.image} 
              alt={photo.label}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2">
              <p className="text-xs text-foreground font-medium truncate">
                {photo.label}
              </p>
              <p className="text-xs font-semibold text-expense">
                -{photo.amount.toLocaleString('vi-VN')}đ
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotosView;
