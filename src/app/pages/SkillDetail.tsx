import { useParams, useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { useSkills } from '../context/SkillContext';
import { CheckCircle2, ArrowLeft, Plus, X } from 'lucide-react';

export function SkillDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { skills, challenges, activateSkill, deactivateSkill } = useSkills();

  const skill = skills.find(s => s.id === id);
  const isActive = challenges.some(c => c.skillId === id);

  if (!skill) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Habilidad no encontrada</h2>
          <Button onClick={() => navigate('/catalog')}>
            Volver al Catálogo
          </Button>
        </div>
      </div>
    );
  }

  const handleToggleSkill = () => {
    if (isActive) {
      deactivateSkill(skill.id);
    } else {
      activateSkill(skill.id);
      navigate('/challenges');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={skill.imageUrl}
          alt={skill.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/catalog')}
          className="absolute top-4 left-4 bg-background/80 backdrop-blur hover:bg-background/90"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Button>
      </div>

      <div className="container mx-auto max-w-6xl px-4 -mt-20 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title Card */}
            <Card className="p-8 bg-card/80 backdrop-blur border-border/50">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                {skill.category}
              </div>
              <h1 className="text-4xl font-bold mb-4">{skill.name}</h1>
              <p className="text-lg text-muted-foreground">
                {skill.fullDescription}
              </p>
            </Card>

            {/* Objectives */}
            <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
              <h2 className="text-2xl font-bold mb-6">Objetivos de Aprendizaje</h2>
              <ul className="space-y-3">
                {skill.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{objective}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Career Paths */}
            <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
              <h2 className="text-2xl font-bold mb-6">Caminos Profesionales</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {skill.careerPaths.map((path, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-primary/5 border border-primary/20"
                  >
                    <p className="font-medium">{path}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar - Action Card */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-card/80 backdrop-blur border-border/50 sticky top-20">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Comienza tu Viaje</h3>
                  <p className="text-sm text-muted-foreground">
                    {isActive
                      ? 'Esta habilidad está activa en tus desafíos'
                      : 'Activa esta habilidad para comenzar a rastrear tu progreso hacia las 1,000 horas'}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">1,000</div>
                    <div className="text-sm text-muted-foreground">Horas hacia la Maestría</div>
                  </div>
                </div>

                <Button
                  onClick={handleToggleSkill}
                  className={`w-full h-12 ${
                    isActive
                      ? 'bg-destructive hover:bg-destructive/90'
                      : 'bg-primary hover:bg-primary/90'
                  }`}
                >
                  {isActive ? (
                    <>
                      <X className="mr-2 h-5 w-5" />
                      Eliminar Seguimiento
                    </>
                  ) : (
                    <>
                      <Plus className="mr-2 h-5 w-5" />
                      Activar Habilidad
                    </>
                  )}
                </Button>

                {isActive && (
                  <Button
                    variant="outline"
                    onClick={() => navigate('/challenges')}
                    className="w-full"
                  >
                    Ver Progreso
                  </Button>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
