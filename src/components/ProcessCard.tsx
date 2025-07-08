
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProcessCardProps {
  title: string;
  currentPerJig: number;
  totalCurrent: number;
  t1: number;
  t2: number;
  backgroundColor: string;
}

export const ProcessCard = ({ 
  title, 
  currentPerJig, 
  totalCurrent, 
  t1, 
  t2, 
  backgroundColor 
}: ProcessCardProps) => {
  return (
    <Card className={`w-full ${backgroundColor}`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-gray-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-3 text-center">
            <p className="text-xs text-gray-600 mb-1">Dòng điện /Jig</p>
            <p className="text-xl font-bold text-gray-800">{currentPerJig}</p>
          </div>
          
          <div className="bg-white rounded-lg p-3 text-center">
            <p className="text-xs text-gray-600 mb-1">Dòng điện tổng</p>
            <p className="text-xl font-bold text-red-500">{totalCurrent}</p>
          </div>
          
          <div className="bg-white rounded-lg p-3 text-center">
            <p className="text-xs text-gray-600 mb-1">T1</p>
            <p className="text-xl font-bold text-gray-800">{t1}</p>
          </div>
          
          <div className="bg-white rounded-lg p-3 text-center">
            <p className="text-xs text-gray-600 mb-1">T2</p>
            <p className="text-xl font-bold text-gray-800">{t2}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
