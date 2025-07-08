
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
            <Card className="p-3">
              <input 
                type="text" 
                placeholder="Nhập mã hoặc quét thẻ" 
                className="bg-transparent border-none outline-none text-gray-600 placeholder-gray-400 w-64"
              />
            </Card>
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-600">👤</span>
            </div>
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-white">🔍</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - Product Info */}
          <div className="col-span-3">
            <ProductInfoPanel {...productData} />
          </div>

          {/* Right Column - Process Info */}
          <div className="col-span-9">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Thông số xi mạ</h2>
              <StatusBar jigCarrier={49.6} pcsJig={30} />
            </div>

            <div className="space-y-4">
              {processData.map((process, index) => (
                <ProcessCard key={index} {...process} />
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8">
              <Button 
                className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 text-lg font-semibold rounded-lg flex-1"
              >
                ĐỒNG Ý
              </Button>
              
              <Button 
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-semibold rounded-lg flex-1"
              >
                Hủy Bỏ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
