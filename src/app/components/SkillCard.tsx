import { Link } from 'react-router';
import { Skill } from '../types/skill';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card className="overflow-hidden bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <div className="aspect-video overflow-hidden">
        <img
          src={skill.imageUrl}
          alt={skill.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-5 space-y-3">
        <div className="space-y-1">
          <h3 className="font-semibold text-lg">{skill.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {skill.description}
          </p>
        </div>
        <Button asChild className="w-full bg-primary hover:bg-primary/90">
          <Link to={`/catalog/${skill.id}`}>
            Ver Ruta de Maestría
          </Link>
        </Button>
      </div>
    </Card>
  );
}
