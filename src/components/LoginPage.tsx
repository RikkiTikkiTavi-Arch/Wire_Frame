import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Alert, AlertDescription } from "./ui/alert";
import { Lock, Shield } from "lucide-react";
import lionMascot from "figma:asset/6634fd0cd0a2bb1812db9ddbe5da4fc2b3fc7f5d.png";

export function LoginPage() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");

  return (
    <div className="relative min-h-[calc(100vh-80px)] bg-gradient-to-br from-primary/5 via-background to-accent/10 py-8 px-4 overflow-hidden">
      <div className="absolute top-10 right-10 w-96 h-96 opacity-[0.03] pointer-events-none hidden lg:block">
        <img src={lionMascot} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="container mx-auto max-w-md relative z-10">
        <div className="mb-6 text-center">
          <div className="flex justify-center mb-4">
            <img src={lionMascot} alt="Campus Lion" className="w-20 h-20 object-contain" />
          </div>
          <h1 className="text-primary mb-2">Welcome</h1>
          <p className="text-muted-foreground">Access your personalized bookstore experience</p>
        </div>
        
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-card shadow-sm">
            <TabsTrigger value="login" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Sign In</TabsTrigger>
            <TabsTrigger value="register" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Create Account</TabsTrigger>
          </TabsList>

          {/* Login Tab */}
          <TabsContent value="login">
            <Card className="shadow-lg border-t-4 border-t-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-primary">Welcome Back</CardTitle>
                <CardDescription>
                  Sign in to access your course booklists and cart
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email or Username</Label>
                  <Input
                    id="login-email"
                    type="text"
                    placeholder="student@mymail.mssu.edu"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    aria-required="true"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    aria-required="true"
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all">
                  Sign In
                </Button>

                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>

                {/* SSO Placeholder */}
                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertDescription>
                    <strong>University SSO:</strong> Sign in with your university credentials
                    <Button variant="outline" className="w-full mt-2">
                      Sign in with University SSO
                    </Button>
                  </AlertDescription>
                </Alert>

                <div className="text-center">
                  <a href="#" className="text-sm text-muted-foreground hover:underline">
                    Forgot password?
                  </a>
                </div>

                <Alert className="mt-4">
                  <Lock className="h-4 w-4" />
                  <AlertDescription className="text-xs">
                    Your session will remain active while browsing. All data is encrypted and secure.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Register Tab */}
          <TabsContent value="register">
            <Card className="shadow-lg border-t-4 border-t-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-primary">Create Your Account</CardTitle>
                <CardDescription>
                  Register now to access course booklists and save your cart
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-email">Email Address</Label>
                  <Input
                    id="register-email"
                    type="email"
                    placeholder="student@university.edu"
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    aria-required="true"
                  />
                  <p className="text-xs text-muted-foreground">
                    Use your university email for faster verification
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-username">Username</Label>
                  <Input
                    id="register-username"
                    type="text"
                    placeholder="Choose a username"
                    aria-required="true"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-password">Password</Label>
                  <Input
                    id="register-password"
                    type="password"
                    placeholder="••••••••"
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    aria-required="true"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-confirm">Confirm Password</Label>
                  <Input
                    id="register-confirm"
                    type="password"
                    placeholder="••••••••"
                    value={registerConfirmPassword}
                    onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                    aria-required="true"
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all">
                  Create Account
                </Button>

                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-card px-2 text-muted-foreground">Or register with</span>
                  </div>
                </div>

                {/* SSO Placeholder */}
                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertDescription>
                    <strong>University SSO:</strong> Register using your university account
                    <Button variant="outline" className="w-full mt-2">
                      Register with University SSO
                    </Button>
                  </AlertDescription>
                </Alert>

                <Alert className="mt-4">
                  <Lock className="h-4 w-4" />
                  <AlertDescription className="text-xs">
                    Your information is secure and encrypted. We never share your personal data.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
