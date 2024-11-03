import { UserPlus, QrCode, Award, Repeat } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { useNavigate } from 'react-router-dom';

import { useTranslation } from "react-i18next"

export function Home() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 sm:p-8">
          <Card className="w-full max-w-2xl shadow-md border border-gray-200 bg-gradient-to-b from-gray-50 to-gray-100">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold text-gray-800">{t('membershipPageTitle')}</CardTitle>
              <CardDescription className="text-gray-600 mt-2">
                {t('membershipSubtitle')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <MembershipButton 
                icon={<UserPlus className="w-5 h-5" />}
                label={t('membershipBtn')}
                onClick={() => navigate('/register')}
              />
              <MembershipButton 
                icon={<Repeat className="w-5 h-5" />}
                label={t('renewBrn')}
                onClick={() => navigate('/renew-membership')}
              />
              <MembershipButton 
                icon={<QrCode className="w-5 h-5" />}
                label={t('qrCodeBtn')}
                onClick={() => navigate('/reissue-qrcode')}
              />
            </CardContent>
          </Card>
          <p className="mt-8 text-gray-500 text-center text-sm">
            © {t('copyRight')}
          </p>
        </div>
      )
}
    
function MembershipButton({ icon, label, onClick }) {
    return (
        <Button 
            className="w-full py-4 px-4 justify-start text-left bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 shadow-sm transition-colors"
            onClick={onClick}
        >
            <div className="flex items-center">
            <div className="text-blue-600 mr-3">
                {icon}
            </div>
                <span className="text-base font-medium">{label}</span>
            </div>
        </Button>
    )
}