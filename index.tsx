import React, { useState } from 'react';
import { Button } from '/components/ui/button';
import { Card, CardContent } from '/components/ui/card';
import { Heart, X, AlertTriangle } from 'lucide-react';

export default function RomanticNotificationApp() {
  const [currentMessage, setCurrentMessage] = useState<number>(-1);
  const [showStartScreen, setShowStartScreen] = useState(true);

  const messages = [
    "hai sayang",
    "jangan bosen ya sama aku", 
    "hati-hati ya aku mudah kangen mbek km",
    "Aku sayang kamu",
    "kalo kamu gimana? sayang juga nggak sih?"
  ];

  const handleStartMessages = () => {
    setShowStartScreen(false);
    setCurrentMessage(0);
  };

  const handleNextMessage = () => {
    if (currentMessage < messages.length - 1) {
      setCurrentMessage(currentMessage + 1);
    } else {
      setCurrentMessage(-1);
      setShowStartScreen(true);
    }
  };

  const handleRestart = () => {
    setCurrentMessage(-1);
    setShowStartScreen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-rose-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-pink-300 opacity-20 animate-pulse`}
            size={Math.random() * 30 + 20}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Start Screen */}
      {showStartScreen && currentMessage === -1 && (
        <Card className="w-full max-w-md mx-auto bg-white/90 backdrop-blur-sm shadow-xl border-2 border-pink-200">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <Heart className="w-16 h-16 text-red-500 mx-auto mb-4 animate-bounce" />
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Pesan Spesial Untukmu 💕
              </h1>
              <p className="text-gray-600">
                Aku pengen ngomong sesuatu...
              </p>
            </div>
            <Button 
              onClick={handleStartMessages}
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Baca Pesan ❤️
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Error Notification Modal */}
      {currentMessage >= 0 && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full border-2 border-red-200 animate-in slide-in-from-top-4 duration-300">
            {/* Error Header */}
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 rounded-t-lg flex items-center gap-3">
              <AlertTriangle className="w-6 h-6" />
              <div>
                <h3 className="font-semibold text-lg">WARNING</h3>
                <p className="text-red-100 text-sm">heart palpitations detected</p>
              </div>
            </div>

            {/* Error Content */}
            <div className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-red-500" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    messed up because of you
                  </h4>
                  <p className="text-lg text-gray-700 font-medium bg-gray-50 p-3 rounded border-l-4 border-pink-400">
                    "{messages[currentMessage]}"
                  </p>
                </div>
              </div>

              <div className="text-xs text-gray-500 mb-4 font-mono bg-gray-100 p-2 rounded">
                Error location: Heart.exe line {currentMessage + 1}<br/>
                Stack trace: Feelings → Love → Romance → You
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={handleNextMessage}
                  className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-6 py-2 rounded shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  OK
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Final Screen */}
      {showStartScreen && currentMessage === -1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <p className="text-pink-600 text-center mb-4">
            Made with 💕 for someone special
          </p>
        </div>
      )}
    </div>
  );
}
