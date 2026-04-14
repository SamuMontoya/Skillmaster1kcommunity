import { useState } from 'react';
import { Link } from 'react-router';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useSkills } from '../context/SkillContext';
import { MasteryProgress } from '../components/MasteryProgress';
import { Target, Calendar, TrendingUp, Plus, Minus } from 'lucide-react';

export function Challenges() {
  const { skills, challenges, deactivateSkill, updateProgress } = useSkills();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [tempHours, setTempHours] = useState<number>(0);

  const activeChallenges = challenges.map(challenge => ({
    ...challenge,
    skill: skills.find(s => s.id === challenge.skillId)!
  })).filter(c => c.skill);

  const handleStartEdit = (skillId: string, currentHours: number) => {
    setEditingId(skillId);
    setTempHours(currentHours);
  };

  const handleSaveHours = (skillId: string) => {
    updateProgress(skillId, Math.max(0, Math.min(1000, tempHours)));
    setEditingId(null);
  };

  const handleAddHours = (skillId: string, amount: number) => {
    const challenge = challenges.find(c => c.skillId === skillId);
    if (challenge) {
      const newHours = Math.max(0, Math.min(1000, challenge.hoursCompleted + amount));
      updateProgress(skillId, newHours);
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (activeChallenges.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="mb-6 inline-flex p-6 rounded-full bg-muted/30">
            <Target className="h-12 w-12 text-muted-foreground" />
          </div>
          <h2 className="text-3xl font-bold mb-4">No hay desafíos activos</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Comienza tu viaje hacia la maestría activando una habilidad desde el catálogo
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/catalog">
              Explorar Catálogo
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Mis Desafíos Activos</h1>
          <p className="text-lg text-muted-foreground">
            Rastrea tu progreso hacia la maestría en {activeChallenges.length} {activeChallenges.length === 1 ? 'habilidad' : 'habilidades'}
          </p>
        </div>

        {/* Challenges List */}
        <div className="space-y-6">
          {activeChallenges.map(({ skill, hoursCompleted, startedAt, skillId }) => (
            <Card key={skillId} className="overflow-hidden bg-card/50 backdrop-blur border-border/50">
              <div className="md:flex">
                {/* Image */}
                <div className="md:w-64 h-48 md:h-auto overflow-hidden flex-shrink-0">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 space-y-4">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-2xl font-bold">{skill.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {skill.category}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deactivateSkill(skillId)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        Abandonar
                      </Button>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Iniciado: {formatDate(startedAt)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-4 w-4" />
                        <span>{Math.floor((hoursCompleted / 1000) * 100)}% completado</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <MasteryProgress hours={hoursCompleted} />

                  {/* Hours Control */}
                  <div className="flex items-center gap-3 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleAddHours(skillId, -10)}
                      disabled={hoursCompleted === 0}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>

                    {editingId === skillId ? (
                      <div className="flex items-center gap-2 flex-1">
                        <Input
                          type="number"
                          min="0"
                          max="1000"
                          value={tempHours}
                          onChange={(e) => setTempHours(Number(e.target.value))}
                          className="h-9"
                        />
                        <Button
                          size="sm"
                          onClick={() => handleSaveHours(skillId)}
                        >
                          Guardar
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setEditingId(null)}
                        >
                          Cancelar
                        </Button>
                      </div>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleStartEdit(skillId, hoursCompleted)}
                        className="flex-1"
                      >
                        Editar horas: {hoursCompleted}
                      </Button>
                    )}

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleAddHours(skillId, 10)}
                      disabled={hoursCompleted >= 1000}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Add More Skills CTA */}
        <Card className="mt-8 p-8 text-center bg-primary/5 border-primary/20">
          <h3 className="text-xl font-bold mb-2">¿Listo para más?</h3>
          <p className="text-muted-foreground mb-4">
            Agrega más habilidades a tu plan de maestría
          </p>
          <Button asChild variant="outline" className="border-primary/30">
            <Link to="/catalog">
              Explorar Más Habilidades
            </Link>
          </Button>
        </Card>
      </div>
    </div>
  );
}
