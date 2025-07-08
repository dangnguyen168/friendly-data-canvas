
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
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Chi tiết sản phẩm</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-blue-500 rounded-lg flex items-center justify-center overflow-hidden">
            <img 
              src={productImage} 
              alt="Product" 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to a placeholder if image fails to load
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).parentElement!.innerHTML = 
                  '<div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-xs">IMG</div>';
              }}
            />
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-600">Mã sản phẩm</p>
            <p className="font-semibold">{productCode}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-600">Tên sản phẩm</p>
            <p className="font-semibold">{productName}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-600">Kích thước (dm2)</p>
            <p className="font-semibold text-lg">{size}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-600">Chế độ chạy</p>
            <p className="font-semibold">{mode}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
