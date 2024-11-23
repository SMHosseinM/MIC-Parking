import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SignUpForm } from '@/app/shared/models/auth.model'
import { AuthService } from '@/app/shared/services/auth/auth.service'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [ singUpFormData, setSignUpFormData] = useState<SignUpForm>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState<SignUpForm>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const validateForm = () => {
    const newErrors: SignUpForm = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
    let isValid = true

    if (!singUpFormData.firstName.trim()) {
      newErrors.firstName = t('firstNameValidationError')
      isValid = false
    }
    if (!singUpFormData.lastName.trim()) {
      newErrors.lastName = t('lastNameValidationError')
      isValid = false
    }
    if (!singUpFormData.email.trim()) {
      newErrors.email = t('emailValidationError')
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(singUpFormData.email)) {
      newErrors.email = t('emailValidationError')
      isValid = false
    }
    if (!singUpFormData.password.trim()) {
      newErrors.password = t('passwordValidationError')
      isValid = false
    }
    if (!singUpFormData.confirmPassword.trim()) {
      newErrors.confirmPassword = t('confirmPasswordValidationError')
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSignUpFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      new AuthService().saveNewMembership('/sign-up', singUpFormData);
      navigate('/')
    }
  }
  

  return (
    <Card className="w-full max-w-2xl shadow-md border border-gray-200 bg-gradient-to-b from-gray-50 to-gray-100">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-gray-800">Sign Up</CardTitle>
        <CardDescription className="text-gray-600 mt-2">
          Please fill in the details to create your account
        </CardDescription>
      </CardHeader>
      <form className="text-left" onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">{t('firstNameTitle')}</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder={t('firstNameFormFiller')}
                value={singUpFormData.firstName}
                onChange={handleInputChange}
              />
              {errors.firstName && (
                  <p id="firstName-error" className="text-sm text-red-500">{errors.firstName}</p>
                )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">{t('lastNameTitle')}</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder={t('lastNameFormFiller')}
                value={singUpFormData.lastName}
                onChange={handleInputChange}
              />
              {errors.lastName && (
                  <p id="lastName-error" className="text-sm text-red-500">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{t('emailTitle')}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t('emailFormFiller')}
              value={singUpFormData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
                <p id="email-error" className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">{t('passwordTitle')}</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder={t('passwordFormFiller')}
              value={singUpFormData.password}
              onChange={handleInputChange}
            />
            {errors.password && (
                <p id="password-error" className="text-sm text-red-500">{errors.password}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">{t('confirmPasswordTitle')}</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder={t('confirmPasswordFormFiller')}
              value={singUpFormData.confirmPassword}
              onChange={handleInputChange}
            />
            {singUpFormData.confirmPassword !== '' && singUpFormData.password !== singUpFormData.confirmPassword && (
              <p className="text-sm text-red-500">{t('passwordMismatchMessage')}</p>
            )}
            {errors.confirmPassword && (
                <p id="confirmPassword-error" className="text-sm text-red-500">{errors.confirmPassword}</p>
            )}
          </div>

          <Button type="submit" className="w-full bg-black hover:bg-gray-800">
            Sign Up
          </Button>
        </CardContent>
      </form>
    </Card>
  )
}