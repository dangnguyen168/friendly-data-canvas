
import { Card } from "@/components/ui/card";

interface SidebarProps {
  selectedLine: string;
  onLineSelect: (line: string) => void;
}

export const Sidebar = ({ selectedLine, onLineSelect }: SidebarProps) => {
  const lines = ['01', '02', '03', '04'];
  
  return (
    <div className="w-32 bg-slate-800 text-white p-4 min-h-screen">
      <div className="mb-8">
        <div className="text-xs mb-2">Zytechus</div>
        <div className="text-sm font-semibold mb-6">CHỌN LINE</div>
        
        <div className="space-y-2">
          {lines.map((line) => (
            <Card 
              key={line}
              className={`p-3 cursor-pointer transition-colors ${
                selectedLine === line 
                  ? 'bg-white text-slate-800' 
                  : 'bg-slate-700 text-white hover:bg-slate-600'
              }`}
              onClick={() => onLineSelect(line)}
            >
              <div className="text-center">
                <div className="text-xs">LINE</div>
                <div className="text-lg font-bold">{line}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
