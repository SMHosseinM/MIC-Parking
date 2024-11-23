import { LoginForm } from "@/app/shared/models/auth.model";
import { AuthService } from "@/app/shared/services/auth/auth.service";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { useTranslation } from "react-i18next"

export default function Login() {
    const { t } = useTranslation();
    const [loginFormData, setLoginFormData] = useState<LoginForm>({
      email: '',
      password: ''
    })
    const [errors, setErrors] = useState<LoginForm>({
      email: '',
      password: ''
    })
  
    const validateForm = () => {
      const newErrors: LoginForm = {
        email: '',
        password: ''
      }
      let isValid = true
  
      if (!loginFormData.email.trim()) {
        newErrors.email = t('emailValidationError')
        isValid = false
      } else if (!/\S+@\S+\.\S+/.test(loginFormData.email)) {
        newErrors.email = t('emailValidationError')
        isValid = false
      }
      if (!loginFormData.password.trim()) {
        newErrors.password = t('passwordValidationError')
        isValid = false
      }
  
      setErrors(newErrors)
      return isValid
    }
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setLoginFormData(prevData => ({
        ...prevData,
        [name]: value
      }))
    }
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      console.log(validateForm())
      if (validateForm()) {
        new AuthService().login('/login', loginFormData);
      }
    }
    
  
    return (
      <Card className="w-full max-w-2xl shadow-md border border-gray-200 bg-gradient-to-b from-gray-50 to-gray-100">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-gray-800">Login</CardTitle>
          <CardDescription className="text-gray-600 mt-2">
            Please fill in the details to login to your account
          </CardDescription>
        </CardHeader>
        <form className="text-left" onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t('emailTitle')}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t('emailFormFiller')}
                value={loginFormData.email}
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
                value={loginFormData.password}
                onChange={handleInputChange}
              />
              {errors.password && (
                  <p id="password-error" className="text-sm text-red-500">{errors.password}</p>
              )}
            </div>
            <Button type="submit" className="w-full bg-black hover:bg-gray-800">
              Login
            </Button>
          </CardContent>
        </form>
      </Card>
    )
  }