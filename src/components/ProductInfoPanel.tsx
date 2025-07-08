
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductInfoPanelProps {
  productImage: string;
  productCode: string;
  productName: string;
  size: number;
  mode: string;
}

export const ProductInfoPanel = ({ 
  productImage, 
  productCode, 
  productName, 
  size, 
  mode 
}: ProductInfoPanelProps) => {
  return (
    <Card className="w-full">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Chi tiết sản phẩm</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 text-center">
        <div className="flex justify-center">
          <div className="w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center overflow-hidden">
            <img 
              src={productImage} 
              alt="Product" 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to a placeholder if image fails to load
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).parentElement!.innerHTML = 
                  '<div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-lg font-bold">IMG</div>';
              }}
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <p className="text-xl text-gray-600 font-normal">Mã sản phẩm</p>
            <p className="text-2xl font-bold">{productCode}</p>
          </div>
          
          <div>
            <p className="text-xl text-gray-600 font-medium">Tên sản phẩm</p>
            <p className="text-2xl font-bold">{productName}</p>
          </div>
          
          <div>
            <p className="text-xl text-gray-600 font-medium">Kích thước (dm2)</p>
            <p className="text-3xl font-bold">{size}</p>
          </div>
          
          <div>
            <p className="text-xl text-gray-600 font-medium">Chế độ chạy</p>
            <p className="text-2xl font-bold">{mode}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
