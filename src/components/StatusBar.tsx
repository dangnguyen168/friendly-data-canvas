
interface StatusBarProps {
  jigCarrier: number;
  pcsJig: number;
}

export const StatusBar = ({ jigCarrier, pcsJig }: StatusBarProps) => {
  return (
    <div className="flex gap-4 mb-6">
      <div className="bg-white rounded-lg p-3 shadow-sm border">
        <span className="text-gray-600 text-sm">Số Jig/Carrier</span>
        <span className="ml-2 text-red-500 text-xl font-bold">{jigCarrier}</span>
      </div>
      
      <div className="bg-white rounded-lg p-3 shadow-sm border">
        <span className="text-gray-600 text-sm">Số Pcs/Jig</span>
        <span className="ml-2 text-red-500 text-xl font-bold">{pcsJig}</span>
      </div>
    </div>
  );
};
