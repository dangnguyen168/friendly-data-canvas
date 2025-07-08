
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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

  const handleScanClick = async () => {
    try {
      // Check if the browser supports getUserMedia
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: 'environment' } // Use back camera for scanning
        });
        
        // Create a video element to display the camera feed
        const video = document.createElement('video');
        video.srcObject = stream;
        video.play();
        
        // You can implement QR code scanning logic here
        console.log('Camera accessed successfully');
        
        // Stop the stream after a few seconds (for demo purposes)
        setTimeout(() => {
          stream.getTracks().forEach(track => track.stop());
        }, 5000);
        
      } else {
        alert('Camera access is not supported on this device/browser');
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Unable to access camera. Please check permissions.');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar selectedLine={selectedLine} onLineSelect={setSelectedLine} />
      
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">LINE {selectedLine}</h1>
          
          <div className="flex items-center gap-4">
            {/* Updated search bar design */}
            <div className="relative flex items-center bg-white rounded-full shadow-lg border border-gray-200 px-6 py-3">
              <Input 
                type="text" 
                placeholder="Nhập mã hoặc quét thẻ" 
                className="flex-1 border-0 bg-transparent text-xl px-4 py-2 focus:ring-0 focus:outline-none placeholder:text-gray-400"
              />
              <div className="flex items-center gap-2 ml-4">
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <img 
                    src="/lovable-uploads/2ae52d2c-716a-4728-b9cb-cbc0ed0e963d.png" 
                    alt="Search" 
                    className="h-6 w-6"
                  />
                </Button>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="p-3 rounded-full bg-slate-800 hover:bg-slate-700"
                  onClick={handleScanClick}
                >
                  <img 
                    src="/lovable-uploads/10026d2e-b13c-49fc-a7ad-b3dba3a9f62c.png" 
                    alt="QR Scan" 
                    className="h-6 w-6 brightness-0 invert"
                  />
                </Button>
              </div>
            </div>
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
                className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-8 text-2xl font-semibold rounded-lg h-20"
              >
                ĐỒNG Ý
              </Button>
              
              <Button 
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-8 text-2xl font-semibold rounded-lg h-20"
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
