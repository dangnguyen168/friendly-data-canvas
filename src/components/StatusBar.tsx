
interface StatusBarProps {
  jigCarrier: number;
  pcsJig: number;
}

export const StatusBar = ({ jigCarrier, pcsJig }: StatusBarProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold">Thông số xi mạ</h2>
        
        <div className="flex gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border w-64">
            <span className="text-gray-600 text-xl">Số Jig/Carrier</span>
            <span className="ml-3 text-red-500 text-3xl font-bold">{jigCarrier}</span>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border w-64">
            <span className="text-gray-600 text-xl">Số Pcs/Jig</span>
            <span className="ml-3 text-red-500 text-3xl font-bold">{pcsJig}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
