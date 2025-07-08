
interface StatusBarProps {
  jigCarrier: number;
  pcsJig: number;
}

export const StatusBar = ({ jigCarrier, pcsJig }: StatusBarProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-8 mb-4">
        <h2 className="text-2xl font-bold">Thông số xi mạ</h2>
        
        <div className="flex gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm border">
            <span className="text-gray-600 text-lg">Số Jig/Carrier</span>
            <span className="ml-3 text-red-500 text-2xl font-bold">{jigCarrier}</span>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border">
            <span className="text-gray-600 text-lg">Số Pcs/Jig</span>
            <span className="ml-3 text-red-500 text-2xl font-bold">{pcsJig}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
