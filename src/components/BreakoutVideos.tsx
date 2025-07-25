import { useState } from "react";
import { Button } from "./ui/button";
import { Play, Pause, Volume2 } from "lucide-react";
interface Video {
  id: number;
  title: string;
  duration: string;
  description: string;
  thumbnail: string;
}
const videos: Video[] = [{
  id: 1,
  title: "Building The Perfect Prompt. What Set's Us Apart",
  duration: "",
  description: "Watch A Demo Of How We Dial In A Voice AI Prompt",
  thumbnail: "/api/placeholder/300/200"
}, {
  id: 2,
  title: "Live AI Conversation Test",
  duration: "",
  description: "Watch real-time AI interactions with potential customers",
  thumbnail: "/api/placeholder/300/200"
}, {
  id: 3,
  title: "Client Communication Process",
  duration: "",
  description: "Our systematic approach to client collaboration",
  thumbnail: "/api/placeholder/300/200"
}, {
  id: 4,
  title: "SMS AI The Lead Conversion Powerhouse",
  duration: "",
  description: "A Deep-Dive Into The SMS AI System & How It Actually Schedules Appointments",
  thumbnail: "/api/placeholder/300/200"
}, {
  id: 5,
  title: "Sales Manager AI",
  duration: "",
  description: "Increasing conversions with AI-powered sales management and optimization",
  thumbnail: "/api/placeholder/300/200"
}, {
  id: 6,
  title: "Client Success Stories",
  duration: "",
  description: "Real results from businesses using our AI systems",
  thumbnail: "/api/placeholder/300/200"
}, {
  id: 7,
  title: "ROI Calculator Walkthrough",
  duration: "",
  description: "Calculate your potential return on AI investment",
  thumbnail: "/api/placeholder/300/200"
}];
const BreakoutVideos = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null);
  const [playingStates, setPlayingStates] = useState<Record<number, boolean>>({});
  const toggleVideo = (videoId: number) => {
    // Pause currently playing video if different
    if (currentlyPlaying && currentlyPlaying !== videoId) {
      setPlayingStates(prev => ({
        ...prev,
        [currentlyPlaying]: false
      }));
    }

    // Toggle the clicked video
    const newState = !playingStates[videoId];
    setPlayingStates(prev => ({
      ...prev,
      [videoId]: newState
    }));
    if (newState) {
      setCurrentlyPlaying(videoId);
    } else {
      setCurrentlyPlaying(null);
    }
  };
  return <section id="videos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-super-bright mb-6">Behind the Scenes: Our Complete Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Watch how we build custom AI systems and see real examples of what&apos;s possible for your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {videos.map((video, index) => <div key={video.id} className="group cursor-pointer animate-fade-in h-full" style={{
          animationDelay: `${index * 0.1}s`
        }} onClick={() => toggleVideo(video.id)}>
              <div className="bg-gradient-card card-glow rounded-xl overflow-hidden hover:shadow-elegant transition-all duration-300 hover:scale-105 h-full flex flex-col">
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
                      {playingStates[video.id] ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white ml-1" />}
                    </div>
                  </div>
                  

                  {/* Playing Indicator */}
                  {playingStates[video.id] && <div className="absolute bottom-2 left-2 flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-white text-sm font-medium">Playing</span>
                    </div>}
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="font-semibold text-super-bright mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {video.description}
                  </p>

                  {/* Progress Bar (shown when playing) */}
                  {playingStates[video.id] && <div className="mt-4">
                      <div className="h-1 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-1/3 rounded-full transition-all duration-300"></div>
                      </div>
                    </div>}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default BreakoutVideos;