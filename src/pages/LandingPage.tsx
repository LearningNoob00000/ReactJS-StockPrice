import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TextEffect } from '@/components/ui/text-effect';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import { SpinnerLoader } from '@/assets/loader/SpinnderLoader';
export default function LandingPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleGetStarted = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 500); 
  };

  return (
    <div className="min-h-screen flex flex-col">
      {isLoading && <SpinnerLoader fullScreen />}
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="text-center mb-8">
          
            <h2 className="text-4xl font-extrabold mb-4">
                <TextEffect per='char' preset='slide'>Welcome to StockMarket Pro
                 </TextEffect>
            </h2> 
            <p className="text-xl mb-6">
                <TextEffect per='char' preset='fade'>Your gateway to smarter investing
                </TextEffect>
            </p>
         
          <Button size="lg" onClick={handleGetStarted} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Get Started'}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <AnimatedBackground
            className='rounded-lg bg-zinc-100 dark:bg-zinc-800'
            transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6,
            }}
            enableHover
          >
            <Card>
              <CardHeader>
                <CardTitle>Real-time Data</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Access up-to-the-minute stock information and market trends.</CardDescription>
              </CardContent>
            </Card>
          </AnimatedBackground>

          <AnimatedBackground
            className='rounded-lg bg-zinc-100 dark:bg-zinc-800'
            transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6,
            }}
            enableHover
          >
            <Card>
              <CardHeader>
                <CardTitle>Advanced Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Powerful tools to analyze stocks and make informed decisions.</CardDescription>
              </CardContent>
            </Card>
          </AnimatedBackground>

          <AnimatedBackground
            className='rounded-lg bg-zinc-100 dark:bg-zinc-800'
            transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6,
            }}
            enableHover
          >
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Easily track and manage your investments in one place.</CardDescription>
              </CardContent>
            </Card>
          </AnimatedBackground>
        </div>
      </main>
    </div>
  );
}
