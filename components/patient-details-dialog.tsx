import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

// 定义患者信息类型
export type PatientInfo = {
  basicInfo: {
    name: string
    gender: '男' | '女'
    age: number
    height: number
    weight: number
    bloodType: string
  }
  medicalHistory: {
    condition: string
    diagnosisDate: string
    details: string
  }[]
  medications: {
    name: string
    dosage: string
    frequency: string
    startDate: string
  }[]
  consultations: {
    date: string
    doctor: string
    department: string
    diagnosis: string
    prescription: string
  }[]
}

interface PatientDetailsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  patientInfo: PatientInfo
}

export function PatientDetailsDialog({
  open,
  onOpenChange,
  patientInfo,
}: PatientDetailsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>患者详细信息</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* 基本信息 */}
          <div>
            <h3 className="text-lg font-semibold mb-2">基本信息</h3>
            <div className="grid grid-cols-2 gap-4 bg-muted p-4 rounded-lg">
              <div>姓名：{patientInfo.basicInfo.name}</div>
              <div>性别：{patientInfo.basicInfo.gender}</div>
              <div>年龄：{patientInfo.basicInfo.age}岁</div>
              <div>身高：{patientInfo.basicInfo.height}cm</div>
              <div>体重：{patientInfo.basicInfo.weight}kg</div>
              <div>血型：{patientInfo.basicInfo.bloodType}</div>
            </div>
          </div>

          {/* 既往病史 */}
          <div>
            <h3 className="text-lg font-semibold mb-2">既往病史</h3>
            <div className="space-y-2">
              {patientInfo.medicalHistory.map((history, index) => (
                <div key={index} className="bg-muted p-4 rounded-lg">
                  <div className="font-medium">{history.condition}</div>
                  <div className="text-sm text-muted-foreground">诊断日期：{history.diagnosisDate}</div>
                  <div className="mt-2 text-sm">{history.details}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 用药情况 */}
          <div>
            <h3 className="text-lg font-semibold mb-2">用药情况</h3>
            <div className="space-y-2">
              {patientInfo.medications.map((medication, index) => (
                <div key={index} className="bg-muted p-4 rounded-lg">
                  <div className="font-medium">{medication.name}</div>
                  <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                    <div>剂量：{medication.dosage}</div>
                    <div>频率：{medication.frequency}</div>
                    <div>开始日期：{medication.startDate}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 就诊记录 */}
          <div>
            <h3 className="text-lg font-semibold mb-2">就诊记录</h3>
            <div className="space-y-2">
              {patientInfo.consultations.map((consultation, index) => (
                <div key={index} className="bg-muted p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">{consultation.date}</div>
                    <div className="text-sm">{consultation.department} - {consultation.doctor}</div>
                  </div>
                  <div className="text-sm">
                    <div>诊断：{consultation.diagnosis}</div>
                    <div className="mt-1">处方：{consultation.prescription}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 