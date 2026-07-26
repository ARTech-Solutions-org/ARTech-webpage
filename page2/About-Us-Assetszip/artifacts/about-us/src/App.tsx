import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { HeroSection } from './components/HeroSection';
import { TeamGrid } from './components/TeamGrid';
import { ResumeLandscape } from './pages/ResumeLandscape';

const queryClient = new QueryClient();

function AboutPage() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Noise overlay for texture */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuKSIvPjwvc3ZnPg==')]" />
      
      <main className="flex-1 w-full max-w-[1920px] mx-auto overflow-hidden">
        <HeroSection />
        <TeamGrid />
      </main>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={AboutPage} />
      <Route path="/resume" component={ResumeLandscape} />
      <Route path="/resume/:memberSlug" component={ResumeLandscape} />
      <Route>
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl text-muted-foreground uppercase tracking-widest">404 - Not Found</h1>
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
