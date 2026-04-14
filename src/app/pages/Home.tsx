import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { useSkills } from '../context/SkillContext';
import { MasteryProgress } from '../components/MasteryProgress';
import { Target, TrendingUp, Award, Briefcase, ArrowRight } from 'lucide-react';

export function Home() {
  const { skills, challenges } = useSkills();
  const featuredSkills = skills.slice(0, 3);

  const benefits = [
    {
      icon: Target,
      title: 'Enfoque Profundo',
      description: 'Concentra tus esfuerzos en dominar habilidades específicas'
    },
    {
      icon: TrendingUp,
      title: 'Progreso Visual',
      description: 'Rastrea tu camino hacia las 1,000 horas de maestría'
    },
    {
      icon: Award,
      title: 'Status de Experto',
      description: 'Conviértete en un verdadero experto reconocido'
    },
    {
      icon: Briefcase,
      title: 'Crecimiento Profesional',
      description: 'Impulsa tu carrera con habilidades valiosas'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Award className="h-4 w-4" />
            La Regla de las 1,000 Horas
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Domina cualquier habilidad en{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              1,000 horas
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Escapa de la trampa del "aprendiz eterno". Enfócate, mide tu progreso y alcanza la maestría en las habilidades que realmente importan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 h-12">
              <Link to="/catalog">
                Explorar Catálogo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 h-12 border-primary/30 hover:bg-primary/10">
              <Link to="/challenges">
                Mis Desafíos Activos
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="py-16 px-4 bg-card/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Habilidades Destacadas</h2>
            <p className="text-muted-foreground">Comienza tu viaje hacia la maestría</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredSkills.map(skill => {
              const challenge = challenges.find(c => c.skillId === skill.id);
              
              return (
                <Card
                  key={skill.id}
                  className="overflow-hidden bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {skill.description}
                      </p>
                    </div>
                    
                    {challenge && (
                      <MasteryProgress
                        hours={challenge.hoursCompleted}
                        showLabel={false}
                        size="sm"
                      />
                    )}
                    
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/catalog/${skill.id}`}>
                        Ver Detalles
                      </Link>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">¿Por qué SkillMaster 1K?</h2>
            <p className="text-muted-foreground">Las ventajas de un enfoque disciplinado</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 bg-card/30 backdrop-blur border-border/50 hover:border-primary/30 transition-all duration-300 text-center group"
              >
                <div className="mb-4 inline-flex">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
