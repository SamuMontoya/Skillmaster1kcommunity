import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '../components/ui/input';
import { useSkills } from '../context/SkillContext';
import { SkillCard } from '../components/SkillCard';

export function Catalog() {
  const { skills } = useSkills();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = skills.filter(skill =>
    skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    skill.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Catálogo de Habilidades</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora nuestra colección de habilidades de alto impacto. Elige tu camino hacia la maestría.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar habilidades..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 bg-card/50 border-border/50 focus:border-primary/50"
            />
          </div>
        </div>

        {/* Skills Grid */}
        {filteredSkills.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map(skill => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">
              No se encontraron habilidades que coincidan con "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
