
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, QrCode } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { ProductInfoPanel } from "@/components/ProductInfoPanel";
import { ProcessCard } from "@/components/ProcessCard";
import { StatusBar } from "@/components/StatusBar";

const Index = () => {
  const [selectedLine, setSelectedLine] = useState('01');
  
  const productData = {
    productImage: "/lovable-uploads/1e1bdf32-2294-4c8c-bb2b-2581de78aff9.png",
    productCode: "DC63-02767AP",
    productName: "Vòi xịt trắng",
    size: 10,
    mode: "Chạy treo"
  };

  const processData = [
    {
      title: "Hồ Electro degreasing 1",
      currentPerJig: 5,
      totalCurrent: 60,
      t1: 5,
      t2: 5,
      backgroundColor: "bg-green-100"
    },
    {
      title: "Hồ Electro degreasing 2", 
      currentPerJig: 5,
      totalCurrent: 60,
      t1: 5,
      t2: 5,
      backgroundColor: "bg-yellow-100"
    },
    {
      title: "Hồ Pre-Nickel Plating",
      currentPerJig: 5,
      totalCurrent: 60,
      t1: 5,
      t2: 5,
      backgroundColor: "bg-gray-100"
    },
    {
      title: "Hồ Nickel Plating",
      currentPerJig: 5,
      totalCurrent: 60,
      t1: 5,
      t2: 5,
      backgroundColor: "bg-pink-100"
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar selectedLine={selectedLine} onLineSelect={setSelectedLine} />
      
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">LINE {selectedLine}</h1>
          
          <div className="flex items-center gap-4">
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Input 
                  type="text" 
                  placeholder="Nhập mã hoặc quét thẻ" 
                  className="w-96 h-16 text-xl"
                />
                <Button size="lg" variant="outline" className="h-16 px-6">
                  <Search className="h-8 w-8" />
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-6">
                  <QrCode className="h-8 w-8" />
                </Button>
              </div>
            </Card>
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-600 text-lg">👤</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - Product Info and Action Buttons */}
          <div className="col-span-3 space-y-6">
            <ProductInfoPanel {...productData} />
            
            {/* Action Buttons moved here */}
            <div className="flex flex-col gap-4">
              <Button 
                className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-6 text-xl font-semibold rounded-lg h-16"
              >
                ĐỒNG Ý
              </Button>
              
              <Button 
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-xl font-semibold rounded-lg h-16"
              >
                Hủy Bỏ
              </Button>
            </div>
          </div>

          {/* Right Column - Process Info */}
          <div className="col-span-9">
            <StatusBar jigCarrier={49.6} pcsJig={30} />

            <div className="space-y-4">
              {processData.map((process, index) => (
                <ProcessCard key={index} {...process} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
