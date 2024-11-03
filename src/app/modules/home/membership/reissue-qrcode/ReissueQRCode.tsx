import { useState } from 'react'
import { QrCode, Send } from 'lucide-react'
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ReissueQRCodeForm } from '@/app/shared/models/membeship.model'

export default function Component() {
    const { t } = useTranslation();
  const [formData, setFormData] = useState<ReissueQRCodeForm>({
    email: ''
  })
  const [errors, setErrors] = useState<ReissueQRCodeForm>({
    email: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const validateForm = () => {
    const newErrors: ReissueQRCodeForm = {
        email: ''
    }
    let isValid = true

    if (!formData.email.trim()) {
        newErrors.email = t('emailValidationError')
        isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = t('emailValidationError')
        isValid = false
    }
    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('QR Code reissue requested for:', formData)
      alert('QR Code reissue request submitted successfully!')
      // Here you would typically send the request to your backend
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 sm:p-8">
      <Card className="w-full max-w-md shadow-md border border-gray-200 bg-gradient-to-b from-gray-50 to-gray-100">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold text-gray-800">{t('qrCodeTitle')}</CardTitle>
          <CardDescription className="text-gray-600 mt-2">
            {t('qrCodeSubtitle')}
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit} noValidate>
          <CardContent className="space-y-4 text-left">
            <div className="space-y-2">
              <Label htmlFor="email">{t('emailTitle')}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t('emailFormFiller')}
                value={formData.email}
                onChange={handleInputChange}
                aria-invalid={!!errors}
                aria-describedby="email-error"
              />
              {errors && (
                <p id="email-error" className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              <QrCode className="w-5 h-5 mr-2" />
              {t('qrCodeBtn')}
            </Button>
          </CardFooter>
        </form>
      </Card>
      <p className="mt-8 text-gray-500 text-center text-sm">
        © {t('copyRight')}
      </p>
    </div>
  )
}