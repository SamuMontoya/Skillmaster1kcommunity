import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            404
          </h1>
        </div>
        <h2 className="text-3xl font-bold mb-4">Página no encontrada</h2>
        <p className="text-lg text-muted-foreground mb-8">
          La página que buscas no existe o ha sido movida
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <Link to="/">
            <Home className="mr-2 h-5 w-5" />
            Volver al Inicio
          </Link>
        </Button>
      </div>
    </div>
  );
}
